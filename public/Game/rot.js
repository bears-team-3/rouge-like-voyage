(function(b, a) {
  'function' === typeof define && define.amd
    ? define([], a)
    : 'object' === typeof exports ? (module.exports = a()) : (b.ROT = a());
})(this, function() {
  var b = {
    isSupported: function() {
      return !(
        !document.createElement('canvas').getContext || !Function.prototype.bind
      );
    },
    DEFAULT_WIDTH: 80,
    DEFAULT_HEIGHT: 25,
    DIRS: {
      4: [[0, -1], [1, 0], [0, 1], [-1, 0]],
      8: [[0, -1], [1, -1], [1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1]],
      6: [[-1, -1], [1, -1], [2, 0], [1, 1], [-1, 1], [-2, 0]]
    },
    VK_CANCEL: 3,
    VK_HELP: 6,
    VK_BACK_SPACE: 8,
    VK_TAB: 9,
    VK_CLEAR: 12,
    VK_RETURN: 13,
    VK_ENTER: 14,
    VK_SHIFT: 16,
    VK_CONTROL: 17,
    VK_ALT: 18,
    VK_PAUSE: 19,
    VK_CAPS_LOCK: 20,
    VK_ESCAPE: 27,
    VK_SPACE: 32,
    VK_PAGE_UP: 33,
    VK_PAGE_DOWN: 34,
    VK_END: 35,
    VK_HOME: 36,
    VK_LEFT: 37,
    VK_UP: 38,
    VK_RIGHT: 39,
    VK_DOWN: 40,
    VK_PRINTSCREEN: 44,
    VK_INSERT: 45,
    VK_DELETE: 46,
    VK_0: 48,
    VK_1: 49,
    VK_2: 50,
    VK_3: 51,
    VK_4: 52,
    VK_5: 53,
    VK_6: 54,
    VK_7: 55,
    VK_8: 56,
    VK_9: 57,
    VK_COLON: 58,
    VK_SEMICOLON: 59,
    VK_LESS_THAN: 60,
    VK_EQUALS: 61,
    VK_GREATER_THAN: 62,
    VK_QUESTION_MARK: 63,
    VK_AT: 64,
    VK_A: 65,
    VK_B: 66,
    VK_C: 67,
    VK_D: 68,
    VK_E: 69,
    VK_F: 70,
    VK_G: 71,
    VK_H: 72,
    VK_I: 73,
    VK_J: 74,
    VK_K: 75,
    VK_L: 76,
    VK_M: 77,
    VK_N: 78,
    VK_O: 79,
    VK_P: 80,
    VK_Q: 81,
    VK_R: 82,
    VK_S: 83,
    VK_T: 84,
    VK_U: 85,
    VK_V: 86,
    VK_W: 87,
    VK_X: 88,
    VK_Y: 89,
    VK_Z: 90,
    VK_CONTEXT_MENU: 93,
    VK_NUMPAD0: 96,
    VK_NUMPAD1: 97,
    VK_NUMPAD2: 98,
    VK_NUMPAD3: 99,
    VK_NUMPAD4: 100,
    VK_NUMPAD5: 101,
    VK_NUMPAD6: 102,
    VK_NUMPAD7: 103,
    VK_NUMPAD8: 104,
    VK_NUMPAD9: 105,
    VK_MULTIPLY: 106,
    VK_ADD: 107,
    VK_SEPARATOR: 108,
    VK_SUBTRACT: 109,
    VK_DECIMAL: 110,
    VK_DIVIDE: 111,
    VK_F1: 112,
    VK_F2: 113,
    VK_F3: 114,
    VK_F4: 115,
    VK_F5: 116,
    VK_F6: 117,
    VK_F7: 118,
    VK_F8: 119,
    VK_F9: 120,
    VK_F10: 121,
    VK_F11: 122,
    VK_F12: 123,
    VK_F13: 124,
    VK_F14: 125,
    VK_F15: 126,
    VK_F16: 127,
    VK_F17: 128,
    VK_F18: 129,
    VK_F19: 130,
    VK_F20: 131,
    VK_F21: 132,
    VK_F22: 133,
    VK_F23: 134,
    VK_F24: 135,
    VK_NUM_LOCK: 144,
    VK_SCROLL_LOCK: 145,
    VK_CIRCUMFLEX: 160,
    VK_EXCLAMATION: 161,
    VK_DOUBLE_QUOTE: 162,
    VK_HASH: 163,
    VK_DOLLAR: 164,
    VK_PERCENT: 165,
    VK_AMPERSAND: 166,
    VK_UNDERSCORE: 167,
    VK_OPEN_PAREN: 168,
    VK_CLOSE_PAREN: 169,
    VK_ASTERISK: 170,
    VK_PLUS: 171,
    VK_PIPE: 172,
    VK_HYPHEN_MINUS: 173,
    VK_OPEN_CURLY_BRACKET: 174,
    VK_CLOSE_CURLY_BRACKET: 175,
    VK_TILDE: 176,
    VK_COMMA: 188,
    VK_PERIOD: 190,
    VK_SLASH: 191,
    VK_BACK_QUOTE: 192,
    VK_OPEN_BRACKET: 219,
    VK_BACK_SLASH: 220,
    VK_CLOSE_BRACKET: 221,
    VK_QUOTE: 222,
    VK_META: 224,
    VK_ALTGR: 225,
    VK_WIN: 91,
    VK_KANA: 21,
    VK_HANGUL: 21,
    VK_EISU: 22,
    VK_JUNJA: 23,
    VK_FINAL: 24,
    VK_HANJA: 25,
    VK_KANJI: 25,
    VK_CONVERT: 28,
    VK_NONCONVERT: 29,
    VK_ACCEPT: 30,
    VK_MODECHANGE: 31,
    VK_SELECT: 41,
    VK_PRINT: 42,
    VK_EXECUTE: 43,
    VK_SLEEP: 95,
    Text: {
      RE_COLORS: /%([bc]){([^}]*)}/g,
      TYPE_TEXT: 0,
      TYPE_NEWLINE: 1,
      TYPE_FG: 2,
      TYPE_BG: 3,
      measure: function(a, c) {
        for (
          var d = { width: 0, height: 1 },
            e = this.tokenize(a, c),
            f = 0,
            b = 0;
          b < e.length;
          b++
        ) {
          var l = e[b];
          switch (l.type) {
            case this.TYPE_TEXT:
              f += l.value.length;
              break;
            case this.TYPE_NEWLINE:
              d.height++, (d.width = Math.max(d.width, f)), (f = 0);
          }
        }
        d.width = Math.max(d.width, f);
        return d;
      },
      tokenize: function(a, c) {
        var d = [],
          e = 0;
        a.replace(this.RE_COLORS, function(c, f, h, m) {
          var g = a.substring(e, m);
          g.length && d.push({ type: b.Text.TYPE_TEXT, value: g });
          d.push({
            type: 'c' == f ? b.Text.TYPE_FG : b.Text.TYPE_BG,
            value: h.trim()
          });
          e = m + c.length;
          return '';
        });
        var f = a.substring(e);
        f.length && d.push({ type: b.Text.TYPE_TEXT, value: f });
        return this._breakLines(d, c);
      },
      _breakLines: function(a, c) {
        c || (c = Infinity);
        for (var d = 0, e = 0, f = -1; d < a.length; ) {
          var g = a[d];
          g.type == b.Text.TYPE_NEWLINE && ((e = 0), (f = -1));
          if (g.type != b.Text.TYPE_TEXT) d++;
          else {
            for (; 0 == e && ' ' == g.value.charAt(0); )
              g.value = g.value.substring(1);
            var l = g.value.indexOf('\n');
            if (-1 != l) {
              g.value = this._breakInsideToken(a, d, l, !0);
              for (l = g.value.split(''); l.length && ' ' == l[l.length - 1]; )
                l.pop();
              g.value = l.join('');
            }
            if (g.value.length) {
              if (e + g.value.length > c) {
                for (l = -1; ; ) {
                  var h = g.value.indexOf(' ', l + 1);
                  if (-1 == h) break;
                  if (e + h > c) break;
                  l = h;
                }
                -1 != l
                  ? (g.value = this._breakInsideToken(a, d, l, !0))
                  : -1 != f
                    ? (
                        (g = a[f]),
                        (d = g.value.lastIndexOf(' ')),
                        (g.value = this._breakInsideToken(a, f, d, !0)),
                        (d = f)
                      )
                    : (g.value = this._breakInsideToken(a, d, c - e, !1));
              } else
                (e += g.value.length), -1 != g.value.indexOf(' ') && (f = d);
              d++;
            } else a.splice(d, 1);
          }
        }
        a.push({ type: b.Text.TYPE_NEWLINE });
        e = null;
        for (d = 0; d < a.length; d++)
          switch (((g = a[d]), g.type)) {
            case b.Text.TYPE_TEXT:
              e = g;
              break;
            case b.Text.TYPE_NEWLINE:
              if (e) {
                for (
                  l = e.value.split('');
                  l.length && ' ' == l[l.length - 1];

                )
                  l.pop();
                e.value = l.join('');
              }
              e = null;
          }
        a.pop();
        return a;
      },
      _breakInsideToken: function(a, c, d, e) {
        var f = { type: b.Text.TYPE_NEWLINE };
        e = {
          type: b.Text.TYPE_TEXT,
          value: a[c].value.substring(d + (e ? 1 : 0))
        };
        a.splice(c + 1, 0, f, e);
        return a[c].value.substring(0, d);
      }
    }
  };
  Array.prototype.random =
    Array.prototype.random ||
    function() {
      return this.length
        ? this[Math.floor(b.RNG.getUniform() * this.length)]
        : null;
    };
  Array.prototype.randomize =
    Array.prototype.randomize ||
    function() {
      for (var a = [], c = this.slice(); c.length; ) {
        var d = c.indexOf(c.random());
        a.push(c.splice(d, 1)[0]);
      }
      return a;
    };
  Number.prototype.mod =
    Number.prototype.mod ||
    function(a) {
      return (this % a + a) % a;
    };
  String.prototype.capitalize =
    String.prototype.capitalize ||
    function() {
      return this.charAt(0).toUpperCase() + this.substring(1);
    };
  String.prototype.lpad =
    String.prototype.lpad ||
    function(a, c) {
      for (var d = a || '0', e = c || 2, f = ''; f.length < e - this.length; )
        f += d;
      f = f.substring(0, e - this.length);
      return f + this;
    };
  String.prototype.rpad =
    String.prototype.rpad ||
    function(a, c) {
      for (var d = a || '0', e = c || 2, f = ''; f.length < e - this.length; )
        f += d;
      f = f.substring(0, e - this.length);
      return this + f;
    };
  String.format =
    String.format ||
    function(a) {
      var c = String.format.map,
        d = Array.prototype.slice.call(arguments, 1);
      return a.replace(/%(?:([a-z]+)|(?:{([^}]+)}))/gi, function(e, f, b, l) {
        if ('%' == a.charAt(l - 1)) return e.substring(1);
        if (!d.length) return e;
        b = (f || b).split(',');
        f = b.shift();
        l = c[f.toLowerCase()];
        if (!l) return e;
        e = d.shift();
        e = e[l].apply(e, b);
        f = f.charAt(0);
        f != f.toLowerCase() && (e = e.capitalize());
        return e;
      });
    };
  String.format.map = String.format.map || { s: 'toString' };
  String.prototype.format =
    String.prototype.format ||
    function() {
      var a = Array.prototype.slice.call(arguments);
      a.unshift(this);
      return String.format.apply(String, a);
    };
  Object.create ||
    (Object.create = function(a) {
      var c = function() {};
      c.prototype = a;
      return new c();
    });
  Function.prototype.extend =
    Function.prototype.extend ||
    function(a) {
      this.prototype = Object.create(a.prototype);
      this.prototype.constructor = this;
      return this;
    };
  'undefined' != typeof window &&
    (
      (window.requestAnimationFrame =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(a) {
          return setTimeout(a, 1e3 / 60);
        }),
      (window.cancelAnimationFrame =
        window.cancelAnimationFrame ||
        window.mozCancelAnimationFrame ||
        window.webkitCancelAnimationFrame ||
        window.oCancelAnimationFrame ||
        window.msCancelAnimationFrame ||
        function(a) {
          return clearTimeout(a);
        })
    );
  b.Display = function(a) {
    this._context = document.createElement('canvas').getContext('2d');
    this._data = {};
    this._dirty = !1;
    this._options = {};
    this._backend = null;
    var c = {
        width: b.DEFAULT_WIDTH,
        height: b.DEFAULT_HEIGHT,
        transpose: !1,
        layout: 'rect',
        fontSize: 15,
        spacing: 1,
        border: 0,
        forceSquareRatio: !1,
        fontFamily: 'monospace',
        fontStyle: '',
        fg: '#ccc',
        bg: '#000',
        tileWidth: 32,
        tileHeight: 32,
        tileMap: {},
        tileSet: null,
        tileColorize: !1,
        termColor: 'xterm'
      },
      d;
    for (d in a) c[d] = a[d];
    this.setOptions(c);
    this.DEBUG = this.DEBUG.bind(this);
    this._tick = this._tick.bind(this);
    requestAnimationFrame(this._tick);
  };
  b.Display.prototype.DEBUG = function(a, c, d) {
    var e = [this._options.bg, this._options.fg];
    this.draw(a, c, null, null, e[d % e.length]);
  };
  b.Display.prototype.clear = function() {
    this._data = {};
    this._dirty = !0;
  };
  b.Display.prototype.setOptions = function(a) {
    for (var c in a) this._options[c] = a[c];
    if (
      a.width ||
      a.height ||
      a.fontSize ||
      a.fontFamily ||
      a.spacing ||
      a.layout
    )
      a.layout &&
        (this._backend = new b.Display[(a.layout.capitalize())](
          this._context
        )), (a =
        (this._options.fontStyle ? this._options.fontStyle + ' ' : '') +
        this._options.fontSize +
        'px ' +
        this._options
          .fontFamily), (this._context.font = a), this._backend.compute(
        this._options
      ), (this._context.font = a), (this._context.textAlign =
        'center'), (this._context.textBaseline = 'middle'), (this._dirty = !0);
    return this;
  };
  b.Display.prototype.getOptions = function() {
    return this._options;
  };
  b.Display.prototype.getContainer = function() {
    return this._context.canvas;
  };
  b.Display.prototype.computeSize = function(a, c) {
    return this._backend.computeSize(a, c, this._options);
  };
  b.Display.prototype.computeFontSize = function(a, c) {
    return this._backend.computeFontSize(a, c, this._options);
  };
  b.Display.prototype.eventToPosition = function(a) {
    if (a.touches) {
      var c = a.touches[0].clientX;
      a = a.touches[0].clientY;
    } else (c = a.clientX), (a = a.clientY);
    var d = this._context.canvas.getBoundingClientRect();
    c -= d.left;
    a -= d.top;
    c *= this._context.canvas.width / this._context.canvas.clientWidth;
    a *= this._context.canvas.height / this._context.canvas.clientHeight;
    return 0 > c ||
    0 > a ||
    c >= this._context.canvas.width ||
    a >= this._context.canvas.height
      ? [-1, -1]
      : this._backend.eventToPosition(c, a);
  };
  b.Display.prototype.draw = function(a, c, d, e, f) {
    e || (e = this._options.fg);
    f || (f = this._options.bg);
    this._data[a + ',' + c] = [a, c, d, e, f];
    !0 !== this._dirty &&
      (this._dirty || (this._dirty = {}), (this._dirty[a + ',' + c] = !0));
  };
  b.Display.prototype.drawText = function(a, c, d, e) {
    var f = null,
      g = null,
      l = a,
      h = 1;
    e || (e = this._options.width - a);
    for (d = b.Text.tokenize(d, e); d.length; )
      switch (((e = d.shift()), e.type)) {
        case b.Text.TYPE_TEXT:
          for (var m, n = !1, p, r = !1, q = 0; q < e.value.length; q++) {
            m = e.value.charCodeAt(q);
            var t = e.value.charAt(q);
            p =
              (65280 < m && 65377 > m) || (65500 < m && 65512 > m) || 65518 < m;
            m = 32 == t.charCodeAt(0) || 12288 == t.charCodeAt(0);
            !r || p || m || l++;
            p && !n && l++;
            this.draw(l++, c, t, f, g);
            n = m;
            r = p;
          }
          break;
        case b.Text.TYPE_FG:
          f = e.value || null;
          break;
        case b.Text.TYPE_BG:
          g = e.value || null;
          break;
        case b.Text.TYPE_NEWLINE:
          (l = a), c++, h++;
      }
    return h;
  };
  b.Display.prototype._tick = function() {
    requestAnimationFrame(this._tick);
    if (this._dirty) {
      if (!0 === this._dirty) {
        this._context.fillStyle = this._options.bg;
        this._context.fillRect(
          0,
          0,
          this._context.canvas.width,
          this._context.canvas.height
        );
        for (var a in this._data) this._draw(a, !1);
      } else for (var c in this._dirty) this._draw(c, !0);
      this._dirty = !1;
    }
  };
  b.Display.prototype._draw = function(a, c) {
    var d = this._data[a];
    d[4] != this._options.bg && (c = !0);
    this._backend.draw(d, c);
  };
  b.Display.Backend = function(a) {
    this._context = a;
  };
  b.Display.Backend.prototype.compute = function(a) {};
  b.Display.Backend.prototype.draw = function(a, c) {};
  b.Display.Backend.prototype.computeSize = function(a, c) {};
  b.Display.Backend.prototype.computeFontSize = function(a, c) {};
  b.Display.Backend.prototype.eventToPosition = function(a, c) {};
  b.Display.Rect = function(a) {
    b.Display.Backend.call(this, a);
    this._spacingY = this._spacingX = 0;
    this._canvasCache = {};
    this._options = {};
  };
  b.Display.Rect.extend(b.Display.Backend);
  b.Display.Rect.cache = !1;
  b.Display.Rect.prototype.compute = function(a) {
    this._canvasCache = {};
    this._options = a;
    var c = Math.ceil(this._context.measureText('W').width);
    this._spacingX = Math.ceil(a.spacing * c);
    this._spacingY = Math.ceil(a.spacing * a.fontSize);
    this._options.forceSquareRatio &&
      (this._spacingX = this._spacingY = Math.max(
        this._spacingX,
        this._spacingY
      ));
    this._context.canvas.width = a.width * this._spacingX;
    this._context.canvas.height = a.height * this._spacingY;
  };
  b.Display.Rect.prototype.draw = function(a, c) {
    this.constructor.cache
      ? this._drawWithCache(a, c)
      : this._drawNoCache(a, c);
  };
  b.Display.Rect.prototype._drawWithCache = function(a, c) {
    var d = a[0],
      e = a[1],
      f = a[2],
      b = a[3],
      l = a[4],
      h = '' + f + b + l;
    if (h in this._canvasCache) var m = this._canvasCache[h];
    else {
      var n = this._options.border;
      m = document.createElement('canvas');
      var p = m.getContext('2d');
      m.width = this._spacingX;
      m.height = this._spacingY;
      p.fillStyle = l;
      p.fillRect(n, n, m.width - n, m.height - n);
      if (f)
        for (
          p.fillStyle = b, p.font = this._context.font, p.textAlign =
            'center', p.textBaseline = 'middle', f = [].concat(f), b = 0;
          b < f.length;
          b++
        )
          p.fillText(f[b], this._spacingX / 2, Math.ceil(this._spacingY / 2));
      this._canvasCache[h] = m;
    }
    this._context.drawImage(m, d * this._spacingX, e * this._spacingY);
  };
  b.Display.Rect.prototype._drawNoCache = function(a, c) {
    var d = a[0],
      e = a[1],
      f = a[2],
      b = a[3],
      l = a[4];
    if (c) {
      var h = this._options.border;
      this._context.fillStyle = l;
      this._context.fillRect(
        d * this._spacingX + h,
        e * this._spacingY + h,
        this._spacingX - h,
        this._spacingY - h
      );
    }
    if (f)
      for (
        this._context.fillStyle = b, f = [].concat(f), b = 0;
        b < f.length;
        b++
      )
        this._context.fillText(
          f[b],
          (d + 0.5) * this._spacingX,
          Math.ceil((e + 0.5) * this._spacingY)
        );
  };
  b.Display.Rect.prototype.computeSize = function(a, c) {
    return [Math.floor(a / this._spacingX), Math.floor(c / this._spacingY)];
  };
  b.Display.Rect.prototype.computeFontSize = function(a, c) {
    var d = Math.floor(a / this._options.width),
      e = Math.floor(c / this._options.height),
      f = this._context.font;
    this._context.font = '100px ' + this._options.fontFamily;
    var b = Math.ceil(this._context.measureText('W').width);
    this._context.font = f;
    d = b / 100 * e / d;
    1 < d && (e = Math.floor(e / d));
    return Math.floor(e / this._options.spacing);
  };
  b.Display.Rect.prototype.eventToPosition = function(a, c) {
    return [Math.floor(a / this._spacingX), Math.floor(c / this._spacingY)];
  };
  b.Display.Hex = function(a) {
    b.Display.Backend.call(this, a);
    this._hexSize = this._spacingY = this._spacingX = 0;
    this._options = {};
  };
  b.Display.Hex.extend(b.Display.Backend);
  b.Display.Hex.prototype.compute = function(a) {
    this._options = a;
    var c = Math.ceil(this._context.measureText('W').width);
    this._hexSize = Math.floor(a.spacing * (a.fontSize + c / Math.sqrt(3)) / 2);
    this._spacingX = this._hexSize * Math.sqrt(3) / 2;
    this._spacingY = 1.5 * this._hexSize;
    if (a.transpose) {
      var d = 'height';
      c = 'width';
    } else (d = 'width'), (c = 'height');
    this._context.canvas[d] = Math.ceil((a.width + 1) * this._spacingX);
    this._context.canvas[c] = Math.ceil(
      (a.height - 1) * this._spacingY + 2 * this._hexSize
    );
  };
  b.Display.Hex.prototype.draw = function(a, c) {
    var d = a[2],
      e = a[3],
      f = a[4],
      b = [(a[0] + 1) * this._spacingX, a[1] * this._spacingY + this._hexSize];
    this._options.transpose && b.reverse();
    c && ((this._context.fillStyle = f), this._fill(b[0], b[1]));
    if (d)
      for (
        this._context.fillStyle = e, d = [].concat(d), e = 0;
        e < d.length;
        e++
      )
        this._context.fillText(d[e], b[0], Math.ceil(b[1]));
  };
  b.Display.Hex.prototype.computeSize = function(a, c) {
    this._options.transpose && ((a += c), (c = a - c), (a -= c));
    return [
      Math.floor(a / this._spacingX) - 1,
      Math.floor((c - 2 * this._hexSize) / this._spacingY + 1)
    ];
  };
  b.Display.Hex.prototype.computeFontSize = function(a, c) {
    this._options.transpose && ((a += c), (c = a - c), (a -= c));
    var d = Math.min(
        2 * a / ((this._options.width + 1) * Math.sqrt(3)) - 1,
        c / (2 + 1.5 * (this._options.height - 1))
      ),
      e = this._context.font;
    this._context.font = '100px ' + this._options.fontFamily;
    var f = Math.ceil(this._context.measureText('W').width);
    this._context.font = e;
    d = Math.floor(d) + 1;
    return (
      Math.ceil(
        2 * d / (this._options.spacing * (1 + f / 100 / Math.sqrt(3)))
      ) - 1
    );
  };
  b.Display.Hex.prototype.eventToPosition = function(a, c) {
    if (this._options.transpose) {
      a += c;
      c = a - c;
      a -= c;
      var d = this._context.canvas.width;
    } else d = this._context.canvas.height;
    c = Math.floor(c / (d / this._options.height));
    c.mod(2)
      ? (
          (a -= this._spacingX),
          (a = 1 + 2 * Math.floor(a / (2 * this._spacingX)))
        )
      : (a = 2 * Math.floor(a / (2 * this._spacingX)));
    return [a, c];
  };
  b.Display.Hex.prototype._fill = function(a, c) {
    var d = this._hexSize,
      e = this._options.border;
    this._context.beginPath();
    this._options.transpose
      ? (
          this._context.moveTo(a - d + e, c),
          this._context.lineTo(a - d / 2 + e, c + this._spacingX - e),
          this._context.lineTo(a + d / 2 - e, c + this._spacingX - e),
          this._context.lineTo(a + d - e, c),
          this._context.lineTo(a + d / 2 - e, c - this._spacingX + e),
          this._context.lineTo(a - d / 2 + e, c - this._spacingX + e),
          this._context.lineTo(a - d + e, c)
        )
      : (
          this._context.moveTo(a, c - d + e),
          this._context.lineTo(a + this._spacingX - e, c - d / 2 + e),
          this._context.lineTo(a + this._spacingX - e, c + d / 2 - e),
          this._context.lineTo(a, c + d - e),
          this._context.lineTo(a - this._spacingX + e, c + d / 2 - e),
          this._context.lineTo(a - this._spacingX + e, c - d / 2 + e),
          this._context.lineTo(a, c - d + e)
        );
    this._context.fill();
  };
  b.Display.Tile = function(a) {
    b.Display.Rect.call(this, a);
    this._options = {};
    this._colorCanvas = document.createElement('canvas');
  };
  b.Display.Tile.extend(b.Display.Rect);
  b.Display.Tile.prototype.compute = function(a) {
    this._options = a;
    this._context.canvas.width = a.width * a.tileWidth;
    this._context.canvas.height = a.height * a.tileHeight;
    this._colorCanvas.width = a.tileWidth;
    this._colorCanvas.height = a.tileHeight;
  };
  b.Display.Tile.prototype.draw = function(a, c) {
    var d = a[0],
      e = a[1],
      f = a[2],
      b = a[3],
      l = a[4],
      h = this._options.tileWidth,
      m = this._options.tileHeight;
    c &&
      (this._options.tileColorize
        ? this._context.clearRect(d * h, e * m, h, m)
        : (
            (this._context.fillStyle = l),
            this._context.fillRect(d * h, e * m, h, m)
          ));
    if (f)
      for (var f = [].concat(f), n = 0; n < f.length; n++) {
        var p = this._options.tileMap[f[n]];
        if (!p) throw Error("Char '" + f[n] + "' not found in tileMap");
        if (this._options.tileColorize) {
          var r = this._colorCanvas,
            q = r.getContext('2d');
          q.clearRect(0, 0, h, m);
          q.drawImage(this._options.tileSet, p[0], p[1], h, m, 0, 0, h, m);
          'transparent' != b &&
            (
              (q.fillStyle = b),
              (q.globalCompositeOperation = 'source-atop'),
              q.fillRect(0, 0, h, m)
            );
          'transparent' != l &&
            (
              (q.fillStyle = l),
              (q.globalCompositeOperation = 'destination-over'),
              q.fillRect(0, 0, h, m)
            );
          this._context.drawImage(r, d * h, e * m, h, m);
        } else
          this._context.drawImage(
            this._options.tileSet,
            p[0],
            p[1],
            h,
            m,
            d * h,
            e * m,
            h,
            m
          );
      }
  };
  b.Display.Tile.prototype.computeSize = function(a, c) {
    return [
      Math.floor(a / this._options.tileWidth),
      Math.floor(c / this._options.tileHeight)
    ];
  };
  b.Display.Tile.prototype.computeFontSize = function(a, c) {
    return [
      Math.floor(a / this._options.width),
      Math.floor(c / this._options.height)
    ];
  };
  b.Display.Tile.prototype.eventToPosition = function(a, c) {
    return [
      Math.floor(a / this._options.tileWidth),
      Math.floor(c / this._options.tileHeight)
    ];
  };
  b.RNG = {
    getSeed: function() {
      return this._seed;
    },
    setSeed: function(a) {
      this._seed = a = 1 > a ? 1 / a : a;
      this._s0 = (a >>> 0) * this._frac;
      a = (69069 * a + 1) >>> 0;
      this._s1 = a * this._frac;
      this._s2 = ((69069 * a + 1) >>> 0) * this._frac;
      this._c = 1;
      return this;
    },
    getUniform: function() {
      var a = 2091639 * this._s0 + this._c * this._frac;
      this._s0 = this._s1;
      this._s1 = this._s2;
      this._c = a | 0;
      return (this._s2 = a - this._c);
    },
    getUniformInt: function(a, c) {
      var d = Math.max(a, c),
        e = Math.min(a, c);
      return Math.floor(this.getUniform() * (d - e + 1)) + e;
    },
    getNormal: function(a, c) {
      do {
        var d = 2 * this.getUniform() - 1;
        var e = 2 * this.getUniform() - 1;
        e = d * d + e * e;
      } while (1 < e || 0 == e);
      return (a || 0) + d * Math.sqrt(-2 * Math.log(e) / e) * (c || 1);
    },
    getPercentage: function() {
      return 1 + Math.floor(100 * this.getUniform());
    },
    getWeightedValue: function(a) {
      var c = 0,
        d;
      for (d in a) c += a[d];
      var c = this.getUniform() * c,
        e = 0;
      for (d in a) if (((e += a[d]), c < e)) break;
      return d;
    },
    getState: function() {
      return [this._s0, this._s1, this._s2, this._c];
    },
    setState: function(a) {
      this._s0 = a[0];
      this._s1 = a[1];
      this._s2 = a[2];
      this._c = a[3];
      return this;
    },
    clone: function() {
      var a = Object.create(this);
      a.setState(this.getState());
      return a;
    },
    _s0: 0,
    _s1: 0,
    _s2: 0,
    _c: 0,
    _frac: 2.3283064365386963e-10
  };
  b.RNG.setSeed(Date.now());
  b.StringGenerator = function(a) {
    this._options = { words: !1, order: 3, prior: 0.001 };
    for (var c in a) this._options[c] = a[c];
    this._suffix = this._boundary = String.fromCharCode(0);
    this._prefix = [];
    for (a = 0; a < this._options.order; a++) this._prefix.push(this._boundary);
    this._priorValues = {};
    this._priorValues[this._boundary] = this._options.prior;
    this._data = {};
  };
  b.StringGenerator.prototype.clear = function() {
    this._data = {};
    this._priorValues = {};
  };
  b.StringGenerator.prototype.generate = function() {
    for (
      var a = [this._sample(this._prefix)];
      a[a.length - 1] != this._boundary;

    )
      a.push(this._sample(a));
    return this._join(a.slice(0, -1));
  };
  b.StringGenerator.prototype.observe = function(a) {
    a = this._split(a);
    for (var c = 0; c < a.length; c++)
      this._priorValues[a[c]] = this._options.prior;
    a = this._prefix.concat(a).concat(this._suffix);
    for (c = this._options.order; c < a.length; c++)
      for (
        var d = a.slice(c - this._options.order, c), e = a[c], f = 0;
        f < d.length;
        f++
      ) {
        var b = d.slice(f);
        this._observeEvent(b, e);
      }
  };
  b.StringGenerator.prototype.getStats = function() {
    var a = [],
      c = 0,
      d;
    for (d in this._priorValues) c++;
    c--;
    a.push('distinct samples: ' + c);
    var e = (c = 0);
    for (d in this._data) {
      c++;
      for (var f in this._data[d]) e++;
    }
    a.push('dictionary size (contexts): ' + c);
    a.push('dictionary size (events): ' + e);
    return a.join(', ');
  };
  b.StringGenerator.prototype._split = function(a) {
    return a.split(this._options.words ? /\s+/ : '');
  };
  b.StringGenerator.prototype._join = function(a) {
    return a.join(this._options.words ? ' ' : '');
  };
  b.StringGenerator.prototype._observeEvent = function(a, c) {
    var d = this._join(a);
    d in this._data || (this._data[d] = {});
    d = this._data[d];
    c in d || (d[c] = 0);
    d[c]++;
  };
  b.StringGenerator.prototype._sample = function(a) {
    a = this._backoff(a);
    a = this._join(a);
    a = this._data[a];
    var c = {};
    if (this._options.prior) {
      for (var d in this._priorValues) c[d] = this._priorValues[d];
      for (d in a) c[d] += a[d];
    } else c = a;
    return b.RNG.getWeightedValue(c);
  };
  b.StringGenerator.prototype._backoff = function(a) {
    for (
      a.length > this._options.order
        ? (a = a.slice(-this._options.order))
        : a.length < this._options.order &&
          (a = this._prefix.slice(0, this._options.order - a.length).concat(a));
      !(this._join(a) in this._data) && 0 < a.length;

    )
      a = a.slice(1);
    return a;
  };
  b.EventQueue = function() {
    this._time = 0;
    this._events = [];
    this._eventTimes = [];
  };
  b.EventQueue.prototype.getTime = function() {
    return this._time;
  };
  b.EventQueue.prototype.clear = function() {
    this._events = [];
    this._eventTimes = [];
    return this;
  };
  b.EventQueue.prototype.add = function(a, c) {
    for (var d = this._events.length, e = 0; e < this._eventTimes.length; e++)
      if (this._eventTimes[e] > c) {
        d = e;
        break;
      }
    this._events.splice(d, 0, a);
    this._eventTimes.splice(d, 0, c);
  };
  b.EventQueue.prototype.get = function() {
    if (!this._events.length) return null;
    var a = this._eventTimes.splice(0, 1)[0];
    if (0 < a) {
      this._time += a;
      for (var c = 0; c < this._eventTimes.length; c++)
        this._eventTimes[c] -= a;
    }
    return this._events.splice(0, 1)[0];
  };
  b.EventQueue.prototype.getEventTime = function(a) {
    a = this._events.indexOf(a);
    if (-1 != a) return this._eventTimes[a];
  };
  b.EventQueue.prototype.remove = function(a) {
    a = this._events.indexOf(a);
    if (-1 == a) return !1;
    this._remove(a);
    return !0;
  };
  b.EventQueue.prototype._remove = function(a) {
    this._events.splice(a, 1);
    this._eventTimes.splice(a, 1);
  };
  b.Scheduler = function() {
    this._queue = new b.EventQueue();
    this._repeat = [];
    this._current = null;
  };
  b.Scheduler.prototype.getTime = function() {
    return this._queue.getTime();
  };
  b.Scheduler.prototype.add = function(a, c) {
    c && this._repeat.push(a);
    return this;
  };
  b.Scheduler.prototype.getTimeOf = function(a) {
    return this._queue.getEventTime(a);
  };
  b.Scheduler.prototype.clear = function() {
    this._queue.clear();
    this._repeat = [];
    this._current = null;
    return this;
  };
  b.Scheduler.prototype.remove = function(a) {
    var c = this._queue.remove(a),
      d = this._repeat.indexOf(a);
    -1 != d && this._repeat.splice(d, 1);
    this._current == a && (this._current = null);
    return c;
  };
  b.Scheduler.prototype.next = function() {
    return (this._current = this._queue.get());
  };
  b.Scheduler.Simple = function() {
    b.Scheduler.call(this);
  };
  b.Scheduler.Simple.extend(b.Scheduler);
  b.Scheduler.Simple.prototype.add = function(a, c) {
    this._queue.add(a, 0);
    return b.Scheduler.prototype.add.call(this, a, c);
  };
  b.Scheduler.Simple.prototype.next = function() {
    this._current &&
      -1 != this._repeat.indexOf(this._current) &&
      this._queue.add(this._current, 0);
    return b.Scheduler.prototype.next.call(this);
  };
  b.Scheduler.Speed = function() {
    b.Scheduler.call(this);
  };
  b.Scheduler.Speed.extend(b.Scheduler);
  b.Scheduler.Speed.prototype.add = function(a, c, d) {
    this._queue.add(a, void 0 !== d ? d : 1 / a.getSpeed());
    return b.Scheduler.prototype.add.call(this, a, c);
  };
  b.Scheduler.Speed.prototype.next = function() {
    this._current &&
      -1 != this._repeat.indexOf(this._current) &&
      this._queue.add(this._current, 1 / this._current.getSpeed());
    return b.Scheduler.prototype.next.call(this);
  };
  b.Scheduler.Action = function() {
    b.Scheduler.call(this);
    this._duration = this._defaultDuration = 1;
  };
  b.Scheduler.Action.extend(b.Scheduler);
  b.Scheduler.Action.prototype.add = function(a, c, d) {
    this._queue.add(a, d || this._defaultDuration);
    return b.Scheduler.prototype.add.call(this, a, c);
  };
  b.Scheduler.Action.prototype.clear = function() {
    this._duration = this._defaultDuration;
    return b.Scheduler.prototype.clear.call(this);
  };
  b.Scheduler.Action.prototype.remove = function(a) {
    a == this._current && (this._duration = this._defaultDuration);
    return b.Scheduler.prototype.remove.call(this, a);
  };
  b.Scheduler.Action.prototype.next = function() {
    this._current &&
      -1 != this._repeat.indexOf(this._current) &&
      (
        this._queue.add(this._current, this._duration || this._defaultDuration),
        (this._duration = this._defaultDuration)
      );
    return b.Scheduler.prototype.next.call(this);
  };
  b.Scheduler.Action.prototype.setDuration = function(a) {
    this._current && (this._duration = a);
    return this;
  };
  b.Engine = function(a) {
    this._scheduler = a;
    this._lock = 1;
  };
  b.Engine.prototype.start = function() {
    return this.unlock();
  };
  b.Engine.prototype.lock = function() {
    this._lock++;
    return this;
  };
  b.Engine.prototype.unlock = function() {
    if (!this._lock) throw Error('Cannot unlock unlocked engine');
    for (this._lock--; !this._lock; ) {
      var a = this._scheduler.next();
      if (!a) return this.lock();
      (a = a.act()) && a.then && (this.lock(), a.then(this.unlock.bind(this)));
    }
    return this;
  };
  b.Map = function(a, c) {
    this._width = a || b.DEFAULT_WIDTH;
    this._height = c || b.DEFAULT_HEIGHT;
  };
  b.Map.prototype.create = function(a) {};
  b.Map.prototype._fillMap = function(a) {
    for (var c = [], d = 0; d < this._width; d++) {
      c.push([]);
      for (var e = 0; e < this._height; e++) c[d].push(a);
    }
    return c;
  };
  b.Map.Arena = function(a, c) {
    b.Map.call(this, a, c);
  };
  b.Map.Arena.extend(b.Map);
  b.Map.Arena.prototype.create = function(a) {
    for (var c = this._width - 1, d = this._height - 1, e = 0; e <= c; e++)
      for (var f = 0; f <= d; f++) a(e, f, e && f && e < c && f < d ? 0 : 1);
    return this;
  };
  b.Map.DividedMaze = function(a, c) {
    b.Map.call(this, a, c);
    this._stack = [];
  };
  b.Map.DividedMaze.extend(b.Map);
  b.Map.DividedMaze.prototype.create = function(a) {
    var c = this._width,
      d = this._height;
    this._map = [];
    for (var e = 0; e < c; e++) {
      this._map.push([]);
      for (var f = 0; f < d; f++)
        this._map[e].push(0 == e || 0 == f || e + 1 == c || f + 1 == d ? 1 : 0);
    }
    this._stack = [[1, 1, c - 2, d - 2]];
    this._process();
    for (e = 0; e < c; e++) for (f = 0; f < d; f++) a(e, f, this._map[e][f]);
    this._map = null;
    return this;
  };
  b.Map.DividedMaze.prototype._process = function() {
    for (; this._stack.length; ) {
      var a = this._stack.shift();
      this._partitionRoom(a);
    }
  };
  b.Map.DividedMaze.prototype._partitionRoom = function(a) {
    for (var c, d = [], e = [], f = a[0] + 1; f < a[2]; f++) {
      var b = this._map[f][a[3] + 1];
      !this._map[f][a[1] - 1] || !b || f % 2 || d.push(f);
    }
    for (f = a[1] + 1; f < a[3]; f++)
      (b = this._map[a[2] + 1][f]), !this._map[a[0] - 1][f] ||
        !b ||
        f % 2 ||
        e.push(f);
    if (d.length && e.length) {
      d = d.random();
      e = e.random();
      this._map[d][e] = 1;
      b = [];
      c = [];
      b.push(c);
      for (f = a[0]; f < d; f++) (this._map[f][e] = 1), c.push([f, e]);
      c = [];
      b.push(c);
      for (f = d + 1; f <= a[2]; f++) (this._map[f][e] = 1), c.push([f, e]);
      c = [];
      b.push(c);
      for (f = a[1]; f < e; f++) (this._map[d][f] = 1), c.push([d, f]);
      c = [];
      b.push(c);
      for (f = e + 1; f <= a[3]; f++) (this._map[d][f] = 1), c.push([d, f]);
      for (var l = b.random(), f = 0; f < b.length; f++)
        (c = b[f]), c != l && ((c = c.random()), (this._map[c[0]][c[1]] = 0));
      this._stack.push([a[0], a[1], d - 1, e - 1]);
      this._stack.push([d + 1, a[1], a[2], e - 1]);
      this._stack.push([a[0], e + 1, d - 1, a[3]]);
      this._stack.push([d + 1, e + 1, a[2], a[3]]);
    }
  };
  b.Map.IceyMaze = function(a, c, d) {
    b.Map.call(this, a, c);
    this._regularity = d || 0;
  };
  b.Map.IceyMaze.extend(b.Map);
  b.Map.IceyMaze.prototype.create = function(a) {
    var c = this._width,
      d = this._height,
      e = this._fillMap(1),
      c = c - (c % 2 ? 1 : 2),
      d = d - (d % 2 ? 1 : 2),
      f = 0,
      g = [[0, 0], [0, 0], [0, 0], [0, 0]];
    do {
      var l = 1 + 2 * Math.floor(b.RNG.getUniform() * (c - 1) / 2);
      var h = 1 + 2 * Math.floor(b.RNG.getUniform() * (d - 1) / 2);
      f || (e[l][h] = 0);
      if (!e[l][h]) {
        this._randomize(g);
        do {
          0 == Math.floor(b.RNG.getUniform() * (this._regularity + 1)) &&
            this._randomize(g);
          var m = !0;
          for (var n = 0; 4 > n; n++) {
            var p = l + 2 * g[n][0];
            var r = h + 2 * g[n][1];
            if (this._isFree(e, p, r, c, d)) {
              e[p][r] = 0;
              e[l + g[n][0]][h + g[n][1]] = 0;
              l = p;
              h = r;
              m = !1;
              f++;
              break;
            }
          }
        } while (!m);
      }
    } while (f + 1 < c * d / 4);
    for (n = 0; n < this._width; n++)
      for (c = 0; c < this._height; c++) a(n, c, e[n][c]);
    this._map = null;
    return this;
  };
  b.Map.IceyMaze.prototype._randomize = function(a) {
    for (var c = 0; 4 > c; c++) (a[c][0] = 0), (a[c][1] = 0);
    switch (Math.floor(4 * b.RNG.getUniform())) {
      case 0:
        a[0][0] = -1;
        a[1][0] = 1;
        a[2][1] = -1;
        a[3][1] = 1;
        break;
      case 1:
        a[3][0] = -1;
        a[2][0] = 1;
        a[1][1] = -1;
        a[0][1] = 1;
        break;
      case 2:
        a[2][0] = -1;
        a[3][0] = 1;
        a[0][1] = -1;
        a[1][1] = 1;
        break;
      case 3:
        (a[1][0] = -1), (a[0][0] = 1), (a[3][1] = -1), (a[2][1] = 1);
    }
  };
  b.Map.IceyMaze.prototype._isFree = function(a, c, d, e, f) {
    return 1 > c || 1 > d || c >= e || d >= f ? !1 : a[c][d];
  };
  b.Map.EllerMaze = function(a, c) {
    b.Map.call(this, a, c);
  };
  b.Map.EllerMaze.extend(b.Map);
  b.Map.EllerMaze.prototype.create = function(a) {
    for (
      var c,
        d,
        e = this._fillMap(1),
        f = Math.ceil((this._width - 2) / 2),
        g = [],
        l = [],
        h = 0;
      h < f;
      h++
    )
      g.push(h), l.push(h);
    g.push(f - 1);
    for (var m = 1; m + 3 < this._height; m += 2)
      for (h = 0; h < f; h++)
        (d = 2 * h + 1), (c = m), (e[d][c] = 0), h != g[h + 1] &&
          0.375 < b.RNG.getUniform() &&
          (this._addToList(h, g, l), (e[d + 1][c] = 0)), h != g[h] &&
        0.375 < b.RNG.getUniform()
          ? this._removeFromList(h, g, l)
          : (e[d][c + 1] = 0);
    for (h = 0; h < f; h++)
      (d = 2 * h + 1), (c = m), (e[d][c] = 0), h != g[h + 1] &&
        (h == g[h] || 0.375 < b.RNG.getUniform()) &&
        (this._addToList(h, g, l), (e[d + 1][c] = 0)), this._removeFromList(
        h,
        g,
        l
      );
    for (h = 0; h < this._width; h++)
      for (m = 0; m < this._height; m++) a(h, m, e[h][m]);
    return this;
  };
  b.Map.EllerMaze.prototype._removeFromList = function(a, c, d) {
    d[c[a]] = d[a];
    c[d[a]] = c[a];
    d[a] = a;
    c[a] = a;
  };
  b.Map.EllerMaze.prototype._addToList = function(a, c, d) {
    d[c[a + 1]] = d[a];
    c[d[a]] = c[a + 1];
    d[a] = a + 1;
    c[a + 1] = a;
  };
  b.Map.Cellular = function(a, c, d) {
    b.Map.call(this, a, c);
    this._options = {
      born: [5, 6, 7, 8],
      survive: [4, 5, 6, 7, 8],
      topology: 8
    };
    this.setOptions(d);
    this._dirs = b.DIRS[this._options.topology];
    this._map = this._fillMap(0);
  };
  b.Map.Cellular.extend(b.Map);
  b.Map.Cellular.prototype.randomize = function(a) {
    for (var c = 0; c < this._width; c++)
      for (var d = 0; d < this._height; d++)
        this._map[c][d] = b.RNG.getUniform() < a ? 1 : 0;
    return this;
  };
  b.Map.Cellular.prototype.setOptions = function(a) {
    for (var c in a) this._options[c] = a[c];
  };
  b.Map.Cellular.prototype.set = function(a, c, d) {
    this._map[a][c] = d;
  };
  b.Map.Cellular.prototype.create = function(a) {
    for (
      var c = this._fillMap(0),
        d = this._options.born,
        e = this._options.survive,
        f = 0;
      f < this._height;
      f++
    ) {
      var b = 1,
        l = 0;
      6 == this._options.topology && ((b = 2), (l = f % 2));
      for (; l < this._width; l += b) {
        var h = this._map[l][f],
          m = this._getNeighbors(l, f);
        h && -1 != e.indexOf(m)
          ? (c[l][f] = 1)
          : h || -1 == d.indexOf(m) || (c[l][f] = 1);
      }
    }
    this._map = c;
    this.serviceCallback(a);
  };
  b.Map.Cellular.prototype.serviceCallback = function(a) {
    if (a)
      for (var c = 0; c < this._height; c++) {
        var d = 1,
          e = 0;
        6 == this._options.topology && ((d = 2), (e = c % 2));
        for (; e < this._width; e += d) a(e, c, this._map[e][c]);
      }
  };
  b.Map.Cellular.prototype._getNeighbors = function(a, c) {
    for (var d = 0, e = 0; e < this._dirs.length; e++) {
      var f = this._dirs[e],
        b = a + f[0],
        f = c + f[1];
      0 > b ||
        b >= this._width ||
        0 > f ||
        f >= this._height ||
        (d += 1 == this._map[b][f] ? 1 : 0);
    }
    return d;
  };
  b.Map.Cellular.prototype.connect = function(a, c, d) {
    c || (c = 0);
    for (var e = [], f = {}, g = 0; g < this._width; g++)
      for (var l = 0; l < this._height; l++)
        if (this._freeSpace(g, l, c)) {
          var h = [g, l];
          f[this._pointKey(h)] = h;
          e.push([g, l]);
        }
    h = e[b.RNG.getUniformInt(0, e.length - 1)];
    g = this._pointKey(h);
    e = {};
    e[g] = h;
    delete f[g];
    for (this._findConnected(e, f, [h], !1, c); 0 < Object.keys(f).length; ) {
      h = this._getFromTo(e, f);
      g = h[0];
      l = h[1];
      h = {};
      h[this._pointKey(g)] = g;
      this._findConnected(h, f, [g], !0, c);
      this._tunnelToConnected(l, g, e, f, c, d);
      for (var m in h)
        (g = h[m]), (this._map[g[0]][g[1]] = c), (e[m] = g), delete f[m];
    }
    this.serviceCallback(a);
  };
  b.Map.Cellular.prototype._getFromTo = function(a, c) {
    for (
      var d, e, f, g = Object.keys(a), l = Object.keys(c), h = 0;
      5 > h &&
      !(
        g.length < l.length
          ? (
              (d = g),
              (e = a[d[b.RNG.getUniformInt(0, d.length - 1)]]),
              (d = this._getClosest(e, c))
            )
          : (
              (d = l),
              (d = c[d[b.RNG.getUniformInt(0, d.length - 1)]]),
              (e = this._getClosest(d, a))
            ),
        (f = (d[0] - e[0]) * (d[0] - e[0]) + (d[1] - e[1]) * (d[1] - e[1])),
        64 > f
      );
      h++
    );
    return [d, e];
  };
  b.Map.Cellular.prototype._getClosest = function(a, c) {
    var d = null,
      e = null;
    for (k in c) {
      var f = c[k],
        b = (f[0] - a[0]) * (f[0] - a[0]) + (f[1] - a[1]) * (f[1] - a[1]);
      if (null == e || b < e) (e = b), (d = f);
    }
    return d;
  };
  b.Map.Cellular.prototype._findConnected = function(a, c, d, e, f) {
    for (; 0 < d.length; )
      for (
        var b = d.splice(0, 1)[0],
          b = [
            [b[0] + 1, b[1]],
            [b[0] - 1, b[1]],
            [b[0], b[1] + 1],
            [b[0], b[1] - 1]
          ],
          l = 0;
        l < b.length;
        l++
      ) {
        var h = this._pointKey(b[l]);
        null == a[h] &&
          this._freeSpace(b[l][0], b[l][1], f) &&
          ((a[h] = b[l]), e || delete c[h], d.push(b[l]));
      }
  };
  b.Map.Cellular.prototype._tunnelToConnected = function(a, c, d, e, f, b) {
    this._pointKey(c);
    if (c[0] < a[0]) {
      var g = c;
      var h = a;
    } else (g = a), (h = c);
    for (var m = g[0]; m <= h[0]; m++) {
      this._map[m][g[1]] = f;
      var n = [m, g[1]];
      var p = this._pointKey(n);
      d[p] = n;
      delete e[p];
    }
    b && g[0] < h[0] && b(g, [h[0], g[1]]);
    m = h[0];
    c[1] < a[1] ? ((g = c), (h = a)) : ((g = a), (h = c));
    for (a = g[1]; a < h[1]; a++)
      (this._map[m][a] = f), (n = [m, a]), (p = this._pointKey(n)), (d[
        p
      ] = n), delete e[p];
    b && g[1] < h[1] && b([h[0], g[1]], [h[0], h[1]]);
  };
  b.Map.Cellular.prototype._freeSpace = function(a, c, d) {
    return (
      0 <= a &&
      a < this._width &&
      0 <= c &&
      c < this._height &&
      this._map[a][c] == d
    );
  };
  b.Map.Cellular.prototype._pointKey = function(a) {
    return a[0] + '.' + a[1];
  };
  b.Map.Dungeon = function(a, c) {
    b.Map.call(this, a, c);
    this._rooms = [];
    this._corridors = [];
  };
  b.Map.Dungeon.extend(b.Map);
  b.Map.Dungeon.prototype.getRooms = function() {
    return this._rooms;
  };
  b.Map.Dungeon.prototype.getCorridors = function() {
    return this._corridors;
  };
  b.Map.Digger = function(a, c, d) {
    b.Map.Dungeon.call(this, a, c);
    this._options = {
      roomWidth: [3, 9],
      roomHeight: [3, 5],
      corridorLength: [3, 10],
      dugPercentage: 0.2,
      timeLimit: 1e3
    };
    for (var e in d) this._options[e] = d[e];
    this._features = { Room: 4, Corridor: 4 };
    this._featureAttempts = 20;
    this._walls = {};
    this._digCallback = this._digCallback.bind(this);
    this._canBeDugCallback = this._canBeDugCallback.bind(this);
    this._isWallCallback = this._isWallCallback.bind(this);
    this._priorityWallCallback = this._priorityWallCallback.bind(this);
  };
  b.Map.Digger.extend(b.Map.Dungeon);
  b.Map.Digger.prototype.create = function(a) {
    this._rooms = [];
    this._corridors = [];
    this._map = this._fillMap(1);
    this._walls = {};
    this._dug = 0;
    var c = (this._width - 2) * (this._height - 2);
    this._firstRoom();
    var d = Date.now();
    do {
      if (Date.now() - d > this._options.timeLimit) break;
      var e = this._findWall();
      if (!e) break;
      var f = e.split(','),
        e = parseInt(f[0]),
        f = parseInt(f[1]),
        b = this._getDiggingDirection(e, f);
      if (b) {
        var l = 0;
        do
          if ((l++, this._tryFeature(e, f, b[0], b[1]))) {
            this._removeSurroundingWalls(e, f);
            this._removeSurroundingWalls(e - b[0], f - b[1]);
            break;
          }
        while (l < this._featureAttempts);
        l = 0;
        for (var h in this._walls) 1 < this._walls[h] && l++;
      }
    } while (this._dug / c < this._options.dugPercentage || l);
    this._addDoors();
    if (a)
      for (c = 0; c < this._width; c++)
        for (d = 0; d < this._height; d++) a(c, d, this._map[c][d]);
    this._walls = {};
    this._map = null;
    return this;
  };
  b.Map.Digger.prototype._digCallback = function(a, c, d) {
    0 == d || 2 == d
      ? ((this._map[a][c] = 0), this._dug++)
      : (this._walls[a + ',' + c] = 1);
  };
  b.Map.Digger.prototype._isWallCallback = function(a, c) {
    return 0 > a || 0 > c || a >= this._width || c >= this._height
      ? !1
      : 1 == this._map[a][c];
  };
  b.Map.Digger.prototype._canBeDugCallback = function(a, c) {
    return 1 > a || 1 > c || a + 1 >= this._width || c + 1 >= this._height
      ? !1
      : 1 == this._map[a][c];
  };
  b.Map.Digger.prototype._priorityWallCallback = function(a, c) {
    this._walls[a + ',' + c] = 2;
  };
  b.Map.Digger.prototype._firstRoom = function() {
    var a = b.Map.Feature.Room.createRandomCenter(
      Math.floor(this._width / 2),
      Math.floor(this._height / 2),
      this._options
    );
    this._rooms.push(a);
    a.create(this._digCallback);
  };
  b.Map.Digger.prototype._findWall = function() {
    var a = [],
      c = [];
    for (d in this._walls) 2 == this._walls[d] ? c.push(d) : a.push(d);
    a = c.length ? c : a;
    if (!a.length) return null;
    var d = a.sort().random();
    delete this._walls[d];
    return d;
  };
  b.Map.Digger.prototype._tryFeature = function(a, c, d, e) {
    var f = b.RNG.getWeightedValue(this._features),
      f = b.Map.Feature[f].createRandomAt(a, c, d, e, this._options);
    if (!f.isValid(this._isWallCallback, this._canBeDugCallback)) return !1;
    f.create(this._digCallback);
    f instanceof b.Map.Feature.Room && this._rooms.push(f);
    f instanceof b.Map.Feature.Corridor &&
      (
        f.createPriorityWalls(this._priorityWallCallback),
        this._corridors.push(f)
      );
    return !0;
  };
  b.Map.Digger.prototype._removeSurroundingWalls = function(a, c) {
    for (var d = b.DIRS[4], e = 0; e < d.length; e++) {
      var f = d[e],
        g = a + f[0],
        l = c + f[1];
      delete this._walls[g + ',' + l];
      g = a + 2 * f[0];
      l = c + 2 * f[1];
      delete this._walls[g + ',' + l];
    }
  };
  b.Map.Digger.prototype._getDiggingDirection = function(a, c) {
    if (0 >= a || 0 >= c || a >= this._width - 1 || c >= this._height - 1)
      return null;
    for (var d = null, e = b.DIRS[4], f = 0; f < e.length; f++) {
      var g = e[f];
      if (!this._map[a + g[0]][c + g[1]]) {
        if (d) return null;
        d = g;
      }
    }
    return d ? [-d[0], -d[1]] : null;
  };
  b.Map.Digger.prototype._addDoors = function() {
    for (
      var a = this._map,
        c = function(c, d) {
          return 1 == a[c][d];
        },
        d = 0;
      d < this._rooms.length;
      d++
    ) {
      var e = this._rooms[d];
      e.clearDoors();
      e.addDoors(c);
    }
  };
  b.Map.Uniform = function(a, c, d) {
    b.Map.Dungeon.call(this, a, c);
    this._options = {
      roomWidth: [3, 9],
      roomHeight: [3, 5],
      roomDugPercentage: 0.1,
      timeLimit: 1e3
    };
    for (var e in d) this._options[e] = d[e];
    this._corridorAttempts = this._roomAttempts = 20;
    this._connected = [];
    this._unconnected = [];
    this._digCallback = this._digCallback.bind(this);
    this._canBeDugCallback = this._canBeDugCallback.bind(this);
    this._isWallCallback = this._isWallCallback.bind(this);
  };
  b.Map.Uniform.extend(b.Map.Dungeon);
  b.Map.Uniform.prototype.create = function(a) {
    for (var c = Date.now(); ; ) {
      if (Date.now() - c > this._options.timeLimit) return null;
      this._map = this._fillMap(1);
      this._dug = 0;
      this._rooms = [];
      this._unconnected = [];
      this._generateRooms();
      if (!(2 > this._rooms.length) && this._generateCorridors()) break;
    }
    if (a)
      for (c = 0; c < this._width; c++)
        for (var d = 0; d < this._height; d++) a(c, d, this._map[c][d]);
    return this;
  };
  b.Map.Uniform.prototype._generateRooms = function() {
    var a = this._width - 2,
      c = this._height - 2;
    do {
      var d = this._generateRoom();
      if (this._dug / (a * c) > this._options.roomDugPercentage) break;
    } while (d);
  };
  b.Map.Uniform.prototype._generateRoom = function() {
    for (var a = 0; a < this._roomAttempts; ) {
      a++;
      var c = b.Map.Feature.Room.createRandom(
        this._width,
        this._height,
        this._options
      );
      if (c.isValid(this._isWallCallback, this._canBeDugCallback))
        return c.create(this._digCallback), this._rooms.push(c), c;
    }
    return null;
  };
  b.Map.Uniform.prototype._generateCorridors = function() {
    for (var a = 0; a < this._corridorAttempts; ) {
      a++;
      this._corridors = [];
      this._map = this._fillMap(1);
      for (var c = 0; c < this._rooms.length; c++) {
        var d = this._rooms[c];
        d.clearDoors();
        d.create(this._digCallback);
      }
      this._unconnected = this._rooms.slice().randomize();
      this._connected = [];
      for (
        this._unconnected.length &&
        this._connected.push(this._unconnected.pop());
        ;

      ) {
        c = this._connected.random();
        c = this._closestRoom(this._unconnected, c);
        d = this._closestRoom(this._connected, c);
        if (!this._connectRooms(c, d)) break;
        if (!this._unconnected.length) return !0;
      }
    }
    return !1;
  };
  b.Map.Uniform.prototype._closestRoom = function(a, c) {
    for (
      var d = Infinity, e = c.getCenter(), f = null, b = 0;
      b < a.length;
      b++
    ) {
      var l = a[b],
        h = l.getCenter(),
        m = h[0] - e[0],
        h = h[1] - e[1],
        m = m * m + h * h;
      m < d && ((d = m), (f = l));
    }
    return f;
  };
  b.Map.Uniform.prototype._connectRooms = function(a, c) {
    var d = a.getCenter();
    var e = c.getCenter();
    var f = e[0] - d[0];
    d = e[1] - d[1];
    if (Math.abs(f) < Math.abs(d)) {
      d = 0 < d ? 2 : 0;
      var b = (d + 2) % 4;
      var l = c.getLeft();
      var h = c.getRight();
      f = 0;
    } else
      (d = 0 < f ? 1 : 3), (b =
        (d + 2) % 4), (l = c.getTop()), (h = c.getBottom()), (f = 1);
    d = this._placeInWall(a, d);
    if (!d) return !1;
    if (d[f] >= l && d[f] <= h) {
      var m = d.slice();
      e = null;
      switch (b) {
        case 0:
          e = c.getTop() - 1;
          break;
        case 1:
          e = c.getRight() + 1;
          break;
        case 2:
          e = c.getBottom() + 1;
          break;
        case 3:
          e = c.getLeft() - 1;
      }
      m[(f + 1) % 2] = e;
      this._digLine([d, m]);
    } else if (d[f] < l - 1 || d[f] > h + 1) {
      e = d[f] - e[f];
      switch (b) {
        case 0:
        case 1:
          m = 0 > e ? 3 : 1;
          break;
        case 2:
        case 3:
          m = 0 > e ? 1 : 3;
      }
      m = this._placeInWall(c, (b + m) % 4);
      if (!m) return !1;
      b = [0, 0];
      b[f] = d[f];
      e = (f + 1) % 2;
      b[e] = m[e];
      this._digLine([d, b, m]);
    } else {
      e = (f + 1) % 2;
      m = this._placeInWall(c, b);
      if (!m) return !1;
      b = Math.round((m[e] + d[e]) / 2);
      h = [0, 0];
      l = [0, 0];
      h[f] = d[f];
      h[e] = b;
      l[f] = m[f];
      l[e] = b;
      this._digLine([d, h, l, m]);
    }
    a.addDoor(d[0], d[1]);
    c.addDoor(m[0], m[1]);
    f = this._unconnected.indexOf(a);
    -1 != f && (this._unconnected.splice(f, 1), this._connected.push(a));
    f = this._unconnected.indexOf(c);
    -1 != f && (this._unconnected.splice(f, 1), this._connected.push(c));
    return !0;
  };
  b.Map.Uniform.prototype._placeInWall = function(a, c) {
    var d = [0, 0],
      e = [0, 0],
      b = 0;
    switch (c) {
      case 0:
        e = [1, 0];
        d = [a.getLeft(), a.getTop() - 1];
        b = a.getRight() - a.getLeft() + 1;
        break;
      case 1:
        e = [0, 1];
        d = [a.getRight() + 1, a.getTop()];
        b = a.getBottom() - a.getTop() + 1;
        break;
      case 2:
        e = [1, 0];
        d = [a.getLeft(), a.getBottom() + 1];
        b = a.getRight() - a.getLeft() + 1;
        break;
      case 3:
        (e = [0, 1]), (d = [a.getLeft() - 1, a.getTop()]), (b =
          a.getBottom() - a.getTop() + 1);
    }
    for (var g = [], l = -2, h = 0; h < b; h++) {
      var m = d[0] + h * e[0],
        n = d[1] + h * e[1];
      g.push(null);
      1 == this._map[m][n]
        ? l != h - 1 && (g[h] = [m, n])
        : (l = h) && (g[h - 1] = null);
    }
    for (h = g.length - 1; 0 <= h; h--) g[h] || g.splice(h, 1);
    return g.length ? g.random() : null;
  };
  b.Map.Uniform.prototype._digLine = function(a) {
    for (var c = 1; c < a.length; c++) {
      var d = a[c - 1],
        e = a[c],
        d = new b.Map.Feature.Corridor(d[0], d[1], e[0], e[1]);
      d.create(this._digCallback);
      this._corridors.push(d);
    }
  };
  b.Map.Uniform.prototype._digCallback = function(a, c, d) {
    this._map[a][c] = d;
    0 == d && this._dug++;
  };
  b.Map.Uniform.prototype._isWallCallback = function(a, c) {
    return 0 > a || 0 > c || a >= this._width || c >= this._height
      ? !1
      : 1 == this._map[a][c];
  };
  b.Map.Uniform.prototype._canBeDugCallback = function(a, c) {
    return 1 > a || 1 > c || a + 1 >= this._width || c + 1 >= this._height
      ? !1
      : 1 == this._map[a][c];
  };
  b.Map.Rogue = function(a, c, d) {
    b.Map.call(this, a, c);
    this._options = { cellWidth: 3, cellHeight: 3 };
    for (var e in d) this._options[e] = d[e];
    this._options.hasOwnProperty('roomWidth') ||
      (this._options.roomWidth = this._calculateRoomSize(
        this._width,
        this._options.cellWidth
      ));
    this._options.hasOwnProperty('roomHeight') ||
      (this._options.roomHeight = this._calculateRoomSize(
        this._height,
        this._options.cellHeight
      ));
  };
  b.Map.Rogue.extend(b.Map);
  b.Map.Rogue.prototype.create = function(a) {
    this.map = this._fillMap(1);
    this.rooms = [];
    this.connectedCells = [];
    this._initRooms();
    this._connectRooms();
    this._connectUnconnectedRooms();
    this._createRandomRoomConnections();
    this._createRooms();
    this._createCorridors();
    if (a)
      for (var c = 0; c < this._width; c++)
        for (var d = 0; d < this._height; d++) a(c, d, this.map[c][d]);
    return this;
  };
  b.Map.Rogue.prototype._calculateRoomSize = function(a, c) {
    var d = Math.floor(a / c * 0.8),
      e = Math.floor(a / c * 0.25);
    2 > e && (e = 2);
    2 > d && (d = 2);
    return [e, d];
  };
  b.Map.Rogue.prototype._initRooms = function() {
    for (var a = 0; a < this._options.cellWidth; a++) {
      this.rooms.push([]);
      for (var c = 0; c < this._options.cellHeight; c++)
        this.rooms[a].push({
          x: 0,
          y: 0,
          width: 0,
          height: 0,
          connections: [],
          cellx: a,
          celly: c
        });
    }
  };
  b.Map.Rogue.prototype._connectRooms = function() {
    var a = b.RNG.getUniformInt(0, this._options.cellWidth - 1),
      c = b.RNG.getUniformInt(0, this._options.cellHeight - 1);
    do {
      var d = [0, 2, 4, 6];
      d = d.randomize();
      do {
        var e = !1;
        var f = d.pop();
        var g = a + b.DIRS[8][f][0];
        f = c + b.DIRS[8][f][1];
        if (
          !(
            0 > g ||
            g >= this._options.cellWidth ||
            0 > f ||
            f >= this._options.cellHeight
          )
        ) {
          var l = this.rooms[a][c];
          if (
            0 < l.connections.length &&
            l.connections[0][0] == g &&
            l.connections[0][1] == f
          )
            break;
          l = this.rooms[g][f];
          0 == l.connections.length &&
            (
              l.connections.push([a, c]),
              this.connectedCells.push([g, f]),
              (a = g),
              (c = f),
              (e = !0)
            );
        }
      } while (0 < d.length && 0 == e);
    } while (0 < d.length);
  };
  b.Map.Rogue.prototype._connectUnconnectedRooms = function() {
    var a = this._options.cellWidth,
      c = this._options.cellHeight;
    this.connectedCells = this.connectedCells.randomize();
    for (var d, e, f, g = 0; g < this._options.cellWidth; g++)
      for (var l = 0; l < this._options.cellHeight; l++)
        if (((d = this.rooms[g][l]), 0 == d.connections.length)) {
          var h = [0, 2, 4, 6],
            h = h.randomize();
          f = !1;
          do {
            var m = h.pop(),
              n = g + b.DIRS[8][m][0],
              m = l + b.DIRS[8][m][1];
            if (!(0 > n || n >= a || 0 > m || m >= c)) {
              e = this.rooms[n][m];
              f = !0;
              if (0 == e.connections.length) break;
              for (n = 0; n < e.connections.length; n++)
                if (e.connections[n][0] == g && e.connections[n][1] == l) {
                  f = !1;
                  break;
                }
              if (f) break;
            }
          } while (h.length);
          f
            ? d.connections.push([e.cellx, e.celly])
            : console.log('-- Unable to connect room.');
        }
  };
  b.Map.Rogue.prototype._createRandomRoomConnections = function(a) {};
  b.Map.Rogue.prototype._createRooms = function() {
    for (
      var a = this._width,
        c = this._height,
        d = this._options.cellWidth,
        e = this._options.cellHeight,
        f = Math.floor(this._width / d),
        g = Math.floor(this._height / e),
        l,
        h,
        m = this._options.roomWidth,
        n = this._options.roomHeight,
        p,
        r,
        q,
        t = 0;
      t < d;
      t++
    )
      for (var u = 0; u < e; u++) {
        p = f * t;
        r = g * u;
        0 == p && (p = 1);
        0 == r && (r = 1);
        l = b.RNG.getUniformInt(m[0], m[1]);
        h = b.RNG.getUniformInt(n[0], n[1]);
        if (0 < u)
          for (q = this.rooms[t][u - 1]; 3 > r - (q.y + q.height); ) r++;
        if (0 < t)
          for (q = this.rooms[t - 1][u]; 3 > p - (q.x + q.width); ) p++;
        q = Math.round(b.RNG.getUniformInt(0, f - l) / 2);
        for (
          var v = Math.round(b.RNG.getUniformInt(0, g - h) / 2);
          p + q + l >= a;

        )
          q ? q-- : l--;
        for (; r + v + h >= c; ) v ? v-- : h--;
        p += q;
        r += v;
        this.rooms[t][u].x = p;
        this.rooms[t][u].y = r;
        this.rooms[t][u].width = l;
        this.rooms[t][u].height = h;
        for (q = p; q < p + l; q++)
          for (v = r; v < r + h; v++) this.map[q][v] = 0;
      }
  };
  b.Map.Rogue.prototype._getWallPosition = function(a, c) {
    if (1 == c || 3 == c) {
      var d = b.RNG.getUniformInt(a.x + 1, a.x + a.width - 2);
      if (1 == c) {
        var e = a.y - 2;
        var f = e + 1;
      } else (e = a.y + a.height + 1), (f = e - 1);
      this.map[d][f] = 0;
    } else if (2 == c || 4 == c)
      (e = b.RNG.getUniformInt(a.y + 1, a.y + a.height - 2)), 2 == c
        ? ((d = a.x + a.width + 1), (f = d - 1))
        : ((d = a.x - 2), (f = d + 1)), (this.map[f][e] = 0);
    return [d, e];
  };
  b.Map.Rogue.prototype._drawCorridor = function(a, c) {
    var d = c[0] - a[0],
      e = c[1] - a[1],
      f = a[0],
      g = a[1],
      l = [];
    var h = Math.abs(d);
    var m = Math.abs(e);
    var n = b.RNG.getUniform();
    var p = 1 - n,
      d = 0 < d ? 2 : 6,
      e = 0 < e ? 4 : 0;
    h < m
      ? (
          (n = Math.ceil(m * n)),
          l.push([e, n]),
          l.push([d, h]),
          (n = Math.floor(m * p)),
          l.push([e, n])
        )
      : (
          (n = Math.ceil(h * n)),
          l.push([d, n]),
          l.push([e, m]),
          (n = Math.floor(h * p)),
          l.push([d, n])
        );
    for (this.map[f][g] = 0; 0 < l.length; )
      for (h = l.pop(); 0 < h[1]; )
        (f += b.DIRS[8][h[0]][0]), (g += b.DIRS[8][h[0]][1]), (this.map[f][
          g
        ] = 0), --h[1];
  };
  b.Map.Rogue.prototype._createCorridors = function() {
    for (
      var a = this._options.cellWidth,
        c = this._options.cellHeight,
        d,
        e,
        b,
        g,
        l = 0;
      l < a;
      l++
    )
      for (var h = 0; h < c; h++) {
        d = this.rooms[l][h];
        for (var m = 0; m < d.connections.length; m++)
          (e = d.connections[m]), (e = this.rooms[e[0]][e[1]]), e.cellx >
          d.cellx
            ? ((b = 2), (g = 4))
            : e.cellx < d.cellx
              ? ((b = 4), (g = 2))
              : e.celly > d.celly
                ? ((b = 3), (g = 1))
                : e.celly < d.celly && ((b = 1), (g = 3)), this._drawCorridor(
            this._getWallPosition(d, b),
            this._getWallPosition(e, g)
          );
      }
  };
  b.Map.Feature = function() {};
  b.Map.Feature.prototype.isValid = function(a) {};
  b.Map.Feature.prototype.create = function(a) {};
  b.Map.Feature.prototype.debug = function() {};
  b.Map.Feature.createRandomAt = function(a, c, d, e, b) {};
  b.Map.Feature.Room = function(a, c, d, e, b, g) {
    this._x1 = a;
    this._y1 = c;
    this._x2 = d;
    this._y2 = e;
    this._doors = {};
    4 < arguments.length && this.addDoor(b, g);
  };
  b.Map.Feature.Room.extend(b.Map.Feature);
  b.Map.Feature.Room.createRandomAt = function(a, c, d, e, f) {
    var g = f.roomWidth[0],
      l = f.roomWidth[1],
      h = b.RNG.getUniformInt(g, l),
      g = f.roomHeight[0],
      l = f.roomHeight[1];
    f = b.RNG.getUniformInt(g, l);
    if (1 == d)
      return (d = c - Math.floor(b.RNG.getUniform() * f)), new this(
        a + 1,
        d,
        a + h,
        d + f - 1,
        a,
        c
      );
    if (-1 == d)
      return (d = c - Math.floor(b.RNG.getUniform() * f)), new this(
        a - h,
        d,
        a - 1,
        d + f - 1,
        a,
        c
      );
    if (1 == e)
      return (d = a - Math.floor(b.RNG.getUniform() * h)), new this(
        d,
        c + 1,
        d + h - 1,
        c + f,
        a,
        c
      );
    if (-1 == e)
      return (d = a - Math.floor(b.RNG.getUniform() * h)), new this(
        d,
        c - f,
        d + h - 1,
        c - 1,
        a,
        c
      );
    throw Error('dx or dy must be 1 or -1');
  };
  b.Map.Feature.Room.createRandomCenter = function(a, c, d) {
    var e = d.roomWidth[0],
      f = d.roomWidth[1],
      g = b.RNG.getUniformInt(e, f),
      e = d.roomHeight[0],
      f = d.roomHeight[1];
    d = b.RNG.getUniformInt(e, f);
    a -= Math.floor(b.RNG.getUniform() * g);
    c -= Math.floor(b.RNG.getUniform() * d);
    return new this(a, c, a + g - 1, c + d - 1);
  };
  b.Map.Feature.Room.createRandom = function(a, c, d) {
    var e = d.roomWidth[0],
      f = d.roomWidth[1],
      g = b.RNG.getUniformInt(e, f),
      e = d.roomHeight[0],
      f = d.roomHeight[1];
    d = b.RNG.getUniformInt(e, f);
    a = a - g - 1;
    c = c - d - 1;
    a = 1 + Math.floor(b.RNG.getUniform() * a);
    c = 1 + Math.floor(b.RNG.getUniform() * c);
    return new this(a, c, a + g - 1, c + d - 1);
  };
  b.Map.Feature.Room.prototype.addDoor = function(a, c) {
    this._doors[a + ',' + c] = 1;
    return this;
  };
  b.Map.Feature.Room.prototype.getDoors = function(a) {
    for (var c in this._doors) {
      var d = c.split(',');
      a(parseInt(d[0]), parseInt(d[1]));
    }
    return this;
  };
  b.Map.Feature.Room.prototype.clearDoors = function() {
    this._doors = {};
    return this;
  };
  b.Map.Feature.Room.prototype.addDoors = function(a) {
    for (
      var c = this._x1 - 1,
        d = this._x2 + 1,
        e = this._y1 - 1,
        b = this._y2 + 1,
        g = c;
      g <= d;
      g++
    )
      for (var l = e; l <= b; l++)
        if (g == c || g == d || l == e || l == b) a(g, l) || this.addDoor(g, l);
    return this;
  };
  b.Map.Feature.Room.prototype.debug = function() {
    console.log('room', this._x1, this._y1, this._x2, this._y2);
  };
  b.Map.Feature.Room.prototype.isValid = function(a, c) {
    for (
      var d = this._x1 - 1,
        e = this._x2 + 1,
        b = this._y1 - 1,
        g = this._y2 + 1,
        l = d;
      l <= e;
      l++
    )
      for (var h = b; h <= g; h++)
        if (l == d || l == e || h == b || h == g) {
          if (!a(l, h)) return !1;
        } else if (!c(l, h)) return !1;
    return !0;
  };
  b.Map.Feature.Room.prototype.create = function(a) {
    for (
      var c = this._x1 - 1,
        d = this._x2 + 1,
        e = this._y1 - 1,
        b = this._y2 + 1,
        g,
        l = c;
      l <= d;
      l++
    )
      for (var h = e; h <= b; h++)
        (g =
          l + ',' + h in this._doors
            ? 2
            : l == c || l == d || h == e || h == b ? 1 : 0), a(l, h, g);
  };
  b.Map.Feature.Room.prototype.getCenter = function() {
    return [
      Math.round((this._x1 + this._x2) / 2),
      Math.round((this._y1 + this._y2) / 2)
    ];
  };
  b.Map.Feature.Room.prototype.getLeft = function() {
    return this._x1;
  };
  b.Map.Feature.Room.prototype.getRight = function() {
    return this._x2;
  };
  b.Map.Feature.Room.prototype.getTop = function() {
    return this._y1;
  };
  b.Map.Feature.Room.prototype.getBottom = function() {
    return this._y2;
  };
  b.Map.Feature.Corridor = function(a, c, d, e) {
    this._startX = a;
    this._startY = c;
    this._endX = d;
    this._endY = e;
    this._endsWithAWall = !0;
  };
  b.Map.Feature.Corridor.extend(b.Map.Feature);
  b.Map.Feature.Corridor.createRandomAt = function(a, c, d, e, f) {
    f = b.RNG.getUniformInt(f.corridorLength[0], f.corridorLength[1]);
    return new this(a, c, a + d * f, c + e * f);
  };
  b.Map.Feature.Corridor.prototype.debug = function() {
    console.log('corridor', this._startX, this._startY, this._endX, this._endY);
  };
  b.Map.Feature.Corridor.prototype.isValid = function(a, c) {
    var d = this._startX,
      e = this._startY,
      b = this._endX - d,
      g = this._endY - e,
      l = 1 + Math.max(Math.abs(b), Math.abs(g));
    b && (b /= Math.abs(b));
    g && (g /= Math.abs(g));
    for (var h = g, m = -b, n = !0, p = 0; p < l; p++) {
      var r = d + p * b,
        q = e + p * g;
      c(r, q) || (n = !1);
      a(r + h, q + m) || (n = !1);
      a(r - h, q - m) || (n = !1);
      if (!n) {
        l = p;
        this._endX = r - b;
        this._endY = q - g;
        break;
      }
    }
    if (0 == l || (1 == l && a(this._endX + b, this._endY + g))) return !1;
    d = !a(this._endX + b + h, this._endY + g + m);
    h = !a(this._endX + b - h, this._endY + g - m);
    this._endsWithAWall = a(this._endX + b, this._endY + g);
    return (d || h) && this._endsWithAWall ? !1 : !0;
  };
  b.Map.Feature.Corridor.prototype.create = function(a) {
    var c = this._startX,
      d = this._startY,
      e = this._endX - c,
      b = this._endY - d,
      g = 1 + Math.max(Math.abs(e), Math.abs(b));
    e && (e /= Math.abs(e));
    b && (b /= Math.abs(b));
    for (var l = 0; l < g; l++) a(c + l * e, d + l * b, 0);
    return !0;
  };
  b.Map.Feature.Corridor.prototype.createPriorityWalls = function(a) {
    if (this._endsWithAWall) {
      var c = this._endX - this._startX,
        d = this._endY - this._startY;
      c && (c /= Math.abs(c));
      d && (d /= Math.abs(d));
      var e = d,
        b = -c;
      a(this._endX + c, this._endY + d);
      a(this._endX + e, this._endY + b);
      a(this._endX - e, this._endY - b);
    }
  };
  b.Noise = function() {};
  b.Noise.prototype.get = function(a, c) {};
  b.Noise.Simplex = function(a) {
    b.Noise.call(this);
    this._F2 = 0.5 * (Math.sqrt(3) - 1);
    this._G2 = (3 - Math.sqrt(3)) / 6;
    this._gradients = [
      [0, -1],
      [1, -1],
      [1, 0],
      [1, 1],
      [0, 1],
      [-1, 1],
      [-1, 0],
      [-1, -1]
    ];
    var c = [];
    a = a || 256;
    for (var d = 0; d < a; d++) c.push(d);
    c = c.randomize();
    this._perms = [];
    this._indexes = [];
    for (d = 0; d < 2 * a; d++)
      this._perms.push(c[d % a]), this._indexes.push(
        this._perms[d] % this._gradients.length
      );
  };
  b.Noise.Simplex.extend(b.Noise);
  b.Noise.Simplex.prototype.get = function(a, c) {
    var d = this._perms,
      e = this._indexes,
      b = d.length / 2,
      g = this._G2,
      l = 0,
      h = 0,
      m = 0,
      n = (a + c) * this._F2,
      p = Math.floor(a + n);
    var r = Math.floor(c + n);
    var n = (p + r) * g,
      q = a - (p - n),
      t = c - (r - n);
    if (q > t) {
      var u = 1;
      var v = 0;
    } else (u = 0), (v = 1);
    var x = q - u + g,
      y = t - v + g,
      n = q - 1 + 2 * g,
      g = t - 1 + 2 * g,
      p = p.mod(b),
      b = r.mod(b),
      w = 0.5 - q * q - t * t;
    0 <= w &&
      (
        (w *= w),
        (r = e[p + d[b]]),
        (r = this._gradients[r]),
        (l = w * w * (r[0] * q + r[1] * t))
      );
    q = 0.5 - x * x - y * y;
    0 <= q &&
      (
        (q *= q),
        (r = e[p + u + d[b + v]]),
        (r = this._gradients[r]),
        (h = q * q * (r[0] * x + r[1] * y))
      );
    q = 0.5 - n * n - g * g;
    0 <= q &&
      (
        (q *= q),
        (r = e[p + 1 + d[b + 1]]),
        (r = this._gradients[r]),
        (m = q * q * (r[0] * n + r[1] * g))
      );
    return 70 * (l + h + m);
  };
  b.FOV = function(a, c) {
    this._lightPasses = a;
    this._options = { topology: 8 };
    for (var d in c) this._options[d] = c[d];
  };
  b.FOV.prototype.compute = function(a, c, d, b) {};
  b.FOV.prototype._getCircle = function(a, c, d) {
    var e = [];
    switch (this._options.topology) {
      case 4:
        var f = 1;
        var g = [0, 1];
        var l = [b.DIRS[8][7], b.DIRS[8][1], b.DIRS[8][3], b.DIRS[8][5]];
        break;
      case 6:
        l = b.DIRS[6];
        f = 1;
        g = [-1, 1];
        break;
      case 8:
        (l = b.DIRS[4]), (f = 2), (g = [-1, 1]);
    }
    a += g[0] * d;
    c += g[1] * d;
    for (g = 0; g < l.length; g++)
      for (var h = 0; h < d * f; h++)
        e.push([a, c]), (a += l[g][0]), (c += l[g][1]);
    return e;
  };
  b.FOV.DiscreteShadowcasting = function(a, c) {
    b.FOV.call(this, a, c);
  };
  b.FOV.DiscreteShadowcasting.extend(b.FOV);
  b.FOV.DiscreteShadowcasting.prototype.compute = function(a, c, d, b) {
    b(a, c, 0, 1);
    if (this._lightPasses(a, c))
      for (var e = [], g, l, h, m, n, p = 1; p <= d; p++)
        for (
          var r = this._getCircle(a, c, p), q = 360 / r.length, t = 0;
          t < r.length;
          t++
        )
          if (
            (
              (h = r[t][0]),
              (m = r[t][1]),
              (g = q * (t - 0.5)),
              (l = g + q),
              (n = !this._lightPasses(h, m)),
              this._visibleCoords(Math.floor(g), Math.ceil(l), n, e) &&
                b(h, m, p, 1),
              2 == e.length && 0 == e[0] && 360 == e[1]
            )
          )
            return;
  };
  b.FOV.DiscreteShadowcasting.prototype._visibleCoords = function(a, c, d, b) {
    if (0 > a)
      return (c = this._visibleCoords(0, c, d, b)), (a = this._visibleCoords(
        360 + a,
        360,
        d,
        b
      )), c || a;
    for (var e = 0; e < b.length && b[e] < a; ) e++;
    if (e == b.length) return d && b.push(a, c), !0;
    var g = 0;
    if (e % 2) {
      for (; e < b.length && b[e] < c; ) e++, g++;
      if (0 == g) return !1;
      d && (g % 2 ? b.splice(e - g, g, c) : b.splice(e - g, g));
    } else {
      for (; e < b.length && b[e] < c; ) e++, g++;
      if (a == b[e - g] && 1 == g) return !1;
      d && (g % 2 ? b.splice(e - g, g, a) : b.splice(e - g, g, a, c));
    }
    return !0;
  };
  b.FOV.PreciseShadowcasting = function(a, c) {
    b.FOV.call(this, a, c);
  };
  b.FOV.PreciseShadowcasting.extend(b.FOV);
  b.FOV.PreciseShadowcasting.prototype.compute = function(a, c, d, b) {
    b(a, c, 0, 1);
    if (this._lightPasses(a, c))
      for (var e = [], g, l, h, m, n, p = 1; p <= d; p++)
        for (var r = this._getCircle(a, c, p), q = r.length, t = 0; t < q; t++)
          if (
            (
              (g = r[t][0]),
              (l = r[t][1]),
              (m = [t ? 2 * t - 1 : 2 * q - 1, 2 * q]),
              (n = [2 * t + 1, 2 * q]),
              (h = !this._lightPasses(g, l)),
              (h = this._checkVisibility(m, n, h, e)) && b(g, l, p, h),
              2 == e.length && 0 == e[0][0] && e[1][0] == e[1][1]
            )
          )
            return;
  };
  b.FOV.PreciseShadowcasting.prototype._checkVisibility = function(a, c, d, b) {
    if (a[0] > c[0])
      return (a = this._checkVisibility(
        a,
        [a[1], a[1]],
        d,
        b
      )), (c = this._checkVisibility([0, 1], c, d, b)), (a + c) / 2;
    for (var e = 0, g = !1; e < b.length; ) {
      var l = b[e];
      l = l[0] * a[1] - a[0] * l[1];
      if (0 <= l) {
        0 != l || e % 2 || (g = !0);
        break;
      }
      e++;
    }
    var h = b.length;
    for (var m = !1; h--; )
      if (((l = b[h]), (l = c[0] * l[1] - l[0] * c[1]), 0 <= l)) {
        0 == l && h % 2 && (m = !0);
        break;
      }
    l = !0;
    e == h && (g || m)
      ? (l = !1)
      : g && m && e + 1 == h && h % 2 ? (l = !1) : e > h && e % 2 && (l = !1);
    if (!l) return 0;
    g = h - e + 1;
    if (g % 2)
      e % 2
        ? (
            (h = b[e]),
            (h = (c[0] * h[1] - h[0] * c[1]) / (h[1] * c[1])),
            d && b.splice(e, g, c)
          )
        : (
            (h = b[h]),
            (h = (h[0] * a[1] - a[0] * h[1]) / (a[1] * h[1])),
            d && b.splice(e, g, a)
          );
    else if (e % 2)
      (m = b[e]), (h = b[h]), (h =
        (h[0] * m[1] - m[0] * h[1]) / (m[1] * h[1])), d && b.splice(e, g);
    else return d && b.splice(e, g, a, c), 1;
    return h / ((c[0] * a[1] - a[0] * c[1]) / (a[1] * c[1]));
  };
  b.FOV.RecursiveShadowcasting = function(a, c) {
    b.FOV.call(this, a, c);
  };
  b.FOV.RecursiveShadowcasting.extend(b.FOV);
  b.FOV.RecursiveShadowcasting.OCTANTS = [
    [-1, 0, 0, 1],
    [0, -1, 1, 0],
    [0, -1, -1, 0],
    [-1, 0, 0, -1],
    [1, 0, 0, -1],
    [0, 1, -1, 0],
    [0, 1, 1, 0],
    [1, 0, 0, 1]
  ];
  b.FOV.RecursiveShadowcasting.prototype.compute = function(a, c, d, e) {
    e(a, c, 0, 1);
    for (var f = 0; f < b.FOV.RecursiveShadowcasting.OCTANTS.length; f++)
      this._renderOctant(a, c, b.FOV.RecursiveShadowcasting.OCTANTS[f], d, e);
  };
  b.FOV.RecursiveShadowcasting.prototype.compute180 = function(a, c, d, e, f) {
    f(a, c, 0, 1);
    var g = (e - 1 + 8) % 8,
      l = (e + 1 + 8) % 8;
    this._renderOctant(
      a,
      c,
      b.FOV.RecursiveShadowcasting.OCTANTS[(e - 2 + 8) % 8],
      d,
      f
    );
    this._renderOctant(a, c, b.FOV.RecursiveShadowcasting.OCTANTS[g], d, f);
    this._renderOctant(a, c, b.FOV.RecursiveShadowcasting.OCTANTS[e], d, f);
    this._renderOctant(a, c, b.FOV.RecursiveShadowcasting.OCTANTS[l], d, f);
  };
  b.FOV.RecursiveShadowcasting.prototype.compute90 = function(a, c, d, e, f) {
    f(a, c, 0, 1);
    var g = (e - 1 + 8) % 8;
    this._renderOctant(a, c, b.FOV.RecursiveShadowcasting.OCTANTS[e], d, f);
    this._renderOctant(a, c, b.FOV.RecursiveShadowcasting.OCTANTS[g], d, f);
  };
  b.FOV.RecursiveShadowcasting.prototype._renderOctant = function(
    a,
    c,
    d,
    b,
    f
  ) {
    this._castVisibility(a, c, 1, 1, 0, b + 1, d[0], d[1], d[2], d[3], f);
  };
  b.FOV.RecursiveShadowcasting.prototype._castVisibility = function(
    a,
    c,
    d,
    b,
    f,
    g,
    l,
    h,
    m,
    n,
    p
  ) {
    if (!(b < f))
      for (; d <= g; d++) {
        for (var e = -d - 1, q = -d, t = !1, u = 0; 0 >= e; ) {
          var e = e + 1,
            v = a + e * l + q * h,
            x = c + e * m + q * n,
            y = (e - 0.5) / (q + 0.5),
            w = (e + 0.5) / (q - 0.5);
          if (!(w > b)) {
            if (y < f) break;
            e * e + q * q < g * g && p(v, x, d, 1);
            t
              ? this._lightPasses(v, x) ? ((t = !1), (b = u)) : (u = w)
              : !this._lightPasses(v, x) &&
                d < g &&
                (
                  (t = !0),
                  this._castVisibility(a, c, d + 1, b, y, g, l, h, m, n, p),
                  (u = w)
                );
          }
        }
        if (t) break;
      }
  };
  b.Color = {
    fromString: function(a) {
      var c;
      if (a in this._cache) var d = this._cache[a];
      else {
        if ('#' == a.charAt(0))
          if (
            (
              (d = a.match(/[0-9a-f]/gi).map(function(a) {
                return parseInt(a, 16);
              })),
              3 == d.length
            )
          )
            d = d.map(function(a) {
              return 17 * a;
            });
          else for (c = 0; 3 > c; c++) (d[c + 1] += 16 * d[c]), d.splice(c, 1);
        else
          d = (c = a.match(/rgb\(([0-9, ]+)\)/i))
            ? c[1].split(/\s*,\s*/).map(function(a) {
                return parseInt(a);
              })
            : [0, 0, 0];
        this._cache[a] = d;
      }
      return d.slice();
    },
    add: function(a, c) {
      for (var d = a.slice(), b = 0; 3 > b; b++)
        for (var f = 1; f < arguments.length; f++) d[b] += arguments[f][b];
      return d;
    },
    add_: function(a, c) {
      for (var d = 0; 3 > d; d++)
        for (var b = 1; b < arguments.length; b++) a[d] += arguments[b][d];
      return a;
    },
    multiply: function(a, c) {
      for (var d = a.slice(), b = 0; 3 > b; b++) {
        for (var f = 1; f < arguments.length; f++)
          d[b] *= arguments[f][b] / 255;
        d[b] = Math.round(d[b]);
      }
      return d;
    },
    multiply_: function(a, c) {
      for (var d = 0; 3 > d; d++) {
        for (var b = 1; b < arguments.length; b++)
          a[d] *= arguments[b][d] / 255;
        a[d] = Math.round(a[d]);
      }
      return a;
    },
    interpolate: function(a, c, d) {
      3 > arguments.length && (d = 0.5);
      for (var b = a.slice(), f = 0; 3 > f; f++)
        b[f] = Math.round(b[f] + d * (c[f] - a[f]));
      return b;
    },
    interpolateHSL: function(a, c, d) {
      3 > arguments.length && (d = 0.5);
      for (var b = this.rgb2hsl(a), f = this.rgb2hsl(c), g = 0; 3 > g; g++)
        b[g] += d * (f[g] - b[g]);
      return this.hsl2rgb(b);
    },
    randomize: function(a, c) {
      c instanceof Array || (c = Math.round(b.RNG.getNormal(0, c)));
      for (var d = a.slice(), e = 0; 3 > e; e++)
        d[e] += c instanceof Array ? Math.round(b.RNG.getNormal(0, c[e])) : c;
      return d;
    },
    rgb2hsl: function(a) {
      var c = a[0] / 255,
        d = a[1] / 255;
      a = a[2] / 255;
      var b = Math.max(c, d, a),
        f = Math.min(c, d, a),
        g = (b + f) / 2;
      if (b == f) var l = (f = 0);
      else {
        var h = b - f,
          f = 0.5 < g ? h / (2 - b - f) : h / (b + f);
        switch (b) {
          case c:
            l = (d - a) / h + (d < a ? 6 : 0);
            break;
          case d:
            l = (a - c) / h + 2;
            break;
          case a:
            l = (c - d) / h + 4;
        }
        l /= 6;
      }
      return [l, f, g];
    },
    hsl2rgb: function(a) {
      var c = a[2];
      if (0 == a[1]) return (c = Math.round(255 * c)), [c, c, c];
      var d = function(a, c, d) {
          0 > d && (d += 1);
          1 < d && --d;
          return d < 1 / 6
            ? a + 6 * (c - a) * d
            : 0.5 > d ? c : d < 2 / 3 ? a + (c - a) * (2 / 3 - d) * 6 : a;
        },
        b = a[1],
        b = 0.5 > c ? c * (1 + b) : c + b - c * b,
        f = 2 * c - b,
        c = d(f, b, a[0] + 1 / 3),
        g = d(f, b, a[0]);
      a = d(f, b, a[0] - 1 / 3);
      return [Math.round(255 * c), Math.round(255 * g), Math.round(255 * a)];
    },
    toRGB: function(a) {
      return (
        'rgb(' +
        this._clamp(a[0]) +
        ',' +
        this._clamp(a[1]) +
        ',' +
        this._clamp(a[2]) +
        ')'
      );
    },
    toHex: function(a) {
      for (var c = [], d = 0; 3 > d; d++)
        c.push(this._clamp(a[d]).toString(16).lpad('0', 2));
      return '#' + c.join('');
    },
    _clamp: function(a) {
      return 0 > a ? 0 : 255 < a ? 255 : a;
    },
    _cache: {
      black: [0, 0, 0],
      navy: [0, 0, 128],
      darkblue: [0, 0, 139],
      mediumblue: [0, 0, 205],
      blue: [0, 0, 255],
      darkgreen: [0, 100, 0],
      green: [0, 128, 0],
      teal: [0, 128, 128],
      darkcyan: [0, 139, 139],
      deepskyblue: [0, 191, 255],
      darkturquoise: [0, 206, 209],
      mediumspringgreen: [0, 250, 154],
      lime: [0, 255, 0],
      springgreen: [0, 255, 127],
      aqua: [0, 255, 255],
      cyan: [0, 255, 255],
      midnightblue: [25, 25, 112],
      dodgerblue: [30, 144, 255],
      forestgreen: [34, 139, 34],
      seagreen: [46, 139, 87],
      darkslategray: [47, 79, 79],
      darkslategrey: [47, 79, 79],
      limegreen: [50, 205, 50],
      mediumseagreen: [60, 179, 113],
      turquoise: [64, 224, 208],
      royalblue: [65, 105, 225],
      steelblue: [70, 130, 180],
      darkslateblue: [72, 61, 139],
      mediumturquoise: [72, 209, 204],
      indigo: [75, 0, 130],
      darkolivegreen: [85, 107, 47],
      cadetblue: [95, 158, 160],
      cornflowerblue: [100, 149, 237],
      mediumaquamarine: [102, 205, 170],
      dimgray: [105, 105, 105],
      dimgrey: [105, 105, 105],
      slateblue: [106, 90, 205],
      olivedrab: [107, 142, 35],
      slategray: [112, 128, 144],
      slategrey: [112, 128, 144],
      lightslategray: [119, 136, 153],
      lightslategrey: [119, 136, 153],
      mediumslateblue: [123, 104, 238],
      lawngreen: [124, 252, 0],
      chartreuse: [127, 255, 0],
      aquamarine: [127, 255, 212],
      maroon: [128, 0, 0],
      purple: [128, 0, 128],
      olive: [128, 128, 0],
      gray: [128, 128, 128],
      grey: [128, 128, 128],
      skyblue: [135, 206, 235],
      lightskyblue: [135, 206, 250],
      blueviolet: [138, 43, 226],
      darkred: [139, 0, 0],
      darkmagenta: [139, 0, 139],
      saddlebrown: [139, 69, 19],
      darkseagreen: [143, 188, 143],
      lightgreen: [144, 238, 144],
      mediumpurple: [147, 112, 216],
      darkviolet: [148, 0, 211],
      palegreen: [152, 251, 152],
      darkorchid: [153, 50, 204],
      yellowgreen: [154, 205, 50],
      sienna: [160, 82, 45],
      brown: [165, 42, 42],
      darkgray: [169, 169, 169],
      darkgrey: [169, 169, 169],
      lightblue: [173, 216, 230],
      greenyellow: [173, 255, 47],
      paleturquoise: [175, 238, 238],
      lightsteelblue: [176, 196, 222],
      powderblue: [176, 224, 230],
      firebrick: [178, 34, 34],
      darkgoldenrod: [184, 134, 11],
      mediumorchid: [186, 85, 211],
      rosybrown: [188, 143, 143],
      darkkhaki: [189, 183, 107],
      silver: [192, 192, 192],
      mediumvioletred: [199, 21, 133],
      indianred: [205, 92, 92],
      peru: [205, 133, 63],
      chocolate: [210, 105, 30],
      tan: [210, 180, 140],
      lightgray: [211, 211, 211],
      lightgrey: [211, 211, 211],
      palevioletred: [216, 112, 147],
      thistle: [216, 191, 216],
      orchid: [218, 112, 214],
      goldenrod: [218, 165, 32],
      crimson: [220, 20, 60],
      gainsboro: [220, 220, 220],
      plum: [221, 160, 221],
      burlywood: [222, 184, 135],
      lightcyan: [224, 255, 255],
      lavender: [230, 230, 250],
      darksalmon: [233, 150, 122],
      violet: [238, 130, 238],
      palegoldenrod: [238, 232, 170],
      lightcoral: [240, 128, 128],
      khaki: [240, 230, 140],
      aliceblue: [240, 248, 255],
      honeydew: [240, 255, 240],
      azure: [240, 255, 255],
      sandybrown: [244, 164, 96],
      wheat: [245, 222, 179],
      beige: [245, 245, 220],
      whitesmoke: [245, 245, 245],
      mintcream: [245, 255, 250],
      ghostwhite: [248, 248, 255],
      salmon: [250, 128, 114],
      antiquewhite: [250, 235, 215],
      linen: [250, 240, 230],
      lightgoldenrodyellow: [250, 250, 210],
      oldlace: [253, 245, 230],
      red: [255, 0, 0],
      fuchsia: [255, 0, 255],
      magenta: [255, 0, 255],
      deeppink: [255, 20, 147],
      orangered: [255, 69, 0],
      tomato: [255, 99, 71],
      hotpink: [255, 105, 180],
      coral: [255, 127, 80],
      darkorange: [255, 140, 0],
      lightsalmon: [255, 160, 122],
      orange: [255, 165, 0],
      lightpink: [255, 182, 193],
      pink: [255, 192, 203],
      gold: [255, 215, 0],
      peachpuff: [255, 218, 185],
      navajowhite: [255, 222, 173],
      moccasin: [255, 228, 181],
      bisque: [255, 228, 196],
      mistyrose: [255, 228, 225],
      blanchedalmond: [255, 235, 205],
      papayawhip: [255, 239, 213],
      lavenderblush: [255, 240, 245],
      seashell: [255, 245, 238],
      cornsilk: [255, 248, 220],
      lemonchiffon: [255, 250, 205],
      floralwhite: [255, 250, 240],
      snow: [255, 250, 250],
      yellow: [255, 255, 0],
      lightyellow: [255, 255, 224],
      ivory: [255, 255, 240],
      white: [255, 255, 255]
    }
  };
  b.Lighting = function(a, c) {
    this._reflectivityCallback = a;
    this._options = { passes: 1, emissionThreshold: 100, range: 10 };
    this._fov = null;
    this._lights = {};
    this._reflectivityCache = {};
    this._fovCache = {};
    this.setOptions(c);
  };
  b.Lighting.prototype.setOptions = function(a) {
    for (var c in a) this._options[c] = a[c];
    a && a.range && this.reset();
    return this;
  };
  b.Lighting.prototype.setFOV = function(a) {
    this._fov = a;
    this._fovCache = {};
    return this;
  };
  b.Lighting.prototype.setLight = function(a, c, d) {
    a = a + ',' + c;
    d
      ? (this._lights[a] = 'string' == typeof d ? b.Color.fromString(d) : d)
      : delete this._lights[a];
    return this;
  };
  b.Lighting.prototype.clearLights = function() {
    this._lights = {};
  };
  b.Lighting.prototype.reset = function() {
    this._reflectivityCache = {};
    this._fovCache = {};
    return this;
  };
  b.Lighting.prototype.compute = function(a) {
    var c = {},
      d = {},
      e = {},
      f;
    for (f in this._lights) {
      var g = this._lights[f];
      d[f] = [0, 0, 0];
      b.Color.add_(d[f], g);
    }
    for (f = 0; f < this._options.passes; f++)
      this._emitLight(d, e, c), f + 1 != this._options.passes &&
        (d = this._computeEmitters(e, c));
    for (var l in e)
      (d = l.split(',')), (c = parseInt(d[0])), (d = parseInt(d[1])), a(
        c,
        d,
        e[l]
      );
    return this;
  };
  b.Lighting.prototype._emitLight = function(a, c, d) {
    for (var b in a) {
      var f = b.split(','),
        g = parseInt(f[0]),
        f = parseInt(f[1]);
      this._emitLightFromCell(g, f, a[b], c);
      d[b] = 1;
    }
    return this;
  };
  b.Lighting.prototype._computeEmitters = function(a, c) {
    var d = {},
      b;
    for (b in a)
      if (!(b in c)) {
        var f = a[b];
        if (b in this._reflectivityCache) var g = this._reflectivityCache[b];
        else {
          var l = b.split(',');
          g = parseInt(l[0]);
          l = parseInt(l[1]);
          g = this._reflectivityCallback(g, l);
          this._reflectivityCache[b] = g;
        }
        if (0 != g) {
          for (var l = [], h = 0, m = 0; 3 > m; m++) {
            var n = Math.round(f[m] * g);
            l[m] = n;
            h += n;
          }
          h > this._options.emissionThreshold && (d[b] = l);
        }
      }
    return d;
  };
  b.Lighting.prototype._emitLightFromCell = function(a, c, d, b) {
    var e = a + ',' + c;
    c = e in this._fovCache ? this._fovCache[e] : this._updateFOV(a, c);
    for (var g in c) {
      e = c[g];
      g in b ? (a = b[g]) : ((a = [0, 0, 0]), (b[g] = a));
      for (var l = 0; 3 > l; l++) a[l] += Math.round(d[l] * e);
    }
    return this;
  };
  b.Lighting.prototype._updateFOV = function(a, c) {
    var d = {};
    this._fovCache[a + ',' + c] = d;
    var b = this._options.range;
    this._fov.compute(
      a,
      c,
      b,
      function(a, c, e, h) {
        e = h * (1 - e / b);
        0 != e && (d[a + ',' + c] = e);
      }.bind(this)
    );
    return d;
  };
  b.Path = function(a, c, d, e) {
    this._toX = a;
    this._toY = c;
    this._fromY = this._fromX = null;
    this._passableCallback = d;
    this._options = { topology: 8 };
    for (var f in e) this._options[f] = e[f];
    this._dirs = b.DIRS[this._options.topology];
    8 == this._options.topology &&
      (this._dirs = [
        this._dirs[0],
        this._dirs[2],
        this._dirs[4],
        this._dirs[6],
        this._dirs[1],
        this._dirs[3],
        this._dirs[5],
        this._dirs[7]
      ]);
  };
  b.Path.prototype.compute = function(a, c, d) {};
  b.Path.prototype._getNeighbors = function(a, c) {
    for (var d = [], b = 0; b < this._dirs.length; b++) {
      var f = this._dirs[b],
        g = a + f[0],
        f = c + f[1];
      this._passableCallback(g, f) && d.push([g, f]);
    }
    return d;
  };
  b.Path.Dijkstra = function(a, c, d, e) {
    b.Path.call(this, a, c, d, e);
    this._computed = {};
    this._todo = [];
    this._add(a, c, null);
  };
  b.Path.Dijkstra.extend(b.Path);
  b.Path.Dijkstra.prototype.compute = function(a, c, b) {
    var d = a + ',' + c;
    d in this._computed || this._compute(a, c);
    if (d in this._computed)
      for (a = this._computed[d]; a; ) b(a.x, a.y), (a = a.prev);
  };
  b.Path.Dijkstra.prototype._compute = function(a, c) {
    for (; this._todo.length; ) {
      var b = this._todo.shift();
      if (b.x == a && b.y == c) break;
      for (var e = this._getNeighbors(b.x, b.y), f = 0; f < e.length; f++) {
        var g = e[f],
          l = g[0],
          g = g[1];
        l + ',' + g in this._computed || this._add(l, g, b);
      }
    }
  };
  b.Path.Dijkstra.prototype._add = function(a, c, b) {
    b = { x: a, y: c, prev: b };
    this._computed[a + ',' + c] = b;
    this._todo.push(b);
  };
  b.Path.AStar = function(a, c, d, e) {
    b.Path.call(this, a, c, d, e);
    this._todo = [];
    this._done = {};
    this._fromY = this._fromX = null;
  };
  b.Path.AStar.extend(b.Path);
  b.Path.AStar.prototype.compute = function(a, c, b) {
    this._todo = [];
    this._done = {};
    this._fromX = a;
    this._fromY = c;
    for (this._add(this._toX, this._toY, null); this._todo.length; ) {
      var d = this._todo.shift();
      var f = d.x + ',' + d.y;
      if (!(f in this._done)) {
        this._done[f] = d;
        if (d.x == a && d.y == c) break;
        for (var g = this._getNeighbors(d.x, d.y), l = 0; l < g.length; l++) {
          f = g[l];
          var h = f[0],
            m = f[1];
          f = h + ',' + m;
          f in this._done || this._add(h, m, d);
        }
      }
    }
    if ((d = this._done[a + ',' + c])) for (; d; ) b(d.x, d.y), (d = d.prev);
  };
  b.Path.AStar.prototype._add = function(a, c, b) {
    var d = this._distance(a, c);
    a = { x: a, y: c, prev: b, g: b ? b.g + 1 : 0, h: d };
    c = a.g + a.h;
    for (b = 0; b < this._todo.length; b++) {
      var f = this._todo[b],
        g = f.g + f.h;
      if (c < g || (c == g && d < f.h)) {
        this._todo.splice(b, 0, a);
        return;
      }
    }
    this._todo.push(a);
  };
  b.Path.AStar.prototype._distance = function(a, c) {
    switch (this._options.topology) {
      case 4:
        return Math.abs(a - this._fromX) + Math.abs(c - this._fromY);
      case 6:
        var b = Math.abs(c - this._fromY);
        return b + Math.max(0, (Math.abs(a - this._fromX) - b) / 2);
      case 8:
        return Math.max(Math.abs(a - this._fromX), Math.abs(c - this._fromY));
    }
    throw Error('Illegal topology');
  };
  return b;
});
