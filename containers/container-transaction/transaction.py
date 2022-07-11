from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import datetime
import json
from os import environ

app = Flask(__name__)
CORS(app)

# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:root@localhost:3306/g6t5_booking' #mac
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:@localhost:3306/heap15_transaction' #windows
# app.config['SQLALCHEMY_DATABASE_URI'] = environ.get('dbURL') # for docker, for windows
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)


class Transaction(db.Model):
    __tablename__ = 'transaction'

    transaction_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    group_id = db.Column(db.Integer)
    payer = db.Column(db.String(256))
    payer_id = db.Column(db.Integer)
    ower = db.Column(db.String(256))
    ower_id = db.Column(db.Integer)
    Exchange_rate = db.Column(db.FLOAT)
    amount = db.Column(db.FLOAT)
    description = db.Column(db.String(256))

    def __init__(self, transaction_id, group_id, payer, payer_id, ower, ower_id,Exchange_rate,amount,description):
        self.transaction_id = transaction_id
        self.group_id = group_id
        self.payer = payer
        self.payer_id = payer_id
        self.ower = ower
        self.ower_id = ower_id
        self.Exchange_rate = Exchange_rate
        self.amount = amount
        self.description = description
        

    def json(self):
        return {"transaction_id": self.transaction_id , "group_id": self.group_id, "payer": self.payer, "payer_id": self.payer_id, "ower": self.ower,"ower_id": self.ower_id
        ,"Exchange_rate": self.Exchange_rate, "amount": self.amount,"description": self.description}


###############################################################################################
# new combined function
@app.route("/transaction/<int:user_id>")
def get_transaction_by_id(user_id):
    transactions = Transaction.transaction.filteror(Transaction.transaction.payer_id==user_id, Transaction.transaction.ower_id==user_id)
    if transactions:
        return jsonify(
            {
                "code": 200,
                "data": {
                    "transactions": [transaction.json() for transaction in transactions]
                }
            }
        )
    return jsonify(
        {
            "code": 404,
            "message": "No transactions"
        }
    ), 404



################################################################################################
# transaction() - GET request to get transaction be payer_id 
@app.route("/transaction/<int:payer_id>")
def get_transaction_by_payer_id(payer_id):
    transactions = Transaction.query.filter_by(payer_id=payer_id).all()
    if transactions:
        return jsonify(
            {
                "code": 200,
                "data": {
                    "transactions": [transaction.json() for transaction in transactions]
                }
            }
        )
    return jsonify(
        {
            "code": 404,
            "message": "No transactions"
        }
    ), 404

################################################################################################
# transaction() - GET request to get transaction be ower_id 
@app.route("/transaction_to_be_paid/<int:ower_id>")
def get_transaction_by_ower_id(ower_id):
    transactions = Transaction.query.filter_by(ower_id=ower_id).all()
    if transactions:
        return jsonify(
            {
                "code": 200,
                "data": {
                    "transactions": [transaction.json() for transaction in transactions]
                }
            }
        )
    return jsonify(
        {
            "code": 404,
            "message": "No transactions"
        }
    ), 404
    
################################################################################################

################################################################################################
# get_transaction_by_id() - GET request returning a transaction by group_id
@app.route("/transaction/<int:group_id>")
def get_transaction_by_id(group_id):
    transactions = Transaction.query.filter_by(group_id=group_id).all()
    if transactions:
        return jsonify(
            {
                "code": 200,
                "data": {
                    "transactions": [transaction.json() for transaction in transactions]
                }
            }
        )
    return jsonify(
        {
            "code": 404,
            "message": "Transaction not found."
        }
    ), 404

################################################################################################
# create_new_Transaction() - POST request creating a new transaction
@app.route("/transaction/<int:group_id>", methods=['POST'])
def create_new_transaction(group_id):
    try:

        transaction_info = request.get_json()
        print(transaction_info)
        #Complex needs to check , if the payer and ower is in group and check if group id exist 
        amount= transaction_info["amount"] 
        exchange_rate = transaction_info["Exchange_rate"]
        
        if amount <=0 :
             return jsonify(
            {
                "code": 404,
                "message":"Invalid amount for transaction"
            }
        ), 404
             
        if exchange_rate <=0 :
             return jsonify(
            {
                "code": 404,
                "message":"Invalid exchange rate"
            }
        ), 404
            
            
        new_transaction = Transaction(Transaction.transaction_id, **transaction_info) # the user will provide everything else except the GroupID
        db.session.add(new_transaction)
        db.session.commit()
        
        
    except Exception as e:
        return jsonify(
            {
                "code": 500,
                "message": "An error occurred while creating new Transaction." + str(e)
            }
        ), 500

    return jsonify(
        {
            "code": 201,
            "data": new_transaction.json()
        }
    ), 201



if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5003, debug=True)
