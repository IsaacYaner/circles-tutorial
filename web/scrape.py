import requests
import json

url = "https://www.handbook.unsw.edu.au/api/es/search"
payload = {
  "query":{
    "bool":{
      "must":[
        {
          "term":{
            "live": True
          }
        },
        [
          {
            "bool":{
              "minimum_should_match":"100%",
              "should":[
                {
                  "query_string":{
                    "fields":[
                      "unsw_psubject.implementationYear"
                    ],
                    "query":"*2021*"
                  }
                }
              ]
            }
          },
          {
            "bool":{
              "minimum_should_match":"100%",
              "should":[
                {
                  "query_string":{
                    "fields":[
                      "unsw_psubject.studyLevelValue"
                    ],
                    "query":"*ugrd*"
                  }
                }
              ]
            }
          },
          {
            "bool":{
              "minimum_should_match":"100%",
              "should":[
                {
                  "query_string":{
                    "fields":[
                      "unsw_psubject.active"
                    ],
                    "query":"*1*"
                  }
                }
              ]
            }
          }
        ]
      ],
      "filter":[
        {
          "terms":{
            "contenttype":[
              "unsw_psubject"
            ]
          }
        }
      ]
    }
  },
  "sort":[
    {
      "unsw_psubject.code_dotraw":{
        "order":"asc"
      }
    }
  ],
  "from":3150,
  "size":50,
  "track_scores": True,
  "_source":{
    "includes":[
      "*.code",
      "*.name",
      "*.award_titles",
      "*.keywords",
      "urlmap",
      "contenttype"
    ],
    "excludes":[
      "",
      None
    ]
  }
}

headers = {
    "content-type": "application/json",
}

r = requests.post(url, data=json.dumps(payload), headers=headers)

json_res = r.json()

print(json_res)