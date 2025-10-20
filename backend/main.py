from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import fileupload
app = FastAPI(   title="MindScribe API",
    description="Backend API for MindScribe — an AI-powered handwriting and emotion analyzer.",
    version="1.0.0")

origins = [
 "http://localhost:5173"
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)




@app.get("/")
def hello():
 return  {"msg":"Hola seniore welcome to the fight club!"}


#upload route
app.include_router(fileupload.router)