
#Stock App

## Description 
  Created this application because I wanted an easier way to see look up stocks and have it evaluate wether or not it has had an upward trend recently. 
  I used a MEAN stack which consist of Mongodb, ExpressJs, Angularjs and, NodeJs. The reason that I used this type of stack was to experiment with a different
  approach to software devlopment. 
  The typeahead feature of this app is my favorite part because it guesses the stock symbol based what you are typing and comes in handy if you don't know the stock symbol for a company or vice versa. 
  It even uses the company name or stock symbol to decide what to show. The stock symbols are established by a connection to a Mongodb collection hosted on MongoLabs.
  One thing I would like to add to this project is to be able to update the Mongo Collection everytime a new stock symbol is created.
# Installation 
### If you don't have Nodejs Installed:
* Download it here --> [Nodejs](https://nodejs.org/en/)

### Using Git
1. Open a terminal window and navigate to a desired directory. 
2. Type in `git clone -b master https://github.com/graph1994/Stock-App.git`
3. Change to the projects directory by typing `cd Stock-App` into the terminal.
4. Then to run the application type `node server.js`
5. Finally open a web browser to `localhost:8080`

###Using Zipped Folder
1. Extract to desired location.
2. Navigate to the the Stock-App directory in a terminal window.
3. Run the application with `node server.js`
4. Open Browser to `localhost:8080`
 

### Use Guide 
* Just type a common Stock Symbol to the input box and watch the magic happen!


## Technology Used
* Angularjs(JS Framework)
    * UI-Bootstrap (Typeahead)
* Mongodb(NoSQL)
    * Mongoose(ODM)
* Nodejs(JS Server)
    * Express(API Handler)
* Bower(Package Manager)

## Issues
* If you run into any problems contact me at `graff1994@gmail.com`

