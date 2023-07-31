import pandas as pd
import json
from utils import *
import os
import openai
from langchain.llms import OpenAI
from langchain.agents import create_pandas_dataframe_agent
import pandas as pd
from apikey import OPENAI_API_KEY


def generate_response(user_content, udate_json_path, model_gpt="text-davinci-003"):
    # text-davinci-003
    # gpt-3.5-turbo

    # openai API 키 인증
    openai.api_key = OPENAI_API_KEY
    os.environ["OPENAI_API_KEY"] = OPENAI_API_KEY

    travel_df = json_to_dataframe(udate_json_path)
    travel = create_pandas_dataframe_agent(llm=OpenAI(temperature=0.7), df=travel_df, verbose=True)
    
    return travel.run(user_content)

if __name__ == "__main__":
    print(os.getcwd())
    json_path = os.path.join(os.getcwd(),'ai','ji','user_space_test.json')
    print(generate_response("최근에 맛있게 먹은 음식이 뭐지?", json_path))
    
    
