import { Game } from './game';
import * as Messages from './messages';
import Screen from './screens';
import { ItemRepository } from './items';

const EntityMixins = {
  CorpseDropper: {
    name: 'CorpseDropper',
    init: function(template) {
      // Chance of dropping a cropse (out of 100).
      this._corpseDropRate = template['corpseDropRate'] || 100;
    },
    tryDropCorpse: function() {
      if (Math.round(Math.random() * 100) < this._corpseDropRate) {
        // Create a new corpse item and drop it.
        this._map.addItem(
          this.getX(),
          this.getY(),
          this.getZ(),
          ItemRepository.create('corpse', {
            name: this._name + ' corpse',
            foreground: this._foreground
          })
        );
      }
    }
  },
  FoodConsumer: {
    // Handles fullness meter of player.
    name: 'FoodConsumer',
    init: function(template) {
      this._maxFullness = template['maxFullness'] || 1000;
      // Start halfway to max fullness if no default value
      this._fullness = template['fullness'] || this._maxFullness / 2;
      // Number of points to decrease fullness by every turn.
      this._fullnessDepletionRate = template['fullnessDepletionRate'] || 1;
    },
    addTurnHunger: function() {
      // Remove the standard depletion points
      this.modifyFullnessBy(-this._fullnessDepletionRate);
    },
    modifyFullnessBy: function(points) {
      this._fullness = this._fullness + points;
      if (this._fullness <= 0) {
        this.kill('You have died of starvation!');
      } else if (this._fullness > this._maxFullness) {
        this.kill('You choke and die!');
      }
    },
    getHungerState: function() {
      // Fullness points per percent of max fullness
      var perPercent = this._maxFullness / 100;
      // 5% of max fullness or less = starving
      if (this._fullness <= perPercent * 5) {
        return 'Starving';
        // 25% of max fullness or less = hungry
      } else if (this._fullness <= perPercent * 25) {
        return 'Hungry';
        // 95% of max fullness or more = oversatiated
      } else if (this._fullness >= perPercent * 95) {
        return 'Oversatiated';
        // 75% of max fullness or more = full
      } else if (this._fullness >= perPercent * 75) {
        return 'Full';
        // Anything else = not hungry
      } else {
        return `Not Hungry`;
      }
    }
  },
  /**
     * Adds an internal array of messages and provide a method for receiving a message,
     * as well methods for fetching and clearing the messages.
     */
  MessageRecipient: {
    name: 'MessageRecipient',
    init: function(props) {
      this._messages = [];
    },
    receiveMessage: function(message) {
      this._messages.push(message);
    },
    getMessages: function() {
      return this._messages;
    },
    clearMessages: function() {
      this._messages = [];
    }
  },

  // This mixin signifies an entity can take damage and be destroyed
  Destructible: {
    name: 'Destructible',
    init: function(props) {
      this._maxHp = props['maxHp'] || 10;
      // We allow taking in health from the props incase we want
      // the entity to start with a different amount of HP than the
      // max specified.
      this._hp = props['hp'] || this._maxHp;
      this._defenseValue = props['defenseValue'] || 0;
    },
    getDefenseValue: function() {
      return this._defenseValue;
    },
    getHp: function() {
      return this._hp;
    },
    getMaxHp: function() {
      return this._maxHp;
    },
    takeDamage: function(attacker, damage) {
      this._hp -= damage;
      // If have 0 or less HP, then remove ourseles from the map
      if (this._hp <= 0) {
        Messages.sendMessage(attacker, 'You kill the %s!', [this.getName()]);
        // If the entity is a corpse dropper, try to add a corpse
        if (this.hasMixin(EntityMixins.CorpseDropper)) {
          this.tryDropCorpse();
        }
        // Check if the player died, and if so call their act method to prompt the user.
        this.kill();
      }
    }
  },

  // This signifies our entity can attack basic destructible enities
  Attacker: {
    name: 'Attacker',
    groupName: 'Attacker',
    init: function(props) {
      this._attackValue = props['attackValue'] || 1;
    },
    getAttackValue: function() {
      return this._attackValue;
    },
    attack: function(target) {
      // If the target is destructible, calculate the damage
      // based on attack and defense value
      if (target.hasMixin('Destructible')) {
        let attack = this.getAttackValue();
        let defense = target.getDefenseValue();
        let max = Math.max(0, attack - defense);
        let damage = 1 + Math.floor(Math.random() * max);

        Messages.sendMessage(this, 'You strike the %s for %d damage!', [
          target.getName(),
          damage
        ]);
        Messages.sendMessage(target, 'The %s strikes you for %d damage!', [
          this.getName(),
          damage
        ]);

        target.takeDamage(this, damage);
      }
    }
  },

  // Player Specific Mixins
  PlayerActor: {
    name: 'PlayerActor',
    groupName: 'Actor',
    act: function() {
      if (this._acting) {
        return;
      }
      this._acting = true;
      this.addTurnHunger();
      // Detect if the game is over
      if (!this.isAlive()) {
        Screen.playScreen.setGameEnded(true);
        // Send a last message to the player
        Messages.sendMessage(this, 'Press [Enter] to continue!');
      }
      this._acting = false;
      // Re-render the screen
      Game.refresh();
      // Lock the engine and wait asynchronously
      // for the player to press a key.
      this.getMap().getEngine().lock();
      // Clear the message queue
      this.clearMessages();
    }
  },

  /**
     * Move by 1 unit in a random direction every time act is called
     */
  WanderActor: {
    name: 'WanderActor',
    groupName: 'Actor',
    act: function() {
      // Flip coin to determine if moving by 1 in the positive or negative direction
      const moveOffset = Math.round(Math.random()) === 1 ? 1 : -1;
      // Flip coin to determine if moving in x direction or y direction
      if (Math.round(Math.random()) === 1) {
        this.tryMove(this.getX() + moveOffset, this.getY(), this.getZ());
      } else {
        this.tryMove(this.getX(), this.getY() + moveOffset, this.getZ());
      }
    }
  },

  /**
     * This signifies our entity posseses a field of vision of a given radius.
     */
  Sight: {
    name: 'Sight',
    groupName: 'Sight',
    init: function(template) {
      this._sightRadius = template['sightRadius'] || 5;
    },
    getSightRadius: function() {
      return this._sightRadius;
    }
  },

  InventoryHolder: {
    name: 'InventoryHolder',
    init: function(template) {
      // Default to 10 inventory slots.
      let inventorySlots = template['inventorySlots'] || 10;
      // Set up an empty inventory.
      this._items = new Array(inventorySlots);
    },

    getItems: function() {
      // filter the items array and return false if empty
      if (
        this._items.filter(item => {
          return item;
        }).length === 0
      ) {
        return false;
      } else {
        return this._items;
      }
    },

    getItem: function(i) {
      return this._items[i];
    },

    addItem: function(item) {
      // Try to find a slot, returning true only if we could add the item.
      for (let i = 0; i < this._items.length; i++) {
        if (!this._items[i]) {
          this._items[i] = item;
          return true;
        }
      }
      return false;
    },

    removeItem: function(i) {
      // Simply clear the inventory slot.
      this._items[i] = null;
    },

    canAddItem: function() {
      // Check if we have an empty slot.
      for (let i = 0; i < this._items.length; i++) {
        if (!this._items[i]) {
          return true;
        }
      }
      return false;
    },

    /**
       * Allows the user to pick up items from the map, where indices is
       * the indices for the array returned by map.getItemsAt
       */
    pickupItems: function(indices) {
      let mapItems = this._map.getItemsAt(
        this.getX(),
        this.getY(),
        this.getZ()
      );
      let added = 0;
      // Iterate through all indices.
      for (let i = 0; i < indices.length; i++) {
        // Try to add the item. If our inventory is not full, then splice the
        // item out of the list of items. In order to fetch the right item, we
        // have to offset the number of items already added.
        if (this.addItem(mapItems[indices[i] - added])) {
          mapItems.splice(indices[i] - added, 1);
          added++;
        } else {
          // Inventory is full
          break;
        }
      }
      // Update the map items
      this._map.setItemsAt(this.getX(), this.getY(), this.getZ(), mapItems);
      // Return true only if we added all items
      return added === indices.length;
    },

    dropItem: function(i) {
      // Drops an item to the current map tile
      if (this._items[i]) {
        if (this._map) {
          this._map.addItem(
            this.getX(),
            this.getY(),
            this.getZ(),
            this._items[i]
          );
        }
        this.removeItem(i);
      }
    }
  }
};

export default EntityMixins;