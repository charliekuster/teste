from fastapi import FastAPI
from pathlib import Path
import json
app = FastAPI()
 
@app.get('/')
def read_root():
    file_path = Path("saida.json")
    with file_path.open("r", encoding="utf-8") as file:
        data = json.load(file) 
    return data