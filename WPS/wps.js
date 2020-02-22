var navigator = {};
var window = this;

!
function(a, b) {
"object" == typeof exports && "undefined" != typeof module ? b(exports) : "function" == typeof define && define.amd ? define(["exports"], b) : b(a.JSEncrypt = {})
} (this,
function(a) {
"use strict";
function b(a) {
    return u.charAt(a)
}
function c(a, b) {
    return a & b
}
function d(a, b) {
    return a | b
}
function e(a, b) {
    return a ^ b
}
function f(a, b) {
    return a & ~b
}
function g(a) {
    if (0 == a) return - 1;
    var b = 0;
    return 0 == (65535 & a) && (a >>= 16, b += 16),
    0 == (255 & a) && (a >>= 8, b += 8),
    0 == (15 & a) && (a >>= 4, b += 4),
    0 == (3 & a) && (a >>= 2, b += 2),
    0 == (1 & a) && ++b,
    b
}
function h(a) {
    for (var b = 0; 0 != a;) a &= a - 1,
    ++b;
    return b
}
function i(a) {
    var b, c, d = "";
    for (b = 0; b + 3 <= a.length; b += 3) c = parseInt(a.substring(b, b + 3), 16),
    d += v.charAt(c >> 6) + v.charAt(63 & c);
    for (b + 1 == a.length ? (c = parseInt(a.substring(b, b + 1), 16), d += v.charAt(c << 2)) : b + 2 == a.length && (c = parseInt(a.substring(b, b + 2), 16), d += v.charAt(c >> 2) + v.charAt((3 & c) << 4)); 0 < (3 & d.length);) d += "=";
    return d
}
function j(a) {
    var c, d = "",
    e = 0,
    f = 0;
    for (c = 0; c < a.length && "=" != a.charAt(c); ++c) {
        var g = v.indexOf(a.charAt(c));
        0 > g || (0 == e ? (d += b(g >> 2), f = 3 & g, e = 1) : 1 == e ? (d += b(f << 2 | g >> 4), f = 15 & g, e = 2) : 2 == e ? (d += b(f), d += b(g >> 2), f = 3 & g, e = 3) : (d += b(f << 2 | g >> 4), d += b(15 & g), e = 0))
    }
    return 1 == e && (d += b(f << 2)),
    d
}
function k(a, b) {
    return a.length > b && (a = a.substring(0, b) + B),
    a
}
function l() {
    return new J(null)
}
function m(a, b) {
    return new J(a, b)
}
function n(a, b) {
    var c = Q[a.charCodeAt(b)];
    return null == c ? -1 : c
}
function o(a) {
    var b = l();
    return b.fromInt(a),
    b
}
function p(a) {
    var b, c = 1;
    return 0 != (b = a >>> 16) && (a = b, c += 16),
    0 != (b = a >> 8) && (a = b, c += 8),
    0 != (b = a >> 4) && (a = b, c += 4),
    0 != (b = a >> 2) && (a = b, c += 2),
    0 != (b = a >> 1) && (a = b, c += 1),
    c
}
function q() {
    if (null == R) {
        for (R = new T; U > S;) {
            var a = Math.floor(65536 * Math.random());
            V[S++] = 255 & a
        }
        for (R.init(V), S = 0; S < V.length; ++S) V[S] = 0;
        S = 0
    }
    return R.next()
}
var r, s, t, u = "0123456789abcdefghijklmnopqrstuvwxyz",
v = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
w = function(a, b) {
    return (w = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array &&
    function(a, b) {
        a.__proto__ = b
    } ||
    function(a, b) {
        for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
    })(a, b)
},
x = function(a) {
    var b;
    if (void 0 === r) {
        var c = "0123456789ABCDEF",
        d = " \f\n\r	?\u2028\u2029";
        for (r = {},
        b = 0; 16 > b; ++b) r[c.charAt(b)] = b;
        for (c = c.toLowerCase(), b = 10; 16 > b; ++b) r[c.charAt(b)] = b;
        for (b = 0; b < d.length; ++b) r[d.charAt(b)] = -1
    }
    var e = [],
    f = 0,
    g = 0;
    for (b = 0; b < a.length; ++b) {
        var h = a.charAt(b);
        if ("=" == h) break;
        if ( - 1 != (h = r[h])) {
            if (void 0 === h) throw new Error("Illegal character at offset " + b);
            f |= h,
            2 <= ++g ? (e[e.length] = f, g = f = 0) : f <<= 4
        }
    }
    if (g) throw new Error("Hex encoding incomplete: 4 bits missing");
    return e
},
y = {
    decode: function(a) {
        var b;
        if (void 0 === s) {
            var c = "= \f\n\r	?\u2028\u2029";
            for (s = {},
            b = 0; 64 > b; ++b) s["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(b)] = b;
            for (b = 0; b < c.length; ++b) s[c.charAt(b)] = -1
        }
        var d = [],
        e = 0,
        f = 0;
        for (b = 0; b < a.length; ++b) {
            var g = a.charAt(b);
            if ("=" == g) break;
            if ( - 1 != (g = s[g])) {
                if (void 0 === g) throw new Error("Illegal character at offset " + b);
                e |= g,
                4 <= ++f ? (d[d.length] = e >> 16, d[d.length] = e >> 8 & 255, d[d.length] = 255 & e, f = e = 0) : e <<= 6
            }
        }
        switch (f) {
        case 1:
            throw new Error("Base64 encoding incomplete: at least 2 bits missing");
        case 2:
            d[d.length] = e >> 10;
            break;
        case 3:
            d[d.length] = e >> 16,
            d[d.length] = e >> 8 & 255
        }
        return d
    },
    re: /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,
    unarmor: function(a) {
        var b = y.re.exec(a);
        if (b) if (b[1]) a = b[1];
        else {
            if (!b[2]) throw new Error("RegExp out of sync");
            a = b[2]
        }
        return y.decode(a)
    }
},
z = 1e13,
A = function() {
    function a(a) {
        this.buf = [ + a || 0]
    }
    return a.prototype.mulAdd = function(a, b) {
        var c, d, e = this.buf,
        f = e.length;
        for (c = 0; f > c; ++c)(d = e[c] * a + b) < z ? b = 0 : d -= (b = 0 | d / z) * z,
        e[c] = d;
        b > 0 && (e[c] = b)
    },
    a.prototype.sub = function(a) {
        var b, c, d = this.buf,
        e = d.length;
        for (b = 0; e > b; ++b)(c = d[b] - a) < 0 ? (c += z, a = 1) : a = 0,
        d[b] = c;
        for (; 0 === d[d.length - 1];) d.pop()
    },
    a.prototype.toString = function(a) {
        if (10 != (a || 10)) throw new Error("only base 10 is supported");
        for (var b = this.buf,
        c = b[b.length - 1].toString(), d = b.length - 2; d >= 0; --d) c += (z + b[d]).toString().substring(1);
        return c
    },
    a.prototype.valueOf = function() {
        for (var a = this.buf,
        b = 0,
        c = a.length - 1; c >= 0; --c) b = b * z + a[c];
        return b
    },
    a.prototype.simplify = function() {
        var a = this.buf;
        return 1 == a.length ? a[0] : this
    },
    a
} (),
B = "бн",
C = /^(\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/,
D = /^(\d\d\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/,
E = function() {
    function a(b, c) {
        this.hexDigits = "0123456789ABCDEF",
        b instanceof a ? (this.enc = b.enc, this.pos = b.pos) : (this.enc = b, this.pos = c)
    }
    return a.prototype.get = function(a) {
        if (void 0 === a && (a = this.pos++), a >= this.enc.length) throw new Error("Requesting byte offset " + a + " on a stream of length " + this.enc.length);
        return "string" == typeof this.enc ? this.enc.charCodeAt(a) : this.enc[a]
    },
    a.prototype.hexByte = function(a) {
        return this.hexDigits.charAt(a >> 4 & 15) + this.hexDigits.charAt(15 & a)
    },
    a.prototype.hexDump = function(a, b, c) {
        for (var d = "",
        e = a; b > e; ++e) if (d += this.hexByte(this.get(e)), !0 !== c) switch (15 & e) {
        case 7:
            d += "  ";
            break;
        case 15:
            d += "\n";
            break;
        default:
            d += " "
        }
        return d
    },
    a.prototype.isASCII = function(a, b) {
        for (var c = a; b > c; ++c) {
            var d = this.get(c);
            if (32 > d || d > 176) return ! 1
        }
        return ! 0
    },
    a.prototype.parseStringISO = function(a, b) {
        for (var c = "",
        d = a; b > d; ++d) c += String.fromCharCode(this.get(d));
        return c
    },
    a.prototype.parseStringUTF = function(a, b) {
        for (var c = "",
        d = a; b > d;) {
            var e = this.get(d++);
            c += String.fromCharCode(128 > e ? e: e > 191 && 224 > e ? (31 & e) << 6 | 63 & this.get(d++) : (15 & e) << 12 | (63 & this.get(d++)) << 6 | 63 & this.get(d++))
        }
        return c
    },
    a.prototype.parseStringBMP = function(a, b) {
        for (var c, d, e = "",
        f = a; b > f;) c = this.get(f++),
        d = this.get(f++),
        e += String.fromCharCode(c << 8 | d);
        return e
    },
    a.prototype.parseTime = function(a, b, c) {
        var d = this.parseStringISO(a, b),
        e = (c ? C: D).exec(d);
        return e ? (c && (e[1] = +e[1], e[1] += +e[1] < 70 ? 2e3: 1900), d = e[1] + "-" + e[2] + "-" + e[3] + " " + e[4], e[5] && (d += ":" + e[5], e[6] && (d += ":" + e[6], e[7] && (d += "." + e[7]))), e[8] && (d += " UTC", "Z" != e[8] && (d += e[8], e[9] && (d += ":" + e[9]))), d) : "Unrecognized time: " + d
    },
    a.prototype.parseInteger = function(a, b) {
        for (var c, d = this.get(a), e = d > 127, f = e ? 255 : 0, g = ""; d == f && ++a < b;) d = this.get(a);
        if (0 === (c = b - a)) return e ? -1 : 0;
        if (c > 4) {
            for (g = d, c <<= 3; 0 == (128 & ( + g ^ f));) g = +g << 1,
            --c;
            g = "(" + c + " bit)\n"
        }
        e && (d -= 256);
        for (var h = new A(d), i = a + 1; b > i; ++i) h.mulAdd(256, this.get(i));
        return g + h.toString()
    },
    a.prototype.parseBitString = function(a, b, c) {
        for (var d = this.get(a), e = "(" + ((b - a - 1 << 3) - d) + " bit)\n", f = "", g = a + 1; b > g; ++g) {
            for (var h = this.get(g), i = g == b - 1 ? d: 0, j = 7; j >= i; --j) f += h >> j & 1 ? "1": "0";
            if (f.length > c) return e + k(f, c)
        }
        return e + f
    },
    a.prototype.parseOctetString = function(a, b, c) {
        if (this.isASCII(a, b)) return k(this.parseStringISO(a, b), c);
        var d = b - a,
        e = "(" + d + " byte)\n"; (c /= 2) < d && (b = a + c);
        for (var f = a; b > f; ++f) e += this.hexByte(this.get(f));
        return d > c && (e += B),
        e
    },
    a.prototype.parseOID = function(a, b, c) {
        for (var d = "",
        e = new A,
        f = 0,
        g = a; b > g; ++g) {
            var h = this.get(g);
            if (e.mulAdd(128, 127 & h), f += 7, !(128 & h)) {
                if ("" === d) if ((e = e.simplify()) instanceof A) e.sub(80),
                d = "2." + e.toString();
                else {
                    var i = 80 > e ? 40 > e ? 0 : 1 : 2;
                    d = i + "." + (e - 40 * i)
                } else d += "." + e.toString();
                if (d.length > c) return k(d, c);
                e = new A,
                f = 0
            }
        }
        return f > 0 && (d += ".incomplete"),
        d
    },
    a
} (),
F = function() {
    function a(a, b, c, d, e) {
        if (! (d instanceof G)) throw new Error("Invalid tag value.");
        this.stream = a,
        this.header = b,
        this.length = c,
        this.tag = d,
        this.sub = e
    }
    return a.prototype.typeName = function() {
        switch (this.tag.tagClass) {
        case 0:
            switch (this.tag.tagNumber) {
            case 0:
                return "EOC";
            case 1:
                return "BOOLEAN";
            case 2:
                return "INTEGER";
            case 3:
                return "BIT_STRING";
            case 4:
                return "OCTET_STRING";
            case 5:
                return "NULL";
            case 6:
                return "OBJECT_IDENTIFIER";
            case 7:
                return "ObjectDescriptor";
            case 8:
                return "EXTERNAL";
            case 9:
                return "REAL";
            case 10:
                return "ENUMERATED";
            case 11:
                return "EMBEDDED_PDV";
            case 12:
                return "UTF8String";
            case 16:
                return "SEQUENCE";
            case 17:
                return "SET";
            case 18:
                return "NumericString";
            case 19:
                return "PrintableString";
            case 20:
                return "TeletexString";
            case 21:
                return "VideotexString";
            case 22:
                return "IA5String";
            case 23:
                return "UTCTime";
            case 24:
                return "GeneralizedTime";
            case 25:
                return "GraphicString";
            case 26:
                return "VisibleString";
            case 27:
                return "GeneralString";
            case 28:
                return "UniversalString";
            case 30:
                return "BMPString"
            }
            return "Universal_" + this.tag.tagNumber.toString();
        case 1:
            return "Application_" + this.tag.tagNumber.toString();
        case 2:
            return "[" + this.tag.tagNumber.toString() + "]";
        case 3:
            return "Private_" + this.tag.tagNumber.toString()
        }
    },
    a.prototype.content = function(a) {
        if (void 0 === this.tag) return null;
        void 0 === a && (a = 1 / 0);
        var b = this.posContent(),
        c = Math.abs(this.length);
        if (!this.tag.isUniversal()) return null !== this.sub ? "(" + this.sub.length + " elem)": this.stream.parseOctetString(b, b + c, a);
        switch (this.tag.tagNumber) {
        case 1:
            return 0 === this.stream.get(b) ? "false": "true";
        case 2:
            return this.stream.parseInteger(b, b + c);
        case 3:
            return this.sub ? "(" + this.sub.length + " elem)": this.stream.parseBitString(b, b + c, a);
        case 4:
            return this.sub ? "(" + this.sub.length + " elem)": this.stream.parseOctetString(b, b + c, a);
        case 6:
            return this.stream.parseOID(b, b + c, a);
        case 16:
        case 17:
            return null !== this.sub ? "(" + this.sub.length + " elem)": "(no elem)";
        case 12:
            return k(this.stream.parseStringUTF(b, b + c), a);
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
        case 26:
            return k(this.stream.parseStringISO(b, b + c), a);
        case 30:
            return k(this.stream.parseStringBMP(b, b + c), a);
        case 23:
        case 24:
            return this.stream.parseTime(b, b + c, 23 == this.tag.tagNumber)
        }
        return null
    },
    a.prototype.toString = function() {
        return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (null === this.sub ? "null": this.sub.length) + "]"
    },
    a.prototype.toPrettyString = function(a) {
        void 0 === a && (a = "");
        var b = a + this.typeName() + " @" + this.stream.pos;
        if (0 <= this.length && (b += "+"), b += this.length, this.tag.tagConstructed ? b += " (constructed)": !this.tag.isUniversal() || 3 != this.tag.tagNumber && 4 != this.tag.tagNumber || null === this.sub || (b += " (encapsulates)"), b += "\n", null !== this.sub) {
            a += "  ";
            for (var c = 0,
            d = this.sub.length; d > c; ++c) b += this.sub[c].toPrettyString(a)
        }
        return b
    },
    a.prototype.posStart = function() {
        return this.stream.pos
    },
    a.prototype.posContent = function() {
        return this.stream.pos + this.header
    },
    a.prototype.posEnd = function() {
        return this.stream.pos + this.header + Math.abs(this.length)
    },
    a.prototype.toHexString = function() {
        return this.stream.hexDump(this.posStart(), this.posEnd(), !0)
    },
    a.decodeLength = function(a) {
        var b = a.get(),
        c = 127 & b;
        if (c == b) return c;
        if (c > 6) throw new Error("Length over 48 bits not supported at position " + (a.pos - 1));
        if (0 === c) return null;
        for (var d = b = 0; c > d; ++d) b = 256 * b + a.get();
        return b
    },
    a.prototype.getHexStringValue = function() {
        var a = this.toHexString(),
        b = 2 * this.header,
        c = 2 * this.length;
        return a.substr(b, c)
    },
    a.decode = function(b) {
        var c;
        c = b instanceof E ? b: new E(b, 0);
        var d = new E(c),
        e = new G(c),
        f = a.decodeLength(c),
        g = c.pos,
        h = g - d.pos,
        i = null,
        j = function() {
            var b = [];
            if (null !== f) {
                for (var d = g + f; c.pos < d;) b[b.length] = a.decode(c);
                if (c.pos != d) throw new Error("Content size is not correct for container starting at offset " + g)
            } else try {
                for (;;) {
                    var e = a.decode(c);
                    if (e.tag.isEOC()) break;
                    b[b.length] = e
                }
                f = g - c.pos
            } catch(b) {
                throw new Error("Exception while decoding undefined length content: " + b)
            }
            return b
        };
        if (e.tagConstructed) i = j();
        else if (e.isUniversal() && (3 == e.tagNumber || 4 == e.tagNumber)) try {
            if (3 == e.tagNumber && 0 != c.get()) throw new Error("BIT STRINGs with unused bits cannot encapsulate.");
            i = j();
            for (var k = 0; k < i.length; ++k) if (i[k].tag.isEOC()) throw new Error("EOC is not supposed to be actual content.")
        } catch(b) {
            i = null
        }
        if (null === i) {
            if (null === f) throw new Error("We can't skip over an invalid tag with undefined length at offset " + g);
            c.pos = g + Math.abs(f)
        }
        return new a(d, h, f, e, i)
    },
    a
} (),
G = function() {
    function a(a) {
        var b = a.get();
        if (this.tagClass = b >> 6, this.tagConstructed = 0 != (32 & b), this.tagNumber = 31 & b, 31 == this.tagNumber) {
            for (var c = new A; b = a.get(), c.mulAdd(128, 127 & b), 128 & b;);
            this.tagNumber = c.simplify()
        }
    }
    return a.prototype.isUniversal = function() {
        return 0 === this.tagClass
    },
    a.prototype.isEOC = function() {
        return 0 === this.tagClass && 0 === this.tagNumber
    },
    a
} (),
H = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997],
I = (1 << 26) / H[H.length - 1],
J = function() {
    function a(a, b, c) {
        null != a && ("number" == typeof a ? this.fromNumber(a, b, c) : null == b && "string" != typeof a ? this.fromString(a, 256) : this.fromString(a, b))
    }
    return a.prototype.toString = function(a) {
        if (this.s < 0) return "-" + this.negate().toString(a);
        var c;
        if (16 == a) c = 4;
        else if (8 == a) c = 3;
        else if (2 == a) c = 1;
        else if (32 == a) c = 5;
        else {
            if (4 != a) return this.toRadix(a);
            c = 2
        }
        var d, e = (1 << c) - 1,
        f = !1,
        g = "",
        h = this.t,
        i = this.DB - h * this.DB % c;
        if (0 < h--) for (i < this.DB && 0 < (d = this[h] >> i) && (f = !0, g = b(d)); h >= 0;) c > i ? (d = (this[h] & (1 << i) - 1) << c - i, d |= this[--h] >> (i += this.DB - c)) : (d = this[h] >> (i -= c) & e, 0 >= i && (i += this.DB, --h)),
        d > 0 && (f = !0),
        f && (g += b(d));
        return f ? g: "0"
    },
    a.prototype.negate = function() {
        var b = l();
        return a.ZERO.subTo(this, b),
        b
    },
    a.prototype.abs = function() {
        return this.s < 0 ? this.negate() : this
    },
    a.prototype.compareTo = function(a) {
        var b = this.s - a.s;
        if (0 != b) return b;
        var c = this.t;
        if (0 != (b = c - a.t)) return this.s < 0 ? -b: b;
        for (; 0 <= --c;) if (0 != (b = this[c] - a[c])) return b;
        return 0
    },
    a.prototype.bitLength = function() {
        return this.t <= 0 ? 0 : this.DB * (this.t - 1) + p(this[this.t - 1] ^ this.s & this.DM)
    },
    a.prototype.mod = function(b) {
        var c = l();
        return this.abs().divRemTo(b, null, c),
        this.s < 0 && 0 < c.compareTo(a.ZERO) && b.subTo(c, c),
        c
    },
    a.prototype.modPowInt = function(a, b) {
        var c;
        return c = 256 > a || b.isEven() ? new L(b) : new M(b),
        this.exp(a, c)
    },
    a.prototype.clone = function() {
        var a = l();
        return this.copyTo(a),
        a
    },
    a.prototype.intValue = function() {
        if (this.s < 0) {
            if (1 == this.t) return this[0] - this.DV;
            if (0 == this.t) return - 1
        } else {
            if (1 == this.t) return this[0];
            if (0 == this.t) return 0
        }
        return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
    },
    a.prototype.byteValue = function() {
        return 0 == this.t ? this.s: this[0] << 24 >> 24
    },
    a.prototype.shortValue = function() {
        return 0 == this.t ? this.s: this[0] << 16 >> 16
    },
    a.prototype.signum = function() {
        return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
    },
    a.prototype.toByteArray = function() {
        var a = this.t,
        b = [];
        b[0] = this.s;
        var c, d = this.DB - a * this.DB % 8,
        e = 0;
        if (0 < a--) for (d < this.DB && (c = this[a] >> d) != (this.s & this.DM) >> d && (b[e++] = c | this.s << this.DB - d); a >= 0;) 8 > d ? (c = (this[a] & (1 << d) - 1) << 8 - d, c |= this[--a] >> (d += this.DB - 8)) : (c = this[a] >> (d -= 8) & 255, 0 >= d && (d += this.DB, --a)),
        0 != (128 & c) && (c |= -256),
        0 == e && (128 & this.s) != (128 & c) && ++e,
        (e > 0 || c != this.s) && (b[e++] = c);
        return b
    },
    a.prototype.equals = function(a) {
        return 0 == this.compareTo(a)
    },
    a.prototype.min = function(a) {
        return this.compareTo(a) < 0 ? this: a
    },
    a.prototype.max = function(a) {
        return 0 < this.compareTo(a) ? this: a
    },
    a.prototype.and = function(a) {
        var b = l();
        return this.bitwiseTo(a, c, b),
        b
    },
    a.prototype.or = function(a) {
        var b = l();
        return this.bitwiseTo(a, d, b),
        b
    },
    a.prototype.xor = function(a) {
        var b = l();
        return this.bitwiseTo(a, e, b),
        b
    },
    a.prototype.andNot = function(a) {
        var b = l();
        return this.bitwiseTo(a, f, b),
        b
    },
    a.prototype.not = function() {
        for (var a = l(), b = 0; b < this.t; ++b) a[b] = this.DM & ~this[b];
        return a.t = this.t,
        a.s = ~this.s,
        a
    },
    a.prototype.shiftLeft = function(a) {
        var b = l();
        return 0 > a ? this.rShiftTo( - a, b) : this.lShiftTo(a, b),
        b
    },
    a.prototype.shiftRight = function(a) {
        var b = l();
        return 0 > a ? this.lShiftTo( - a, b) : this.rShiftTo(a, b),
        b
    },
    a.prototype.getLowestSetBit = function() {
        for (var a = 0; a < this.t; ++a) if (0 != this[a]) return a * this.DB + g(this[a]);
        return this.s < 0 ? this.t * this.DB: -1
    },
    a.prototype.bitCount = function() {
        for (var a = 0,
        b = this.s & this.DM,
        c = 0; c < this.t; ++c) a += h(this[c] ^ b);
        return a
    },
    a.prototype.testBit = function(a) {
        var b = Math.floor(a / this.DB);
        return b >= this.t ? 0 != this.s: 0 != (this[b] & 1 << a % this.DB)
    },
    a.prototype.setBit = function(a) {
        return this.changeBit(a, d)
    },
    a.prototype.clearBit = function(a) {
        return this.changeBit(a, f)
    },
    a.prototype.flipBit = function(a) {
        return this.changeBit(a, e)
    },
    a.prototype.add = function(a) {
        var b = l();
        return this.addTo(a, b),
        b
    },
    a.prototype.subtract = function(a) {
        var b = l();
        return this.subTo(a, b),
        b
    },
    a.prototype.multiply = function(a) {
        var b = l();
        return this.multiplyTo(a, b),
        b
    },
    a.prototype.divide = function(a) {
        var b = l();
        return this.divRemTo(a, b, null),
        b
    },
    a.prototype.remainder = function(a) {
        var b = l();
        return this.divRemTo(a, null, b),
        b
    },
    a.prototype.divideAndRemainder = function(a) {
        var b = l(),
        c = l();
        return this.divRemTo(a, b, c),
        [b, c]
    },
    a.prototype.modPow = function(a, b) {
        var c, d, e = a.bitLength(),
        f = o(1);
        if (0 >= e) return f;
        c = 18 > e ? 1 : 48 > e ? 3 : 144 > e ? 4 : 768 > e ? 5 : 6,
        d = 8 > e ? new L(b) : b.isEven() ? new N(b) : new M(b);
        var g = [],
        h = 3,
        i = c - 1,
        j = (1 << c) - 1;
        if (g[1] = d.convert(this), c > 1) {
            var k = l();
            for (d.sqrTo(g[1], k); j >= h;) g[h] = l(),
            d.mulTo(k, g[h - 2], g[h]),
            h += 2
        }
        var m, n, q = a.t - 1,
        r = !0,
        s = l();
        for (e = p(a[q]) - 1; q >= 0;) {
            for (e >= i ? m = a[q] >> e - i & j: (m = (a[q] & (1 << e + 1) - 1) << i - e, q > 0 && (m |= a[q - 1] >> this.DB + e - i)), h = c; 0 == (1 & m);) m >>= 1,
            --h;
            if ((e -= h) < 0 && (e += this.DB, --q), r) g[m].copyTo(f),
            r = !1;
            else {
                for (; h > 1;) d.sqrTo(f, s),
                d.sqrTo(s, f),
                h -= 2;
                h > 0 ? d.sqrTo(f, s) : (n = f, f = s, s = n),
                d.mulTo(s, g[m], f)
            }
            for (; q >= 0 && 0 == (a[q] & 1 << e);) d.sqrTo(f, s),
            n = f,
            f = s,
            s = n,
            --e < 0 && (e = this.DB - 1, --q)
        }
        return d.revert(f)
    },
    a.prototype.modInverse = function(b) {
        var c = b.isEven();
        if (this.isEven() && c || 0 == b.signum()) return a.ZERO;
        for (var d = b.clone(), e = this.clone(), f = o(1), g = o(0), h = o(0), i = o(1); 0 != d.signum();) {
            for (; d.isEven();) d.rShiftTo(1, d),
            c ? (f.isEven() && g.isEven() || (f.addTo(this, f), g.subTo(b, g)), f.rShiftTo(1, f)) : g.isEven() || g.subTo(b, g),
            g.rShiftTo(1, g);
            for (; e.isEven();) e.rShiftTo(1, e),
            c ? (h.isEven() && i.isEven() || (h.addTo(this, h), i.subTo(b, i)), h.rShiftTo(1, h)) : i.isEven() || i.subTo(b, i),
            i.rShiftTo(1, i);
            0 <= d.compareTo(e) ? (d.subTo(e, d), c && f.subTo(h, f), g.subTo(i, g)) : (e.subTo(d, e), c && h.subTo(f, h), i.subTo(g, i))
        }
        return 0 != e.compareTo(a.ONE) ? a.ZERO: 0 <= i.compareTo(b) ? i.subtract(b) : i.signum() < 0 ? (i.addTo(b, i), i.signum() < 0 ? i.add(b) : i) : i
    },
    a.prototype.pow = function(a) {
        return this.exp(a, new K)
    },
    a.prototype.gcd = function(a) {
        var b = this.s < 0 ? this.negate() : this.clone(),
        c = a.s < 0 ? a.negate() : a.clone();
        if (b.compareTo(c) < 0) {
            var d = b;
            b = c,
            c = d
        }
        var e = b.getLowestSetBit(),
        f = c.getLowestSetBit();
        if (0 > f) return b;
        for (f > e && (f = e), f > 0 && (b.rShiftTo(f, b), c.rShiftTo(f, c)); 0 < b.signum();) 0 < (e = b.getLowestSetBit()) && b.rShiftTo(e, b),
        0 < (e = c.getLowestSetBit()) && c.rShiftTo(e, c),
        0 <= b.compareTo(c) ? (b.subTo(c, b), b.rShiftTo(1, b)) : (c.subTo(b, c), c.rShiftTo(1, c));
        return f > 0 && c.lShiftTo(f, c),
        c
    },
    a.prototype.isProbablePrime = function(a) {
        var b, c = this.abs();
        if (1 == c.t && c[0] <= H[H.length - 1]) {
            for (b = 0; b < H.length; ++b) if (c[0] == H[b]) return ! 0;
            return ! 1
        }
        if (c.isEven()) return ! 1;
        for (b = 1; b < H.length;) {
            for (var d = H[b], e = b + 1; e < H.length && I > d;) d *= H[e++];
            for (d = c.modInt(d); e > b;) if (d % H[b++] == 0) return ! 1
        }
        return c.millerRabin(a)
    },
    a.prototype.copyTo = function(a) {
        for (var b = this.t - 1; b >= 0; --b) a[b] = this[b];
        a.t = this.t,
        a.s = this.s
    },
    a.prototype.fromInt = function(a) {
        this.t = 1,
        this.s = 0 > a ? -1 : 0,
        a > 0 ? this[0] = a: -1 > a ? this[0] = a + this.DV: this.t = 0
    },
    a.prototype.fromString = function(b, c) {
        var d;
        if (16 == c) d = 4;
        else if (8 == c) d = 3;
        else if (256 == c) d = 8;
        else if (2 == c) d = 1;
        else if (32 == c) d = 5;
        else {
            if (4 != c) return void this.fromRadix(b, c);
            d = 2
        }
        this.t = 0,
        this.s = 0;
        for (var e = b.length,
        f = !1,
        g = 0; 0 <= --e;) {
            var h = 8 == d ? 255 & +b[e] : n(b, e);
            0 > h ? "-" == b.charAt(e) && (f = !0) : (f = !1, 0 == g ? this[this.t++] = h: g + d > this.DB ? (this[this.t - 1] |= (h & (1 << this.DB - g) - 1) << g, this[this.t++] = h >> this.DB - g) : this[this.t - 1] |= h << g, (g += d) >= this.DB && (g -= this.DB))
        }
        8 == d && 0 != (128 & +b[0]) && (this.s = -1, g > 0 && (this[this.t - 1] |= (1 << this.DB - g) - 1 << g)),
        this.clamp(),
        f && a.ZERO.subTo(this, this)
    },
    a.prototype.clamp = function() {
        for (var a = this.s & this.DM; 0 < this.t && this[this.t - 1] == a;)--this.t
    },
    a.prototype.dlShiftTo = function(a, b) {
        var c;
        for (c = this.t - 1; c >= 0; --c) b[c + a] = this[c];
        for (c = a - 1; c >= 0; --c) b[c] = 0;
        b.t = this.t + a,
        b.s = this.s
    },
    a.prototype.drShiftTo = function(a, b) {
        for (var c = a; c < this.t; ++c) b[c - a] = this[c];
        b.t = Math.max(this.t - a, 0),
        b.s = this.s
    },
    a.prototype.lShiftTo = function(a, b) {
        for (var c = a % this.DB,
        d = this.DB - c,
        e = (1 << d) - 1, f = Math.floor(a / this.DB), g = this.s << c & this.DM, h = this.t - 1; h >= 0; --h) b[h + f + 1] = this[h] >> d | g,
        g = (this[h] & e) << c;
        for (h = f - 1; h >= 0; --h) b[h] = 0;
        b[f] = g,
        b.t = this.t + f + 1,
        b.s = this.s,
        b.clamp()
    },
    a.prototype.rShiftTo = function(a, b) {
        b.s = this.s;
        var c = Math.floor(a / this.DB);
        if (c >= this.t) b.t = 0;
        else {
            var d = a % this.DB,
            e = this.DB - d,
            f = (1 << d) - 1;
            b[0] = this[c] >> d;
            for (var g = c + 1; g < this.t; ++g) b[g - c - 1] |= (this[g] & f) << e,
            b[g - c] = this[g] >> d;
            d > 0 && (b[this.t - c - 1] |= (this.s & f) << e),
            b.t = this.t - c,
            b.clamp()
        }
    },
    a.prototype.subTo = function(a, b) {
        for (var c = 0,
        d = 0,
        e = Math.min(a.t, this.t); e > c;) d += this[c] - a[c],
        b[c++] = d & this.DM,
        d >>= this.DB;
        if (a.t < this.t) {
            for (d -= a.s; c < this.t;) d += this[c],
            b[c++] = d & this.DM,
            d >>= this.DB;
            d += this.s
        } else {
            for (d += this.s; c < a.t;) d -= a[c],
            b[c++] = d & this.DM,
            d >>= this.DB;
            d -= a.s
        }
        b.s = 0 > d ? -1 : 0,
        -1 > d ? b[c++] = this.DV + d: d > 0 && (b[c++] = d),
        b.t = c,
        b.clamp()
    },
    a.prototype.multiplyTo = function(b, c) {
        var d = this.abs(),
        e = b.abs(),
        f = d.t;
        for (c.t = f + e.t; 0 <= --f;) c[f] = 0;
        for (f = 0; f < e.t; ++f) c[f + d.t] = d.am(0, e[f], c, f, 0, d.t);
        c.s = 0,
        c.clamp(),
        this.s != b.s && a.ZERO.subTo(c, c)
    },
    a.prototype.squareTo = function(a) {
        for (var b = this.abs(), c = a.t = 2 * b.t; 0 <= --c;) a[c] = 0;
        for (c = 0; c < b.t - 1; ++c) {
            var d = b.am(c, b[c], a, 2 * c, 0, 1); (a[c + b.t] += b.am(c + 1, 2 * b[c], a, 2 * c + 1, d, b.t - c - 1)) >= b.DV && (a[c + b.t] -= b.DV, a[c + b.t + 1] = 1)
        }
        0 < a.t && (a[a.t - 1] += b.am(c, b[c], a, 2 * c, 0, 1)),
        a.s = 0,
        a.clamp()
    },
    a.prototype.divRemTo = function(b, c, d) {
        var e = b.abs();
        if (! (e.t <= 0)) {
            var f = this.abs();
            if (f.t < e.t) return null != c && c.fromInt(0),
            void(null != d && this.copyTo(d));
            null == d && (d = l());
            var g = l(),
            h = this.s,
            i = b.s,
            j = this.DB - p(e[e.t - 1]);
            j > 0 ? (e.lShiftTo(j, g), f.lShiftTo(j, d)) : (e.copyTo(g), f.copyTo(d));
            var k = g.t,
            m = g[k - 1];
            if (0 != m) {
                var n = m * (1 << this.F1) + (k > 1 ? g[k - 2] >> this.F2: 0),
                o = this.FV / n,
                q = (1 << this.F1) / n,
                r = 1 << this.F2,
                s = d.t,
                t = s - k,
                u = null == c ? l() : c;
                for (g.dlShiftTo(t, u), 0 <= d.compareTo(u) && (d[d.t++] = 1, d.subTo(u, d)), a.ONE.dlShiftTo(k, u), u.subTo(g, g); g.t < k;) g[g.t++] = 0;
                for (; 0 <= --t;) {
                    var v = d[--s] == m ? this.DM: Math.floor(d[s] * o + (d[s - 1] + r) * q);
                    if ((d[s] += g.am(0, v, d, t, 0, k)) < v) for (g.dlShiftTo(t, u), d.subTo(u, d); d[s] < --v;) d.subTo(u, d)
                }
                null != c && (d.drShiftTo(k, c), h != i && a.ZERO.subTo(c, c)),
                d.t = k,
                d.clamp(),
                j > 0 && d.rShiftTo(j, d),
                0 > h && a.ZERO.subTo(d, d)
            }
        }
    },
    a.prototype.invDigit = function() {
        if (this.t < 1) return 0;
        var a = this[0];
        if (0 == (1 & a)) return 0;
        var b = 3 & a;
        return 0 < (b = (b = (b = (b = b * (2 - (15 & a) * b) & 15) * (2 - (255 & a) * b) & 255) * (2 - ((65535 & a) * b & 65535)) & 65535) * (2 - a * b % this.DV) % this.DV) ? this.DV - b: -b
    },
    a.prototype.isEven = function() {
        return 0 == (0 < this.t ? 1 & this[0] : this.s)
    },
    a.prototype.exp = function(b, c) {
        if (b > 4294967295 || 1 > b) return a.ONE;
        var d = l(),
        e = l(),
        f = c.convert(this),
        g = p(b) - 1;
        for (f.copyTo(d); 0 <= --g;) if (c.sqrTo(d, e), (b & 1 << g) > 0) c.mulTo(e, f, d);
        else {
            var h = d;
            d = e,
            e = h
        }
        return c.revert(d)
    },
    a.prototype.chunkSize = function(a) {
        return Math.floor(Math.LN2 * this.DB / Math.log(a))
    },
    a.prototype.toRadix = function(a) {
        if (null == a && (a = 10), 0 == this.signum() || 2 > a || a > 36) return "0";
        var b = this.chunkSize(a),
        c = Math.pow(a, b),
        d = o(c),
        e = l(),
        f = l(),
        g = "";
        for (this.divRemTo(d, e, f); 0 < e.signum();) g = (c + f.intValue()).toString(a).substr(1) + g,
        e.divRemTo(d, e, f);
        return f.intValue().toString(a) + g
    },
    a.prototype.fromRadix = function(b, c) {
        this.fromInt(0),
        null == c && (c = 10);
        for (var d = this.chunkSize(c), e = Math.pow(c, d), f = !1, g = 0, h = 0, i = 0; i < b.length; ++i) {
            var j = n(b, i);
            0 > j ? "-" == b.charAt(i) && 0 == this.signum() && (f = !0) : (h = c * h + j, ++g >= d && (this.dMultiply(e), this.dAddOffset(h, 0), h = g = 0))
        }
        g > 0 && (this.dMultiply(Math.pow(c, g)), this.dAddOffset(h, 0)),
        f && a.ZERO.subTo(this, this)
    },
    a.prototype.fromNumber = function(b, c, e) {
        if ("number" == typeof c) if (2 > b) this.fromInt(1);
        else for (this.fromNumber(b, e), this.testBit(b - 1) || this.bitwiseTo(a.ONE.shiftLeft(b - 1), d, this), this.isEven() && this.dAddOffset(1, 0); ! this.isProbablePrime(c);) this.dAddOffset(2, 0),
        this.bitLength() > b && this.subTo(a.ONE.shiftLeft(b - 1), this);
        else {
            var f = [],
            g = 7 & b;
            f.length = 1 + (b >> 3),
            c.nextBytes(f),
            g > 0 ? f[0] &= (1 << g) - 1 : f[0] = 0,
            this.fromString(f, 256)
        }
    },
    a.prototype.bitwiseTo = function(a, b, c) {
        var d, e, f = Math.min(a.t, this.t);
        for (d = 0; f > d; ++d) c[d] = b(this[d], a[d]);
        if (a.t < this.t) {
            for (e = a.s & this.DM, d = f; d < this.t; ++d) c[d] = b(this[d], e);
            c.t = this.t
        } else {
            for (e = this.s & this.DM, d = f; d < a.t; ++d) c[d] = b(e, a[d]);
            c.t = a.t
        }
        c.s = b(this.s, a.s),
        c.clamp()
    },
    a.prototype.changeBit = function(b, c) {
        var d = a.ONE.shiftLeft(b);
        return this.bitwiseTo(d, c, d),
        d
    },
    a.prototype.addTo = function(a, b) {
        for (var c = 0,
        d = 0,
        e = Math.min(a.t, this.t); e > c;) d += this[c] + a[c],
        b[c++] = d & this.DM,
        d >>= this.DB;
        if (a.t < this.t) {
            for (d += a.s; c < this.t;) d += this[c],
            b[c++] = d & this.DM,
            d >>= this.DB;
            d += this.s
        } else {
            for (d += this.s; c < a.t;) d += a[c],
            b[c++] = d & this.DM,
            d >>= this.DB;
            d += a.s
        }
        b.s = 0 > d ? -1 : 0,
        d > 0 ? b[c++] = d: -1 > d && (b[c++] = this.DV + d),
        b.t = c,
        b.clamp()
    },
    a.prototype.dMultiply = function(a) {
        this[this.t] = this.am(0, a - 1, this, 0, 0, this.t),
        ++this.t,
        this.clamp()
    },
    a.prototype.dAddOffset = function(a, b) {
        if (0 != a) {
            for (; this.t <= b;) this[this.t++] = 0;
            for (this[b] += a; this[b] >= this.DV;) this[b] -= this.DV,
            ++b >= this.t && (this[this.t++] = 0),
            ++this[b]
        }
    },
    a.prototype.multiplyLowerTo = function(a, b, c) {
        var d = Math.min(this.t + a.t, b);
        for (c.s = 0, c.t = d; d > 0;) c[--d] = 0;
        for (var e = c.t - this.t; e > d; ++d) c[d + this.t] = this.am(0, a[d], c, d, 0, this.t);
        for (e = Math.min(a.t, b); e > d; ++d) this.am(0, a[d], c, d, 0, b - d);
        c.clamp()
    },
    a.prototype.multiplyUpperTo = function(a, b, c) {--b;
        var d = c.t = this.t + a.t - b;
        for (c.s = 0; 0 <= --d;) c[d] = 0;
        for (d = Math.max(b - this.t, 0); d < a.t; ++d) c[this.t + d - b] = this.am(b - d, a[d], c, 0, 0, this.t + d - b);
        c.clamp(),
        c.drShiftTo(1, c)
    },
    a.prototype.modInt = function(a) {
        if (0 >= a) return 0;
        var b = this.DV % a,
        c = this.s < 0 ? a - 1 : 0;
        if (0 < this.t) if (0 == b) c = this[0] % a;
        else for (var d = this.t - 1; d >= 0; --d) c = (b * c + this[d]) % a;
        return c
    },
    a.prototype.millerRabin = function(b) {
        var c = this.subtract(a.ONE),
        d = c.getLowestSetBit();
        if (0 >= d) return ! 1;
        var e = c.shiftRight(d);
        H.length < (b = b + 1 >> 1) && (b = H.length);
        for (var f = l(), g = 0; b > g; ++g) {
            f.fromInt(H[Math.floor(Math.random() * H.length)]);
            var h = f.modPow(e, this);
            if (0 != h.compareTo(a.ONE) && 0 != h.compareTo(c)) {
                for (var i = 1; i++<d && 0 != h.compareTo(c);) if (0 == (h = h.modPowInt(2, this)).compareTo(a.ONE)) return ! 1;
                if (0 != h.compareTo(c)) return ! 1
            }
        }
        return ! 0
    },
    a.prototype.square = function() {
        var a = l();
        return this.squareTo(a),
        a
    },
    a.prototype.gcda = function(a, b) {
        var c = this.s < 0 ? this.negate() : this.clone(),
        d = a.s < 0 ? a.negate() : a.clone();
        if (c.compareTo(d) < 0) {
            var e = c;
            c = d,
            d = e
        }
        var f = c.getLowestSetBit(),
        g = d.getLowestSetBit();
        if (0 > g) b(c);
        else {
            g > f && (g = f),
            g > 0 && (c.rShiftTo(g, c), d.rShiftTo(g, d));
            var h = function() {
                0 < (f = c.getLowestSetBit()) && c.rShiftTo(f, c),
                0 < (f = d.getLowestSetBit()) && d.rShiftTo(f, d),
                0 <= c.compareTo(d) ? (c.subTo(d, c), c.rShiftTo(1, c)) : (d.subTo(c, d), d.rShiftTo(1, d)),
                0 < c.signum() ? setTimeout(h, 0) : (g > 0 && d.lShiftTo(g, d), setTimeout(function() {
                    b(d)
                },
                0))
            };
            setTimeout(h, 10)
        }
    },
    a.prototype.fromNumberAsync = function(b, c, e, f) {
        if ("number" == typeof c) if (2 > b) this.fromInt(1);
        else {
            this.fromNumber(b, e),
            this.testBit(b - 1) || this.bitwiseTo(a.ONE.shiftLeft(b - 1), d, this),
            this.isEven() && this.dAddOffset(1, 0);
            var g = this,
            h = function() {
                g.dAddOffset(2, 0),
                g.bitLength() > b && g.subTo(a.ONE.shiftLeft(b - 1), g),
                g.isProbablePrime(c) ? setTimeout(function() {
                    f()
                },
                0) : setTimeout(h, 0)
            };
            setTimeout(h, 0)
        } else {
            var i = [],
            j = 7 & b;
            i.length = 1 + (b >> 3),
            c.nextBytes(i),
            j > 0 ? i[0] &= (1 << j) - 1 : i[0] = 0,
            this.fromString(i, 256)
        }
    },
    a
} (),
K = function() {
    function a() {}
    return a.prototype.convert = function(a) {
        return a
    },
    a.prototype.revert = function(a) {
        return a
    },
    a.prototype.mulTo = function(a, b, c) {
        a.multiplyTo(b, c)
    },
    a.prototype.sqrTo = function(a, b) {
        a.squareTo(b)
    },
    a
} (),
L = function() {
    function a(a) {
        this.m = a
    }
    return a.prototype.convert = function(a) {
        return a.s < 0 || 0 <= a.compareTo(this.m) ? a.mod(this.m) : a
    },
    a.prototype.revert = function(a) {
        return a
    },
    a.prototype.reduce = function(a) {
        a.divRemTo(this.m, null, a)
    },
    a.prototype.mulTo = function(a, b, c) {
        a.multiplyTo(b, c),
        this.reduce(c)
    },
    a.prototype.sqrTo = function(a, b) {
        a.squareTo(b),
        this.reduce(b)
    },
    a
} (),
M = function() {
    function a(a) {
        this.m = a,
        this.mp = a.invDigit(),
        this.mpl = 32767 & this.mp,
        this.mph = this.mp >> 15,
        this.um = (1 << a.DB - 15) - 1,
        this.mt2 = 2 * a.t
    }
    return a.prototype.convert = function(a) {
        var b = l();
        return a.abs().dlShiftTo(this.m.t, b),
        b.divRemTo(this.m, null, b),
        a.s < 0 && 0 < b.compareTo(J.ZERO) && this.m.subTo(b, b),
        b
    },
    a.prototype.revert = function(a) {
        var b = l();
        return a.copyTo(b),
        this.reduce(b),
        b
    },
    a.prototype.reduce = function(a) {
        for (; a.t <= this.mt2;) a[a.t++] = 0;
        for (var b = 0; b < this.m.t; ++b) {
            var c = 32767 & a[b],
            d = c * this.mpl + ((c * this.mph + (a[b] >> 15) * this.mpl & this.um) << 15) & a.DM;
            for (a[c = b + this.m.t] += this.m.am(0, d, a, b, 0, this.m.t); a[c] >= a.DV;) a[c] -= a.DV,
            a[++c]++
        }
        a.clamp(),
        a.drShiftTo(this.m.t, a),
        0 <= a.compareTo(this.m) && a.subTo(this.m, a)
    },
    a.prototype.mulTo = function(a, b, c) {
        a.multiplyTo(b, c),
        this.reduce(c)
    },
    a.prototype.sqrTo = function(a, b) {
        a.squareTo(b),
        this.reduce(b)
    },
    a
} (),
N = function() {
    function a(a) {
        this.m = a,
        this.r2 = l(),
        this.q3 = l(),
        J.ONE.dlShiftTo(2 * a.t, this.r2),
        this.mu = this.r2.divide(a)
    }
    return a.prototype.convert = function(a) {
        if (a.s < 0 || a.t > 2 * this.m.t) return a.mod(this.m);
        if (a.compareTo(this.m) < 0) return a;
        var b = l();
        return a.copyTo(b),
        this.reduce(b),
        b
    },
    a.prototype.revert = function(a) {
        return a
    },
    a.prototype.reduce = function(a) {
        for (a.drShiftTo(this.m.t - 1, this.r2), a.t > this.m.t + 1 && (a.t = this.m.t + 1, a.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); a.compareTo(this.r2) < 0;) a.dAddOffset(1, this.m.t + 1);
        for (a.subTo(this.r2, a); 0 <= a.compareTo(this.m);) a.subTo(this.m, a)
    },
    a.prototype.mulTo = function(a, b, c) {
        a.multiplyTo(b, c),
        this.reduce(c)
    },
    a.prototype.sqrTo = function(a, b) {
        a.squareTo(b),
        this.reduce(b)
    },
    a
} ();
"Microsoft Internet Explorer" == navigator.appName ? (J.prototype.am = function(a, b, c, d, e, f) {
    for (var g = 32767 & b,
    h = b >> 15; 0 <= --f;) {
        var i = 32767 & this[a],
        j = this[a++] >> 15,
        k = h * i + j * g;
        e = ((i = g * i + ((32767 & k) << 15) + c[d] + (1073741823 & e)) >>> 30) + (k >>> 15) + h * j + (e >>> 30),
        c[d++] = 1073741823 & i
    }
    return e
},
t = 30) : "Netscape" != navigator.appName ? (J.prototype.am = function(a, b, c, d, e, f) {
    for (; 0 <= --f;) {
        var g = b * this[a++] + c[d] + e;
        e = Math.floor(g / 67108864),
        c[d++] = 67108863 & g
    }
    return e
},
t = 26) : (J.prototype.am = function(a, b, c, d, e, f) {
    for (var g = 16383 & b,
    h = b >> 14; 0 <= --f;) {
        var i = 16383 & this[a],
        j = this[a++] >> 14,
        k = h * i + j * g;
        e = ((i = g * i + ((16383 & k) << 14) + c[d] + e) >> 28) + (k >> 14) + h * j,
        c[d++] = 268435455 & i
    }
    return e
},
t = 28),
J.prototype.DB = t,
J.prototype.DM = (1 << t) - 1,
J.prototype.DV = 1 << t,
J.prototype.FV = Math.pow(2, 52),
J.prototype.F1 = 52 - t,
J.prototype.F2 = 2 * t - 52;
var O, P, Q = [];
for (O = "0".charCodeAt(0), P = 0; 9 >= P; ++P) Q[O++] = P;
for (O = "a".charCodeAt(0), P = 10; 36 > P; ++P) Q[O++] = P;
for (O = "A".charCodeAt(0), P = 10; 36 > P; ++P) Q[O++] = P;
J.ZERO = o(0),
J.ONE = o(1);
var R, S, T = function() {
    function a() {
        this.i = 0,
        this.j = 0,
        this.S = []
    }
    return a.prototype.init = function(a) {
        var b, c, d;
        for (b = 0; 256 > b; ++b) this.S[b] = b;
        for (b = c = 0; 256 > b; ++b) c = c + this.S[b] + a[b % a.length] & 255,
        d = this.S[b],
        this.S[b] = this.S[c],
        this.S[c] = d;
        this.i = 0,
        this.j = 0
    },
    a.prototype.next = function() {
        var a;
        return this.i = this.i + 1 & 255,
        this.j = this.j + this.S[this.i] & 255,
        a = this.S[this.i],
        this.S[this.i] = this.S[this.j],
        this.S[this.j] = a,
        this.S[a + this.S[this.i] & 255]
    },
    a
} (),
U = 256,
V = null;
if (null == V) {
    V = [];
    var W = void(S = 0);
    if (window.crypto && window.crypto.getRandomValues) {
        var X = new Uint32Array(256);
        for (window.crypto.getRandomValues(X), W = 0; W < X.length; ++W) V[S++] = 255 & X[W]
    }
    var Y = function(a) {
        if (this.count = this.count || 0, 256 <= this.count || S >= U) window.removeEventListener ? window.removeEventListener("mousemove", Y, !1) : window.detachEvent && window.detachEvent("onmousemove", Y);
        else try {
            var b = a.x + a.y;
            V[S++] = 255 & b,
            this.count += 1
        } catch(a) {}
    };
    window.addEventListener ? window.addEventListener("mousemove", Y, !1) : window.attachEvent && window.attachEvent("onmousemove", Y)
}
var Z = function() {
    function a() {}
    return a.prototype.nextBytes = function(a) {
        for (var b = 0; b < a.length; ++b) a[b] = q()
    },
    a
} (),
$ = function() {
    function a() {
        this.n = null,
        this.e = 0,
        this.d = null,
        this.p = null,
        this.q = null,
        this.dmp1 = null,
        this.dmq1 = null,
        this.coeff = null
    }
    return a.prototype.doPublic = function(a) {
        return a.modPowInt(this.e, this.n)
    },
    a.prototype.doPrivate = function(a) {
        if (null == this.p || null == this.q) return a.modPow(this.d, this.n);
        for (var b = a.mod(this.p).modPow(this.dmp1, this.p), c = a.mod(this.q).modPow(this.dmq1, this.q); b.compareTo(c) < 0;) b = b.add(this.p);
        return b.subtract(c).multiply(this.coeff).mod(this.p).multiply(this.q).add(c)
    },
    a.prototype.setPublic = function(a, b) {
        null != a && null != b && 0 < a.length && 0 < b.length ? (this.n = m(a, 16), this.e = parseInt(b, 16)) : void 0
    },
    a.prototype.encrypt = function(a) {
        var b = function(a, b) {
            if (b < a.length + 11) return null;
            for (var c = [], d = a.length - 1; d >= 0 && b > 0;) {
                var e = a.charCodeAt(d--);
                128 > e ? c[--b] = e: e > 127 && 2048 > e ? (c[--b] = 63 & e | 128, c[--b] = e >> 6 | 192) : (c[--b] = 63 & e | 128, c[--b] = e >> 6 & 63 | 128, c[--b] = e >> 12 | 224)
            }
            c[--b] = 0;
            for (var f = new Z,
            g = []; b > 2;) {
                for (g[0] = 0; 0 == g[0];) f.nextBytes(g);
                c[--b] = g[0]
            }
            return c[--b] = 2,
            c[--b] = 0,
            new J(c)
        } (a, this.n.bitLength() + 7 >> 3);
        if (null == b) return null;
        var c = this.doPublic(b);
        if (null == c) return null;
        var d = c.toString(16);
        return 0 == (1 & d.length) ? d: "0" + d
    },
    a.prototype.setPrivate = function(a, b, c) {
        null != a && null != b && 0 < a.length && 0 < b.length ? (this.n = m(a, 16), this.e = parseInt(b, 16), this.d = m(c, 16)) : void 0
    },
    a.prototype.setPrivateEx = function(a, b, c, d, e, f, g, h) {
        null != a && null != b && 0 < a.length && 0 < b.length ? (this.n = m(a, 16), this.e = parseInt(b, 16), this.d = m(c, 16), this.p = m(d, 16), this.q = m(e, 16), this.dmp1 = m(f, 16), this.dmq1 = m(g, 16), this.coeff = m(h, 16)) : void 0
    },
    a.prototype.generate = function(a, b) {
        var c = new Z,
        d = a >> 1;
        this.e = parseInt(b, 16);
        for (var e = new J(b, 16);;) {
            for (; this.p = new J(a - d, 1, c), 0 != this.p.subtract(J.ONE).gcd(e).compareTo(J.ONE) || !this.p.isProbablePrime(10););
            for (; this.q = new J(d, 1, c), 0 != this.q.subtract(J.ONE).gcd(e).compareTo(J.ONE) || !this.q.isProbablePrime(10););
            if (this.p.compareTo(this.q) <= 0) {
                var f = this.p;
                this.p = this.q,
                this.q = f
            }
            var g = this.p.subtract(J.ONE),
            h = this.q.subtract(J.ONE),
            i = g.multiply(h);
            if (0 == i.gcd(e).compareTo(J.ONE)) {
                this.n = this.p.multiply(this.q),
                this.d = e.modInverse(i),
                this.dmp1 = this.d.mod(g),
                this.dmq1 = this.d.mod(h),
                this.coeff = this.q.modInverse(this.p);
                break
            }
        }
    },
    a.prototype.decrypt = function(a) {
        var b = m(a, 16),
        c = this.doPrivate(b);
        return null == c ? null: function(a, b) {
            for (var c = a.toByteArray(), d = 0; d < c.length && 0 == c[d];)++d;
            if (c.length - d != b - 1 || 2 != c[d]) return null;
            for (++d; 0 != c[d];) if (++d >= c.length) return null;
            for (var e = ""; ++d < c.length;) {
                var f = 255 & c[d];
                128 > f ? e += String.fromCharCode(f) : f > 191 && 224 > f ? (e += String.fromCharCode((31 & f) << 6 | 63 & c[d + 1]), ++d) : (e += String.fromCharCode((15 & f) << 12 | (63 & c[d + 1]) << 6 | 63 & c[d + 2]), d += 2)
            }
            return e
        } (c, this.n.bitLength() + 7 >> 3)
    },
    a.prototype.generateAsync = function(a, b, c) {
        var d = new Z,
        e = a >> 1;
        this.e = parseInt(b, 16);
        var f = new J(b, 16),
        g = this,
        h = function() {
            var b = function() {
                if (g.p.compareTo(g.q) <= 0) {
                    var a = g.p;
                    g.p = g.q,
                    g.q = a
                }
                var b = g.p.subtract(J.ONE),
                d = g.q.subtract(J.ONE),
                e = b.multiply(d);
                0 == e.gcd(f).compareTo(J.ONE) ? (g.n = g.p.multiply(g.q), g.d = f.modInverse(e), g.dmp1 = g.d.mod(b), g.dmq1 = g.d.mod(d), g.coeff = g.q.modInverse(g.p), setTimeout(function() {
                    c()
                },
                0)) : setTimeout(h, 0)
            },
            i = function() {
                g.q = l(),
                g.q.fromNumberAsync(e, 1, d,
                function() {
                    g.q.subtract(J.ONE).gcda(f,
                    function(a) {
                        0 == a.compareTo(J.ONE) && g.q.isProbablePrime(10) ? setTimeout(b, 0) : setTimeout(i, 0)
                    })
                })
            },
            j = function() {
                g.p = l(),
                g.p.fromNumberAsync(a - e, 1, d,
                function() {
                    g.p.subtract(J.ONE).gcda(f,
                    function(a) {
                        0 == a.compareTo(J.ONE) && g.p.isProbablePrime(10) ? setTimeout(i, 0) : setTimeout(j, 0)
                    })
                })
            };
            setTimeout(j, 0)
        };
        setTimeout(h, 0)
    },
    a.prototype.sign = function(a, b, c) {
        var d = function(a, b) {
            if (b < a.length + 22) return null;
            for (var c = b - a.length - 6,
            d = "",
            e = 0; c > e; e += 2) d += "ff";
            return m("0001" + d + "00" + a, 16)
        } ((_[c] || "") + b(a).toString(), this.n.bitLength() / 4);
        if (null == d) return null;
        var e = this.doPrivate(d);
        if (null == e) return null;
        var f = e.toString(16);
        return 0 == (1 & f.length) ? f: "0" + f
    },
    a.prototype.verify = function(a, b, c) {
        var d = m(b, 16),
        e = this.doPublic(d);
        return null == e ? null: function(a) {
            for (var b in _) if (_.hasOwnProperty(b)) {
                var c = _[b],
                d = c.length;
                if (a.substr(0, d) == c) return a.substr(d)
            }
            return a
        } (e.toString(16).replace(/^1f+00/, "")) == c(a).toString()
    },
    a
} (),
_ = {
    md2: "3020300c06082a864886f70d020205000410",
    md5: "3020300c06082a864886f70d020505000410",
    sha1: "3021300906052b0e03021a05000414",
    sha224: "302d300d06096086480165030402040500041c",
    sha256: "3031300d060960864801650304020105000420",
    sha384: "3041300d060960864801650304020205000430",
    sha512: "3051300d060960864801650304020305000440",
    ripemd160: "3021300906052b2403020105000414"
},
ab = {};
ab.lang = {
    extend: function(a, b, c) {
        if (!b || !a) throw new Error("YAHOO.lang.extend failed, please check that all dependencies are included.");
        var d = function() {};
        if (d.prototype = b.prototype, a.prototype = new d, (a.prototype.constructor = a).superclass = b.prototype, b.prototype.constructor == Object.prototype.constructor && (b.prototype.constructor = b), c) {
            var e;
            for (e in c) a.prototype[e] = c[e];
            var f = function() {},
            g = ["toString", "valueOf"];
            try { / MSIE / .test(navigator.userAgent) && (f = function(a, b) {
                    for (e = 0; e < g.length; e += 1) {
                        var c = g[e],
                        d = b[c];
                        "function" == typeof d && d != Object.prototype[c] && (a[c] = d)
                    }
                })
            } catch(a) {}
            f(a.prototype, c)
        }
    }
};
var bb = {};
void 0 !== bb.asn1 && bb.asn1 || (bb.asn1 = {}),
bb.asn1.ASN1Util = new
function() {
    this.integerToByteHex = function(a) {
        var b = a.toString(16);
        return b.length % 2 == 1 && (b = "0" + b),
        b
    },
    this.bigIntToMinTwosComplementsHex = function(a) {
        var b = a.toString(16);
        if ("-" != b.substr(0, 1)) b.length % 2 == 1 ? b = "0" + b: b.match(/^[0-7]/) || (b = "00" + b);
        else {
            var c = b.substr(1).length;
            c % 2 == 1 ? c += 1 : b.match(/^[0-7]/) || (c += 2);
            for (var d = "",
            e = 0; c > e; e++) d += "f";
            b = new J(d, 16).xor(a).add(J.ONE).toString(16).replace(/^-/, "")
        }
        return b
    },
    this.getPEMStringFromHex = function(a, b) {
        return hextopem(a, b)
    },
    this.newObject = function(a) {
        var b = bb.asn1,
        c = b.DERBoolean,
        d = b.DERInteger,
        e = b.DERBitString,
        f = b.DEROctetString,
        g = b.DERNull,
        h = b.DERObjectIdentifier,
        i = b.DEREnumerated,
        j = b.DERUTF8String,
        k = b.DERNumericString,
        l = b.DERPrintableString,
        m = b.DERTeletexString,
        n = b.DERIA5String,
        o = b.DERUTCTime,
        p = b.DERGeneralizedTime,
        q = b.DERSequence,
        r = b.DERSet,
        s = b.DERTaggedObject,
        t = b.ASN1Util.newObject,
        u = Object.keys(a);
        if (1 != u.length) throw "key of param shall be only one.";
        var v = u[0];
        if ( - 1 == ":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(":" + v + ":")) throw "undefined key: " + v;
        if ("bool" == v) return new c(a[v]);
        if ("int" == v) return new d(a[v]);
        if ("bitstr" == v) return new e(a[v]);
        if ("octstr" == v) return new f(a[v]);
        if ("null" == v) return new g(a[v]);
        if ("oid" == v) return new h(a[v]);
        if ("enum" == v) return new i(a[v]);
        if ("utf8str" == v) return new j(a[v]);
        if ("numstr" == v) return new k(a[v]);
        if ("prnstr" == v) return new l(a[v]);
        if ("telstr" == v) return new m(a[v]);
        if ("ia5str" == v) return new n(a[v]);
        if ("utctime" == v) return new o(a[v]);
        if ("gentime" == v) return new p(a[v]);
        if ("seq" == v) {
            for (var w = a[v], x = [], y = 0; y < w.length; y++) {
                var z = t(w[y]);
                x.push(z)
            }
            return new q({
                array: x
            })
        }
        if ("set" == v) {
            for (w = a[v], x = [], y = 0; y < w.length; y++) z = t(w[y]),
            x.push(z);
            return new r({
                array: x
            })
        }
        if ("tag" == v) {
            var A = a[v];
            if ("[object Array]" === Object.prototype.toString.call(A) && 3 == A.length) {
                var B = t(A[2]);
                return new s({
                    tag: A[0],
                    explicit: A[1],
                    obj: B
                })
            }
            var C = {};
            if (void 0 !== A.explicit && (C.explicit = A.explicit), void 0 !== A.tag && (C.tag = A.tag), void 0 === A.obj) throw "obj shall be specified for 'tag'.";
            return C.obj = t(A.obj),
            new s(C)
        }
    },
    this.jsonToASN1HEX = function(a) {
        return this.newObject(a).getEncodedHex()
    }
},
bb.asn1.ASN1Util.oidHexToInt = function(a) {
    for (var b = "",
    c = parseInt(a.substr(0, 2), 16), d = (b = Math.floor(c / 40) + "." + c % 40, ""), e = 2; e < a.length; e += 2) {
        var f = ("00000000" + parseInt(a.substr(e, 2), 16).toString(2)).slice( - 8);
        d += f.substr(1, 7),
        "0" == f.substr(0, 1) && (b = b + "." + new J(d, 2).toString(10), d = "")
    }
    return b
},
bb.asn1.ASN1Util.oidIntToHex = function(a) {
    var b = function(a) {
        var b = a.toString(16);
        return 1 == b.length && (b = "0" + b),
        b
    },
    c = function(a) {
        var c = "",
        d = new J(a, 10).toString(2),
        e = 7 - d.length % 7;
        7 == e && (e = 0);
        for (var f = "",
        g = 0; e > g; g++) f += "0";
        for (d = f + d, g = 0; g < d.length - 1; g += 7) {
            var h = d.substr(g, 7);
            g != d.length - 7 && (h = "1" + h),
            c += b(parseInt(h, 2))
        }
        return c
    };
    if (!a.match(/^[0-9.]+$/)) throw "malformed oid string: " + a;
    var d = "",
    e = a.split("."),
    f = 40 * parseInt(e[0]) + parseInt(e[1]);
    d += b(f),
    e.splice(0, 2);
    for (var g = 0; g < e.length; g++) d += c(e[g]);
    return d
},
bb.asn1.ASN1Object = function() {
    this.getLengthHexFromValue = function() {
        if (void 0 === this.hV || null == this.hV) throw "this.hV is null or undefined.";
        if (this.hV.length % 2 == 1) throw "value hex must be even length: n=" + "".length + ",v=" + this.hV;
        var a = this.hV.length / 2,
        b = a.toString(16);
        if (b.length % 2 == 1 && (b = "0" + b), 128 > a) return b;
        var c = b.length / 2;
        if (c > 15) throw "ASN.1 length too long to represent by 8x: n = " + a.toString(16);
        return (128 + c).toString(16) + b
    },
    this.getEncodedHex = function() {
        return (null == this.hTLV || this.isModified) && (this.hV = this.getFreshValueHex(), this.hL = this.getLengthHexFromValue(), this.hTLV = this.hT + this.hL + this.hV, this.isModified = !1),
        this.hTLV
    },
    this.getValueHex = function() {
        return this.getEncodedHex(),
        this.hV
    },
    this.getFreshValueHex = function() {
        return ""
    }
},
bb.asn1.DERAbstractString = function(a) {
    bb.asn1.DERAbstractString.superclass.constructor.call(this),
    this.getString = function() {
        return this.s
    },
    this.setString = function(a) {
        this.hTLV = null,
        this.isModified = !0,
        this.s = a,
        this.hV = stohex(this.s)
    },
    this.setStringHex = function(a) {
        this.hTLV = null,
        this.isModified = !0,
        this.s = null,
        this.hV = a
    },
    this.getFreshValueHex = function() {
        return this.hV
    },
    void 0 !== a && ("string" == typeof a ? this.setString(a) : void 0 !== a.str ? this.setString(a.str) : void 0 !== a.hex && this.setStringHex(a.hex))
},
ab.lang.extend(bb.asn1.DERAbstractString, bb.asn1.ASN1Object),
bb.asn1.DERAbstractTime = function() {
    bb.asn1.DERAbstractTime.superclass.constructor.call(this),
    this.localDateToUTC = function(a) {
        return utc = a.getTime() + 6e4 * a.getTimezoneOffset(),
        new Date(utc)
    },
    this.formatDate = function(a, b, c) {
        var d = this.zeroPadding,
        e = this.localDateToUTC(a),
        f = String(e.getFullYear());
        "utc" == b && (f = f.substr(2, 2));
        var g = f + d(String(e.getMonth() + 1), 2) + d(String(e.getDate()), 2) + d(String(e.getHours()), 2) + d(String(e.getMinutes()), 2) + d(String(e.getSeconds()), 2);
        if (!0 === c) {
            var h = e.getMilliseconds();
            if (0 != h) {
                var i = d(String(h), 3);
                g = g + "." + (i = i.replace(/[0]+$/, ""))
            }
        }
        return g + "Z"
    },
    this.zeroPadding = function(a, b) {
        return a.length >= b ? a: new Array(b - a.length + 1).join("0") + a
    },
    this.getString = function() {
        return this.s
    },
    this.setString = function(a) {
        this.hTLV = null,
        this.isModified = !0,
        this.s = a,
        this.hV = stohex(a)
    },
    this.setByDateValue = function(a, b, c, d, e, f) {
        var g = new Date(Date.UTC(a, b - 1, c, d, e, f, 0));
        this.setByDate(g)
    },
    this.getFreshValueHex = function() {
        return this.hV
    }
},
ab.lang.extend(bb.asn1.DERAbstractTime, bb.asn1.ASN1Object),
bb.asn1.DERAbstractStructured = function(a) {
    bb.asn1.DERAbstractString.superclass.constructor.call(this),
    this.setByASN1ObjectArray = function(a) {
        this.hTLV = null,
        this.isModified = !0,
        this.asn1Array = a
    },
    this.appendASN1Object = function(a) {
        this.hTLV = null,
        this.isModified = !0,
        this.asn1Array.push(a)
    },
    this.asn1Array = new Array,
    void 0 !== a && void 0 !== a.array && (this.asn1Array = a.array)
},
ab.lang.extend(bb.asn1.DERAbstractStructured, bb.asn1.ASN1Object),
bb.asn1.DERBoolean = function() {
    bb.asn1.DERBoolean.superclass.constructor.call(this),
    this.hT = "01",
    this.hTLV = "0101ff"
},
ab.lang.extend(bb.asn1.DERBoolean, bb.asn1.ASN1Object),
bb.asn1.DERInteger = function(a) {
    bb.asn1.DERInteger.superclass.constructor.call(this),
    this.hT = "02",
    this.setByBigInteger = function(a) {
        this.hTLV = null,
        this.isModified = !0,
        this.hV = bb.asn1.ASN1Util.bigIntToMinTwosComplementsHex(a)
    },
    this.setByInteger = function(a) {
        var b = new J(String(a), 10);
        this.setByBigInteger(b)
    },
    this.setValueHex = function(a) {
        this.hV = a
    },
    this.getFreshValueHex = function() {
        return this.hV
    },
    void 0 !== a && (void 0 !== a.bigint ? this.setByBigInteger(a.bigint) : void 0 !== a["int"] ? this.setByInteger(a["int"]) : "number" == typeof a ? this.setByInteger(a) : void 0 !== a.hex && this.setValueHex(a.hex))
},
ab.lang.extend(bb.asn1.DERInteger, bb.asn1.ASN1Object),
bb.asn1.DERBitString = function(a) {
    if (void 0 !== a && void 0 !== a.obj) {
        var b = bb.asn1.ASN1Util.newObject(a.obj);
        a.hex = "00" + b.getEncodedHex()
    }
    bb.asn1.DERBitString.superclass.constructor.call(this),
    this.hT = "03",
    this.setHexValueIncludingUnusedBits = function(a) {
        this.hTLV = null,
        this.isModified = !0,
        this.hV = a
    },
    this.setUnusedBitsAndHexValue = function(a, b) {
        if (0 > a || a > 7) throw "unused bits shall be from 0 to 7: u = " + a;
        var c = "0" + a;
        this.hTLV = null,
        this.isModified = !0,
        this.hV = c + b
    },
    this.setByBinaryString = function(a) {
        var b = 8 - (a = a.replace(/0+$/, "")).length % 8;
        8 == b && (b = 0);
        for (var c = 0; b >= c; c++) a += "0";
        var d = "";
        for (c = 0; c < a.length - 1; c += 8) {
            var e = a.substr(c, 8),
            f = parseInt(e, 2).toString(16);
            1 == f.length && (f = "0" + f),
            d += f
        }
        this.hTLV = null,
        this.isModified = !0,
        this.hV = "0" + b + d
    },
    this.setByBooleanArray = function(a) {
        for (var b = "",
        c = 0; c < a.length; c++) b += 1 == a[c] ? "1": "0";
        this.setByBinaryString(b)
    },
    this.newFalseArray = function(a) {
        for (var b = new Array(a), c = 0; a > c; c++) b[c] = !1;
        return b
    },
    this.getFreshValueHex = function() {
        return this.hV
    },
    void 0 !== a && ("string" == typeof a && a.toLowerCase().match(/^[0-9a-f]+$/) ? this.setHexValueIncludingUnusedBits(a) : void 0 !== a.hex ? this.setHexValueIncludingUnusedBits(a.hex) : void 0 !== a.bin ? this.setByBinaryString(a.bin) : void 0 !== a.array && this.setByBooleanArray(a.array))
},
ab.lang.extend(bb.asn1.DERBitString, bb.asn1.ASN1Object),
bb.asn1.DEROctetString = function(a) {
    if (void 0 !== a && void 0 !== a.obj) {
        var b = bb.asn1.ASN1Util.newObject(a.obj);
        a.hex = b.getEncodedHex()
    }
    bb.asn1.DEROctetString.superclass.constructor.call(this, a),
    this.hT = "04"
},
ab.lang.extend(bb.asn1.DEROctetString, bb.asn1.DERAbstractString),
bb.asn1.DERNull = function() {
    bb.asn1.DERNull.superclass.constructor.call(this),
    this.hT = "05",
    this.hTLV = "0500"
},
ab.lang.extend(bb.asn1.DERNull, bb.asn1.ASN1Object),
bb.asn1.DERObjectIdentifier = function(a) {
    var b = function(a) {
        var b = a.toString(16);
        return 1 == b.length && (b = "0" + b),
        b
    },
    c = function(a) {
        var c = "",
        d = new J(a, 10).toString(2),
        e = 7 - d.length % 7;
        7 == e && (e = 0);
        for (var f = "",
        g = 0; e > g; g++) f += "0";
        for (d = f + d, g = 0; g < d.length - 1; g += 7) {
            var h = d.substr(g, 7);
            g != d.length - 7 && (h = "1" + h),
            c += b(parseInt(h, 2))
        }
        return c
    };
    bb.asn1.DERObjectIdentifier.superclass.constructor.call(this),
    this.hT = "06",
    this.setValueHex = function(a) {
        this.hTLV = null,
        this.isModified = !0,
        this.s = null,
        this.hV = a
    },
    this.setValueOidString = function(a) {
        if (!a.match(/^[0-9.]+$/)) throw "malformed oid string: " + a;
        var d = "",
        e = a.split("."),
        f = 40 * parseInt(e[0]) + parseInt(e[1]);
        d += b(f),
        e.splice(0, 2);
        for (var g = 0; g < e.length; g++) d += c(e[g]);
        this.hTLV = null,
        this.isModified = !0,
        this.s = null,
        this.hV = d
    },
    this.setValueName = function(a) {
        var b = bb.asn1.x509.OID.name2oid(a);
        if ("" === b) throw "DERObjectIdentifier oidName undefined: " + a;
        this.setValueOidString(b)
    },
    this.getFreshValueHex = function() {
        return this.hV
    },
    void 0 !== a && ("string" == typeof a ? a.match(/^[0-2].[0-9.]+$/) ? this.setValueOidString(a) : this.setValueName(a) : void 0 !== a.oid ? this.setValueOidString(a.oid) : void 0 !== a.hex ? this.setValueHex(a.hex) : void 0 !== a.name && this.setValueName(a.name))
},
ab.lang.extend(bb.asn1.DERObjectIdentifier, bb.asn1.ASN1Object),
bb.asn1.DEREnumerated = function(a) {
    bb.asn1.DEREnumerated.superclass.constructor.call(this),
    this.hT = "0a",
    this.setByBigInteger = function(a) {
        this.hTLV = null,
        this.isModified = !0,
        this.hV = bb.asn1.ASN1Util.bigIntToMinTwosComplementsHex(a)
    },
    this.setByInteger = function(a) {
        var b = new J(String(a), 10);
        this.setByBigInteger(b)
    },
    this.setValueHex = function(a) {
        this.hV = a
    },
    this.getFreshValueHex = function() {
        return this.hV
    },
    void 0 !== a && (void 0 !== a["int"] ? this.setByInteger(a["int"]) : "number" == typeof a ? this.setByInteger(a) : void 0 !== a.hex && this.setValueHex(a.hex))
},
ab.lang.extend(bb.asn1.DEREnumerated, bb.asn1.ASN1Object),
bb.asn1.DERUTF8String = function(a) {
    bb.asn1.DERUTF8String.superclass.constructor.call(this, a),
    this.hT = "0c"
},
ab.lang.extend(bb.asn1.DERUTF8String, bb.asn1.DERAbstractString),
bb.asn1.DERNumericString = function(a) {
    bb.asn1.DERNumericString.superclass.constructor.call(this, a),
    this.hT = "12"
},
ab.lang.extend(bb.asn1.DERNumericString, bb.asn1.DERAbstractString),
bb.asn1.DERPrintableString = function(a) {
    bb.asn1.DERPrintableString.superclass.constructor.call(this, a),
    this.hT = "13"
},
ab.lang.extend(bb.asn1.DERPrintableString, bb.asn1.DERAbstractString),
bb.asn1.DERTeletexString = function(a) {
    bb.asn1.DERTeletexString.superclass.constructor.call(this, a),
    this.hT = "14"
},
ab.lang.extend(bb.asn1.DERTeletexString, bb.asn1.DERAbstractString),
bb.asn1.DERIA5String = function(a) {
    bb.asn1.DERIA5String.superclass.constructor.call(this, a),
    this.hT = "16"
},
ab.lang.extend(bb.asn1.DERIA5String, bb.asn1.DERAbstractString),
bb.asn1.DERUTCTime = function(a) {
    bb.asn1.DERUTCTime.superclass.constructor.call(this, a),
    this.hT = "17",
    this.setByDate = function(a) {
        this.hTLV = null,
        this.isModified = !0,
        this.date = a,
        this.s = this.formatDate(this.date, "utc"),
        this.hV = stohex(this.s)
    },
    this.getFreshValueHex = function() {
        return void 0 === this.date && void 0 === this.s && (this.date = new Date, this.s = this.formatDate(this.date, "utc"), this.hV = stohex(this.s)),
        this.hV
    },
    void 0 !== a && (void 0 !== a.str ? this.setString(a.str) : "string" == typeof a && a.match(/^[0-9]{12}Z$/) ? this.setString(a) : void 0 !== a.hex ? this.setStringHex(a.hex) : void 0 !== a.date && this.setByDate(a.date))
},
ab.lang.extend(bb.asn1.DERUTCTime, bb.asn1.DERAbstractTime),
bb.asn1.DERGeneralizedTime = function(a) {
    bb.asn1.DERGeneralizedTime.superclass.constructor.call(this, a),
    this.hT = "18",
    this.withMillis = !1,
    this.setByDate = function(a) {
        this.hTLV = null,
        this.isModified = !0,
        this.date = a,
        this.s = this.formatDate(this.date, "gen", this.withMillis),
        this.hV = stohex(this.s)
    },
    this.getFreshValueHex = function() {
        return void 0 === this.date && void 0 === this.s && (this.date = new Date, this.s = this.formatDate(this.date, "gen", this.withMillis), this.hV = stohex(this.s)),
        this.hV
    },
    void 0 !== a && (void 0 !== a.str ? this.setString(a.str) : "string" == typeof a && a.match(/^[0-9]{14}Z$/) ? this.setString(a) : void 0 !== a.hex ? this.setStringHex(a.hex) : void 0 !== a.date && this.setByDate(a.date), !0 === a.millis && (this.withMillis = !0))
},
ab.lang.extend(bb.asn1.DERGeneralizedTime, bb.asn1.DERAbstractTime),
bb.asn1.DERSequence = function(a) {
    bb.asn1.DERSequence.superclass.constructor.call(this, a),
    this.hT = "30",
    this.getFreshValueHex = function() {
        for (var a = "",
        b = 0; b < this.asn1Array.length; b++) a += this.asn1Array[b].getEncodedHex();
        return this.hV = a,
        this.hV
    }
},
ab.lang.extend(bb.asn1.DERSequence, bb.asn1.DERAbstractStructured),
bb.asn1.DERSet = function(a) {
    bb.asn1.DERSet.superclass.constructor.call(this, a),
    this.hT = "31",
    this.sortFlag = !0,
    this.getFreshValueHex = function() {
        for (var a = new Array,
        b = 0; b < this.asn1Array.length; b++) {
            var c = this.asn1Array[b];
            a.push(c.getEncodedHex())
        }
        return 1 == this.sortFlag && a.sort(),
        this.hV = a.join(""),
        this.hV
    },
    void 0 !== a && void 0 !== a.sortflag && 0 == a.sortflag && (this.sortFlag = !1)
},
ab.lang.extend(bb.asn1.DERSet, bb.asn1.DERAbstractStructured),
bb.asn1.DERTaggedObject = function(a) {
    bb.asn1.DERTaggedObject.superclass.constructor.call(this),
    this.hT = "a0",
    this.hV = "",
    this.isExplicit = !0,
    this.asn1Object = null,
    this.setASN1Object = function(a, b, c) {
        this.hT = b,
        this.isExplicit = a,
        this.asn1Object = c,
        this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(), this.hTLV = null, this.isModified = !0) : (this.hV = null, this.hTLV = c.getEncodedHex(), this.hTLV = this.hTLV.replace(/^../, b), this.isModified = !1)
    },
    this.getFreshValueHex = function() {
        return this.hV
    },
    void 0 !== a && (void 0 !== a.tag && (this.hT = a.tag), void 0 !== a.explicit && (this.isExplicit = a.explicit), void 0 !== a.obj && (this.asn1Object = a.obj, this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)))
},
ab.lang.extend(bb.asn1.DERTaggedObject, bb.asn1.ASN1Object);
var cb = function(a) {
    function b(c) {
        var d = a.call(this) || this;
        return c && ("string" == typeof c ? d.parseKey(c) : (b.hasPrivateKeyProperty(c) || b.hasPublicKeyProperty(c)) && d.parsePropertiesFrom(c)),
        d
    }
    return function(a, b) {
        function c() {
            this.constructor = a
        }
        w(a, b),
        a.prototype = null === b ? Object.create(b) : (c.prototype = b.prototype, new c)
    } (b, a),
    b.prototype.parseKey = function(a) {
        try {
            var b = 0,
            c = 0,
            d = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/.test(a) ? x(a) : y.unarmor(a),
            e = F.decode(d);
            if (3 === e.sub.length && (e = e.sub[2].sub[0]), 9 === e.sub.length) {
                b = e.sub[1].getHexStringValue(),
                this.n = m(b, 16),
                c = e.sub[2].getHexStringValue(),
                this.e = parseInt(c, 16);
                var f = e.sub[3].getHexStringValue();
                this.d = m(f, 16);
                var g = e.sub[4].getHexStringValue();
                this.p = m(g, 16);
                var h = e.sub[5].getHexStringValue();
                this.q = m(h, 16);
                var i = e.sub[6].getHexStringValue();
                this.dmp1 = m(i, 16);
                var j = e.sub[7].getHexStringValue();
                this.dmq1 = m(j, 16);
                var k = e.sub[8].getHexStringValue();
                this.coeff = m(k, 16)
            } else {
                if (2 !== e.sub.length) return ! 1;
                var l = e.sub[1].sub[0];
                b = l.sub[0].getHexStringValue(),
                this.n = m(b, 16),
                c = l.sub[1].getHexStringValue(),
                this.e = parseInt(c, 16)
            }
            return ! 0
        } catch(a) {
            return ! 1
        }
    },
    b.prototype.getPrivateBaseKey = function() {
        var a = {
            array: [new bb.asn1.DERInteger({
                "int": 0
            }), new bb.asn1.DERInteger({
                bigint: this.n
            }), new bb.asn1.DERInteger({
                "int": this.e
            }), new bb.asn1.DERInteger({
                bigint: this.d
            }), new bb.asn1.DERInteger({
                bigint: this.p
            }), new bb.asn1.DERInteger({
                bigint: this.q
            }), new bb.asn1.DERInteger({
                bigint: this.dmp1
            }), new bb.asn1.DERInteger({
                bigint: this.dmq1
            }), new bb.asn1.DERInteger({
                bigint: this.coeff
            })]
        };
        return new bb.asn1.DERSequence(a).getEncodedHex()
    },
    b.prototype.getPrivateBaseKeyB64 = function() {
        return i(this.getPrivateBaseKey())
    },
    b.prototype.getPublicBaseKey = function() {
        var a = new bb.asn1.DERSequence({
            array: [new bb.asn1.DERObjectIdentifier({
                oid: "1.2.840.113549.1.1.1"
            }), new bb.asn1.DERNull]
        }),
        b = new bb.asn1.DERSequence({
            array: [new bb.asn1.DERInteger({
                bigint: this.n
            }), new bb.asn1.DERInteger({
                "int": this.e
            })]
        }),
        c = new bb.asn1.DERBitString({
            hex: "00" + b.getEncodedHex()
        });
        return new bb.asn1.DERSequence({
            array: [a, c]
        }).getEncodedHex()
    },
    b.prototype.getPublicBaseKeyB64 = function() {
        return i(this.getPublicBaseKey())
    },
    b.wordwrap = function(a, b) {
        if (!a) return a;
        var c = "(.{1," + (b = b || 64) + "})( +|$\n?)|(.{1," + b + "})";
        return a.match(RegExp(c, "g")).join("\n")
    },
    b.prototype.getPrivateKey = function() {
        var a = "-----BEGIN RSA PRIVATE KEY-----\n";
        return a += b.wordwrap(this.getPrivateBaseKeyB64()) + "\n",
        a += "-----END RSA PRIVATE KEY-----"
    },
    b.prototype.getPublicKey = function() {
        var a = "-----BEGIN PUBLIC KEY-----\n";
        return a += b.wordwrap(this.getPublicBaseKeyB64()) + "\n",
        a += "-----END PUBLIC KEY-----"
    },
    b.hasPublicKeyProperty = function(a) {
        return (a = a || {}).hasOwnProperty("n") && a.hasOwnProperty("e")
    },
    b.hasPrivateKeyProperty = function(a) {
        return (a = a || {}).hasOwnProperty("n") && a.hasOwnProperty("e") && a.hasOwnProperty("d") && a.hasOwnProperty("p") && a.hasOwnProperty("q") && a.hasOwnProperty("dmp1") && a.hasOwnProperty("dmq1") && a.hasOwnProperty("coeff")
    },
    b.prototype.parsePropertiesFrom = function(a) {
        this.n = a.n,
        this.e = a.e,
        a.hasOwnProperty("d") && (this.d = a.d, this.p = a.p, this.q = a.q, this.dmp1 = a.dmp1, this.dmq1 = a.dmq1, this.coeff = a.coeff)
    },
    b
} ($),
db = function() {
    function a(a) {
        a = a || {},
        this.default_key_size = parseInt(a.default_key_size, 10) || 1024,
        this.default_public_exponent = a.default_public_exponent || "010001",
        this.log = a.log || !1,
        this.key = null
    }
    return a.prototype.setKey = function(a) {
        this.log && this.key && void 0,
        this.key = new cb(a)
    },
    a.prototype.setPrivateKey = function(a) {
        this.setKey(a)
    },
    a.prototype.setPublicKey = function(a) {
        this.setKey(a)
    },
    a.prototype.decrypt = function(a) {
        try {
            return this.getKey().decrypt(j(a))
        } catch(a) {
            return ! 1
        }
    },
    a.prototype.encrypt = function(a) {
        try {
            return i(this.getKey().encrypt(a))
        } catch(a) {
            return ! 1
        }
    },
    a.prototype.sign = function(a, b, c) {
        try {
            return i(this.getKey().sign(a, b, c))
        } catch(a) {
            return ! 1
        }
    },
    a.prototype.verify = function(a, b, c) {
        try {
            return this.getKey().verify(a, j(b), c)
        } catch(a) {
            return ! 1
        }
    },
    a.prototype.getKey = function(a) {
        if (!this.key) {
            if (this.key = new cb, a && "[object Function]" === {}.toString.call(a)) return void this.key.generateAsync(this.default_key_size, this.default_public_exponent, a);
            this.key.generate(this.default_key_size, this.default_public_exponent)
        }
        return this.key
    },
    a.prototype.getPrivateKey = function() {
        return this.getKey().getPrivateKey()
    },
    a.prototype.getPrivateKeyB64 = function() {
        return this.getKey().getPrivateBaseKeyB64()
    },
    a.prototype.getPublicKey = function() {
        return this.getKey().getPublicKey()
    },
    a.prototype.getPublicKeyB64 = function() {
        return this.getKey().getPublicBaseKeyB64()
    },
    a.version = "3.0.0-rc.1",
    a
} ();
window.JSEncrypt = db,
a.JSEncrypt = db
});

var passdata = {
"pass_key": "MDwwDQYJKoZIhvcNAQEBBQADKwAwKAIhAMVcNpTSEfgtrv5mDz4NM+dm2b0vLuzd/0PW3Gf+dyJpAgMBAAE=",
"result": "ok",
"ssid": "Bt8_XgAAAACH4zi0_4xwR5MhDXhbAEq6"
};

function getpwd(pass) {
        var c = new JSEncrypt;
        c.setPublicKey(passdata.pass_key);
        return c.encrypt(pass)
};