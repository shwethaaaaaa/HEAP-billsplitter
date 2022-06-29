# The above shebang (#!) operator tells Unix-like environments
# to run this file as a python3 script
import json
import os

# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client
# Find your Account SID and Auth Token at twilio.com/console
# and set the environment variables. See http://twil.io/secure

account_sid = 'AC6e79690fe549f9031adb6b4ee1667bf1'

auth_token = '7c67106befab8f9f194df9c35df99a20'

# account_sid = os.environ[TWILIO_ACCOUNT_SID] 
# auth_token = os.environ[TWILIO_AUTH_TOKEN] 
client = Client(account_sid, auth_token)

import amqp_setup

monitorBindingKey='seller'

def receiveOrderLog():
    amqp_setup.check_setup()
        
    queue_name = 'SellerNotifications'

    # set up a consumer and start to wait for coming messages
    amqp_setup.channel.basic_consume(queue=queue_name, on_message_callback=callback, auto_ack=True)
    amqp_setup.channel.start_consuming() # an implicit loop waiting to receive messages; 
    #it doesn't exit by default. Use Ctrl+C in the command window to terminate it.

def callback(channel, method, properties, body): # required signature for the callback; no return
    print("\nReceived an order log by " + __file__)
    informSeller(json.loads(body))
    # print() # print a new line feed

def informSeller(message_details):
    print("Recording an order log:")
    print(message_details)

    #add cust name 
    
    for i in range (len(message_details['orderId'])):
        new_string += message_details['orderId'][i] + '  ' + message_details['all_cid'][i] + '  ' +  message_details['customerName'][i] + '  ' +  str(message_details['numItems'][i]) + '\n'
        
    message = client.messages.create (
                    body ='Hi '+ ' a groupbuy with groupbuy id of ' + message_details['gbId'] +' has been confirmed for ' + message_details['itemName']  + ' . The pickup date will be ' + message_details['pickupDate'] + '. \n' + new_string, 
                    from_='+16076011395',
                    to = message_details['sellerPhone']
                )   

if __name__ == "__main__":  # execute this program only if it is run as a script (not by 'import')
    print("\nThis is " + os.path.basename(__file__), end='')
    print(": monitoring routing key '{}' in exchange '{}' ...".format(monitorBindingKey, amqp_setup.exchangename))
    receiveOrderLog()