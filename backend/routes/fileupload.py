from fastapi import File,UploadFile,APIRouter
import os
import shutil
from pathlib import Path


router = APIRouter(prefix="/upload",tags=["file upload"])
UPLOAD_DIR = Path("uploads")
UPLOAD_DIR.mkdir(exist_ok=True)

@router.post("/")
async def upload_file(wordimage: UploadFile = File(...)):
    try:
        print("Yes i am working!")
        file_location = UPLOAD_DIR / wordimage.filename
        with open(file_location, "wb") as f:
            f.write(await wordimage.read())
        return {
            "sucess":True,
            "message": "File uploaded successfully!",
            "filename": wordimage.filename,
            }
    except Exception as e:
        return {"error": str(e)}