import hashlib
import requests


def login():
    headers={
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36'
    }
    url='https://sso.jingoal.com/oauth/authorize?client_id=jmbmgtweb&response_type=code&state=%7Baccess_count%3A1%7D&locale=zh_CN&redirect_uri=https%3A%2F%2Fweb.jingoal.com%2F'
    data={
        'login_type': 'default',
        'username': 18888888888,
        'password': hashlib.sha1('123456789'.encode()).hexdigest()
    }
    html=requests.post(url,data=data,headers=headers)
    print(html.text)

if __name__ == '__main__':
    login()