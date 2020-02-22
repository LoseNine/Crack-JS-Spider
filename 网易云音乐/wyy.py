import requests
import execjs
from urllib import parse

def getArgs(fun,songid):
    data=str({'ids': "[" + str(songid) + "]", 'br': 128000, 'csrf_token': ""})
    with open('./wyy.js','r',encoding='gbk')as f:
        content=f.read()
    jsData=execjs.compile(content)
    data=jsData.call(fun,data)
    return data

headers={
    'Referer': 'https://music.163.com/',
    'Content-Type': 'application/x-www-form-urlencoded',
    'User-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36'
}
session=requests.session()
session.headers=headers

def get_music(songid):
    url='https://music.163.com/weapi/song/enhance/player/url?csrf_token='
    jsdata=getArgs('getargs',songid)
    data={
        'params': parse.quote(jsdata['encText']),
        'encSecKey': parse.quote(jsdata['encSecKey'])
    }
    html=session.post(url,data=data,headers=headers)
    print('正在获取Music....')
    try:
        url=html.json()['data'][0]['url']
        print('正在下载歌曲....')
        download(url)
        print('歌曲下载完毕....')
    except:
        get_music(songid)

def download(url):
    with open('music.mp3','wb')as f:
        f.write(requests.get(url).content)

def main():
    sid=input('输入歌曲所在URL,如 https://music.163.com/#/song?id=1413142894>>>')
    number=sid.split('=')[-1]
    get_music(number)

if __name__ == '__main__':
    main()