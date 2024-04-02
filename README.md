# Intelligent Virtual Assistant  
  
## Description  
Multimodal AI Virtual Agents, AI Avatars, and AI Voice Agents with MyLiva.  
  
## Installation  
  
### Backend Server  
  
The backend server is a FastAPI application. Follow these steps to set it up:  
  
```bash  
# Create a Python virtual environment  
python3 -m venv env  
  
# Activate the virtual environment  
# Windows  
.\env\scripts\activate  
# Linux/Mac  
source env/bin/activate  
  
# Install the necessary packages  
pip install -r requirements.txt  
  
# Run the FastAPI server  
uvicorn generate_response_azure:app --reload  

### Backend Server
  
# Navigate to the VirtualAssistant directory  
cd VirtualAssitant  
  
# Install the necessary packages  
npm install  
  
# Run the Node.js application  
node app.js  
