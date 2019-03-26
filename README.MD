# WebDriverIO-selenium-framework

This project is an example demonstration of setting up webdriverio test automation project from scratch
using Mocha BDD framework, Chai Assertion library and page object pattern technique.

### Installation

This project is tested on following env:
```
OS - Windows 10
Node - v8.11.1
```

Please follow this site https://nodejs.org/en/ to install node in windows
Once after successfull installtion , navigate to project root directory and run: 
```
npm install 
```
to install project dependencies

### Run Sample tests:

To run sample selenium tests there are 2 options :

#### Option 1 - npm
  Navigate to root directory and run:
   ``` npm test ```

#### Option 2 - docker
  Assuming you have docker installed in your machine, run the below command:
  ```
   docker build -t demo:wdio-tests .
   docker run --rm -it demo:wdio-tests
  ```

### Config files:
  
  Config files are found under ``` test/config/wdio.conf.js ```
  
### TO DO
  #### Integrate allure report to framework
  #### Set up selenium grid
  #### Set up multiple environment configuration file
