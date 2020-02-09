import hashlib
"""
SHA-1是一种密码散列函数，美国国家安全局设计
可以生成一个被称为消息摘要的160为散列值
一共20字节
呈现形式为40个十六进制数
长度40
"""

def get_sha1(keyword):
    sha=hashlib.sha1(keyword.encode()).hexdigest()
    return sha

print(len(get_sha1('nihao')))