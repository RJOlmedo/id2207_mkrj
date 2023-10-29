If you want a video tutorial here it is: https://youtu.be/-bY0s8pAuiE

This is a Web Application developed using React for my class at KTH ID2207, for you to run this project:
1. Clone the repository: Please open your terminal and run the following "git clone https://github.com/RJOlmedo/id2207_mkrj.git"
2. Open project in a text editor (I reccomend VS code)
3. Open a terminal and run "npm install"
4. Run "npm start" and project should run
5. There a lot of users in this project for different functionalities as requested for each of them the password is "12345678" here are the users and its functionalities:
   ProductionManager for Inbox(approving or rejecting applications)
   Employee for tasks and budget requests
   AdministrationDepartmentManager for inbox for event requests
   CustomerServiceManager for inbox for event requests and event plans
   CustomerService for event plans
   FinancialManager for inbox for event and budget requests
   ServiceManager	for inbox (approving or rejecting applications), event applications, activity plans, budget requests, hiring requests
   HumanResources for inbox for hiring requests, job postings
   Admin works for everything so yeah that is propably the one you want to use to test all the functionalities

For running tests there are two options, number one start the application with "npm start" and then run "npm cypress open" go into e2e and run each one manually, 
or you can go with the easier option that would be running in the terminal "npm cypress run" this will execute the tests automatically 
and in the cypress folder there will be a videos folder showing the tests video recording.

