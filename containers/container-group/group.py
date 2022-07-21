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
    owner_id = db.Column(db.Integer)
    group_name = db.Column(db.String(256))
    group_members = db.Column(db.String(256))
    user_ids = db.Column(db.String(256))
    home_currency = db.Column(db.String(256))
    group_status = db.Column(db.String(256))

    def __init__(self, group_id, owner_id, group_name, group_members, user_ids, home_currency, group_status):
        self.group_id = group_id
        self.owner_id = owner_id
        self.group_name = group_name
        self.group_members = group_members
        self.user_ids= user_ids
        self.home_currency = home_currency
        self.group_status = group_status
        

    def json(self):
        return {"group_id": self.group_id, "owner_id": self.owner_id, "group_name": self.group_name, "group_members": self.group_members, "user_ids": self.user_ids,
        "home_currency": self.home_currency, "group_status": self.group_status}




# class GroupMembers(db.Model):
#     __tablename__ = 'group_members'

#     group_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
#     user_id = db.Column(db.Integer)
   

#     def __init__(self, group_id, user_id):
#         self.group_id = group_id
#         self.user_id = user_id
        

#     def json(self):
#         return {"group_id": self.group_id, "user_id": self.user_id}



################################################
#  functions available #
################################################
# get_all_groups() - GET request returning all groups  - working!
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
                    "groups": [group.json() for group in grouplist]
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
# get_groups_by_user_id - GET Request returning groups belonging to a particular user id
@app.route('/get_groups_by_user_id/<int:user_id>')
def get_groups_by_user_id(user_id):
    grouplist = Group.query.all()
    newgrouplist = [group.json() for group in grouplist]
    new_groups_list = []
    for group_dict in newgrouplist:
        str_of_user_ids = group_dict["user_ids"]
        list_of_user_ids = str_of_user_ids.split(",")
        # print(list_of_user_ids)
        if str(user_id) in list_of_user_ids:
            new_groups_list.append(group_dict)
    # print (new_groups_list)
    if len(grouplist):
        return jsonify(
            {
                "code": 200,
                "data": {
                    "groups": new_groups_list
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

################################################################################################
# create_new_group() - POST request creating a new group

# for testing
#  {
#     "group_name": "Titans", 
#     "group_members": "Sara, Timothy, Krish",
#     "home_currency": "SG"
# }


@app.route("/group", methods=['POST'])
def create_new_group():
    try:
        group_info = request.get_json()
        print(group_info)
        new_group = Group(Group.group_id, group_status = "open", **group_info) # the user will provide everything else except the GroupID
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
@app.route("/group/<int:group_id>", methods=['DELETE'])
def delete_group(group_id):
    group = Group.query.filter_by(group_id=group_id).first()
    if group:
        db.session.delete(group)
        db.session.commit()
        return jsonify(
            {
                "code": 200,
                "data": {
                    "group_id": group_id
                }
            }
        )
    return jsonify(
        {
            "code": 404,
            "data": {
                "group_id": group_id
            },
            "message": "Group not found."
        }
    ), 404


################################################################################################
# update_group_status- PUT request updating a group's status #
@app.route("/update_group_status/<int:group_id>", methods=['PUT'])
def update_group_status(group_id):
    try:
        group = Group.query.filter_by(group_id=group_id).first()
        data = request.get_json()
        print(data)
        if data and ('' in data):
            setattr(group, 'group_status ', data['group_status'])
            print(data['group_status'])

            db.session.commit()


            return jsonify(
                {
                    "code": 200,
                    "data": group.json(),
                    "message": "Group status has been sucessfully updated!"
                }
            ), 200
            
        else:
            return jsonify(
                {
                    "code": 400,
                    "message": "You are missing the group status, please enter something"
                }
            ), 400


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
