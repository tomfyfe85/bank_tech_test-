# bank_tech_test-

UNFINISHED TECH TEST

This a incomplete, very basic banking app. 

Below is the given criteria.

Given a client makes a deposit of 1000 on 10-01-2023
And a deposit of 2000 on 13-01-2023
And a withdrawal of 500 on 14-01-2023
When she prints her bank statement
Then she would see

date || credit || debit || balance <br/>
14/01/2023 || || 500.00 || 2500.00 <br/>
13/01/2023 || 2000.00 || || 3000.00 <br/>
10/01/2023 || 1000.00 || || 1000.00

Things I didn't do in the final app:
add a withdrawal function,
add date functionality,
format so printStatement would look like the above when returned,
added comments to help other devs in the furture.

Included is a file called bank.js which will give you an idea of what I was going for.

### _This is written in JavaScript, to be run on node and tested with jest so please see below for installation guidence if needed so please use node to run_

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

Initialise the NPM project (this will create a file package.json)
$ npm init -y

 Add the jest package to our project
 (this will update package.json and package-lock.json)
$ npm add jest

Also install jest "globally"
 (this is so we can run the `jest` command)
$ npm install -g jest

**Run our tests** <br/>
$ jest
