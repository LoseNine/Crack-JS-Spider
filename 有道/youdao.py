import requests
import time,math
import hashlib

def getTranslate(keyword):
    """
    define("newweb/common/service", ["./utils", "./md5", "./jquery-1.7"], function(e, t) {
    var n = e("./jquery-1.7");
    e("./utils");
    e("./md5");
    var r = function(e) {
        var t = n.md5(navigator.appVersion)
          , r = "" + (new Date).getTime()
          , i = r + parseInt(10 * Math.random(), 10);
        return {
            ts: r,
            bv: t,
            salt: i,
            sign: n.md5("fanyideskweb" + e + i + "n%A-rKaT5fb[Gy?;N5@Tj")
        }
    };
    """
    headers={
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Referer': 'http://fanyi.youdao.com/',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
        'Cookie': 'OUTFOX_SEARCH_USER_ID=305915764@10.169.0.83; JSESSIONID=aaaEbYa4UDvop-HxobKax; OUTFOX_SEARCH_USER_ID_NCOO=1390983887.8620632; P_INFO=losenine; ANTICSRF=cleared; NTES_OSESS=cleared; S_OINFO=; DICT_UGC=be3af0da19b5c5e6aa4e17bd8d90b28a|; JSESSIONID=abciwFedFfjVF8Q3sRKax; _ntes_nnid=c3809d36e692bc7a2a8d5a612c2cf49c,1581163303922; ___rl__test__cookies=1581163610466'
    }

    url='http://fanyi.youdao.com/translate_o?smartresult=dict&smartresult=rule'
    data={
        'i': keyword,
        'from': 'AUTO',
        'to': 'AUTO',
        'smartresult': 'dict',
        'client': 'fanyideskweb',
        'salt': math.floor(time.time()*10000),
        'sign': hashlib.md5(("fanyideskweb" + keyword + str(math.floor(time.time()*10000)) + "n%A-rKaT5fb[Gy?;N5@Tj").encode('utf-8')).hexdigest(),
        'ts': math.floor(time.time()*1000),
        'bv': '42160534cfa82a6884077598362bbc9d',
        'doctype': 'json',
        'version': '2.1',
        'keyfrom': 'fanyi.web',
        'action': 'FY_BY_REALTlME'
    }
    html=requests.post(url,data=data,headers=headers)
    print(html.json()['translateResult'][0][0]['tgt'])

if __name__ == '__main__':
    keyword='北京大学'
    getTranslate(keyword)