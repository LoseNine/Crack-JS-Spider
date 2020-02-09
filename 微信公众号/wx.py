import execjs

def getpwd(pwd):
    with open('wx.js','r',encoding='utf8')as f:
        content=f.read()
    jsdata=execjs.compile(content)
    result=jsdata.call('getpass',pwd)
    return result

print(getpwd('123456'))