import requests
import time,math
import execjs

class Netease:
    def __init__(self,username,pwd):
        self.username=username
        self.pwssword=pwd
        self.session=requests.session()
        self.session.headers={
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
            'Cookie': 'JSESSIONID-WYTXZ=wVLPprkMsrmAn30MXs8Ybew%2FccT09%2BuRSNAlyTZkMAT%5C8uCL9bqlaE7ST5VPxEBQ5feIHpDAJXll7Wrz3E7cfoNsdW2B7FafEMfMGHRVNi7vsitG2Ya9xkpkomkxRoGArHDR1GzZBE%2Bfx9Pn3OY8ZLeS0%2BjRmNV6ENTElja31b5pKofy%3A1576837035294; _mloixed92=30; _ihtxzdilxldP8_=30; ntes_zc_cid=e08850b5-d601-4231-be90-6fd6c7ac92d2; _9755xjdesxxd_=32; YD00000710348764%3AWM_TID=UVPb4b1EsftABARUVVZt7kxZwtCzX1uy; l_yd_sign=-020170531dRcJz1xcUE_bbAmOKnWeEXVsB1YWrmodrMHy3rnXq2FUgRLyhJ1UXm7zN2VGisRlLd9YoRqSdZrgluO7j5tXpT1kW5kpIzKqfzOAjYR0wDWg..; _ntes_nnid=e090390db2c38403d3e29f61797522e4,1578922608044; UM_distinctid=16f9f1f0a058d6-00c2ac32ae1d1f-6701b35-144000-16f9f1f0a066bd; hb_MA-BFF5-63705950A31C_u=%7B%22utm_source%22%3A%20%22cp-400000000446017%22%2C%22utm_medium%22%3A%20%22share%22%2C%22utm_campaign%22%3A%20%22commission%22%2C%22utm_content%22%3A%20%22%22%2C%22utm_term%22%3A%20%22%22%2C%22promotional_id%22%3A%20%22%22%7D; _ntes_nuid=e090390db2c38403d3e29f61797522e4; vinfo_n_f_l_n3=0be26d80ec537070.1.1.1578922608054.1578924079245.1580868814230; hb_MA-BFF5-63705950A31C_source=cp.study.163.com; NTES_hp_textlink1=old; NNSSPID=d14918c7ed6f44e081ed37dfa3df71b0; YD00000710348764%3AWM_NI=whs5GSCePDhQiaJp9Yhmm1GhEnQF%2BfM8%2FyXt3uYovupfF9DFbdptJKKl2racwBvrp%2FZ09nNn0YjsAAMYv28yRGJWOnF58YaywflgG6a6fTkXFGoiQBwz6q%2BPLg3lkDc1RXQ%3D; YD00000710348764%3AWM_NIKE=9ca17ae2e6ffcda170e2e6eed5c23e9abfbb93c67f8bb08fa6c55b968e9f85ae4b93b5ffa5f3608dabfaa8cf2af0fea7c3b92ab5b8bdd6c65981bba0a5eb5babbf8691bc53acb3a3d2c66487b29fa7aa6e8fe8e19adb80f1ab9790f57fb4ba8adac74ea2bcc095c94189b4fe93e469b59eba93f3259af0f78fcd66f487a694c44b8f87bad3bb73929986b8ce6686ebf8bae473b5baa488c63ea3eaaab5ea548699a18ad44ab5a6fa92aa5c90b9fd8dea50a1ef9eb9d437e2a3; THE_LAST_LOGIN=losenine@163.com; cm_newmsg=user%3Dlosenine%40163.com%26new%3D14%26total%3D27; BAIDU_SSP_lcr=https://www.baidu.com/link?url=ZxbKp4j-KfU975P8ZEDVLfGHjLiRcfOQNeJgk0gcsp3&wd=&eqid=a8b2b577003f0d7b000000035e3e92c4; utid=cxJxu9csTK15MomIxtwtGNx0y0KQoiXp; P_INFO=losenine@163.com|1581160870|0|163|00&99|bej&1581160852&caldav#bej&null#10#0#0|&0|163&youdaodict_client&study|losenine@163.com; webzjcookiecheck=1; l_s_163MODXOXd=5B4AE6BFF238CE247A553C01A50AC390DD270BB7D69E4B49CECE2D089A2E61D79662EDE0B5061E5F49B92D325B0DF41C7238221AADB64C65293408C10DAA9800F4C44D9840BBDAD8C6F2C4E50B9ECF7825D413DB60BC0CDF0BB42AF4B4AD1BA9CD9C1F88078EA8F6B7EFF6DC14F80A6B; gdxidpyhxdE=ovC9lzvB4gyKhBG%2BJtApI7Hd%2BS%2FbjMaxYKz5rciPLYMElyKudSzmpr9QvxvoRafC%5CG%5CzDhdd7e8w5SI3WY69E5zZ4z6PJ03q69qZsYu3jRj%2Bu3cNPnKz5%2FQyYIK8j5RhgEnhI7OqZgYA%2FylYA0twEZe%5CAz6fCWmILXeeHn2gje88Hxji%3A1581163008893; JSESSIONID-WYTXZDL=DRfGdPPHjW6MdVfDs5JuQOP5wSwOhO3YE5LJbZjJTpXiliKEhjG9L9INOdG2ghMDmF29nO2R%5CvW7ZFcpK0GeMMZghE7ZHhHNHVYDsOIOrPkYvSreeA%5CB%5CIDQDLNFFT4nGStizhfzTRoo7rSR8rsu1yGGVagsQ%2Bmvxa0LQ%2BZv1QjSys7o%3A1581163029305'}

    def getTime(self):
        return str(math.floor(time.time()*1000))

    def getRtid(self):
        with open('rtid.js','r',encoding='utf8')as f:
            content=f.read()
        jsdata=execjs.compile(content)
        rtid=jsdata.call('getRtid')

        self.rtid=rtid
        print('rtid:', self.rtid)

    def getTK(self):
        params={
            'un': self.username,
            'pkid': 'MODXOXd',
            'pd': '163',
            'channel': '0',
            'topURL': 'https://www.163.com/',
            'rtid': self.rtid,
            'nocache': self.getTime()
        }
        html=self.session.get('https://dl.reg.163.com/dl/gt',params=params)
        self.tk=html.json()['tk']
        print('tk:',self.tk)

    def getpwd(self):
        with open('netease.js','r',encoding='utf8')as f:
            content=f.read()
        jsdata=execjs.compile(content)
        pw=jsdata.call('getpwd',self.pwssword)
        print('pw:',pw)
        return pw

    def login(self):
        json_data={"un":self.username,
                   "pw":self.getpwd(),
                   "pd":"163",
                   "l":0,
                   "d":10,
                   "t":self.getTime(),
                   "pkid":"MODXOXd",
                   "domains":"163.com",
                   "tk":self.tk,
                   "pwdKeyUp":1,
                   "channel":0,
                   "topURL":"https://www.163.com/",
                   "rtid":self.rtid}

        url='https://dl.reg.163.com/dl/l'
        html=self.session.post(url,json=json_data).text
        print(html)

    def start(self):
        self.getRtid()
        self.getTK()

        self.login()

if __name__ == '__main__':
    username="losenine@163.com"
    pwd='123456'
    N=Netease(username,pwd)
    N.start()