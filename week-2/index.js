const express = require('express')
const app = express()
const port = 3000

function handleFirstRequest(req, res) {
  res.send(`Hello World`)
}

app.get('/', handleFirstRequest)

function started() {
  console.log(`Example app listening on port ${port}`);
}

app.listen(port, started)
  
//  this will helps to create an http server like wise 






// function calculatedSum(counter) {
//     var sum = 0; 
//     for (var i  = 0;  i < counter; i++) {
//         sum = sum +i;
        
//     }
//      return sum;
// }
// var calculatedSum = calculatedSum(100);
// console.log(calculatedSum);





const fs = require("fs");
function callbackFn(err, data) {
    console.log(data);
}
fs.readFile("a.txt", "utf-8", callbackFn);
//"utf-8"-  It tells the fs.readFile method to read the contents of the file using UTF-8 encoding.







