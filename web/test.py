import Linking as nt
import json
from champquery import getstats, getspells

url = ["http://ddragon.leagueoflegends.com/cdn/","version","/data/","Language","/champion/","champion",".json"]
dic = {'version':'11.6.1', 'Language':'en_US', 'champion':'Xerath'}
ins = nt.auto_url(url)
data = ins.generate(dic)
data = ins.get()
#data = json.loads(data.json())
data = data.json()#['data'][dic['champion']]
#ignoreList = ['id','key','tags','info','image','skins','passive','partype','blurb','lore','allytips','enemytips','title','recommended']
ignoreList = []
for i in ignoreList:
    del data[i]
params = data.keys()
print(params)
data = json.dumps(data, sort_keys=True, indent=4, separators=(',', ':'))
nt.write(data, 'info.txt')

data = getstats('Xerath')
data = getspells('Xerath')

#print(data)