import pandas as pd
import json

# def json_to_dataframe(json_data):
#     df = pd.DataFrame(json_data) #eval(data)
#     return df

def json_to_dataframe(json_path):
    with open(json_path, encoding='UTF8') as f:
        js = json.loads(f.read()) ## json 라이브러리 이용
        df = pd.DataFrame(js)
        df = pd.read_json(json_path) ## pd.read_json 이용
    return df