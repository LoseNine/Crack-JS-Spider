"""
RSA是一种公钥密码算法
密码分为：对称加密和 公钥加密

加密
密文=(Password^E) mod N
RSA是对明文的N次方之后除以S后的余数
任何知道E和N的人都可以加密
因此E和N也就是加密的密钥，E和N的组合就是公钥
公钥=（E,N）
E是加密Encryption，N是Number

解密
Password=密文^D mod N
对密文进行D次方后除以N的余数就是明文
任何知道了D和N的组合就可以解密
私钥=（D,N）

公钥 E,N
私钥 D,N
密钥对 E,D,N
加密：密文=明文^E mod N
解密：明文=密文^D mod N

1.生成密钥对
求N——L——E——D
N=p*q(p和q都是任何质数)
L=lcm(p-1,q-1) 二者的最小公倍数
1<E<L,E和L的最大公约数是1
E*D mod L =1
"""

import rsa

def rsaEncrypt(str):
    (publicKey,privateKey)=rsa.newkeys(512)
    print(publicKey)
    print(privateKey)
    content=str.encode('utf8')
    print('content:',content)
    crypto=rsa.encrypt(content,publicKey)
    print(crypto)
    return crypto,privateKey

def rsaDecrypt(str,pk):
    content=rsa.decrypt(str,pk)
    result=content.decode('utf8')
    print('result:',result)

if __name__ == '__main__':
    crypt,privateKey=rsaEncrypt("hello world")
    rsaDecrypt(crypt,privateKey)