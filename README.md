# Frequency-Count-app
It is an application that Displayed the top N words and their frequency of occurrence in in a tabular format using Node and Angularjs basically it accepts a number input N with a Submit button and on entering a value and pressing submit, a request sent to the backend that returns top N most frequently occurring words in the file...

Part-1 (Frontend with AngularJS (or Angular 1)):
Frontend part is a web application created using Angular framework. Here user enters a number N (Number of words) and response will be shown in the form of a table as you can see in the screenshot below:
        After the build page look like this:

 


Part-2 (Backend, with Node.js v10.5.0):
On entering a value and pressing submit, a request is sent to a NodeJS Backend part where all calculation happening by fetching a file hosted at http://terriblytinytales.com/test.txt and returns the top N most frequently occurring words in this file and returned as a response to Frontend and show in a tabular form(I used dirPagination for table).


Part-2 (Test cases):
Case-1 (Blank value):
If user submit a request with blank field in input field then a message will be displayed like “Required” as you can see in screenshot below:
 
Case-2 (Negative Value / Other value like character):
If user submit a negative value and characters then message will be shown like “Only numbers are allowed” as you can see in screenshot below:

 
Plugins & Libraries used:
    "body-parser": "^1.18.2",
    "express": "^4.16.2",
    "fs": "0.0.1-security",
    "nunjucks": "^3.0.1",
    "path": "^0.12.7",
    "request": "^2.83.0"

Angular.js, dirPagination.js, jQuery, bootstrap, CSS
