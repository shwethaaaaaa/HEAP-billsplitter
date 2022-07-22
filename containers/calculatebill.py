from tokenize import group
from flask import Flask, request, jsonify
from flask_cors import CORS
import os, sys
from os import environ
import requests
from invokes import invoke_http
import json

app = Flask(__name__)
CORS(app)

# user_URL = environ.get('user_URL') or "http://localhost:5009/get_user_by_email/" # hardcoded to user1 now (who is now a HK)
# pricing_URL =  environ.get('pricing_URL') or f"http://localhost:5005/selected_services_price/" # GET endpoint from pricing, for a {particular service/services}
# payment_config_URL = environ.get('payment_config_URL') or f"http://localhost:5006/config" # GET for stripe config
# payment_checkout_URL = environ.get('payment_checkout_URL') or f"http://localhost:5006/create-checkout-session" # POST to create stripe checkout session
# booking_URL = environ.get('booking_URL') or "http://localhost:5007/booking"

# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client
# Find your Account SID and Auth Token at twilio.com/console
# and set the environment variables. See http://twil.io/secure

account_sid = 'ACda2adf16d90077077fbdf70fc8bf766e'

auth_token = 'efec227ffff8078c529508b7bd666340'

# account_sid = os.environ[TWILIO_ACCOUNT_SID] 
# auth_token = os.environ[TWILIO_AUTH_TOKEN] 
client = Client(account_sid, auth_token)

group_URL = environ.get('group_URL') or "http://localhost:5002/group/"
transaction_URL =  environ.get('transaction_URL') or "http://localhost:5003/transaction/"
user_URL = environ.get('user_URL') or "http://localhost:5007/get_user_by_user_id/"
# notify_URL = environ.get('notify_URL') or "http://notfiy:5006/" #incomplete


# ~ UPDATE THIS LATER!
################################################
#  functions available # 
################################################
#  create_booking() - POST request that creates a booking with details given by the complex microservice
#  process_created_booking() - Helper function that orchestrates the necessary microservices, be it parsing or giving infomation
#  Invoking order: Group --> Transaction --> Notify


################################################
@app.route("/calculate_bill/<int:group_id>", methods=['GET'])
def calculate_bill(group_id):
    try:
            # booking = request.get_json()
            print("\nReceived a request to calculate bill in JSON:")
            group_id = str(group_id)
            result = process_bill(group_id)

            return jsonify(result), result["code"]

    except Exception as e:
            # Unexpected error in code
            exc_type, exc_obj, exc_tb = sys.exc_info()
            fname = os.path.split(exc_tb.tb_frame.f_code.co_filename)[1]
            ex_str = str(e) + " at " + str(exc_type) + ": " + fname + ": line " + str(exc_tb.tb_lineno)
            print(ex_str)

            return jsonify({
                "code": 500,
                "message": "calculatebill.py internal error: " + ex_str
            }), 500

################################################################################################
def process_bill(group_id):

    final_data = {'group_id': group_id}
    payment_settlement = []
  

    # STEP 1. get group details from group MS using group_id
    # Invoke the GROUP MICROSERVICE

    print('\n-----INVOKING GROUP MICOSERVICE-----')
    group_result = invoke_http(group_URL + str(group_id), method='GET')
    group_result_code =  group_result['code']

    if group_result_code not in range(200,300):
        return {
                "code" : group_result_code,
                "message": group_result_code['message'] + " ; Failed to invoke user microservice"
                }

    print('group_result:', group_result, '\n') # if success

    final_data['group_name']= group_result['data']['group_name']
    final_data['group_members'] = group_result['data']['group_members']
    final_data['home_currency'] = group_result['data']['home_currency']


    # STEP 2. Get ALL transactions for a group using group_id
    print('\n\n-----INVOKING TRANSACTION MICROSERVICE-----')
    transaction_result = invoke_http(transaction_URL + str(group_id), method="GET")
    transaction_result_code = transaction_result['code']

    if transaction_result_code not in range(200, 300):
        return {
            "code" : transaction_result_code,
            "message": transaction_result['message'] + "/n" + " ; Failed to invoke transaction microservice"
            }

    print('transaction_result:', transaction_result, '\n') # if success

    final_data['all_transactions'] = transaction_result['data']['transactions']


    # PREPARING INPUT FOR BILLSPLITTING ALGO
    
    # group_members_string = final_data['group_members']
    # group_members_list = group_members_string.split(',')
    # all_transactions_in_grp = final_data['all_transactions']

    # net_amt_dict = {}

    # print (group_members_list)

    # for member in group_members_list:
    #     net_amt_of_person = 0
    #     for transaction in all_transactions_in_grp:
    #         amt = transaction['amount'] * transaction['Exchange_rate']
    #         if member == transaction['payer']:
    #             net_amt_of_person += amt
    #         elif member == transaction['ower']:
    #             net_amt_of_person -= amt
    #     net_amt_dict[member] = net_amt_of_person
    
    # print('this is dict: ' + str(net_amt_dict))
     
    
    group_members_string = final_data['group_members']
    group_members_list = group_members_string.split(',')
    all_transactions_in_grp = final_data['all_transactions']

    input_graph = []
    list_of_ids = []
    for transaction in all_transactions_in_grp:
        ower_id = transaction["ower_id"]
        payer_id = transaction["payer_id"]
        if (ower_id not in list_of_ids):
            list_of_ids.append(ower_id)
        if (payer_id not in list_of_ids):
            list_of_ids.append(payer_id)

    print("list_of_ids: ")
    print(list_of_ids)

    list_length = len(list_of_ids)
    for i in range(list_length):
        input_graph += [[0]*list_length]



    
    for transaction in all_transactions_in_grp:
        ower_id = transaction["ower_id"]
        payer_id = transaction["payer_id"]
        
        ower_id_in_list = list_of_ids.index(ower_id)
        payer_id_in_list = list_of_ids.index(payer_id)

        input_graph[ower_id_in_list][payer_id_in_list]+=float(transaction["amount"])

    print("this is input_graph: ")
    print(input_graph)


        
        


    

    # Example Input
    # graph[i][j] indicates the amount
    # that person i needs to pay person j
    # graph = [ [0, 1000, 2000],
    #         [0, 0, 5000],
    #         [0, 0, 0] ]

            


    
  
    # STEP 3. REPLACE WITH ALGO (MS results as input & algo's ouput is )
    # Python3 program to find maximum
    # cash flow among a set of persons

    # Number of persons(or vertices in graph)
    N = 3

    # A utility function that returns
    # index of minimum value in arr[]
    def getMin(arr):
        
        minInd = 0
        for i in range(1, N):
            if (arr[i] < arr[minInd]):
                minInd = i
        return minInd

    # A utility function that returns
    # index of maximum value in arr[]
    def getMax(arr):

        maxInd = 0
        for i in range(1, N):
            if (arr[i] > arr[maxInd]):
                maxInd = i
        return maxInd

    # A utility function to
    # return minimum of 2 values
    def minOf2(x, y):

        return x if x < y else y

    # amount[p] indicates the net amount to
    # be credited/debited to/from person 'p'
    # If amount[p] is positive, then i'th
    # person will amount[i]
    # If amount[p] is negative, then i'th
    # person will give -amount[i]
    def minCashFlowRec(amount):

        # Find the indexes of minimum
        # and maximum values in amount[]
        # amount[mxCredit] indicates the maximum
        # amount to be given(or credited) to any person.
        # And amount[mxDebit] indicates the maximum amount
        # to be taken (or debited) from any person.
        # So if there is a positive value in amount[],
        # then there must be a negative value
        mxCredit = getMax(amount)
        mxDebit = getMin(amount)

        # If both amounts are 0,
        # then all amounts are settled
        if (amount[mxCredit] == 0 and amount[mxDebit] == 0):
            # print("No transactions needed!")
            return 0

        # Find the minimum of two amounts
        min = minOf2(-amount[mxDebit], amount[mxCredit])
        amount[mxCredit] -=min
        amount[mxDebit] += min

        # If minimum is the maximum amount to be
        print("Person " , list_of_ids[mxDebit] , " pays " , min
            , " to " , "Person " , list_of_ids[mxCredit])

        # STEP 4. Use user_id to get user details from user microservice
        # Invoke USER MICROSERVICE

        # FOR PAYER
        print('\n\n-----INVOKING USER MICROSERVICE----') 

        user_id_of_payer = list_of_ids[mxDebit]
        user_id_of_ower =  list_of_ids[mxCredit]

        payer_result = invoke_http(user_URL + str(user_id_of_payer) , method="GET") # must retrieve user_id from TRANSACTION MS
       

        payer_result_code = payer_result['code']
    
        if  payer_result_code not in range(200, 300):
            return {
                "code" :  payer_result_code,
                "message": payer_result['message'] + "/n" + " ; Failed to invoke user microservice for PAYER"
                }

        print('payer_result:', payer_result, '\n') # if success

        payer_phone_no = payer_result['data']['phone_no']
        payer_name = payer_result['data']['user_name']
        amt_to_pay = min

        print("this is payer_phone_no: "+ str(payer_phone_no))
        print("this is payer_name: " + payer_name)


        # FOR OWER
        user_id_of_ower =  list_of_ids[mxCredit]
        ower_result = invoke_http(user_URL + str(user_id_of_ower), method="GET") # must retrieve user_id from TRANSACTION MS
        ower_result_code = ower_result['code']
        if  ower_result_code not in range(200, 300):
            return {
                "ower_code" :  ower_result_code,
                "message": ower_result['message'] + "/n" + " ; Failed to invoke user microservice for OWER"
                }

        print('ower_result:', ower_result, '\n') # if success


        ower_phone_no = ower_result['data']['phone_no']
        ower_name = ower_result['data']['user_name']
        
        
        print("this is ower_phone_no: "+ str(ower_phone_no))
        print("this is ower_name: " + ower_name)
        print("this is amt to pay: "+ str(amt_to_pay))
        payment_array = [payer_name, ower_name,amt_to_pay]
        print(payment_array)
        payment_settlement.append(payment_array)
        print(payment_settlement)
        



        # STEP 5: CALL TWILIO
       
    #    # notify ower
    #     message = client.messages.create (
    #                 body = 'Hi ' +  ower_name + ' you have to pay ' + payer_name + ' '+ str(amt_to_pay) ,
    #                 from_='+12517322643',
    #                 to = ower_phone_no
    #             )

    #     # notify reciever
    #     message = client.messages.create (
    #                 body = 'Hi ' +  ower_name + ' will pay you this amount: ' + str(amt_to_pay),
    #                 from_='+12517322643',
    #                 to = payer_phone_no
    #             )      
      
            

        # Recur for the amount array. Note that
        # it is guaranteed that the recursion
        # would terminate as either amount[mxCredit]
        # or amount[mxDebit] becomes 0
        minCashFlowRec(amount)

    # Given a set of persons as graph[] where
    # graph[i][j] indicates the amount that
    # person i needs to pay person j, this
    # function finds and prints the minimum
    # cash flow to settle all debts.
    def minCashFlow(graph):

        # Create an array amount[],
        # initialize all value in it as 0.
        amount = [0 for i in range(N)]

        # Calculate the net amount to be paid
        # to person 'p', and stores it in amount[p].
        # The value of amount[p] can be calculated by
        # subtracting debts of 'p' from credits of 'p'
        for p in range(N):
            for i in range(N):
                amount[p] += (graph[i][p] - graph[p][i])

        minCashFlowRec(amount)

        
    # Driver code

    
    minCashFlow(input_graph)

    final_data["payment_settlement"] = payment_settlement





    # testing
    return{
        "code": 201,
        "data": {
            "final_data": final_data
        }
    }





    # STEP 5: LAST STEP: INVOKE NOTIFY MICROSEVICE

if __name__ == "__main__":
    print("This is flask " + os.path.basename(__file__) + " for calculating a bill...")
    app.run(host="0.0.0.0", port=5004, debug=True)
