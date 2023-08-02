import pandas as pd
import json
import os
import openai
from langchain.llms import OpenAI
from langchain.agents import create_pandas_dataframe_agent
import pandas as pd
from utils import *
from model import *
from apikey import OPENAI_API_KEY


# def generate_answer(user_request: QueryData) -> TextResult:
#      answer_result = TextResult()
#      user_input = user_requestd.query
#      user_data = user_request.data

#      try:
#         # travel_df = json_to_dataframe(user_data)
#         # travel = create_pandas_dataframe_agent(llm=OpenAI(temperature=0.7), df=travel_df, verbose=True)
#         # response = travel.run(user_input)
#         # answer_result.answer = response
#         answer_result.answer = "이것은 테스트 답변입니다. 좋은 하루 되세요 :)"

#      except Exception as err:
#         print('[ERROR][GENERATE_ANSWER] : ', str(err))

#      return answer_result
     

def generate_answer(user_content, udate_json_path, model_gpt="text-davinci-003"):
    # text-davinci-003
    # gpt-3.5-turbo

    # openai API 키 인증
    openai.apikey = OPENAI_API_KEY
    os.environ["OPENAI_API_KEY"] = OPENAI_API_KEY

    travel_df = json_to_dataframe(udate_json_path)
    travel = create_pandas_dataframe_agent(llm=OpenAI(temperature=0.7), df=travel_df, verbose=True)
    
    return travel.run(user_content)

if __name__ == "__main__":
    print(os.getcwd())
    json_path = os.path.join(os.getcwd(),'ai','hanik','user_space_test.json')
    # print(json_path)
    # json_data_list
    # user_contents
    print(generate_answer("최근에 재밌고 유익한 대화를 한 장소가 어디야 ?", json_path))
    
