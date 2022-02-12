var vm=require('vm');

var window={};

window.e={
    "appCodeName": "Mozilla",
    "appName": "Netscape",
    "appVersion": "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36",
    "connection": "other",
    "doNotTrack": "",
    "hardwareConcurrency": 8,
    "language": "zh-CN",
    "languages": "zh-CN,zh",
    "maxTouchPoints": 0,
    "mimeTypes": "application/pdf,text/pdf",
    "platform": "Win32",
    "plugins": "PDF Viewer,Chrome PDF Viewer,Chromium PDF Viewer,Microsoft Edge PDF Viewer,WebKit built-in PDF",
    "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36",
    "colorDepth": 24,
    "pixelDepth": 24,
    "screenResolution": "1536x864",
    "timezoneOffset": -480,
    "sessionStorage": true,
    "localStorage": true,
    "indexedDB": true,
    "cookie": true,
    "adBlock": false,
    "devicePixelRatio": 1.25,
    "hasLiedOs": false,
    "hasLiedLanguages": false,
    "hasLiedResolution": false,
    "hasLiedBrowser": false,
    "webglRenderer": "ANGLE (Intel, Intel(R) UHD Graphics Direct3D11 vs_5_0 ps_5_0, D3D11-27.20.100.8853)",
    "webglVendor": "Google Inc. (Intel)",
    "canvas": "db97eef8be23b3de81a4f59ea3e9c364",
    "fonts": "Arial,Arial Black,Arial Narrow,Book Antiqua,Bookman Old Style,Calibri,Cambria,Cambria Math,Century,Century Gothic,Comic Sans MS,Consolas,Courier,Courier New,Georgia,Helvetica,Impact,Lucida Console,Lucida Sans Unicode,Microsoft Sans Serif,Monotype Corsiva,MS Gothic,MS PGothic,MS Reference Sans Serif,MS Sans Serif,MS Serif,Palatino Linotype,Segoe Print,Segoe Script,Segoe UI,Segoe UI Light,Segoe UI Semibold,Segoe UI Symbol,Tahoma,Times,Times New Roman,Trebuchet MS,Verdana,Wingdings,Wingdings 2,Wingdings 3,Bookshelf Symbol 7,Candara,Constantia,Corbel,Ebrima,FangSong,Gabriola,KaiTi,Leelawadee,Malgun Gothic,Marlett,Microsoft Himalaya,Microsoft JhengHei,Microsoft New Tai Lue,Microsoft PhagsPa,Microsoft Tai Le,Microsoft Uighur,Microsoft YaHei,Microsoft Yi Baiti,MingLiU_HKSCS-ExtB,MingLiU-ExtB,Mongolian Baiti,MS Reference Specialty,MS UI Gothic,MT Extra,MV Boli,NSimSun,PMingLiU-ExtB,SimHei,SimSun,SimSun-ExtB,Sylfaen",
    "dt": "2022-01-13",
    "time": "2022-01-13 19:38:51",
    "userid": "",
    "mid": "f8205e82f40e36e746476dd553ddef62",
    "uuid": "8f6c818d3e4fc0534ce339dcf56a6125",
    "appid": "1014",
    "webdriver": false,
    "callPhantom": false,
    "tempKgMid": "",
    "referrer": "https://www.kugou.com/yy/html/rank.html",
    "source": "https://www.kugou.com/mixsong/62rffv64.html#hash=F8C9E2FB5B98A51C5B43216197E05F23&album_id=52417457&album_audio_id=367436011",
    "clientAppid": "",
    "clientver": "",
    "clientMid": "",
    "clientDfid": "",
    "clientUserId": "",
    "audioKey": "124.04347527516074"
};


function guid() {
        function e() {
            return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
        }
        return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
    };
function md5(e) {
        var t, n = 0, o = 8;
        function a(e, t, r, i, n, o) {
            return m((o = m(m(t, e), m(i, o))) << (n = n) | o >>> 32 - n, r)
        }
        function u(e, t, r, i, n, o, s) {
            return a(t & r | ~t & i, e, t, n, o, s)
        }
        function l(e, t, r, i, n, o, s) {
            return a(t & i | r & ~i, e, t, n, o, s)
        }
        function p(e, t, r, i, n, o, s) {
            return a(t ^ r ^ i, e, t, n, o, s)
        }
        function f(e, t, r, i, n, o, s) {
            return a(r ^ (t | ~i), e, t, n, o, s)
        }
        function m(e, t) {
            var r = (65535 & e) + (65535 & t);
            return (e >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r
        }
        return e = e ? function(e) {
            for (var t = n ? "0123456789ABCDEF" : "0123456789abcdef", r = "", i = 0; i < 4 * e.length; i++)
                r += t.charAt(e[i >> 2] >> i % 4 * 8 + 4 & 15) + t.charAt(e[i >> 2] >> i % 4 * 8 & 15);
            return r
        }(function(e, t) {
            e[t >> 5] |= 128 << t % 32,
            e[14 + (t + 64 >>> 9 << 4)] = t;
            for (var r = 1732584193, i = -271733879, n = -1732584194, o = 271733878, s = 0; s < e.length; s += 16) {
                var a = r
                  , g = i
                  , c = n
                  , d = o;
                r = u(r, i, n, o, e[s + 0], 7, -680876936),
                o = u(o, r, i, n, e[s + 1], 12, -389564586),
                n = u(n, o, r, i, e[s + 2], 17, 606105819),
                i = u(i, n, o, r, e[s + 3], 22, -1044525330),
                r = u(r, i, n, o, e[s + 4], 7, -176418897),
                o = u(o, r, i, n, e[s + 5], 12, 1200080426),
                n = u(n, o, r, i, e[s + 6], 17, -1473231341),
                i = u(i, n, o, r, e[s + 7], 22, -45705983),
                r = u(r, i, n, o, e[s + 8], 7, 1770035416),
                o = u(o, r, i, n, e[s + 9], 12, -1958414417),
                n = u(n, o, r, i, e[s + 10], 17, -42063),
                i = u(i, n, o, r, e[s + 11], 22, -1990404162),
                r = u(r, i, n, o, e[s + 12], 7, 1804603682),
                o = u(o, r, i, n, e[s + 13], 12, -40341101),
                n = u(n, o, r, i, e[s + 14], 17, -1502002290),
                i = u(i, n, o, r, e[s + 15], 22, 1236535329),
                r = l(r, i, n, o, e[s + 1], 5, -165796510),
                o = l(o, r, i, n, e[s + 6], 9, -1069501632),
                n = l(n, o, r, i, e[s + 11], 14, 643717713),
                i = l(i, n, o, r, e[s + 0], 20, -373897302),
                r = l(r, i, n, o, e[s + 5], 5, -701558691),
                o = l(o, r, i, n, e[s + 10], 9, 38016083),
                n = l(n, o, r, i, e[s + 15], 14, -660478335),
                i = l(i, n, o, r, e[s + 4], 20, -405537848),
                r = l(r, i, n, o, e[s + 9], 5, 568446438),
                o = l(o, r, i, n, e[s + 14], 9, -1019803690),
                n = l(n, o, r, i, e[s + 3], 14, -187363961),
                i = l(i, n, o, r, e[s + 8], 20, 1163531501),
                r = l(r, i, n, o, e[s + 13], 5, -1444681467),
                o = l(o, r, i, n, e[s + 2], 9, -51403784),
                n = l(n, o, r, i, e[s + 7], 14, 1735328473),
                i = l(i, n, o, r, e[s + 12], 20, -1926607734),
                r = p(r, i, n, o, e[s + 5], 4, -378558),
                o = p(o, r, i, n, e[s + 8], 11, -2022574463),
                n = p(n, o, r, i, e[s + 11], 16, 1839030562),
                i = p(i, n, o, r, e[s + 14], 23, -35309556),
                r = p(r, i, n, o, e[s + 1], 4, -1530992060),
                o = p(o, r, i, n, e[s + 4], 11, 1272893353),
                n = p(n, o, r, i, e[s + 7], 16, -155497632),
                i = p(i, n, o, r, e[s + 10], 23, -1094730640),
                r = p(r, i, n, o, e[s + 13], 4, 681279174),
                o = p(o, r, i, n, e[s + 0], 11, -358537222),
                n = p(n, o, r, i, e[s + 3], 16, -722521979),
                i = p(i, n, o, r, e[s + 6], 23, 76029189),
                r = p(r, i, n, o, e[s + 9], 4, -640364487),
                o = p(o, r, i, n, e[s + 12], 11, -421815835),
                n = p(n, o, r, i, e[s + 15], 16, 530742520),
                i = p(i, n, o, r, e[s + 2], 23, -995338651),
                r = f(r, i, n, o, e[s + 0], 6, -198630844),
                o = f(o, r, i, n, e[s + 7], 10, 1126891415),
                n = f(n, o, r, i, e[s + 14], 15, -1416354905),
                i = f(i, n, o, r, e[s + 5], 21, -57434055),
                r = f(r, i, n, o, e[s + 12], 6, 1700485571),
                o = f(o, r, i, n, e[s + 3], 10, -1894986606),
                n = f(n, o, r, i, e[s + 10], 15, -1051523),
                i = f(i, n, o, r, e[s + 1], 21, -2054922799),
                r = f(r, i, n, o, e[s + 8], 6, 1873313359),
                o = f(o, r, i, n, e[s + 15], 10, -30611744),
                n = f(n, o, r, i, e[s + 6], 15, -1560198380),
                i = f(i, n, o, r, e[s + 13], 21, 1309151649),
                r = f(r, i, n, o, e[s + 4], 6, -145523070),
                o = f(o, r, i, n, e[s + 11], 10, -1120210379),
                n = f(n, o, r, i, e[s + 2], 15, 718787259),
                i = f(i, n, o, r, e[s + 9], 21, -343485551),
                r = m(r, a),
                i = m(i, g),
                n = m(n, c),
                o = m(o, d)
            }
            return Array(r, i, n, o)
        }(function(e) {
            for (var t = Array(), r = (1 << o) - 1, i = 0; i < e.length * o; i += o)
                t[i >> 5] |= (e.charCodeAt(i / o) & r) << i % 32;
            return t
        }(t = e), t.length * o)) : ""
    };

function getmid(){
  (a = new Date).setTime(a.getTime() + 1e3 * 864000000);
   var g = ";expires=" + a.toGMTString();
   var i= "; path=/";
   var n= "; domain=kugou.com";
   var o = "; secure";
   var s= "; sameSite=None";
   var tt=md5(guid());
   var t=encodeURIComponent(tt);
   var e="kg_mid";
   var cookie = [e, "=", t, g, i, n, o, s].join("");
   console.log("cookie:",cookie);
   console.log("kg_mid:",tt);
   return tt;
};

var CryptoJS = CryptoJS || function(s) {
    function n() {}
    var e = {}
      , t = e.lib = {}
      , i = t.Base = {
        extend: function(e) {
            n.prototype = this;
            var t = new n;
            return e && t.mixIn(e),
            t.hasOwnProperty("init") || (t.init = function() {
                t.$super.init.apply(this, arguments)
            }
            ),
            (t.init.prototype = t).$super = this,
            t
        },
        create: function() {
            var e = this.extend();
            return e.init.apply(e, arguments),
            e
        },
        init: function() {},
        mixIn: function(e) {
            for (var t in e)
                e.hasOwnProperty(t) && (this[t] = e[t]);
            e.hasOwnProperty("toString") && (this.toString = e.toString)
        },
        clone: function() {
            return this.init.prototype.extend(this)
        }
    }
      , c = t.WordArray = i.extend({
        init: function(e, t) {
            e = this.words = e || [],
            this.sigBytes = null != t ? t : 4 * e.length
        },
        toString: function(e) {
            return (e || a).stringify(this)
        },
        concat: function(e) {
            var t = this.words
              , n = e.words
              , i = this.sigBytes;
            if (e = e.sigBytes,
            this.clamp(),
            i % 4)
                for (var r = 0; r < e; r++)
                    t[i + r >>> 2] |= (n[r >>> 2] >>> 24 - r % 4 * 8 & 255) << 24 - (i + r) % 4 * 8;
            else if (65535 < n.length)
                for (r = 0; r < e; r += 4)
                    t[i + r >>> 2] = n[r >>> 2];
            else
                t.push.apply(t, n);
            return this.sigBytes += e,
            this
        },
        clamp: function() {
            var e = this.words
              , t = this.sigBytes;
            e[t >>> 2] &= 4294967295 << 32 - t % 4 * 8,
            e.length = s.ceil(t / 4)
        },
        clone: function() {
            var e = i.clone.call(this);
            return e.words = this.words.slice(0),
            e
        },
        random: function(e) {
            for (var t = [], n = 0; n < e; n += 4)
                t.push(4294967296 * s.random() | 0);
            return new c.init(t,e)
        }
    })
      , r = e.enc = {}
      , a = r.Hex = {
        stringify: function(e) {
            var t = e.words;
            e = e.sigBytes;
            for (var n = [], i = 0; i < e; i++) {
                var r = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                n.push((r >>> 4).toString(16)),
                n.push((15 & r).toString(16))
            }
            return n.join("")
        },
        parse: function(e) {
            for (var t = e.length, n = [], i = 0; i < t; i += 2)
                n[i >>> 3] |= parseInt(e.substr(i, 2), 16) << 24 - i % 8 * 4;
            return new c.init(n,t / 2)
        }
    }
      , o = r.Latin1 = {
        stringify: function(e) {
            var t = e.words;
            e = e.sigBytes;
            for (var n = [], i = 0; i < e; i++)
                n.push(String.fromCharCode(t[i >>> 2] >>> 24 - i % 4 * 8 & 255));
            return n.join("")
        },
        parse: function(e) {
            for (var t = e.length, n = [], i = 0; i < t; i++)
                n[i >>> 2] |= (255 & e.charCodeAt(i)) << 24 - i % 4 * 8;
            return new c.init(n,t)
        }
    }
      , l = r.Utf8 = {
        stringify: function(e) {
            try {
                return decodeURIComponent(escape(o.stringify(e)))
            } catch (e) {
                throw Error("Malformed UTF-8 data")
            }
        },
        parse: function(e) {
            return o.parse(unescape(encodeURIComponent(e)))
        }
    }
      , u = t.BufferedBlockAlgorithm = i.extend({
        reset: function() {
            this._data = new c.init,
            this._nDataBytes = 0
        },
        _append: function(e) {
            "string" == typeof e && (e = l.parse(e)),
            this._data.concat(e),
            this._nDataBytes += e.sigBytes
        },
        _process: function(e) {
            var t = this._data
              , n = t.words
              , i = t.sigBytes
              , r = this.blockSize
              , a = i / (4 * r);
            if (e = (a = e ? s.ceil(a) : s.max((0 | a) - this._minBufferSize, 0)) * r,
            i = s.min(4 * e, i),
            e) {
                for (var o = 0; o < e; o += r)
                    this._doProcessBlock(n, o);
                o = n.splice(0, e),
                t.sigBytes -= i
            }
            return new c.init(o,i)
        },
        clone: function() {
            var e = i.clone.call(this);
            return e._data = this._data.clone(),
            e
        },
        _minBufferSize: 0
    });
    t.Hasher = u.extend({
        cfg: i.extend(),
        init: function(e) {
            this.cfg = this.cfg.extend(e),
            this.reset()
        },
        reset: function() {
            u.reset.call(this),
            this._doReset()
        },
        update: function(e) {
            return this._append(e),
            this._process(),
            this
        },
        finalize: function(e) {
            return e && this._append(e),
            this._doFinalize()
        },
        blockSize: 16,
        _createHelper: function(n) {
            return function(e, t) {
                return new n.init(t).finalize(e)
            }
        },
        _createHmacHelper: function(n) {
            return function(e, t) {
                return new d.HMAC.init(n,t).finalize(e)
            }
        }
    });
    var d = e.algo = {};
    return e
}(Math);
!function() {
    var e = CryptoJS
      , c = e.lib.WordArray;
    e.enc.Base64 = {
        stringify: function(e) {
            var t = e.words
              , n = e.sigBytes
              , i = this._map;
            e.clamp(),
            e = [];
            for (var r = 0; r < n; r += 3)
                for (var a = (t[r >>> 2] >>> 24 - r % 4 * 8 & 255) << 16 | (t[r + 1 >>> 2] >>> 24 - (r + 1) % 4 * 8 & 255) << 8 | t[r + 2 >>> 2] >>> 24 - (r + 2) % 4 * 8 & 255, o = 0; o < 4 && r + .75 * o < n; o++)
                    e.push(i.charAt(a >>> 6 * (3 - o) & 63));
            if (t = i.charAt(64))
                for (; e.length % 4; )
                    e.push(t);
            return e.join("")
        },
        parse: function(e) {
            var t = e.length
              , n = this._map;
            !(i = n.charAt(64)) || -1 != (i = e.indexOf(i)) && (t = i);
            for (var i = [], r = 0, a = 0; a < t; a++)
                if (a % 4) {
                    var o = n.indexOf(e.charAt(a - 1)) << a % 4 * 2
                      , s = n.indexOf(e.charAt(a)) >>> 6 - a % 4 * 2;
                    i[r >>> 2] |= (o | s) << 24 - r % 4 * 8,
                    r++
                }
            return c.create(i, r)
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }
}(),
function(a) {
    function w(e, t, n, i, r, a, o) {
        return ((e = e + (t & n | ~t & i) + r + o) << a | e >>> 32 - a) + t
    }
    function k(e, t, n, i, r, a, o) {
        return ((e = e + (t & i | n & ~i) + r + o) << a | e >>> 32 - a) + t
    }
    function M(e, t, n, i, r, a, o) {
        return ((e = e + (t ^ n ^ i) + r + o) << a | e >>> 32 - a) + t
    }
    function x(e, t, n, i, r, a, o) {
        return ((e = e + (n ^ (t | ~i)) + r + o) << a | e >>> 32 - a) + t
    }
    for (var e = CryptoJS, t = (i = e.lib).WordArray, n = i.Hasher, i = e.algo, _ = [], r = 0; r < 64; r++)
        _[r] = 4294967296 * a.abs(a.sin(r + 1)) | 0;
    i = i.MD5 = n.extend({
        _doReset: function() {
            this._hash = new t.init([1732584193, 4023233417, 2562383102, 271733878])
        },
        _doProcessBlock: function(e, t) {
            for (var n = 0; n < 16; n++) {
                var i = e[o = t + n];
                e[o] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8)
            }
            n = this._hash.words;
            var r, a, o = e[t + 0], s = (i = e[t + 1],
            e[t + 2]), c = e[t + 3], l = e[t + 4], u = e[t + 5], d = e[t + 6], f = e[t + 7], h = e[t + 8], g = e[t + 9], p = e[t + 10], m = e[t + 11], v = e[t + 12], y = e[t + 13], S = e[t + 14], C = e[t + 15], B = n[0], T = x(T = x(T = x(T = x(T = M(T = M(T = M(T = M(T = k(T = k(T = k(T = k(T = w(T = w(T = w(T = w(T = n[1], a = w(a = n[2], r = w(r = n[3], B = w(B, T, a, r, o, 7, _[0]), T, a, i, 12, _[1]), B, T, s, 17, _[2]), r, B, c, 22, _[3]), a = w(a, r = w(r, B = w(B, T, a, r, l, 7, _[4]), T, a, u, 12, _[5]), B, T, d, 17, _[6]), r, B, f, 22, _[7]), a = w(a, r = w(r, B = w(B, T, a, r, h, 7, _[8]), T, a, g, 12, _[9]), B, T, p, 17, _[10]), r, B, m, 22, _[11]), a = w(a, r = w(r, B = w(B, T, a, r, v, 7, _[12]), T, a, y, 12, _[13]), B, T, S, 17, _[14]), r, B, C, 22, _[15]), a = k(a, r = k(r, B = k(B, T, a, r, i, 5, _[16]), T, a, d, 9, _[17]), B, T, m, 14, _[18]), r, B, o, 20, _[19]), a = k(a, r = k(r, B = k(B, T, a, r, u, 5, _[20]), T, a, p, 9, _[21]), B, T, C, 14, _[22]), r, B, l, 20, _[23]), a = k(a, r = k(r, B = k(B, T, a, r, g, 5, _[24]), T, a, S, 9, _[25]), B, T, c, 14, _[26]), r, B, h, 20, _[27]), a = k(a, r = k(r, B = k(B, T, a, r, y, 5, _[28]), T, a, s, 9, _[29]), B, T, f, 14, _[30]), r, B, v, 20, _[31]), a = M(a, r = M(r, B = M(B, T, a, r, u, 4, _[32]), T, a, h, 11, _[33]), B, T, m, 16, _[34]), r, B, S, 23, _[35]), a = M(a, r = M(r, B = M(B, T, a, r, i, 4, _[36]), T, a, l, 11, _[37]), B, T, f, 16, _[38]), r, B, p, 23, _[39]), a = M(a, r = M(r, B = M(B, T, a, r, y, 4, _[40]), T, a, o, 11, _[41]), B, T, c, 16, _[42]), r, B, d, 23, _[43]), a = M(a, r = M(r, B = M(B, T, a, r, g, 4, _[44]), T, a, v, 11, _[45]), B, T, C, 16, _[46]), r, B, s, 23, _[47]), a = x(a, r = x(r, B = x(B, T, a, r, o, 6, _[48]), T, a, f, 10, _[49]), B, T, S, 15, _[50]), r, B, u, 21, _[51]), a = x(a, r = x(r, B = x(B, T, a, r, v, 6, _[52]), T, a, c, 10, _[53]), B, T, p, 15, _[54]), r, B, i, 21, _[55]), a = x(a, r = x(r, B = x(B, T, a, r, h, 6, _[56]), T, a, C, 10, _[57]), B, T, d, 15, _[58]), r, B, y, 21, _[59]), a = x(a, r = x(r, B = x(B, T, a, r, l, 6, _[60]), T, a, m, 10, _[61]), B, T, s, 15, _[62]), r, B, g, 21, _[63]);
            n[0] = n[0] + B | 0,
            n[1] = n[1] + T | 0,
            n[2] = n[2] + a | 0,
            n[3] = n[3] + r | 0
        },
        _doFinalize: function() {
            var e = this._data
              , t = e.words
              , n = 8 * this._nDataBytes
              , i = 8 * e.sigBytes;
            t[i >>> 5] |= 128 << 24 - i % 32;
            var r = a.floor(n / 4294967296);
            for (t[15 + (i + 64 >>> 9 << 4)] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8),
            t[14 + (i + 64 >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8),
            e.sigBytes = 4 * (t.length + 1),
            this._process(),
            t = (e = this._hash).words,
            n = 0; n < 4; n++)
                i = t[n],
                t[n] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8);
            return e
        },
        clone: function() {
            var e = n.clone.call(this);
            return e._hash = this._hash.clone(),
            e
        }
    }),
    e.MD5 = n._createHelper(i),
    e.HmacMD5 = n._createHmacHelper(i)
}(Math),
function() {
    var e, t = CryptoJS, n = (e = t.lib).Base, l = e.WordArray, i = (e = t.algo).EvpKDF = n.extend({
        cfg: n.extend({
            keySize: 4,
            hasher: e.MD5,
            iterations: 1
        }),
        init: function(e) {
            this.cfg = this.cfg.extend(e)
        },
        compute: function(e, t) {
            for (var n = (o = this.cfg).hasher.create(), i = l.create(), r = i.words, a = o.keySize, o = o.iterations; r.length < a; ) {
                s && n.update(s);
                var s = n.update(e).finalize(t);
                n.reset();
                for (var c = 1; c < o; c++)
                    s = n.finalize(s),
                    n.reset();
                i.concat(s)
            }
            return i.sigBytes = 4 * a,
            i
        }
    });
    t.EvpKDF = function(e, t, n) {
        return i.create(n).compute(e, t)
    }
}(),
CryptoJS.lib.Cipher || function() {
    var e = (f = CryptoJS).lib
      , t = e.Base
      , o = e.WordArray
      , n = e.BufferedBlockAlgorithm
      , i = f.enc.Base64
      , r = f.algo.EvpKDF
      , a = e.Cipher = n.extend({
        cfg: t.extend(),
        createEncryptor: function(e, t) {
            return this.create(this._ENC_XFORM_MODE, e, t)
        },
        createDecryptor: function(e, t) {
            return this.create(this._DEC_XFORM_MODE, e, t)
        },
        init: function(e, t, n) {
            this.cfg = this.cfg.extend(n),
            this._xformMode = e,
            this._key = t,
            this.reset()
        },
        reset: function() {
            n.reset.call(this),
            this._doReset()
        },
        process: function(e) {
            return this._append(e),
            this._process()
        },
        finalize: function(e) {
            return e && this._append(e),
            this._doFinalize()
        },
        keySize: 4,
        ivSize: 4,
        _ENC_XFORM_MODE: 1,
        _DEC_XFORM_MODE: 2,
        _createHelper: function(i) {
            return {
                encrypt: function(e, t, n) {
                    return ("string" == typeof t ? h : d).encrypt(i, e, t, n)
                },
                decrypt: function(e, t, n) {
                    return ("string" == typeof t ? h : d).decrypt(i, e, t, n)
                }
            }
        }
    });
    e.StreamCipher = a.extend({
        _doFinalize: function() {
            return this._process(!0)
        },
        blockSize: 1
    });
    function s(e, t, n) {
        var i = this._iv;
        i ? this._iv = void 0 : i = this._prevBlock;
        for (var r = 0; r < n; r++)
            e[t + r] ^= i[r]
    }
    var c = f.mode = {}
      , l = (e.BlockCipherMode = t.extend({
        createEncryptor: function(e, t) {
            return this.Encryptor.create(e, t)
        },
        createDecryptor: function(e, t) {
            return this.Decryptor.create(e, t)
        },
        init: function(e, t) {
            this._cipher = e,
            this._iv = t
        }
    })).extend();
    l.Encryptor = l.extend({
        processBlock: function(e, t) {
            var n = this._cipher
              , i = n.blockSize;
            s.call(this, e, t, i),
            n.encryptBlock(e, t),
            this._prevBlock = e.slice(t, t + i)
        }
    }),
    l.Decryptor = l.extend({
        processBlock: function(e, t) {
            var n = this._cipher
              , i = n.blockSize
              , r = e.slice(t, t + i);
            n.decryptBlock(e, t),
            s.call(this, e, t, i),
            this._prevBlock = r
        }
    }),
    c = c.CBC = l,
    l = (f.pad = {}).Pkcs7 = {
        pad: function(e, t) {
            for (var n, i = (n = (n = 4 * t) - e.sigBytes % n) << 24 | n << 16 | n << 8 | n, r = [], a = 0; a < n; a += 4)
                r.push(i);
            n = o.create(r, n),
            e.concat(n)
        },
        unpad: function(e) {
            e.sigBytes -= 255 & e.words[e.sigBytes - 1 >>> 2]
        }
    },
    e.BlockCipher = a.extend({
        cfg: a.cfg.extend({
            mode: c,
            padding: l
        }),
        reset: function() {
            a.reset.call(this);
            var e = (t = this.cfg).iv
              , t = t.mode;
            if (this._xformMode == this._ENC_XFORM_MODE)
                var n = t.createEncryptor;
            else
                n = t.createDecryptor,
                this._minBufferSize = 1;
            this._mode = n.call(t, this, e && e.words)
        },
        _doProcessBlock: function(e, t) {
            this._mode.processBlock(e, t)
        },
        _doFinalize: function() {
            var e = this.cfg.padding;
            if (this._xformMode == this._ENC_XFORM_MODE) {
                e.pad(this._data, this.blockSize);
                var t = this._process(!0)
            } else
                t = this._process(!0),
                e.unpad(t);
            return t
        },
        blockSize: 4
    });
    var u = e.CipherParams = t.extend({
        init: function(e) {
            this.mixIn(e)
        },
        toString: function(e) {
            return (e || this.formatter).stringify(this)
        }
    })
      , d = (c = (f.format = {}).OpenSSL = {
        stringify: function(e) {
            var t = e.ciphertext;
            return ((e = e.salt) ? o.create([1398893684, 1701076831]).concat(e).concat(t) : t).toString(i)
        },
        parse: function(e) {
            var t = (e = i.parse(e)).words;
            if (1398893684 == t[0] && 1701076831 == t[1]) {
                var n = o.create(t.slice(2, 4));
                t.splice(0, 4),
                e.sigBytes -= 16
            }
            return u.create({
                ciphertext: e,
                salt: n
            })
        }
    },
    e.SerializableCipher = t.extend({
        cfg: t.extend({
            format: c
        }),
        encrypt: function(e, t, n, i) {
            i = this.cfg.extend(i);
            var r = e.createEncryptor(n, i);
            return t = r.finalize(t),
            r = r.cfg,
            u.create({
                ciphertext: t,
                key: n,
                iv: r.iv,
                algorithm: e,
                mode: r.mode,
                padding: r.padding,
                blockSize: e.blockSize,
                formatter: i.format
            })
        },
        decrypt: function(e, t, n, i) {
            return i = this.cfg.extend(i),
            t = this._parse(t, i.format),
            e.createDecryptor(n, i).finalize(t.ciphertext)
        },
        _parse: function(e, t) {
            return "string" == typeof e ? t.parse(e, this) : e
        }
    }))
      , f = (f.kdf = {}).OpenSSL = {
        execute: function(e, t, n, i) {
            return i = i || o.random(8),
            e = r.create({
                keySize: t + n
            }).compute(e, i),
            n = o.create(e.words.slice(t), 4 * n),
            e.sigBytes = 4 * t,
            u.create({
                key: e,
                iv: n,
                salt: i
            })
        }
    }
      , h = e.PasswordBasedCipher = d.extend({
        cfg: d.cfg.extend({
            kdf: f
        }),
        encrypt: function(e, t, n, i) {
            return n = (i = this.cfg.extend(i)).kdf.execute(n, e.keySize, e.ivSize),
            i.iv = n.iv,
            (e = d.encrypt.call(this, e, t, n.key, i)).mixIn(n),
            e
        },
        decrypt: function(e, t, n, i) {
            return i = this.cfg.extend(i),
            t = this._parse(t, i.format),
            n = i.kdf.execute(n, e.keySize, e.ivSize, t.salt),
            i.iv = n.iv,
            d.decrypt.call(this, e, t, n.key, i)
        }
    })
}(),
function() {
    for (var e = CryptoJS, t = e.lib.BlockCipher, n = e.algo, o = [], i = [], r = [], a = [], s = [], c = [], l = [], u = [], d = [], f = [], h = [], g = 0; g < 256; g++)
        h[g] = g < 128 ? g << 1 : g << 1 ^ 283;
    var p = 0
      , m = 0;
    for (g = 0; g < 256; g++) {
        var v = (v = m ^ m << 1 ^ m << 2 ^ m << 3 ^ m << 4) >>> 8 ^ 255 & v ^ 99;
        o[p] = v;
        var y = h[i[v] = p]
          , S = h[y]
          , C = h[S]
          , B = 257 * h[v] ^ 16843008 * v;
        r[p] = B << 24 | B >>> 8,
        a[p] = B << 16 | B >>> 16,
        s[p] = B << 8 | B >>> 24,
        c[p] = B,
        B = 16843009 * C ^ 65537 * S ^ 257 * y ^ 16843008 * p,
        l[v] = B << 24 | B >>> 8,
        u[v] = B << 16 | B >>> 16,
        d[v] = B << 8 | B >>> 24,
        f[v] = B,
        p ? (p = y ^ h[h[h[C ^ y]]],
        m ^= h[h[m]]) : p = m = 1
    }
    var T = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
    n = n.AES = t.extend({
        _doReset: function() {
            for (var e = (n = this._key).words, t = n.sigBytes / 4, n = 4 * ((this._nRounds = t + 6) + 1), i = this._keySchedule = [], r = 0; r < n; r++)
                if (r < t)
                    i[r] = e[r];
                else {
                    var a = i[r - 1];
                    r % t ? 6 < t && 4 == r % t && (a = o[a >>> 24] << 24 | o[a >>> 16 & 255] << 16 | o[a >>> 8 & 255] << 8 | o[255 & a]) : (a = o[(a = a << 8 | a >>> 24) >>> 24] << 24 | o[a >>> 16 & 255] << 16 | o[a >>> 8 & 255] << 8 | o[255 & a],
                    a ^= T[r / t | 0] << 24),
                    i[r] = i[r - t] ^ a
                }
            for (e = this._invKeySchedule = [],
            t = 0; t < n; t++)
                r = n - t,
                a = t % 4 ? i[r] : i[r - 4],
                e[t] = t < 4 || r <= 4 ? a : l[o[a >>> 24]] ^ u[o[a >>> 16 & 255]] ^ d[o[a >>> 8 & 255]] ^ f[o[255 & a]]
        },
        encryptBlock: function(e, t) {
            this._doCryptBlock(e, t, this._keySchedule, r, a, s, c, o)
        },
        decryptBlock: function(e, t) {
            var n = e[t + 1];
            e[t + 1] = e[t + 3],
            e[t + 3] = n,
            this._doCryptBlock(e, t, this._invKeySchedule, l, u, d, f, i),
            n = e[t + 1],
            e[t + 1] = e[t + 3],
            e[t + 3] = n
        },
        _doCryptBlock: function(e, t, n, i, r, a, o, s) {
            for (var c = this._nRounds, l = e[t] ^ n[0], u = e[t + 1] ^ n[1], d = e[t + 2] ^ n[2], f = e[t + 3] ^ n[3], h = 4, g = 1; g < c; g++) {
                var p = i[l >>> 24] ^ r[u >>> 16 & 255] ^ a[d >>> 8 & 255] ^ o[255 & f] ^ n[h++]
                  , m = i[u >>> 24] ^ r[d >>> 16 & 255] ^ a[f >>> 8 & 255] ^ o[255 & l] ^ n[h++]
                  , v = i[d >>> 24] ^ r[f >>> 16 & 255] ^ a[l >>> 8 & 255] ^ o[255 & u] ^ n[h++];
                f = i[f >>> 24] ^ r[l >>> 16 & 255] ^ a[u >>> 8 & 255] ^ o[255 & d] ^ n[h++],
                l = p,
                u = m,
                d = v
            }
            p = (s[l >>> 24] << 24 | s[u >>> 16 & 255] << 16 | s[d >>> 8 & 255] << 8 | s[255 & f]) ^ n[h++],
            m = (s[u >>> 24] << 24 | s[d >>> 16 & 255] << 16 | s[f >>> 8 & 255] << 8 | s[255 & l]) ^ n[h++],
            v = (s[d >>> 24] << 24 | s[f >>> 16 & 255] << 16 | s[l >>> 8 & 255] << 8 | s[255 & u]) ^ n[h++],
            f = (s[f >>> 24] << 24 | s[l >>> 16 & 255] << 16 | s[u >>> 8 & 255] << 8 | s[255 & d]) ^ n[h++],
            e[t] = p,
            e[t + 1] = m,
            e[t + 2] = v,
            e[t + 3] = f
        },
        keySize: 8
    });
    e.AES = t._createHelper(n)
}();

function randomAppid() {
    return 1054;
}

function signatureParam(e, t) {
    var n = new Array;
    for (var i in e)
        e.hasOwnProperty(i) && "signature" != i && n.push(e[i]);
    for (var r = n.sort(), a = "", o = 0, s = r.length; o < s; o++)
        a += r[o];
    return a = md5(t + a + t)
};

function kg_dfid(){
    var t = JSON.stringify(window.e);
    var l = CryptoJS.enc.Utf8.parse(t);
    var s = CryptoJS.enc.Base64.stringify(l);
    var idd=randomAppid();
       var u = {
            appid: idd,
            platid: 4,
            clientver: 0,
            clienttime: parseInt((new Date).getTime() / 1e3),
            signature: "",
            mid: getmid(),
            uuid: window.e.uuid,
            userid: '',
            "p.token": ''
        };
       u.signature = signatureParam(u, u.appid);
       var d = "https://userservice.kugou.com/risk/v1/r_register_dev?appid=" + u.appid + "&platid=" + u.platid + "&clientver=" + u.clientver + "&clienttime=" + u.clienttime + "&signature=" + u.signature + "&mid=" + u.mid + "&userid=" + u.userid + "&uuid=" + u.uuid + "&p.token=" + u["p.token"];
        console.log("url:",d);
        return d+'|'+s
};
kg_dfid();