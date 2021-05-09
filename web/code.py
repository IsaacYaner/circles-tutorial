import Linking as nt
import requests
import json

url = "https://www.handbook.unsw.edu.au/api/es/search"
payload = {"query":{"bool":{"must":[{"term":{"live":True}},[{"bool":{"minimum_should_match":"100%","should":[{"query_string":{"fields":["unsw_pcourse.studyLevelValue"],"query":"*ugrd*"}}]}},{"bool":{"minimum_should_match":"100%","should":[{"query_string":{"fields":["unsw_pcourse.implementationYear"],"query":"*2021*"}}]}},{"bool":{"minimum_should_match":"100%","should":[{"query_string":{"fields":["unsw_pcourse.active"],"query":"*1*"}}]}}]],"filter":[{"terms":{"contenttype":["unsw_pcourse","unsw_pcourse"]}}]}},"sort":[{"unsw_pcourse.code_dotraw":{"order":"asc"}}],"from":0,"size":800,"track_scores":True,"_source":{"includes":["*.code","*.name","*.award_titles","*.keywords","urlmap","contenttype"],"excludes":["",None]}}
headers = {
    "content-type": "application/json",
}

r = requests.post(url, data=json.dumps(payload), headers=headers)

data = r.json()
'''
data = data['contentlets'][0]['data']
data = json.loads(data)
data = data['enrolment_rules'][0]
data = data['description']
'''
data = json.dumps(data, sort_keys=True, indent=4, separators=(',', ':'))

nt.write(data, 'tem.txt')

#print(data)