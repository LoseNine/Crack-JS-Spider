this.window=this;
var losenine=null;

!function(n, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (n = n || self).getSecuritySign = t()
} (this,
function() {
    "use strict";
    var n = function() {
        if ("undefined" != typeof self) return self;
        if ("undefined" != typeof window) return window;
        if ("undefined" != typeof global) return global;
        throw new Error("unable to locate global object")
    } ();
    n.__sign_hash_20200305 = function(n, t) {
        function f(n, t) {
            return n << t | n >>> 32 - t
        }
        function h(n, t) {
            var o, e, u, p, r;
            return u = 2147483648 & n,
            p = 2147483648 & t,
            r = (1073741823 & n) + (1073741823 & t),
            (o = 1073741824 & n) & (e = 1073741824 & t) ? 2147483648 ^ r ^ u ^ p: o | e ? 1073741824 & r ? 3221225472 ^ r ^ u ^ p: 1073741824 ^ r ^ u ^ p: r ^ u ^ p
        }
        function o(n, t, o, e, u, p, r) {
            var i;
            return n = h(n, h(h((i = t) & o | ~i & e, u), r)),
            h(f(n, p), t)
        }
        function e(n, t, o, e, u, p, r) {
            var i;
            return n = h(n, h(h(t & (i = e) | o & ~i, u), r)),
            h(f(n, p), t)
        }
        function u(n, t, o, e, u, p, r) {
            return n = h(n, h(h(t ^ o ^ e, u), r)),
            h(f(n, p), t)
        }
        function p(n, t, o, e, u, p, r) {
            return n = h(n, h(h(o ^ (t | ~e), u), r)),
            h(f(n, p), t)
        }
        function r(n) {
            var t, o = "",
            e = "";
            for (t = 0; t <= 3; t++) o += (e = "0" + (n >>> 8 * t & 255).toString(16)).substr(e.length - 2, 2);
            return o
        }
        var i, l, c, g, a, s, v, d, y, b;
        for (t = t || 32, i = function(n) {
            for (var t, o = n.length,
            e = o + 8,
            u = 16 * (1 + (e - e % 64) / 64), p = Array(u - 1), r = 0, i = 0; i < o;) r = i % 4 * 8,
            p[t = (i - i % 4) / 4] = p[t] | n.charCodeAt(i) << r,
            i++;
            return r = i % 4 * 8,
            p[t = (i - i % 4) / 4] = p[t] | 128 << r,
            p[u - 2] = o << 3,
            p[u - 1] = o >>> 29,
            p
        } (n = function(n) {
            n = n.replace(/\r\n/g, "\n");
            for (var t = "",
            o = 0; o < n.length; o++) {
                var e = n.charCodeAt(o);
                e < 128 ? t += String.fromCharCode(e) : (127 < e && e < 2048 ? t += String.fromCharCode(e >> 6 | 192) : (t += String.fromCharCode(e >> 12 | 224), t += String.fromCharCode(e >> 6 & 63 | 128)), t += String.fromCharCode(63 & e | 128))
            }
            return t
        } (n)), v = 1732584193, d = 4023233417, y = 2562383102, b = 271733878, l = 0; l < i.length; l += 16) v = o(c = v, g = d, a = y, s = b, i[l + 0], 7, 3614090360),
        b = o(b, v, d, y, i[l + 1], 12, 3905402710),
        y = o(y, b, v, d, i[l + 2], 17, 606105819),
        d = o(d, y, b, v, i[l + 3], 22, 3250441966),
        v = o(v, d, y, b, i[l + 4], 7, 4118548399),
        b = o(b, v, d, y, i[l + 5], 12, 1200080426),
        y = o(y, b, v, d, i[l + 6], 17, 2821735955),
        d = o(d, y, b, v, i[l + 7], 22, 4249261313),
        v = o(v, d, y, b, i[l + 8], 7, 1770035416),
        b = o(b, v, d, y, i[l + 9], 12, 2336552879),
        y = o(y, b, v, d, i[l + 10], 17, 4294925233),
        d = o(d, y, b, v, i[l + 11], 22, 2304563134),
        v = o(v, d, y, b, i[l + 12], 7, 1804603682),
        b = o(b, v, d, y, i[l + 13], 12, 4254626195),
        y = o(y, b, v, d, i[l + 14], 17, 2792965006),
        v = e(v, d = o(d, y, b, v, i[l + 15], 22, 1236535329), y, b, i[l + 1], 5, 4129170786),
        b = e(b, v, d, y, i[l + 6], 9, 3225465664),
        y = e(y, b, v, d, i[l + 11], 14, 643717713),
        d = e(d, y, b, v, i[l + 0], 20, 3921069994),
        v = e(v, d, y, b, i[l + 5], 5, 3593408605),
        b = e(b, v, d, y, i[l + 10], 9, 38016083),
        y = e(y, b, v, d, i[l + 15], 14, 3634488961),
        d = e(d, y, b, v, i[l + 4], 20, 3889429448),
        v = e(v, d, y, b, i[l + 9], 5, 568446438),
        b = e(b, v, d, y, i[l + 14], 9, 3275163606),
        y = e(y, b, v, d, i[l + 3], 14, 4107603335),
        d = e(d, y, b, v, i[l + 8], 20, 1163531501),
        v = e(v, d, y, b, i[l + 13], 5, 2850285829),
        b = e(b, v, d, y, i[l + 2], 9, 4243563512),
        y = e(y, b, v, d, i[l + 7], 14, 1735328473),
        v = u(v, d = e(d, y, b, v, i[l + 12], 20, 2368359562), y, b, i[l + 5], 4, 4294588738),
        b = u(b, v, d, y, i[l + 8], 11, 2272392833),
        y = u(y, b, v, d, i[l + 11], 16, 1839030562),
        d = u(d, y, b, v, i[l + 14], 23, 4259657740),
        v = u(v, d, y, b, i[l + 1], 4, 2763975236),
        b = u(b, v, d, y, i[l + 4], 11, 1272893353),
        y = u(y, b, v, d, i[l + 7], 16, 4139469664),
        d = u(d, y, b, v, i[l + 10], 23, 3200236656),
        v = u(v, d, y, b, i[l + 13], 4, 681279174),
        b = u(b, v, d, y, i[l + 0], 11, 3936430074),
        y = u(y, b, v, d, i[l + 3], 16, 3572445317),
        d = u(d, y, b, v, i[l + 6], 23, 76029189),
        v = u(v, d, y, b, i[l + 9], 4, 3654602809),
        b = u(b, v, d, y, i[l + 12], 11, 3873151461),
        y = u(y, b, v, d, i[l + 15], 16, 530742520),
        v = p(v, d = u(d, y, b, v, i[l + 2], 23, 3299628645), y, b, i[l + 0], 6, 4096336452),
        b = p(b, v, d, y, i[l + 7], 10, 1126891415),
        y = p(y, b, v, d, i[l + 14], 15, 2878612391),
        d = p(d, y, b, v, i[l + 5], 21, 4237533241),
        v = p(v, d, y, b, i[l + 12], 6, 1700485571),
        b = p(b, v, d, y, i[l + 3], 10, 2399980690),
        y = p(y, b, v, d, i[l + 10], 15, 4293915773),
        d = p(d, y, b, v, i[l + 1], 21, 2240044497),
        v = p(v, d, y, b, i[l + 8], 6, 1873313359),
        b = p(b, v, d, y, i[l + 15], 10, 4264355552),
        y = p(y, b, v, d, i[l + 6], 15, 2734768916),
        d = p(d, y, b, v, i[l + 13], 21, 1309151649),
        v = p(v, d, y, b, i[l + 4], 6, 4149444226),
        b = p(b, v, d, y, i[l + 11], 10, 3174756917),
        y = p(y, b, v, d, i[l + 2], 15, 718787259),
        d = p(d, y, b, v, i[l + 9], 21, 3951481745),
        v = h(v, c),
        d = h(d, g),
        y = h(y, a),
        b = h(b, s);
        return 32 == t ? r(v) + r(d) + r(y) + r(b) : r(d) + r(y)
    },
    function i(f, h, l, c, g) {
        g = g || [[this], [{}]];
        for (var t = [], o = null, n = [function() {
            return ! 0
        },
        function() {},
        function() {
            g.length = l[h++]
        },
        function() {
            g.push(l[h++])
        },
        function() {
            g.pop()
        },
        function() {
            var n = l[h++],
            t = g[g.length - 2 - n];
            g[g.length - 2 - n] = g.pop(),
            g.push(t)
        },
        function() {
            g.push(g[g.length - 1])
        },
        function() {
            g.push([g.pop(), g.pop()].reverse())
        },
        function() {
            g.push([c, g.pop()])
        },
        function() {
            g.push([g.pop()])
        },
        function() {
            var n = g.pop();
            g.push(n[0][n[1]])
        },
        function() {
            g.push(g[g.pop()[0]][0])
        },
        function() {
            var n = g[g.length - 2];
            n[0][n[1]] = g[g.length - 1]
        },
        function() {
            g[g[g.length - 2][0]][0] = g[g.length - 1]
        },
        function() {
            var n = g.pop(),
            t = g.pop();
            g.push([t[0][t[1]], n])
        },
        function() {
            var n = g.pop();
            g.push([g[g.pop()][0], n])
        },
        function() {
            var n = g.pop();
            g.push(delete n[0][n[1]])
        },
        function() {
            var n = [];
            for (var t in g.pop()) n.push(t);
            g.push(n)
        },
        function() {
            g[g.length - 1].length ? g.push(g[g.length - 1].shift(), !0) : g.push(void 0, !1)
        },
        function() {
            var n = g[g.length - 2],
            t = Object.getOwnPropertyDescriptor(n[0], n[1]) || {
                configurable: !0,
                enumerable: !0
            };
            t.get = g[g.length - 1],
            Object.defineProperty(n[0], n[1], t)
        },
        function() {
            var n = g[g.length - 2],
            t = Object.getOwnPropertyDescriptor(n[0], n[1]) || {
                configurable: !0,
                enumerable: !0
            };
            t.set = g[g.length - 1],
            Object.defineProperty(n[0], n[1], t)
        },
        function() {
            h = l[h++]
        },
        function() {
            var n = l[h++];
            g[g.length - 1] && (h = n)
        },
        function() {
            throw g[g.length - 1]
        },
        function() {
            var n = l[h++],
            t = n ? g.slice( - n) : [];
            g.length -= n,
            g.push(g.pop().apply(c, t))
        },
        function() {
            var n = l[h++],
            t = n ? g.slice( - n) : [];
            g.length -= n;
            var o = g.pop();
            g.push(o[0][o[1]].apply(o[0], t))
        },
        function() {
            var n = l[h++],
            t = n ? g.slice( - n) : [];
            g.length -= n,
            t.unshift(null),
            g.push(new(Function.prototype.bind.apply(g.pop(), t)))
        },
        function() {
            var n = l[h++],
            t = n ? g.slice( - n) : [];
            g.length -= n,
            t.unshift(null);
            var o = g.pop();
            g.push(new(Function.prototype.bind.apply(o[0][o[1]], t)))
        },
        function() {
            g.push(!g.pop())
        },
        function() {
            g.push(~g.pop())
        },
        function() {
            g.push(typeof g.pop())
        },
        function() {
            g[g.length - 2] = g[g.length - 2] == g.pop()
        },
        function() {
            g[g.length - 2] = g[g.length - 2] === g.pop()
        },
        function() {
            g[g.length - 2] = g[g.length - 2] > g.pop()
        },
        function() {
            g[g.length - 2] = g[g.length - 2] >= g.pop()
        },
        function() {
            g[g.length - 2] = g[g.length - 2] << g.pop()
        },
        function() {
            g[g.length - 2] = g[g.length - 2] >> g.pop()
        },
        function() {
            g[g.length - 2] = g[g.length - 2] >>> g.pop()
        },
        function() {
            g[g.length - 2] = g[g.length - 2] + g.pop()
        },
        function() {
            g[g.length - 2] = g[g.length - 2] - g.pop()
        },
        function() {
            g[g.length - 2] = g[g.length - 2] * g.pop()
        },
        function() {
            g[g.length - 2] = g[g.length - 2] / g.pop()
        },
        function() {
            g[g.length - 2] = g[g.length - 2] % g.pop()
        },
        function() {
            g[g.length - 2] = g[g.length - 2] | g.pop()
        },
        function() {
            g[g.length - 2] = g[g.length - 2] & g.pop()
        },
        function() {
            g[g.length - 2] = g[g.length - 2] ^ g.pop()
        },
        function() {
            g[g.length - 2] = g[g.length - 2] in g.pop()
        },
        function() {
            g[g.length - 2] = g[g.length - 2] instanceof g.pop()
        },
        function() {
            g[g[g.length - 1][0]] = void 0 === g[g[g.length - 1][0]] ? [] : g[g[g.length - 1][0]]
        },
        function() {
            for (var e = l[h++], u = [], n = l[h++], t = l[h++], p = [], o = 0; o < n; o++) u[l[h++]] = g[l[h++]];
            for (var r = 0; r < t; r++) p[r] = l[h++];
            g.push(function n() {
                var t = u.slice(0);
                t[0] = [this],
                t[1] = [arguments],
                t[2] = [n];
                for (var o = 0; o < p.length && o < arguments.length; o++) 0 < p[o] && (t[p[o]] = [arguments[o]]);
                return i(f, e, l, c, t)
            })
        },
        function() {
            t.push([l[h++], g.length, l[h++]])
        },
        function() {
            t.pop()
        },
        function() {
            return !! o
        },
        function() {
            o = null
        },
        function() {
            g[g.length - 1] += String.fromCharCode(l[h++])
        },
        function() {
            g.push("")
        },
        function() {
            g.push(void 0)
        },
        function() {
            g.push(null)
        },
        function() {
            g.push(!0)
        },
        function() {
            g.push(!1)
        },
        function() {
            g.length -= l[h++]
        },
        function() {
            g[g.length - 1] = l[h++]
        },
        function() {
            var n = g.pop(),
            t = g[g.length - 1];
            t[0][t[1]] = g[n[0]][0]
        },
        function() {
            var n = g.pop(),
            t = g[g.length - 1];
            t[0][t[1]] = n[0][n[1]]
        },
        function() {
            var n = g.pop(),
            t = g[g.length - 1];
            g[t[0]][0] = g[n[0]][0]
        },
        function() {
            var n = g.pop(),
            t = g[g.length - 1];
            g[t[0]][0] = n[0][n[1]]
        },
        function() {
            g[g.length - 2] = g[g.length - 2] < g.pop()
        },
        function() {
            g[g.length - 2] = g[g.length - 2] <= g.pop()
        }];;) try {
            for (; ! n[l[h++]](););
            if (o) throw o;
            return g.pop()
        } catch(n) {
            var e = t.pop();
            if (void 0 === e) throw n;
            o = n,
            h = e[0],
            g.length = e[1],
            e[2] && (g[e[2]][0] = o)
        }
    } (120731, 0, [21, 34, 50, 100, 57, 50, 102, 50, 98, 99, 101, 52, 54, 97, 52, 99, 55, 56, 52, 49, 57, 54, 57, 49, 56, 98, 102, 100, 100, 48, 48, 55, 55, 102, 2, 10, 3, 2, 9, 48, 61, 3, 9, 48, 61, 4, 9, 48, 61, 5, 9, 48, 61, 6, 9, 48, 61, 7, 9, 48, 61, 8, 9, 48, 61, 9, 9, 48, 4, 21, 427, 54, 2, 15, 3, 2, 9, 48, 61, 3, 9, 48, 61, 4, 9, 48, 61, 5, 9, 48, 61, 6, 9, 48, 61, 7, 9, 48, 61, 8, 9, 48, 61, 9, 9, 48, 61, 10, 9, 48, 61, 11, 9, 48, 61, 12, 9, 48, 61, 13, 9, 48, 61, 14, 9, 48, 61, 10, 9, 55, 54, 97, 54, 98, 54, 99, 54, 100, 54, 101, 54, 102, 54, 103, 54, 104, 54, 105, 54, 106, 54, 107, 54, 108, 54, 109, 54, 110, 54, 111, 54, 112, 54, 113, 54, 114, 54, 115, 54, 116, 54, 117, 54, 118, 54, 119, 54, 120, 54, 121, 54, 122, 54, 48, 54, 49, 54, 50, 54, 51, 54, 52, 54, 53, 54, 54, 54, 55, 54, 56, 54, 57, 13, 4, 61, 11, 9, 55, 54, 77, 54, 97, 54, 116, 54, 104, 8, 55, 54, 102, 54, 108, 54, 111, 54, 111, 54, 114, 14, 55, 54, 77, 54, 97, 54, 116, 54, 104, 8, 55, 54, 114, 54, 97, 54, 110, 54, 100, 54, 111, 54, 109, 14, 25, 0, 3, 4, 9, 11, 3, 3, 9, 11, 39, 3, 1, 38, 40, 3, 3, 9, 11, 38, 25, 1, 13, 4, 61, 12, 9, 55, 13, 4, 61, 13, 9, 3, 0, 13, 4, 4, 3, 13, 9, 11, 3, 11, 9, 11, 66, 22, 306, 4, 21, 422, 24, 4, 3, 14, 9, 55, 54, 77, 54, 97, 54, 116, 54, 104, 8, 55, 54, 102, 54, 108, 54, 111, 54, 111, 54, 114, 14, 55, 54, 77, 54, 97, 54, 116, 54, 104, 8, 55, 54, 114, 54, 97, 54, 110, 54, 100, 54, 111, 54, 109, 14, 25, 0, 3, 10, 9, 55, 54, 108, 54, 101, 54, 110, 54, 103, 54, 116, 54, 104, 15, 10, 40, 25, 1, 13, 4, 61, 12, 9, 6, 11, 3, 10, 9, 3, 14, 9, 11, 15, 10, 38, 13, 4, 61, 13, 9, 6, 11, 6, 5, 1, 5, 0, 3, 1, 38, 13, 4, 61, 0, 5, 0, 43, 4, 21, 291, 61, 3, 12, 9, 11, 0, 3, 9, 9, 49, 72, 0, 2, 3, 4, 13, 4, 61, 8, 9, 21, 721, 3, 2, 8, 3, 2, 9, 48, 61, 3, 9, 48, 61, 4, 9, 48, 61, 5, 9, 48, 61, 6, 9, 48, 61, 7, 9, 48, 4, 55, 54, 115, 54, 101, 54, 108, 54, 102, 8, 10, 30, 55, 54, 117, 54, 110, 54, 100, 54, 101, 54, 102, 54, 105, 54, 110, 54, 101, 54, 100, 32, 28, 22, 510, 4, 21, 523, 22, 4, 55, 54, 115, 54, 101, 54, 108, 54, 102, 8, 10, 0, 55, 54, 119, 54, 105, 54, 110, 54, 100, 54, 111, 54, 119, 8, 10, 30, 55, 54, 117, 54, 110, 54, 100, 54, 101, 54, 102, 54, 105, 54, 110, 54, 101, 54, 100, 32, 28, 22, 566, 4, 21, 583, 3, 4, 55, 54, 119, 54, 105, 54, 110, 54, 100, 54, 111, 54, 119, 8, 10, 0, 55, 54, 103, 54, 108, 54, 111, 54, 98, 54, 97, 54, 108, 8, 10, 30, 55, 54, 117, 54, 110, 54, 100, 54, 101, 54, 102, 54, 105, 54, 110, 54, 101, 54, 100, 32, 28, 22, 626, 4, 21, 643, 25, 4, 55, 54, 103, 54, 108, 54, 111, 54, 98, 54, 97, 54, 108, 8, 10, 0, 55, 54, 69, 54, 114, 54, 114, 54, 111, 54, 114, 8, 55, 54, 117, 54, 110, 54, 97, 54, 98, 54, 108, 54, 101, 54, 32, 54, 116, 54, 111, 54, 32, 54, 108, 54, 111, 54, 99, 54, 97, 54, 116, 54, 101, 54, 32, 54, 103, 54, 108, 54, 111, 54, 98, 54, 97, 54, 108, 54, 32, 54, 111, 54, 98, 54, 106, 54, 101, 54, 99, 54, 116, 27, 1, 23, 56, 0, 49, 444, 0, 0, 24, 0, 13, 4, 61, 8, 9, 55, 54, 95, 54, 95, 54, 103, 54, 101, 54, 116, 54, 83, 54, 101, 54, 99, 54, 117, 54, 114, 54, 105, 54, 116, 54, 121, 54, 83, 54, 105, 54, 103, 54, 110, 15, 21, 1126, 49, 2, 14, 3, 2, 9, 48, 61, 3, 9, 48, 61, 4, 9, 48, 61, 5, 9, 48, 61, 6, 9, 48, 61, 7, 9, 48, 61, 8, 9, 48, 61, 9, 9, 48, 61, 10, 9, 48, 61, 11, 9, 48, 61, 9, 9, 55, 54, 108, 54, 111, 54, 99, 54, 97, 54, 116, 54, 105, 54, 111, 54, 110, 8, 10, 30, 55, 54, 117, 54, 110, 54, 100, 54, 101, 54, 102, 54, 105, 54, 110, 54, 101, 54, 100, 32, 28, 22, 862, 21, 932, 21, 4, 55, 54, 108, 54, 111, 54, 99, 54, 97, 54, 116, 54, 105, 54, 111, 54, 110, 8, 55, 54, 104, 54, 111, 54, 115, 54, 116, 14, 55, 54, 105, 54, 110, 54, 100, 54, 101, 54, 120, 54, 79, 54, 102, 14, 55, 54, 121, 54, 46, 54, 113, 54, 113, 54, 46, 54, 99, 54, 111, 54, 109, 25, 1, 3, 0, 3, 1, 39, 32, 22, 963, 4, 55, 54, 67, 54, 74, 54, 66, 54, 80, 54, 65, 54, 67, 54, 114, 54, 82, 54, 117, 54, 78, 54, 121, 54, 55, 21, 974, 50, 4, 3, 12, 9, 11, 3, 8, 3, 10, 24, 2, 13, 4, 61, 10, 9, 3, 13, 9, 55, 54, 95, 54, 95, 54, 115, 54, 105, 54, 103, 54, 110, 54, 95, 54, 104, 54, 97, 54, 115, 54, 104, 54, 95, 54, 50, 54, 48, 54, 50, 54, 48, 54, 48, 54, 51, 54, 48, 54, 53, 15, 10, 22, 1030, 21, 1087, 22, 4, 3, 13, 9, 55, 54, 95, 54, 95, 54, 115, 54, 105, 54, 103, 54, 110, 54, 95, 54, 104, 54, 97, 54, 115, 54, 104, 54, 95, 54, 50, 54, 48, 54, 50, 54, 48, 54, 48, 54, 51, 54, 48, 54, 53, 15, 3, 9, 9, 11, 3, 3, 9, 11, 38, 25, 1, 13, 4, 61, 11, 9, 3, 12, 9, 11, 3, 10, 3, 53, 3, 37, 39, 24, 2, 13, 4, 4, 55, 54, 122, 54, 122, 54, 97, 3, 11, 9, 11, 38, 3, 10, 9, 11, 38, 0, 49, 771, 2, 1, 12, 9, 13, 8, 3, 12, 4, 4, 56, 0], n);
    var t = n.__getSecuritySign;
losenine=t;
    return t
});

function test(){
	return losenine("123");
}