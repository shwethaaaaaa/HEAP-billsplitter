# HEAP-SplitSmart
</br>
HEAP Project Group 15
</br>
</br>

<b>Motivation for this project:</b>
</br>
We aim to create an application which helps to simplify the process of bill-splitting when travelling as a group. In the past, splitting the cost of bills and expenses was a clumsy process. You had to calculate who owes what, then go through the tedious task of collecting money from each person. Bill-splitting apps let you divide up the cost of things like group dinners and group trips so that everyone can pay their fair share, making it much easier for everyone to cover their share of the expense right away. SplitSmart! lets you track lending and borrowing over time. Use the app to create travel groups and track what each person in the group owes. Additionally, if you’re traveling internationally, SplitSmart! accommodates the local exchange rate to your transactions. SplitSmart uses a Greedy Algorithm to calculate final settlements by minimising the cash flow.
 
<b>Use case Scenarios</b>:
 
1. Group Admin will login
2. Goes to the home page and views the groups that they are part of
3. Goes to Create a New Group for a New planned Trip to Korea
4. View's an ongoing Greece's Trip Group and Add Transaction
5. Once transaction is added, admin views the transaction in trip group page
6. Once the Greece trip ends, she clicks "End Trip" button
7. Calculatebill Microservice then calculates the bill and final payments that needs to be settled are displayed
8. Both Payers and Ower receive  SMS notifications on the amount to be paid & owed.
9. User can view past final settlements across groups they were part of in the My Transactions Page, which can be accessed via the navbar.
 
 
Our application can be accessed via:
 
Method 1. Running manually on the computer
 
 
For method 1, please follow the steps below:
 
<b>Pre-installation of packages</b>: 

- pip3 install twilio https://www.twilio.com/docs/libraries/python
- pip install Flask
- pip install -U Flask-SQLAlchemy
- npm install axios 
- Install Flaskcors

<b>Please follow these instructions in order to recieve the Twilio SMS:</b>

1. Create a Twilio account and click on SMS API 
2. Change the mobile numbers in the Users SQL to your mobile number , which has to be registered in Twilio
3. Change the Authentication Token and Account SID ,in calculatebill.py file, to the token and SID you see in the twilio account 
 
<b>Run all the microservices</b>:
</br>
Note: Please navigate to the project folder via the path (C:\wamp64\www\HEAP-billsplitter\containers) on your terminal before running the following commands.
</br>
 
-python group.py
</br>
-python transaction.py
</br>
-python user.py
</br>
-python calculatebill.py
</br>
 
<b>Please import the 3 SQL files (user.sql, group.sql, transaction.sql) from the sql project folder into PhpMyAdmin in the WAMP/MAMP server</b>
 
Once the microservices are running, start the react application by navigating to the project folder and running the command "npm start".
To stop the application run the command "Ctrl + C" for windows or "Cmd + C" for Mac users.
 
 
<b>Group Admin Jane's Login Details:</b>
</br>
Name : Jane Doe
</br>
Email: janedoe@gmail.com
</br>
Password: password


