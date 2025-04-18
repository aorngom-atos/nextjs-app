from typing import Union
import psycopg2
from fastapi import FastAPI

app = FastAPI()
connection = psycopg2.connect("dbname=postgres user=psql password=pwd host=postgres port=5432")
@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}
