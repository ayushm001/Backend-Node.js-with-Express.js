const express = require('express')
const app = express()
const port = 3000

// app.use(bodyParser.json( ))


// function Middleware1( req, res, next) {
//     console.log(` FROM INSIDE THHE MIDDLEWARE ${req.headers.counter}`);
//     next();
// }
app.use(Middleware1);

function calculatesum (counter) {
    var sum =0;
    for (var i=0 ; i <= counter; i++) {
        sum = sum+i ;
    }
    return sum; 
}                            // operation process




function handleFirstRequest (req, res) {
    console.log(req.headers);
    var counter = req.headers.counter;           // another way to send data (header)
    var calculatedsum = calculatesum(counter);  // allows user to pass values
     
    var answer = `the sum is ${calculatedsum}`
    res.send(answer)
}                           // Exposite in Localhost


app.post('/handleSum', handleFirstRequest)    //  '/handleSum' - is a route which can callback the  handleFirstRequest function


function started(){
    console.log(`Example app listening on port ${port}`);
}

app.listen(port, started)   // here the code runs continously. and ready for reciving incoming request

//  exposing  













// NOTE 

//  Middlewares -> are the way to capture the request in the authonticaton 