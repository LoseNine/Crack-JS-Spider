window=global;

window.location={
    "ancestorOrigins": {},
    "href": "https://category.vip.com/suggest.php?keyword=%E4%B8%8A%E8%A1%A3&ff=235|12|1|1",
    "origin": "https://category.vip.com",
    "protocol": "https:",
    "host": "category.vip.com",
    "hostname": "category.vip.com",
    "port": "",
    "pathname": "/suggest.php",
    "search": "?keyword=%E4%B8%8A%E8%A1%A3&ff=235|12|1|1",
    "hash": ""
};
window.document={
    location:{
    "ancestorOrigins": {},
    "href": "https://category.vip.com/suggest.php?keyword=%E4%B8%8A%E8%A1%A3&ff=235|12|1|1",
    "origin": "https://category.vip.com",
    "protocol": "https:",
    "host": "category.vip.com",
    "hostname": "category.vip.com",
    "port": "",
    "pathname": "/suggest.php",
    "search": "?keyword=%E4%B8%8A%E8%A1%A3&ff=235|12|1|1",
    "hash": ""
},
    compatMode:'CSS1Compat',
    getElementsByTagName:['<meta charset="utf-8">']
};

window.navigator={
    userAgent:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36'
};


window.T0 = (new Date).getTime(),
window.Mar = function() {}
,
Mar.stringify = function(a) {
    function b(a) {
        return '"' + a.replace(e, function(a) {
            var b = f[a];
            return "string" == typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }) + '"'
    }
    function c(a) {
        return a < 10 ? "0" + a : a
    }
    function d(a, e) {
        var f, g, h, i, j = e[a], k = typeof j;
        switch (j && "object" == typeof j && "function" == typeof j.toJSON && (j = j.toJSON(a),
        k = typeof j),
        k) {
        case "string":
            return b(j);
        case "number":
            return isFinite(j) ? String(j) : "null";
        case "boolean":
            return String(j);
        case "object":
            if (!j)
                return "null";
            switch (Object.prototype.toString.call(j)) {
            case "[object Date]":
                return isFinite(j.valueOf()) ? '"' + j.getUTCFullYear() + "-" + c(j.getUTCMonth() + 1) + "-" + c(j.getUTCDate()) + "T" + c(j.getUTCHours()) + ":" + c(j.getUTCMinutes()) + ":" + c(j.getUTCSeconds()) + 'Z"' : "null";
            case "[object Array]":
                for (h = j.length,
                i = [],
                f = 0; f < h; f++)
                    i.push(d(f, j) || "null");
                return "[" + i.join(",") + "]";
            default:
                i = [];
                for (f in j)
                    Object.prototype.hasOwnProperty.call(j, f) && (g = d(f, j),
                    g && i.push(b(f) + ":" + g));
                return "{" + i.join(",") + "}"
            }
        }
    }
    if (window.JSON && window.JSON.stringify)
        return window.JSON.stringify(a);
    var e = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g
      , f = {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    };
    return d("", {
        "": a
    })
}
,
Mar.getUrlParam = function() {
    var a, b, c = {}, d = window.location.search.substring(1);
    if (d) {
        a = d.split("&");
        for (var e = 0, f = a.length; e < f; e++)
            b = a[e].split("="),
            c[b[0]] = b[1]
    }
    return c
}
,
Mar.getWapId = function() {
    function a(a) {
        var b = document.getElementsByTagName;
        for (i in b)
            if ("undefined" != typeof b[i].name && b[i].name.toLowerCase() == a)
                return b[i].content;
        return null
    }
    var b = encodeURIComponent(a("vip-page-default-wapid"));
    return "null" != b && b ? encodeURIComponent(b) : ""
}
,
Mar.getOSVersion = function() {
    function a(a, b) {
        for (var c in b)
            if (b[c] == a)
                return c;
        return -1
    }
    var b, c, d, e, f, g = window.navigator.userAgent, h = {
        os: "",
        ver: ""
    };
    return b = g.match(/\(([^)]*)\)/),
    c = (b || [])[1] || "",
    c && c.match(/iPhone/i) ? (h.os = "IOS",
    e = "OS") : (h.os = "Android",
    e = "Android"),
    d = c.split(" "),
    f = a(e, d),
    f != -1 && (h.ver = d[++f],
    h.ver = h.ver && h.ver.replace(/[_]/g, ".")),
    h
}
;
var a;
Mar.Base = {},
a = Mar.Base,
a.local = document.location,
a.domain = document.domain,
a.docEle = document.documentElement,
a.context = "css1compat" === document.compatMode.toLowerCase() ? document.body : a.docEle,
a.monitor = window.screen,
a.href = a.local.href,
a.wapId = window.Mar.getWapId(),
a.osVersion = window.Mar.getOSVersion(),
a.paramObj = window.Mar.getUrlParam(),
a.pn = a.local.pathname.toLowerCase(),
a.hn = a.local.hostname.toLowerCase(),
a.ref = escape(document.referrer),
a.cw = 100,
a.ch = 100,
a.res = 100 + "*" + 100,
a.col = 100,
a.w = 100,
a.h = 100,
a.nav = escape(navigator.userAgent.toLowerCase()),
a.ce = navigator.cookieEnabled ? 1 : 0,
a.title = escape(document.title);


Mar.Random = {
    guid: function() {
        for (var a = 0, b = []; a < 8; )
            b.push((65536 * (1 + Math.random()) | 0).toString(16).substring(1)),
            a++;
        return b.join("").toUpperCase()
    },
    guid2: function() {
        function a() {
            return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
        }
        return a() + a() + "-" + a() + "-" + a() + "-" + a() + "-" + a() + a() + a()
    },
    guid3: function() {
        function a(a, c, d) {
            var e = b(a, 16)
              , f = new Array
              , g = ""
              , h = 0;
            for (h = 0; h < e.length; h++)
                f.push(e.substring(h, h + 1));
            for (h = Math.floor(c / 4); h <= Math.floor(d / 4); h++)
                g += f[h] && "" != f[h] ? f[h] : "0";
            return g
        }
        function b(a, b) {
            return a.toString(b)
        }
        function c(a) {
            return Math.floor(Math.random() * (a + 1))
        }
        var d = new Date(1582,10,15,0,0,0,0)
          , e = new Date
          , f = e.getTime() - d.getTime()
          , g = a(f, 0, 31)
          , h = a(f, 32, 47)
          , i = a(f, 48, 59) + "1"
          , j = a(c(4095), 0, 7)
          , k = a(c(4095), 0, 7)
          , l = a(c(8191), 0, 7) + a(c(8191), 8, 15) + a(c(8191), 0, 7) + a(c(8191), 8, 15) + a(c(8191), 0, 15);
        return g + h + i + j + k + l
    },
    rand: function(a) {
        var b = "0123456789abcdef"
          , c = ""
          , d = 0;
        for (a = a || 32; d < a; d++)
            c += b.charAt(Math.ceil(1e8 * Math.random()) % b.length);
        return c
    }
};

Mar.Util = {
    detect: function() {
        var a, b, c, d = !1, e = window.navigator.userAgent;
        return /MSIE/.test(e) ? (b = "MSIE",
        /IEMobile/.test(e) && (d = !0),
        c = /MSIE \d+[.]\d+/.exec(e)[0].split(" ")[1]) : navigator.userAgent.match(/Trident.*rv[ :]*11\./) ? (b = "MSIE",
        c = 11) : /Chrome/.test(e) ? (b = "Chrome",
        c = /Chrome\/[\d\.]+/.exec(e)[0].split("/")[1]) : /Opera/.test(e) ? (b = "Opera",
        (/mini/.test(e) || /Mobile/.test(e)) && (d = !0)) : /Android/.test(e) ? (b = "Android Webkit Browser",
        d = !0) : /Firefox/.test(e) ? (b = "Firefox",
        /Fennec/.test(e) && (d = !0),
        c = /Firefox\/[\.\d]+/.exec(e)[0].split("/")[1]) : /Safari/.test(e) && (b = "Safari",
        (/iPhone/.test(e) || /iPad/.test(e) || /iPod/.test(e)) && (d = !0)),
        c || (c = /Version\/[\.\d]+/.exec(e),
        c = c ? c[0].split("/")[1] : void 0),
        a = {
            browser: b,
            version: c,
            mobile: d
        }
    },
    isElement: function(a) {
        return !(!a || "function" != typeof HTMLElement && "object" != typeof HTMLElement || !(a instanceof HTMLElement)) || !(!a || !a.nodeType || 1 !== a.nodeType)
    },
    getProtocal: function() {
        return document.domain.toLowerCase().indexOf("vip.vip.com") !== -1 ? 0 === document.location.href.toLowerCase().indexOf("https://") ? "https://" : "http://" : "https://"
    },
    encryptCid: function(a) {
        var b = a.split("_")
          , c = b[0]
          , d = b[1];
        if (!c || !d)
            return a;
        for (var e = 0, f = c.length, g = 0; g < f; g++)
            e += parseInt(c[g]);
        for (var h = e % 32, i = e, j = d.length, g = 0; g < j; g++)
            g !== h && (i += parseInt(d[g], 16));
        var k = (i % 16).toString(16);
        return c + "_" + d.substr(0, h) + k.toString() + d.substr(h + 1, j)
    },
    getParameterByName: function(a) {
        a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var b = "[\\?&]" + a + "=([^&#]*)"
          , c = new RegExp(b)
          , d = c.exec(window.location.search);
        return null == d ? "" : decodeURIComponent(d[1].replace(/\+/g, " "))
    },
    getConfig: function(a) {
        return "MarConfig"in window && window.MarConfig && window.MarConfig[a] ? window.MarConfig[a] : ""
    },
    pad: function(a, b) {
        for (var c = a.toString().length; c < b; )
            a = "0" + a,
            c++;
        return a
    },
    getDomain: function() {
        var a, b = document.domain.toLowerCase();
        return a = b.indexOf("vipshop.com") !== -1 ? "vipshop.com" : b.indexOf("appvipshop.com") !== -1 ? "appvipshop.com" : b.indexOf("vipglobal.hk") !== -1 ? "vipglobal.hk" : b.indexOf("vpal.com") !== -1 ? "vpal.com" : b.indexOf("ebatong.com") !== -1 ? "ebatong.com" : b.indexOf("vip.vip.com") !== -1 ? "vip.vip.com" : "vip.com"
    },
    parseURL: function(a) {
        var b = document.createElement("a");
        return b.href = a,
        {
            source: a,
            protocol: b.protocol.replace(":", ""),
            host: b.hostname,
            port: b.port,
            query: b.search,
            params: function() {
                for (var a, c = {}, d = b.search.replace(/^\?/, "").split("&"), e = d.length, f = 0; f < e; f++)
                    d[f] && (a = d[f].split("="),
                    c[a[0]] = a[1]);
                return c
            }(),
            file: (b.pathname.match(/\/([^\/?#]+)$/i) || [, ""])[1],
            hash: b.hash.replace("#", ""),
            path: b.pathname.replace(/^([^\/])/, "/$1"),
            relative: (b.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ""])[1],
            segments: b.pathname.replace(/^\//, "").split("/")
        }
    },
    getTimeSpan: function() {
        return parseInt(Mar.Util.getTimeSpanMillisecond() / 1e3)
    },
    getTimeSpanMillisecond: function() {
        return (new Date).getTime()
    },
    Debounce: function(a, b, c) {
        var d, e, f, g, h, i = Date.now || function() {
            return (new Date).getTime()
        }
        , j = function() {
            var k = i() - g;
            k < b && k >= 0 ? d = setTimeout(j, b - k) : (d = null,
            c || (h = a.apply(f, e),
            d || (f = e = null)))
        };
        return function() {
            f = this,
            e = arguments,
            g = i();
            var k = c && !d;
            return d || (d = setTimeout(j, b)),
            k && (h = a.apply(f, e),
            f = e = null),
            h
        }
    },
    getQueryStringByName: function(a, b) {
        var c = b.match(new RegExp("[?&]" + a + "=([^&^#]+)","i"));
        return null == c || c.length < 1 ? "" : c[1]
    },
    getMetaByName: function(a) {
        var b = document.getElementsByTagName("meta");
        for (i in b)
            if ("undefined" != typeof b[i].name && b[i].name.toLowerCase() == a)
                return b[i].content;
        return null
    },
    isDetailPage: function(a) {
        var b = !1;
        return !a || a.indexOf("shop.vipshop.com/detail") === -1 && a.indexOf("www.vip.com/detail") === -1 && a.indexOf("detail.vipglobal.hk") === -1 || (b = !0),
        b
    },
    urlEncodedFormString: function(a) {
        var b = "";
        for (var c in a)
            Object.hasOwnProperty.call(a, c) && (b = b + "&" + c + "=" + a[c]);
        return b.replace(/^&/, "")
    },
    urlEncodedFormStringWithEncode: function(a) {
        var b = "";
        for (var c in a)
            Object.hasOwnProperty.call(a, c) && (b = b + "&" + c + "=" + encodeURIComponent(a[c]));
        return b.replace(/^&/, "")
    }
};

function mscid() {
     var k = Mar.Util.encryptCid(Mar.Util.pad((new Date).getTime(), 13) + "_" + Mar.Random.rand())
    console.log(k)
    return k;
}
mscid();