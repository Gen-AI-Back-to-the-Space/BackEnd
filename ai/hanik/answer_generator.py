import pandas as pd
import json
import os
import openai
from langchain.llms import OpenAI
from langchain.agents import create_pandas_dataframe_agent
from langchain.chains import LLMChain
from utils import *
from model import *
from apikey import OPENAI_API_KEY
from langchain.prompts import PromptTemplate



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
     

# def generate_answer(user_content, udate_json_path, model_gpt="text-davinci-003"):
#     # text-davinci-003
#     # gpt-3.5-turbo

#     # openai API 키 인증
#     openai.apikey = OPENAI_API_KEY
#     os.environ["OPENAI_API_KEY"] = OPENAI_API_KEY

#     travel_df = json_to_dataframe(udate_json_path)
#     travel = create_pandas_dataframe_agent(llm=OpenAI(temperature=0.7), df=travel_df, verbose=True)
    
#     return travel.run(user_content)

# def generate_answer_with_prompt(llm, prompt, df, verbose=True):
#     # 여기서 prompt를 모델에 전달하고 결과를 받습니다.
#     result = llm(prompt)
    
#     # 그 외의 작업들을 수행하고 결과를 반환합니다.
#     # 예를 들면 데이터프레임 생성 등을 수행할 수 있습니다.
#     if verbose:
#         print(result)
    
#     return result

# # 사용 예시
# model = OpenAI(temperature=0.7)
# travel_df = json_to_dataframe(udate_json_path)
# prompt = "사용자가 {memo}에 관련된것을 문장으로 물어 보았을 때 관련 주소와 일시를 정확히 알려주고, 그때 날씨가 어땠는지 정확히 일기예보를 통해서 정확히 알려줘"

# result = generate_answer_with_prompt(llm=model, prompt=prompt, df=travel_df, verbose=True)

def generate_answer(user_content, udate_json_path, model_gpt="text-davinci-003"):
    # text-davinci-003
    # gpt-3.5-turbo

    # openai API 키 인증
    openai.apikey = OPENAI_API_KEY
    os.environ["OPENAI_API_KEY"] = OPENAI_API_KEY

    travel_df = json_to_dataframe(udate_json_path)

    # prompt 생성
    prompt = f"사용자가 {user_content}에 관련된 것을 문장으로 물어보았을 때 관련 주소와 일시를 정확히 알려주고, 그 장소에 대한 다른 사람들의 평가를 함께 제공해줘"

    travel = create_pandas_dataframe_agent(llm=OpenAI(temperature=0.7), df=travel_df, verbose=True)

    return travel.run(prompt)


if __name__ == "__main__":
    print(os.getcwd())
    json_path = os.path.join(os.getcwd(),'ai','hanik','user_space_test.json')
    # print(json_path)
    # json_data_list
    # user_contents
    print(generate_answer("부산에서 음식을 짜게 먹었던 장소가 어디야 ?", json_path))
    
