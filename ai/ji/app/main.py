from fastapi import FastAPI
from fastapi.encoders import jsonable_encoder
from fastapi.middleware.cors import CORSMiddleware
from starlette.responses import JSONResponse
import sys
import os

sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))

from app.answer_generator import *
from app.model import *

app = FastAPI()

@app.post("/answer")
async def make_answer(user_request: QueryData):
    global g_answer
    g_answer = generate_answer(user_request)
    converted_answer = jsonable_encoder(g_answer)
    return JSONResponse(content=converted_answer)


origins = [
    "http://0.0.0.0:80",
    "http://localhost"
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)