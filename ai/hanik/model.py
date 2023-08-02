from typing import List, Optional
from pydantic import BaseModel

class TravelData(BaseModel):
    id: int
    userId: int
    address: str
    spaceName: str
    x: str
    y: str
    travelDate: str
    memo: str
    spaceClass: str
    createdAt: str

class QueryData(BaseModel):
    query: str
    data: List[TravelData]
    
class TextResult(BaseModel):
    answer: Optional[str] = None