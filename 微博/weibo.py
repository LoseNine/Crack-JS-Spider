import requests
import rsa
import time
import re
import random
import urllib3
import base64
from urllib.parse import quote
from binascii import b2a_hex
urllib3.disable_warnings() # 取消警告

import execjs

def get_js():
    with open('weibo.js','r',encoding='utf8')as f:
        result=f.read()
    return result
def getjssu(func,keyword):
    jsstr=get_js()
    ctx=execjs.compile(jsstr)
    return ctx.call(func,keyword)
def getjssp(func,a,b,c,d):
    jsstr=get_js()
    ctx=execjs.compile(jsstr)
    return ctx.call(func,a,b,c,d)

def get_timestamp():
    return int(time.time())  # 获取时间戳

class WeiBo():
    def __init__(self,username,password):
        self.username = username
        self.password = password
        self.session = requests.session() #登录用session
        self.session.headers={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36'
        }
        self.session.verify = False  # 取消证书验证

    def prelogin(self):
        '''预登录，获取一些必须的参数'''
        self.su = base64.b64encode(quote(self.username).encode())  #阅读js得知用户名进行base64转码
        url = 'https://login.sina.com.cn/sso/prelogin.php?entry=weibo&callback=sinaSSOController.preloginCallBack&su={}&rsakt=mod&checkpin=1&client=ssologin.js(v1.4.19)&_={}'.format(quote(self.su),get_timestamp()) #注意su要进行quote转码
        response = self.session.get(url).content.decode()
        # print(response)
        self.nonce = re.findall(r'"nonce":"(.*?)"',response)[0]
        self.pubkey = re.findall(r'"pubkey":"(.*?)"',response)[0]
        self.rsakv = re.findall(r'"rsakv":"(.*?)"',response)[0]
        self.servertime = re.findall(r'"servertime":(.*?),',response)[0]
        return self.nonce,self.pubkey,self.rsakv,self.servertime

    def get_sp(self):
        '''用rsa对明文密码进行加密，加密规则通过阅读js代码得知'''
        """
        function br(a, b) {
            if (a != null && b != null && a.length > 0 && b.length > 0) {
                this.n = bm(a, 16);
                this.e = parseInt(b, 16)
            } else alert("Invalid RSA public key")
        }
        
        var f = new sinaSSOEncoder.RSAKey;
        f.setPublic(me.pubkey, "10001");
        return f.encrypt([me.servertime, me.nonce].join("\t") + "\n" + password);
        """
        #PublicKey(5, 3)
        publickey = rsa.PublicKey(int(self.pubkey,16),int('10001',16))
        message = str(self.servertime) + '\t' + str(self.nonce) + '\n' + str(self.password)
        self.sp = rsa.encrypt(message.encode(),publickey)
        return b2a_hex(self.sp)#转化为16进制

    def login(self):
        url = 'https://login.sina.com.cn/sso/login.php?client=ssologin.js(v1.4.19)'
        data = {
        'entry': 'weibo',
        'gateway': '1',
        'from':'',
        'savestate': '7',
        'qrcode_flag': 'false',
        'useticket': '1',
        'pagerefer': 'https://login.sina.com.cn/crossdomain2.php?action=logout&r=https%3A%2F%2Fweibo.com%2Flogout.php%3Fbackurl%3D%252F',
        'vsnf': '1',
        # 'su': self.su,
        'su': getjssu('getsu',self.username),
        'service': 'miniblog',
        'servertime': str(int(self.servertime)+random.randint(1,20)),
        'nonce': self.nonce,
        'pwencode': 'rsa2',
        'rsakv': self.rsakv,
        #'sp': self.get_sp(),
        'sp': getjssp('getsp',self.password,self.pubkey,self.servertime,self.nonce),
        'sr': '1536 * 864',
        'encoding': 'UTF - 8',
        'prelt': '35',
        'url': 'https://weibo.com/ajaxlogin.php?framelogin=1&callback=parent.sinaSSOController.feedBackUrlCallBack',
        'returntype': 'META',
        }
        response = self.session.post(url,data=data,allow_redirects=False).text # 提交账号密码等参数
        redirect_url = re.findall(r'location.replace\("(.*?)"\);',response)[0] # 微博在提交数据后会跳转，此处获取跳转的url
        result = self.session.get(redirect_url,allow_redirects=False).text  # 请求跳转页面
        ticket,ssosavestate = re.findall(r'ticket=(.*?)&ssosavestate=(.*?)"',result)[0] #获取ticket和ssosavestate参数
        uid_url = 'https://passport.weibo.com/wbsso/login?ticket={}&ssosavestate={}&callback=sinaSSOController.doCrossDomainCallBack&scriptId=ssoscript0&client=ssologin.js(v1.4.19)&_={}'.format(ticket,ssosavestate,get_timestamp())
        data = self.session.get(uid_url).text #请求获取uid
        uid = re.findall(r'"uniqueid":"(.*?)"',data)[0]
        print(uid)
        home_url = 'https://weibo.com/u/{}/home?wvr=5&lf=reg'.format(uid) #请求首页
        html = self.session.get(home_url)
        html.encoding = 'utf-8'
        print(html.text)

    def main(self):
        self.prelogin()
        self.get_sp()
        self.login()

if __name__ == '__main__':
    username = '1234567899' # 微博账号
    password = '123456' # 微博密码
    weibo = WeiBo(username,password)
    weibo.main()