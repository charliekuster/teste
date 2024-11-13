from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from pathlib import Path
import json

app = FastAPI()

# Configurando o middleware CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:5500"],  # Permite somente o front-end da porta 5500
    allow_credentials=True,
    allow_methods=["*"],  # Permite todos os métodos (GET, POST, etc.)
    allow_headers=["*"],  # Permite todos os cabeçalhos
)

@app.get('/')
def read_root():
    file_path = Path("saida.json")
    with file_path.open("r", encoding="utf-8") as file:
        data = json.load(file) 
    return data