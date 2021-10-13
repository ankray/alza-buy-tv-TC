Before starting using JavaScript for Selenium automation testing, it is needed to ensure that the system is installed with the following pre-requisites:

NodeJS and NPM verification:

In order to verify if NodeJS and NPM are already installed, the following commands should be run in the terminal:


node -v

npm -v

**1) Initialize the project**, running the command 

npm init -y

**2) install the project dependencies** (Selenium WebDriver and 
browser drivers), running the following command on the terminal
to install browser drivers for Chrome and Firefox:

npm install --save selenium-webdriver chromedriver geckodriver

**3) Run the code**
 
node test.js
