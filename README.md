# HEAP-SplitSmart
HEAP Project
Group 15
We aim to create an application which helps to simplify the process of bill-splitting when travelling as a group.
 
Use case Scenarios:
 
Group Admin will login
Go to the home page and explore the groups they are part of
Goes to Create a new group for a new trip to Greece
View's Bali Trip Group and Add transaction
Once transaction is added admin views the transaction in trip group page
Once her Bali trip ends, she clicks "End Trip"
Calculatebill MS then calculates the bill and final payments are displayed
Payers and Ower receive notifications on the amount to be paid.
User can view past transactions in the My transactions Page
 
 
Our application can be accessed via:
 
Method 1. Running manually on the computer
 
 
For method 1, please follow the steps below:
 
Pre-installation:
 
- pip3 install twilio https://www.twilio.com/docs/libraries/python
- pip install Flask
- pip install -U Flask-SQLAlchemy
- npm install axios 
- Install Flaskcors

Please follow these instructions in order to recieve the Twilio Message:

1. Create a Twilio account and click on SMS API 
2. Change the mobile numbers in the Users SQL to your mobile number , which has to be registered in Twilio
3. Change the Authentication Token and Account SID ,in calculatebill.py file, to the token and SID you see in the twilio account 
 
Run all the microservices:
 
-python group.py
-python transaction.py
-python user.py
-python calculatebill.py
 
Please import the 3 SQL files into PhpMyAdmin in the WAMP/MAMP server
 
 
Once the microservices are running , start the react application by navigating to the project folder and running the command "npm start", to stop the application run the command "Ctrl + C" for windows or "Cmd + C" for Mac users.
 
 
Group Admin Login Details:
Jane
Name : Jane Doe
Email: janedoe@gmail.com
Password: password


