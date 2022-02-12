window=global;

window.navigator={
  userAgent:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36'
};

function myL(e, t, n) {
    var r;
        function o(e, t) {
            var n = (65535 & e) + (65535 & t);
            return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
        }
        function a(e, t, n, r, i, a) {
            return o((c = o(o(t, e), o(r, a))) << (u = i) | c >>> 32 - u, n);
            var c, u
        }
        function c(e, t, n, r, i, o, c) {
            return a(t & n | ~t & r, e, t, i, o, c)
        }
        function u(e, t, n, r, i, o, c) {
            return a(t & r | n & ~r, e, t, i, o, c)
        }
        function s(e, t, n, r, i, o, c) {
            return a(t ^ n ^ r, e, t, i, o, c)
        }
        function l(e, t, n, r, i, o, c) {
            return a(n ^ (t | ~r), e, t, i, o, c)
        }
        function d(e, t) {
            var n, r, i, a, d;
            e[t >> 5] |= 128 << t % 32,
            e[14 + (t + 64 >>> 9 << 4)] = t;
            var f = 1732584193
              , p = -271733879
              , h = -1732584194
              , b = 271733878;
            for (n = 0; n < e.length; n += 16)
                r = f,
                i = p,
                a = h,
                d = b,
                f = c(f, p, h, b, e[n], 7, -680876936),
                b = c(b, f, p, h, e[n + 1], 12, -389564586),
                h = c(h, b, f, p, e[n + 2], 17, 606105819),
                p = c(p, h, b, f, e[n + 3], 22, -1044525330),
                f = c(f, p, h, b, e[n + 4], 7, -176418897),
                b = c(b, f, p, h, e[n + 5], 12, 1200080426),
                h = c(h, b, f, p, e[n + 6], 17, -1473231341),
                p = c(p, h, b, f, e[n + 7], 22, -45705983),
                f = c(f, p, h, b, e[n + 8], 7, 1770035416),
                b = c(b, f, p, h, e[n + 9], 12, -1958414417),
                h = c(h, b, f, p, e[n + 10], 17, -42063),
                p = c(p, h, b, f, e[n + 11], 22, -1990404162),
                f = c(f, p, h, b, e[n + 12], 7, 1804603682),
                b = c(b, f, p, h, e[n + 13], 12, -40341101),
                h = c(h, b, f, p, e[n + 14], 17, -1502002290),
                f = u(f, p = c(p, h, b, f, e[n + 15], 22, 1236535329), h, b, e[n + 1], 5, -165796510),
                b = u(b, f, p, h, e[n + 6], 9, -1069501632),
                h = u(h, b, f, p, e[n + 11], 14, 643717713),
                p = u(p, h, b, f, e[n], 20, -373897302),
                f = u(f, p, h, b, e[n + 5], 5, -701558691),
                b = u(b, f, p, h, e[n + 10], 9, 38016083),
                h = u(h, b, f, p, e[n + 15], 14, -660478335),
                p = u(p, h, b, f, e[n + 4], 20, -405537848),
                f = u(f, p, h, b, e[n + 9], 5, 568446438),
                b = u(b, f, p, h, e[n + 14], 9, -1019803690),
                h = u(h, b, f, p, e[n + 3], 14, -187363961),
                p = u(p, h, b, f, e[n + 8], 20, 1163531501),
                f = u(f, p, h, b, e[n + 13], 5, -1444681467),
                b = u(b, f, p, h, e[n + 2], 9, -51403784),
                h = u(h, b, f, p, e[n + 7], 14, 1735328473),
                f = s(f, p = u(p, h, b, f, e[n + 12], 20, -1926607734), h, b, e[n + 5], 4, -378558),
                b = s(b, f, p, h, e[n + 8], 11, -2022574463),
                h = s(h, b, f, p, e[n + 11], 16, 1839030562),
                p = s(p, h, b, f, e[n + 14], 23, -35309556),
                f = s(f, p, h, b, e[n + 1], 4, -1530992060),
                b = s(b, f, p, h, e[n + 4], 11, 1272893353),
                h = s(h, b, f, p, e[n + 7], 16, -155497632),
                p = s(p, h, b, f, e[n + 10], 23, -1094730640),
                f = s(f, p, h, b, e[n + 13], 4, 681279174),
                b = s(b, f, p, h, e[n], 11, -358537222),
                h = s(h, b, f, p, e[n + 3], 16, -722521979),
                p = s(p, h, b, f, e[n + 6], 23, 76029189),
                f = s(f, p, h, b, e[n + 9], 4, -640364487),
                b = s(b, f, p, h, e[n + 12], 11, -421815835),
                h = s(h, b, f, p, e[n + 15], 16, 530742520),
                f = l(f, p = s(p, h, b, f, e[n + 2], 23, -995338651), h, b, e[n], 6, -198630844),
                b = l(b, f, p, h, e[n + 7], 10, 1126891415),
                h = l(h, b, f, p, e[n + 14], 15, -1416354905),
                p = l(p, h, b, f, e[n + 5], 21, -57434055),
                f = l(f, p, h, b, e[n + 12], 6, 1700485571),
                b = l(b, f, p, h, e[n + 3], 10, -1894986606),
                h = l(h, b, f, p, e[n + 10], 15, -1051523),
                p = l(p, h, b, f, e[n + 1], 21, -2054922799),
                f = l(f, p, h, b, e[n + 8], 6, 1873313359),
                b = l(b, f, p, h, e[n + 15], 10, -30611744),
                h = l(h, b, f, p, e[n + 6], 15, -1560198380),
                p = l(p, h, b, f, e[n + 13], 21, 1309151649),
                f = l(f, p, h, b, e[n + 4], 6, -145523070),
                b = l(b, f, p, h, e[n + 11], 10, -1120210379),
                h = l(h, b, f, p, e[n + 2], 15, 718787259),
                p = l(p, h, b, f, e[n + 9], 21, -343485551),
                f = o(f, r),
                p = o(p, i),
                h = o(h, a),
                b = o(b, d);
            return [f, p, h, b]
        }
        function f(e) {
            var t, n = "", r = 32 * e.length;
            for (t = 0; t < r; t += 8)
                n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
            return n
        }
        function p(e) {
            var t, n = [];
            for (n[(e.length >> 2) - 1] = void 0,
            t = 0; t < n.length; t += 1)
                n[t] = 0;
            var r = 8 * e.length;
            for (t = 0; t < r; t += 8)
                n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
            return n
        }
        function h(e) {
            var t, n, r = "";
            for (n = 0; n < e.length; n += 1)
                t = e.charCodeAt(n),
                r += "0123456789abcdef".charAt(t >>> 4 & 15) + "0123456789abcdef".charAt(15 & t);
            return r
        }
        function b(e) {
            return unescape(encodeURIComponent(e))
        }
        function v(e) {
            return function(e) {
                return f(d(p(e), 8 * e.length))
            }(b(e))
        }
        function O(e, t) {
            return function(e, t) {
                var n, r, i = p(e), o = [], a = [];
                for (o[15] = a[15] = void 0,
                i.length > 16 && (i = d(i, 8 * e.length)),
                n = 0; n < 16; n += 1)
                    o[n] = 909522486 ^ i[n],
                    a[n] = 1549556828 ^ i[n];
                return r = d(o.concat(p(t)), 512 + 8 * t.length),
                f(d(a.concat(r), 640))
            }(b(e), b(t))
        }
        function g(e, t, n) {
            return t ? n ? O(t, e) : h(O(t, e)) : n ? v(e) : h(v(e))
        };
    return g(e,t,n);
}

function myA(data) {
    function t(e) {
        return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.A ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var A = "2.0"
      , __g = {};
    function s() {}
    function i(e) {
        this.t = (2048 & e) >> 11,
        this.s = (1536 & e) >> 9,
        this.i = 511 & e,
        this.h = 511 & e
    }
    function h(e) {
        this.s = (3072 & e) >> 10,
        this.h = 1023 & e
    }
    function a(e) {
        this.a = (3072 & e) >> 10,
        this.c = (768 & e) >> 8,
        this.n = (192 & e) >> 6,
        this.t = 63 & e
    }
    function c(e) {
        this.s = e >> 10 & 3,
        this.i = 1023 & e
    }
    function n() {}
    function e(e) {
        this.a = (3072 & e) >> 10,
        this.c = (768 & e) >> 8,
        this.n = (192 & e) >> 6,
        this.t = 63 & e
    }
    function o(e) {
        this.h = (4095 & e) >> 2,
        this.t = 3 & e
    }
    function r(e) {
        this.s = e >> 10 & 3,
        this.i = e >> 2 & 255,
        this.t = 3 & e
    }
    s.prototype.e = function(e) {
        e.o = !1
    }
    ,
    i.prototype.e = function(e) {
        switch (this.t) {
        case 0:
            e.r[this.s] = this.i;
            break;
        case 1:
            e.r[this.s] = e.k[this.h]
        }
    }
    ,
    h.prototype.e = function(e) {
        e.k[this.h] = e.r[this.s]
    }
    ,
    a.prototype.e = function(e) {
        switch (this.t) {
        case 0:
            e.r[this.a] = e.r[this.c] + e.r[this.n];
            break;
        case 1:
            e.r[this.a] = e.r[this.c] - e.r[this.n];
            break;
        case 2:
            e.r[this.a] = e.r[this.c] * e.r[this.n];
            break;
        case 3:
            e.r[this.a] = e.r[this.c] / e.r[this.n];
            break;
        case 4:
            e.r[this.a] = e.r[this.c] % e.r[this.n];
            break;
        case 5:
            e.r[this.a] = e.r[this.c] == e.r[this.n];
            break;
        case 6:
            e.r[this.a] = e.r[this.c] >= e.r[this.n];
            break;
        case 7:
            e.r[this.a] = e.r[this.c] || e.r[this.n];
            break;
        case 8:
            e.r[this.a] = e.r[this.c] && e.r[this.n];
            break;
        case 9:
            e.r[this.a] = e.r[this.c] !== e.r[this.n];
            break;
        case 10:
            e.r[this.a] = t(e.r[this.c]);
            break;
        case 11:
            e.r[this.a] = e.r[this.c]in e.r[this.n];
            break;
        case 12:
            e.r[this.a] = e.r[this.c] > e.r[this.n];
            break;
        case 13:
            e.r[this.a] = -e.r[this.c];
            break;
        case 14:
            e.r[this.a] = e.r[this.c] < e.r[this.n];
            break;
        case 15:
            e.r[this.a] = e.r[this.c] & e.r[this.n];
            break;
        case 16:
            e.r[this.a] = e.r[this.c] ^ e.r[this.n];
            break;
        case 17:
            e.r[this.a] = e.r[this.c] << e.r[this.n];
            break;
        case 18:
            e.r[this.a] = e.r[this.c] >>> e.r[this.n];
            break;
        case 19:
            e.r[this.a] = e.r[this.c] | e.r[this.n];
            break;
        case 20:
            e.r[this.a] = !e.r[this.c]
        }
    }
    ,
    c.prototype.e = function(e) {
        e.Q.push(e.C),
        e.B.push(e.k),
        e.C = e.r[this.s],
        e.k = [];
        for (var t = 0; t < this.i; t++)
            e.k.unshift(e.f.pop());
        e.g.push(e.f),
        e.f = []
    }
    ,
    n.prototype.e = function(e) {
        e.C = e.Q.pop(),
        e.k = e.B.pop(),
        e.f = e.g.pop()
    }
    ,
    e.prototype.e = function(e) {
        switch (this.t) {
        case 0:
            e.u = e.r[this.a] >= e.r[this.c];
            break;
        case 1:
            e.u = e.r[this.a] <= e.r[this.c];
            break;
        case 2:
            e.u = e.r[this.a] > e.r[this.c];
            break;
        case 3:
            e.u = e.r[this.a] < e.r[this.c];
            break;
        case 4:
            e.u = e.r[this.a] == e.r[this.c];
            break;
        case 5:
            e.u = e.r[this.a] != e.r[this.c];
            break;
        case 6:
            e.u = e.r[this.a];
            break;
        case 7:
            e.u = !e.r[this.a]
        }
    }
    ,
    o.prototype.e = function(e) {
        switch (this.t) {
        case 0:
            e.C = this.h;
            break;
        case 1:
            e.u && (e.C = this.h);
            break;
        case 2:
            e.u || (e.C = this.h);
            break;
        case 3:
            e.C = this.h,
            e.w = null
        }
        e.u = !1
    }
    ,
    r.prototype.e = function(e) {
        switch (this.t) {
        case 0:
            for (var t = [], n = 0; n < this.i; n++)
                t.unshift(e.f.pop());
            e.r[3] = e.r[this.s](t[0], t[1]);
            break;
        case 1:
            for (var r = e.f.pop(), i = [], o = 0; o < this.i; o++)
                i.unshift(e.f.pop());
            e.r[3] = e.r[this.s][r](i[0], i[1]);
            break;
        case 2:
            for (var a = [], c = 0; c < this.i; c++)
                a.unshift(e.f.pop());
            e.r[3] = new e.r[this.s](a[0],a[1])
        }
    }
    ;
    var k = function(e) {
        for (var t = 66, n = [], r = 0; r < e.length; r++) {
            var i = 24 ^ e.charCodeAt(r) ^ t;
            n.push(String.fromCharCode(i)),
            t = i
        }
        return n.join("")
    };
    function Q(e) {
        this.t = (4095 & e) >> 10,
        this.s = (1023 & e) >> 8,
        this.i = 1023 & e,
        this.h = 63 & e
    }
    function C(e) {
        this.t = (4095 & e) >> 10,
        this.a = (1023 & e) >> 8,
        this.c = (255 & e) >> 6
    }
    function B(e) {
        this.s = (3072 & e) >> 10,
        this.h = 1023 & e
    }
    function f(e) {
        this.h = 4095 & e
    }
    function g(e) {
        this.s = (3072 & e) >> 10
    }
    function u(e) {
        this.h = 4095 & e
    }
    function w(e) {
        this.t = (3840 & e) >> 8,
        this.s = (192 & e) >> 6,
        this.i = 63 & e
    }
    function G() {
        this.r = [0, 0, 0, 0],
        this.C = 0,
        this.Q = [],
        this.k = [],
        this.B = [],
        this.f = [],
        this.g = [],
        this.u = !1,
        this.G = [],
        this.b = [],
        this.o = !1,
        this.w = null,
        this.U = null,
        this.F = [],
        this.R = 0,
        this.J = {
            0: s,
            1: i,
            2: h,
            3: a,
            4: c,
            5: n,
            6: e,
            7: o,
            8: r,
            9: Q,
            10: C,
            11: B,
            12: f,
            13: g,
            14: u,
            15: w
        }
    }
    Q.prototype.e = function(e) {
        switch (this.t) {
        case 0:
            e.f.push(e.r[this.s]);
            break;
        case 1:
            e.f.push(this.i);
            break;
        case 2:
            e.f.push(e.k[this.h]);
            break;
        case 3:
            e.f.push(k(e.b[this.h]))
        }
    }
    ,
    C.prototype.e = function(A) {
        switch (this.t) {
        case 0:
            var t = A.f.pop();
            A.r[this.a] = A.r[this.c][t];
            break;
        case 1:
            var s = A.f.pop()
              , i = A.f.pop();
            A.r[this.c][s] = i;
            break;
        case 2:
            var h = A.f.pop();
            A.r[this.a] = eval(h)
        }
    }
    ,
    B.prototype.e = function(e) {
        e.r[this.s] = k(e.b[this.h])
    }
    ,
    f.prototype.e = function(e) {
        e.w = this.h
    }
    ,
    g.prototype.e = function(e) {
        throw e.r[this.s]
    }
    ,
    u.prototype.e = function(e) {
        var t = this
          , n = [0];
        e.k.forEach((function(e) {
            n.push(e)
        }
        ));
        var r = function(r) {
            var i = new G;
            return i.k = n,
            i.k[0] = r,
            i.v(e.G, t.h, e.b, e.F),
            i.r[3]
        };
        r.toString = function() {
            return "() { [native code] }"
        }
        ,
        e.r[3] = r
    }
    ,
    w.prototype.e = function(e) {
        switch (this.t) {
        case 0:
            for (var t = {}, n = 0; n < this.i; n++) {
                var r = e.f.pop();
                t[e.f.pop()] = r
            }
            e.r[this.s] = t;
            break;
        case 1:
            for (var i = [], o = 0; o < this.i; o++)
                i.unshift(e.f.pop());
            e.r[this.s] = i
        }
    }
    ,
    G.prototype.D = function(e) {
        for (var t = atob(e), n = t.charCodeAt(0) << 8 | t.charCodeAt(1), r = [], i = 2; i < n + 2; i += 2)
            r.push(t.charCodeAt(i) << 8 | t.charCodeAt(i + 1));
        this.G = r;
        for (var o = [], a = n + 2; a < t.length; ) {
            var c = t.charCodeAt(a) << 8 | t.charCodeAt(a + 1)
              , u = t.slice(a + 2, a + 2 + c);
            o.push(u),
            a += c + 2
        }
        this.b = o
    }
    ,
    G.prototype.v = function(e, t, n) {
        for (t = t || 0,
        n = n || [],
        this.C = t,
        "string" == typeof e ? this.D(e) : (this.G = e,
        this.b = n),
        this.o = !0,
        this.R = Date.now(); this.o; ) {
            var r = this.G[this.C++];
            if ("number" != typeof r)
                break;
            var i = Date.now();
            if (500 < i - this.R)
                return;
            this.R = i;
            try {
                this.e(r)
            } catch (e) {
                this.U = e,
                this.w && (this.C = this.w)
            }
        }
    }
    ,
    G.prototype.e = function(e) {
        var t = (61440 & e) >> 12;
        new this.J[t](e).e(this)
    }
    ,
    "undefined" != typeof window && (new G).v("AxjgB5MAnACoAJwBpAAAABAAIAKcAqgAMAq0AzRJZAZwUpwCqACQACACGAKcBKAAIAOcBagAIAQYAjAUGgKcBqFAuAc5hTSHZAZwqrAIGgA0QJEAJAAYAzAUGgOcCaFANRQ0R2QGcOKwChoANECRACQAsAuQABgDnAmgAJwMgAGcDYwFEAAzBmAGcSqwDhoANECRACQAGAKcD6AAGgKcEKFANEcYApwRoAAxB2AGcXKwEhoANECRACQAGAKcE6AAGgKcFKFANEdkBnGqsBUaADRAkQAkABgCnBagAGAGcdKwFxoANECRACQAGAKcGKAAYAZx+rAZGgA0QJEAJAAYA5waoABgBnIisBsaADRAkQAkABgCnBygABoCnB2hQDRHZAZyWrAeGgA0QJEAJAAYBJwfoAAwFGAGcoawIBoANECRACQAGAOQALAJkAAYBJwfgAlsBnK+sCEaADRAkQAkABgDkACwGpAAGAScH4AJbAZy9rAiGgA0QJEAJACwI5AAGAScH6AAkACcJKgAnCWgAJwmoACcJ4AFnA2MBRAAMw5gBnNasCgaADRAkQAkABgBEio0R5EAJAGwKSAFGACcKqAAEgM0RCQGGAYSATRFZAZzshgAtCs0QCQAGAYSAjRFZAZz1hgAtCw0QCQAEAAgB7AtIAgYAJwqoAASATRBJAkYCRIANEZkBnYqEAgaBxQBOYAoBxQEOYQ0giQKGAmQABgAnC6ABRgBGgo0UhD/MQ8zECALEAgaBxQBOYAoBxQEOYQ0gpEAJAoYARoKNFIQ/zEPkAAgChgLGgkUATmBkgAaAJwuhAUaCjdQFAg5kTSTJAsQCBoHFAE5gCgHFAQ5hDSCkQAkChgBGgo0UhD/MQ+QACAKGAsaCRQCOYGSABoAnC6EBRoKN1AUEDmRNJMkCxgFGgsUPzmPkgAaCJwvhAU0wCQFGAUaCxQGOZISPzZPkQAaCJwvhAU0wCQFGAUaCxQMOZISPzZPkQAaCJwvhAU0wCQFGAUaCxQSOZISPzZPkQAaCJwvhAU0wCQFGAkSAzRBJAlz/B4FUAAAAwUYIAAIBSITFQkTERwABi0GHxITAAAJLwMSGRsXHxMZAAk0Fw8HFh4NAwUABhU1EBceDwAENBcUEAAGNBkTGRcBAAFKAAkvHg4PKz4aEwIAAUsACDIVHB0QEQ4YAAsuAzs7AAoPKToKDgAHMx8SGQUvMQABSAALORoVGCQgERcCAxoACAU3ABEXAgMaAAsFGDcAERcCAxoUCgABSQAGOA8LGBsPAAYYLwsYGw8AAU4ABD8QHAUAAU8ABSkbCQ4BAAFMAAktCh8eDgMHCw8AAU0ADT4TGjQsGQMaFA0FHhkAFz4TGjQsGQMaFA0FHhk1NBkCHgUbGBEPAAFCABg9GgkjIAEmOgUHDQ8eFSU5DggJAwEcAwUAAUMAAUAAAUEADQEtFw0FBwtdWxQTGSAACBwrAxUPBR4ZAAkqGgUDAwMVEQ0ACC4DJD8eAx8RAAQ5GhUYAAFGAAAABjYRExELBAACWhgAAVoAQAg/PTw0NxcQPCQ5C3JZEBs9fkcnDRcUAXZia0Q4EhQgXHojMBY3MWVCNT0uDhMXcGQ7AUFPHigkQUwQFkhaAkEACjkTEQspNBMZPC0ABjkTEQsrLQ==");
    var b = function(e) {
        return __g._encrypt(encodeURIComponent(e))
    };
    exports.ENCRYPT_VERSION = A,
    exports.default = b;
    return b(data);
}

function sign() {
    var e='/api/v4/search_v3?t=general&q=%E8%AE%A1%E7%AE%97%E6%9C%BA&correction=1&offset=0&limit=20&filter_fields=&lc_idx=0&show_all_topics=0&search_source=Normal';
    var t;
    var n={
        "zse93": "101_3_2.0",
        "dc0": "\"AKAd6l0dWxSPTms8XrZqgIZ_svQ7C2gshxg=|1642491988\"",
        "xZst81": null
    };
    U = function(e) {
        var t = new URL(e,"https://www.zhihu.com");
        return "" + t.pathname + t.search
    }
      , M = function(e) {
        return null == e ? "" : "string" == typeof e ? e : "undefined" != typeof URLSearchParams && e instanceof URLSearchParams ? e.toString() : u()(e) ? JSON.stringify(e) : ("object" == typeof (t = e) ? null === t : "function" != typeof t) ? String(e) : "";
        var t
    }
      , B = function(e, t) {
        return void 0 === t && (t = 4096),
        !!e && function(e) {
            return new Blob([e]).size
        }(e) <= t
    };
    var r = n.zse93
        , i = n.dc0
        , o = n.xZst81
        , c = U(e)
        , u = M(t)
        , s = [r, c, i, B(u) && u, o].filter(Boolean).join("+");
    var signature = "2.0_"+myA(myL(s));
    console.log(signature);
    return signature;
}
sign();