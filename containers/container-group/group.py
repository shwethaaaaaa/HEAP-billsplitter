from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import datetime
import json
from os import environ

app = Flask(__name__)
CORS(app)

# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:root@localhost:3306/g6t5_booking' #mac
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:@localhost:3306/heap15_group' #windows
# app.config['SQLALCHEMY_DATABASE_URI'] = environ.get('dbURL') # for docker, for windows
# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://is213_proj@host.docker.internal:3306/g6t5_booking'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)


class Group(db.Model):
    __tablename__ = 'group'

    group_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    group_name = db.Column(db.String(256))
    group_members = db.Column(db.String(256))
    home_currency = db.Column(db.String(256))
    group_status = db.Column(db.String(256))

    def __init__(self, group_id, group_name, group_members, home_currency, group_status):
        self.group_id = group_id
        self.group_name = group_name
        self.group_members = group_members
        self.home_currency = home_currency
        self.group_status = group_status
        

    def json(self):
        return {"group_id": self.group_id, "group_name": self.group_name, "group_members": self.group_members,
        "home_currency": self.home_currency, "group_status": self.group_status}


################################################
#  functions available #
################################################
# get_all_groups() - GET request returning all groups 
# get_group_by_id() - GET request returning a group by group_id # (Notee: we may need a diff function to get all open & close groups separately)
# create_new_group() - POST request creating a new group
# update_home_currency() - PUT request updating a group's home currencyD #


################################################################################################
# get_all_groups() - GET request returning all groups 
@app.route('/get_all_groups')
def get_all_groups():
    grouplist = Group.query.all()
    if len(grouplist):
        return jsonify(
            {
                "code": 200,
                "data": {
                    "users": [group.json() for group in grouplist]
                }
            }
        )
    return jsonify(
        {
            "code": 404,
            "message": "There are no groups."
        }
    ), 404

################################################################################################

################################################################################################
# get_group_by_id() - GET request returning a group by group_id # (Notee: we may need a diff function to get all open & close groups separately)
@app.route("/group/<int:group_id>")
def get_group_by_id(group_id):
    group = Group.query.filter_by(group_id=group_id).first()
    if group:
        return jsonify(
            {
                "code": 200,
                "data": group.json()
            }
        )
    return jsonify(
        {
            "code": 404,
            "message": "Group not found."
        }
    ), 404

################################################################################################
# create_new_group() - POST request creating a new group
@app.route("/group", methods=['POST'])
def create_new_group():
    try:
        group_id = request.json.get('group_id', None)
        if (Group.query.filter_by(group_id=group_id).first()):
            return jsonify(
                {
                    "code": 400,
                    "data": {
                        "group_id": group_id
                    },
                    "message": "Group already exists."
                }
            ), 400

        group_info = request.get_json()
        print(group_info)
        new_group = Group(Group.booking_id, group_status = "open", **group_info) # the user will provide everything else except the GroupID
        db.session.add(new_group)
        db.session.commit()
    except Exception as e:
        return jsonify(
            {
                "code": 500,
                "message": "An error occurred while creating the group." + str(e)
            }
        ), 500

    return jsonify(
        {
            "code": 201,
            "data": new_group.json()
        }
    ), 201

################################################################################################
#  USE METHOD AFTER THE PAYMENT IS MADE TO DELETE THE GROUP AFTER PAYMENT IS MADE... (code is just to use as reference later)
# @app.route("/booking/<int:booking_id>", methods=['DELETE'])
# def delete_booking(booking_id):
#     booking = Booking.query.filter_by(booking_id=booking_id).first()
#     if booking:
#         db.session.delete(booking)
#         db.session.commit()
#         return jsonify(
#             {
#                 "code": 200,
#                 "data": {
#                     "booking_id": booking_id
#                 }
#             }
#         )
#     return jsonify(
#         {
#             "code": 404,
#             "data": {
#                 "booking_id": booking_id
#             },
#             "message": "Booking not found."
#         }
#     ), 404


################################################################################################
# update_home_currency() - PUT request updating a group's home currencyD #
@app.route("/update_home_currency/<int:group_id>", methods=['PUT'])
def update_home_currency(group_id):
    try:
        group = Group.query.filter_by(group_id=group_id).first()
        if not group:
            return jsonify(
                {
                    "code": 404,
                    "data": {
                        "booking_id": group_id
                    },
                    "message": "Group not found."
                }
            ), 404

        # update homecurrency
        data = request.get_json()
        print(data)
        if data and data['home_currency']:
            setattr(group, 'home_currency', data['home_currency'])

            db.session.commit()
        else:
            return jsonify(
                {
                    "code": 400,
                    "message": "You are missing the home currency value, please enter something"
                }
            ), 400

        return jsonify(
            {
                "code": 200,
                "data": group,
                "message": "Home Currency has been sucessfully updated!"
            }
        ), 200

    except Exception as e:
        return jsonify(
            {
                "code": 500,
                "data": {
                    "group_id": group_id
                },
                "message": "An error occurred while changing the home currency. " + str(e)
            }
        ), 500



if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5002, debug=True)
