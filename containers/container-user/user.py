from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import json
from os import environ

app = Flask(__name__)
CORS(app)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:root@localhost:3306/heap15_user' #mac
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:@localhost:3306/heap15_user' #windows
# app.config['SQLALCHEMY_DATABASE_URI'] = environ.get('dbURL') # for docker, for windows
# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root@host.docker.internal:3306/heap15_user' 
# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://is213_proj@host.docker.internal:3306/heap15_user'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)


class User(db.Model):
    __tablename__ = 'user'

    user_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_name = db.Column(db.String(256), nullable=False)
    email = db.Column(db.String(256), nullable=False)
    password = db.Column(db.String(256), nullable=False)
    phone_no = db.Column(db.Integer, nullable=False)


    def __init__(self, user_id,user_name, email, password, phone_no):
        self.user_id = user_id
        self.user_name = user_name
        self.email = email
        self.password = password
        self.phone_no = phone_no

    def json(self):
        return {
            "user_id": self.user_id, "user_name": self.user_name, "email": self.email,
            "password": self.password, "phone_no": self.phone_no
        }


################################################
#  functions available #
################################################
#  get_all_users() - GET request returning all housekeepers #
#  user_login - Check user login password against db password #
# get_user_by_email - GET request returning user by email# (keep or remove if we are keeping login function)
#  add_user() - POST request adding a new user given user data #

################################################
@app.route('/get_all_users')
def get_all_users():
    userlist = User.query.all()
    if len(userlist):
        return jsonify(
            {
                "code": 200,
                "data": {
                    "users": [user.json() for user in userlist]
                }
            }
        )
    return jsonify(
        {
            "code": 404,
            "message": "There are no users."
        }
    ), 404

################################################################################################
@app.route('/user_login', methods=["POST"])
def user_login():
    data = request.get_json()
    email = data["email"]
    try:
        user = User.query.filter_by(email=email).first()
        if user:
            user = user.json()
            password = data["password"]
            hashed_db_password = user["password"]

            if password != hashed_db_password:
                return jsonify(
    
                {   "code": 422,
                    "message": "Incorrect password"
                }
                    
                ), 422

            return jsonify(
                {
                    "code": 200,
                    "message": "You have successfully logged in"
                }
            ), 200

        return jsonify(
                {
                    "code": 404,
                    "message": "User not found"
                }
            ), 404

    except Exception as e:
        print(e)
        return json.loads(json.dumps({"message": "Something went wrong with logging in"})), 500

################################################################################################
@app.route('/get_user_by_email/<string:email>')
def get_user_by_email(email):
    user = User.query.filter_by(email = email).first()
    if user:
        return jsonify(
            {
                "code": 200,
                "data": user.json()
            }
        ), 200

    return jsonify(
        {
            "code": 404,
            "message": "User not found"
        }
    ), 404

################################################################################################
@app.route("/add_user", methods=['POST']) # add users as given in the POST data# 
def add_user():
    try:
        data = request.get_json()
        email = data['email']


        # check email is valid (DO LATER)



        if (User.query.filter_by(email=email).first()):
            return jsonify(
                {
                    "code": 400,
                    "data": {
                        "email": email
                    },
                    "message": "User already exists."
                }
            ), 400

        data = request.get_json()
        user = User(User.user_id,**data)
        print(data)
        db.session.add(user)
        db.session.commit()

    except Exception as e:
        print(e)
        return jsonify(
            {
                "code": 500,
                "message": "An error occurred creating the user."
            }
        ), 500

    return jsonify(
        {
            "code": 201,
            "data": user.json()
        }
    ), 201

################################################################################################

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)
