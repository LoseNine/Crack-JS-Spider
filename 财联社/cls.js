
var tres=function(){
            var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
              , n = {
                rotl: function(e, t) {
                    return e << t | e >>> 32 - t
                },
                rotr: function(e, t) {
                    return e << 32 - t | e >>> t
                },
                endian: function(e) {
                    if (e.constructor == Number)
                        return 16711935 & n.rotl(e, 8) | 4278255360 & n.rotl(e, 24);
                    for (var t = 0; t < e.length; t++)
                        e[t] = n.endian(e[t]);
                    return e
                },
                randomBytes: function(e) {
                    for (var t = []; e > 0; e--)
                        t.push(Math.floor(256 * Math.random()));
                    return t
                },
                bytesToWords: function(e) {
                    for (var t = [], n = 0, r = 0; n < e.length; n++,
                    r += 8)
                        t[r >>> 5] |= e[n] << 24 - r % 32;
                    return t
                },
                wordsToBytes: function(e) {
                    for (var t = [], n = 0; n < 32 * e.length; n += 8)
                        t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
                    return t
                },
                bytesToHex: function(e) {
                    for (var t = [], n = 0; n < e.length; n++)
                        t.push((e[n] >>> 4).toString(16)),
                        t.push((15 & e[n]).toString(16));
                    return t.join("")
                },
                hexToBytes: function(e) {
                    for (var t = [], n = 0; n < e.length; n += 2)
                        t.push(parseInt(e.substr(n, 2), 16));
                    return t
                },
                bytesToBase64: function(e) {
                    for (var n = [], r = 0; r < e.length; r += 3)
                        for (var o = e[r] << 16 | e[r + 1] << 8 | e[r + 2], i = 0; i < 4; i++)
                            8 * r + 6 * i <= 8 * e.length ? n.push(t.charAt(o >>> 6 * (3 - i) & 63)) : n.push("=");
                    return n.join("")
                },
                base64ToBytes: function(e) {
                    e = e.replace(/[^A-Z0-9+\/]/gi, "");
                    for (var n = [], r = 0, o = 0; r < e.length; o = ++r % 4)
                        0 != o && n.push((t.indexOf(e.charAt(r - 1)) & Math.pow(2, -2 * o + 8) - 1) << 2 * o | t.indexOf(e.charAt(r)) >>> 6 - 2 * o);
                    return n
                }
            };
            return n
}();



var ores=function(){
	        function n(e) {
            return !!e.constructor && "function" === typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
        }
        return  function(e) {
            return null != e && (n(e) || function(e) {
                return "function" === typeof e.readFloatLE && "function" === typeof e.slice && n(e.slice(0, 0))
            }(e) || !!e._isBuffer)
        }

}();

var ires=function(){
        var n = {
            utf8: {
                stringToBytes: function(e) {
                    return n.bin.stringToBytes(unescape(encodeURIComponent(e)))
                },
                bytesToString: function(e) {
                    return decodeURIComponent(escape(n.bin.bytesToString(e)))
                }
            },
            bin: {
                stringToBytes: function(e) {
                    for (var t = [], n = 0; n < e.length; n++)
                        t.push(255 & e.charCodeAt(n));
                    return t
                },
                bytesToString: function(e) {
                    for (var t = [], n = 0; n < e.length; n++)
                        t.push(String.fromCharCode(e[n]));
                    return t.join("")
                }
            }
        };
        return  n
}();

var rres=function(){
        var n = {
            utf8: {
                stringToBytes: function(e) {
                    return n.bin.stringToBytes(unescape(encodeURIComponent(e)))
                },
                bytesToString: function(e) {
                    return decodeURIComponent(escape(n.bin.bytesToString(e)))
                }
            },
            bin: {
                stringToBytes: function(e) {
                    for (var t = [], n = 0; n < e.length; n++)
                        t.push(255 & e.charCodeAt(n));
                    return t
                },
                bytesToString: function(e) {
                    for (var t = [], n = 0; n < e.length; n++)
                        t.push(String.fromCharCode(e[n]));
                    return t.join("")
                }
            }
        };
        return n
}();
 var t = tres
              , r = rres.utf8
              , o = ores
              , i = ires.bin
              , u = function(e, n) {
                e.constructor == String ? e = n && "binary" === n.encoding ? i.stringToBytes(e) : r.stringToBytes(e) : o(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || (e = e.toString());
                for (var a = t.bytesToWords(e), s = 8 * e.length, c = 1732584193, f = -271733879, p = -1732584194, h = 271733878, l = 0; l < a.length; l++)
                    a[l] = 16711935 & (a[l] << 8 | a[l] >>> 24) | 4278255360 & (a[l] << 24 | a[l] >>> 8);
                a[s >>> 5] |= 128 << s % 32,
                a[14 + (s + 64 >>> 9 << 4)] = s;
                var d = u._ff
                  , y = u._gg
                  , m = u._hh
                  , g = u._ii;
                for (l = 0; l < a.length; l += 16) {
                    var v = c
                      , w = f
                      , x = p
                      , b = h;
                    c = d(c, f, p, h, a[l + 0], 7, -680876936),
                    h = d(h, c, f, p, a[l + 1], 12, -389564586),
                    p = d(p, h, c, f, a[l + 2], 17, 606105819),
                    f = d(f, p, h, c, a[l + 3], 22, -1044525330),
                    c = d(c, f, p, h, a[l + 4], 7, -176418897),
                    h = d(h, c, f, p, a[l + 5], 12, 1200080426),
                    p = d(p, h, c, f, a[l + 6], 17, -1473231341),
                    f = d(f, p, h, c, a[l + 7], 22, -45705983),
                    c = d(c, f, p, h, a[l + 8], 7, 1770035416),
                    h = d(h, c, f, p, a[l + 9], 12, -1958414417),
                    p = d(p, h, c, f, a[l + 10], 17, -42063),
                    f = d(f, p, h, c, a[l + 11], 22, -1990404162),
                    c = d(c, f, p, h, a[l + 12], 7, 1804603682),
                    h = d(h, c, f, p, a[l + 13], 12, -40341101),
                    p = d(p, h, c, f, a[l + 14], 17, -1502002290),
                    c = y(c, f = d(f, p, h, c, a[l + 15], 22, 1236535329), p, h, a[l + 1], 5, -165796510),
                    h = y(h, c, f, p, a[l + 6], 9, -1069501632),
                    p = y(p, h, c, f, a[l + 11], 14, 643717713),
                    f = y(f, p, h, c, a[l + 0], 20, -373897302),
                    c = y(c, f, p, h, a[l + 5], 5, -701558691),
                    h = y(h, c, f, p, a[l + 10], 9, 38016083),
                    p = y(p, h, c, f, a[l + 15], 14, -660478335),
                    f = y(f, p, h, c, a[l + 4], 20, -405537848),
                    c = y(c, f, p, h, a[l + 9], 5, 568446438),
                    h = y(h, c, f, p, a[l + 14], 9, -1019803690),
                    p = y(p, h, c, f, a[l + 3], 14, -187363961),
                    f = y(f, p, h, c, a[l + 8], 20, 1163531501),
                    c = y(c, f, p, h, a[l + 13], 5, -1444681467),
                    h = y(h, c, f, p, a[l + 2], 9, -51403784),
                    p = y(p, h, c, f, a[l + 7], 14, 1735328473),
                    c = m(c, f = y(f, p, h, c, a[l + 12], 20, -1926607734), p, h, a[l + 5], 4, -378558),
                    h = m(h, c, f, p, a[l + 8], 11, -2022574463),
                    p = m(p, h, c, f, a[l + 11], 16, 1839030562),
                    f = m(f, p, h, c, a[l + 14], 23, -35309556),
                    c = m(c, f, p, h, a[l + 1], 4, -1530992060),
                    h = m(h, c, f, p, a[l + 4], 11, 1272893353),
                    p = m(p, h, c, f, a[l + 7], 16, -155497632),
                    f = m(f, p, h, c, a[l + 10], 23, -1094730640),
                    c = m(c, f, p, h, a[l + 13], 4, 681279174),
                    h = m(h, c, f, p, a[l + 0], 11, -358537222),
                    p = m(p, h, c, f, a[l + 3], 16, -722521979),
                    f = m(f, p, h, c, a[l + 6], 23, 76029189),
                    c = m(c, f, p, h, a[l + 9], 4, -640364487),
                    h = m(h, c, f, p, a[l + 12], 11, -421815835),
                    p = m(p, h, c, f, a[l + 15], 16, 530742520),
                    c = g(c, f = m(f, p, h, c, a[l + 2], 23, -995338651), p, h, a[l + 0], 6, -198630844),
                    h = g(h, c, f, p, a[l + 7], 10, 1126891415),
                    p = g(p, h, c, f, a[l + 14], 15, -1416354905),
                    f = g(f, p, h, c, a[l + 5], 21, -57434055),
                    c = g(c, f, p, h, a[l + 12], 6, 1700485571),
                    h = g(h, c, f, p, a[l + 3], 10, -1894986606),
                    p = g(p, h, c, f, a[l + 10], 15, -1051523),
                    f = g(f, p, h, c, a[l + 1], 21, -2054922799),
                    c = g(c, f, p, h, a[l + 8], 6, 1873313359),
                    h = g(h, c, f, p, a[l + 15], 10, -30611744),
                    p = g(p, h, c, f, a[l + 6], 15, -1560198380),
                    f = g(f, p, h, c, a[l + 13], 21, 1309151649),
                    c = g(c, f, p, h, a[l + 4], 6, -145523070),
                    h = g(h, c, f, p, a[l + 11], 10, -1120210379),
                    p = g(p, h, c, f, a[l + 2], 15, 718787259),
                    f = g(f, p, h, c, a[l + 9], 21, -343485551),
                    c = c + v >>> 0,
                    f = f + w >>> 0,
                    p = p + x >>> 0,
                    h = h + b >>> 0
                }
                return t.endian([c, f, p, h])
            };
            u._ff = function(e, t, n, r, o, i, u) {
                var a = e + (t & n | ~t & r) + (o >>> 0) + u;
                return (a << i | a >>> 32 - i) + t
            }
            ,
            u._gg = function(e, t, n, r, o, i, u) {
                var a = e + (t & r | n & ~r) + (o >>> 0) + u;
                return (a << i | a >>> 32 - i) + t
            }
            ,
            u._hh = function(e, t, n, r, o, i, u) {
                var a = e + (t ^ n ^ r) + (o >>> 0) + u;
                return (a << i | a >>> 32 - i) + t
            }
            ,
            u._ii = function(e, t, n, r, o, i, u) {
                var a = e + (n ^ (t | ~r)) + (o >>> 0) + u;
                return (a << i | a >>> 32 - i) + t
            }
            ,
            u._blocksize = 16,
            u._digestsize = 16,
            result = function(e, n) {
                if (void 0 === e || null === e)
                    throw new Error("Illegal argument " + e);
                var r = t.wordsToBytes(u(e, n));
                return n && n.asBytes ? r : n && n.asString ? i.bytesToString(r) : t.bytesToHex(r)
            }