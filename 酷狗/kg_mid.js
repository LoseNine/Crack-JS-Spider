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

function test(){
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
