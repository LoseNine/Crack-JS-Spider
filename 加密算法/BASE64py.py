import base64

word='123456'
encrypt=base64.encodebytes(word.encode())
print(encrypt)
decrypt=base64.decodebytes(encrypt)
print(decrypt)