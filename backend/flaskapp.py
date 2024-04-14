from flask import Flask, request, jsonify
from flask_cors import cross_origin, CORS
import firebase_admin
from firebase_admin import credentials, auth,db
import jwt
from datetime import datetime, timedelta
import subprocess

app = Flask(__name__)
# CORS(app)
SECRET_KEY = "nVGIIqFBkny1ctfFr11tYpwZ1J9LjbAb"  # Replace with your actual secret key

# Initialize Firebase app
cred = credentials.Certificate('E:/KSP Datathon 2024/Prototype Phase (LEVEL 2)/policeperformance/auth/privatekeys/roleauth3-firebase-adminsdk-u81pf-242abd53f0.json')  # Replace with your Firebase Admin SDK JSON file path
# firebase_admin.initialize_app(cred)
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://roleauth3-default-rtdb.firebaseio.com/'
})

# Function to generate JWT token
def generate_jwt_token(uid):
    payload = {
        'uid': uid,
        'exp': datetime.utcnow() + timedelta(hours=1)  # Token expiration time
    }
    token = jwt.encode(payload, SECRET_KEY, algorithm='HS256')
    return token

# Function to verify JWT token
def verify_jwt_token(token):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=['HS256'])
        return payload
    except jwt.ExpiredSignatureError:
        return None
    except jwt.InvalidTokenError:
        return None

# Firebase authentication logic
def authenticate_user(user_id, password):
    user_ref = db.reference('users').child(user_id)
    user_data = user_ref.get()
    
    if user_data:
        # Compare hashed password with provided password
        if user_data.get('password') == password:
            return True
    return False

# Login route to generate JWT token
@app.route('/login', methods=['POST'])
@cross_origin()
def login():
    user_id = request.json.get('userId')
    password = request.json.get('password')
     
    # Authenticate user using Firebase
    
    uid = authenticate_user(user_id, password)

    if uid:
        # Generate JWT token
        token = generate_jwt_token(uid)
        
        return jsonify({'token': token}), 200
    else:
        return jsonify({'message': 'Invalid credentials'}), 401

# Streamlit route, protected by token verification middleware
@app.route('/streamlit', methods=['GET'])
def streamlit():
    token = request.args.get('token')

    # Verify token
    user_Id = request.args.get('userId')
    
    if token:
        payload = verify_jwt_token(token)
        if payload:
             if user_Id == '4444':
                subprocess.Popen(['streamlit', 'run', 'police_performance.py'])
                return 'Police Performance application is running.', 200
             else:
                subprocess.Popen(['streamlit', 'run', 'io_1.py',user_Id])
                return 'Streamlit application is running.', 200
        else:
            return 'Unauthorized access.', 401
    else:
        return 'Token is missing.', 401

# Start the server
if __name__ == '__main__':
    app.run(debug=True)

    

