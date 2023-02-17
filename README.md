# bank_tech_test-

BANKING APP TECH TEST

A very basic banking app. 
(Note, this app requires a basic working knowledge of Javascript for use).

To install:
CD to the directory on your machine that you'd like the app to be in.

Once there enter the following into your command line:
git clone https://github.com/tomfyfe85/bank_tech_test- 

CD into bank_tech_test-

Below is the given criteria.

Given a client makes a deposit of 1000 on 10-01-2023
and a deposit of 2000 on 13-01-2023
and a withdrawal of 500 on 14-01-2023,
when she prints her bank statement then 
she would see:

date || credit || debit || balance <br/>
14/01/2023 |||| 500.00 || 2500.00 <br/>
13/01/2023 || 2000.00 |||| 3000.00 <br/>
10/01/2023 || 1000.00 |||| 1000.00

To use:<br/>
You will require the use of two of the app's classes:<br/>
class Account,<br/>
class Statement,

To begin with an account balance of zero: <br/>
new Account(0),

To make a deposit: <br/>
statement.transaction(account.deposit(enter amount in nums IE 500 or 23.434))

To make a withdrawal: <br/>
statement.transaction(account.withdraw(enter amount in nums IE 500 or 23.434))

To see the balance or statement in the format as per the criteria, you must assign the function to a 
variable and use console.log and .join('\n') in the following way (of course to view the statement multiple 
times in this way, one must use a new variable each time. I would suggest using 'statementView1', 'statementView2', 'balanceView1'... etc)

To check statement:<br/>
const statementView1 = statement.printStatement()
console.log(statementView1.join('\n'))

To check balance:<br/>
const balanceView1 = statement.printBalance(account.returnBalance)
console.log(balanceView1.join('\n'))

### _This is written in JavaScript, to be run on node and tested with jest so please see below for installation guidance if needed. Please use node to run.

**Javascript install in command line:** <br/>
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

reload -
source ~/.zshrc

$ nvm install node
$ nvm use node

You should now be able to type node in your terminal and see this:
$ node
Welcome to Node.js v16.6.0.
Type ".help" for more information.
> 

**Jest install in command line:**

Setup our environment to use node latest version
$ nvm use node

Create the project directory:
$ mkdir my-project
$ cd my-project

Initialize the NPM project (this will create a file package.json)
$ npm init -y

 Add the jest package to our project
 (this will update package.json and package-lock.json)
$ npm add jest

Also install jest "globally"
 (this is so we can run the `jest` command)
$ npm install -g jest

**Run our tests** <br/>
$ jest
