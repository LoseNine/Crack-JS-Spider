import hashlib
"""
MD5是一种信息摘要算法
从一个字符串或文件按照一定规则生成特殊字符串
特点：
1.固定长度128bit的0和1
2.按照4bit32组，每一组按16机制计算数值，字符输出
3.不可逆
4.有可能碰撞
5.长度32
"""

def get_md5(keyword):
    m=hashlib.md5()
    m.update(keyword.encode('utf8'))
    print(m.hexdigest())
    return m.hexdigest()

print(hashlib.md5('你好'.encode('utf8')).hexdigest())