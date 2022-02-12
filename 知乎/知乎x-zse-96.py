"""
__title__ = '23.知乎x-zse-96'
__author__ = '小肩膀教育'
__mtime__ = '2022/1/18'
"""
import execjs,requests

file=open('./js/zh.js','r',encoding='utf8').read()
js_code=execjs.compile(file)
sign=js_code.call('sign')
print(sign)

url='https://www.zhihu.com/api/v4/search_v3?t=general&q=%E8%AE%A1%E7%AE%97%E6%9C%BA&correction=1&offset=0&limit=20&filter_fields=&lc_idx=0&show_all_topics=0&search_source=Normal'
headers={
    'sec-ch-ua': '" Not;A Brand";v="99", "Google Chrome";v="97", "Chromium";v="97"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': 'Windows',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'cookie': '_xsrf=tqG2Nx23Nco8Ld5DKwQeombW9SgymjRW; _zap=fec0b45f-a986-47a9-944c-651d127c8468; d_c0="AKAd6l0dWxSPTms8XrZqgIZ_svQ7C2gshxg=|1642491988"; Hm_lvt_98beee57fd2ef70ccdd5ca52b9740c49=1642491996; Hm_lpvt_98beee57fd2ef70ccdd5ca52b9740c49=1642495306; KLBRSID=4efa8d1879cb42f8c5b48fe9f8d37c16|1642495299|1642491987',
    'referer': 'https://www.zhihu.com/search?type=content&q=%E8%AE%A1%E7%AE%97%E6%9C%BA',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36',
    'x-ab-param': 'tp_topic_style=0;qap_question_author=0;se_ffzx_jushen1=0;tp_contents=2;zr_slotpaidexp=1;qap_question_visitor= 0;zr_expslotpaid=1;tp_zrec=0;pf_adjust=0;pf_noti_entry_num=0;tp_dingyue_video=0;top_test_4_liguangyi=1',
    'x-ab-pb': 'CtgBQAE/ACoDTwNQA1wGQwALBIwE1gSLBTQM4AubC7ULRwC3A/QDKQUyBTsCjQQVBQEGTwdpAVcE+gZmBzcMdAHcCw8LUQUqBqsGcgebB+kE5wXrBtMH8wOhAzcFuQfaBD8GhAKeBVcHeweyB+QKQQZUB88L9gJqAVIFjAUWBrkCpgQzBYkMfQLYArIFBwcBC1YMzAKUBqMH1wvsCqADGQXCBaIGdwfYB+MFUgu0ClYFfgZ4B7QAgAUxBqYGYAszBNcCogMbABEFeQfcBwcM9AvGBjIDMAbdBycHEmwAAAIAAAAYAAAAAAAAAgMAAAAAAAAAAAAAAAAAAAEAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAsAAAAAAAsAAAAAAAAAAAEAAAAAAQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=',
    'x-api-version': '3.0.91',
    'x-app-za': 'OS=Web',
    'x-requested-with': 'fetch',
    'x-zse-93': '101_3_2.0',
    'x-zse-96': sign
}
html=requests.get(url,headers=headers)
print(html.json())