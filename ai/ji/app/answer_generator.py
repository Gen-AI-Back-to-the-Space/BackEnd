import pandas as pd
import json
import os
import openai
from langchain.llms import OpenAI
from langchain.agents import create_pandas_dataframe_agent
import pandas as pd
from app.utils import *
from app.model import *


# def generate_answer(user_request: QueryData) -> TextResult:
#     answer_result = TextResult()
#     user_input = user_request.query
#     user_data = user_request.data

#     try:
#         # travel_df = json_to_dataframe(user_data)
#         # travel = create_pandas_dataframe_agent(llm=OpenAI(temperature=0.7), df=travel_df, verbose=True)
#         # response = travel.run(user_input)
#         # answer_result.answer = response
#         answer_result.answer = "이것은 테스트 답변입니다. 좋은 하루 되세요 :)"

#     except Exception as err:
#         print("[ERROR][GENERATE_ANSWER] : ", str(err))

#     return answer_result


def generate_answer(user_request: QueryData, model_gpt="text-davinci-003"):
    # text-davinci-003
    # gpt-3.5-turbo
    answer_result = TextResult()

    user_input = user_request.query
    user_data = user_request.data

    # openai API 키 인증
    openai.api_key = os.environ["OPENAI_API_KEY"]

    try:
        travel_df = json_to_dataframe(user_data)
        travel = create_pandas_dataframe_agent(
            llm=OpenAI(temperature=0.7), df=travel_df, verbose=True
        )
        response = travel.run(user_input)
        answer_result.answer = response
    except Exception as err:
        print("[ERROR][GENERATE_ANSWER] : ", str(err))

    print(answer_result)

    return answer_result


if __name__ == "__main__":
    print(os.getcwd())
    json_path = os.path.join(os.getcwd(), "ai", "ji", "user_space_test.json")
    # json_data_list

    # user_contents
    print(generate_answer("부산에 해산물 맛있는 곳이 어디더라?", json_path))
