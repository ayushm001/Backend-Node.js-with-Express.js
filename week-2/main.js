const express = require('express')
const app = express()
const port = 3000

app.use(bodyParser.json( ))


// function middleware1(req, res, next) {
//     console.log("from insider the middlwa re" + req.headers.counter);
//     next();    // this  helps to transmit the request to next function  

// }
// app.use(middleware1);  // here whenever we try 


function calculatesum (counter) {
    var sum =0;
    for (var i=0 ; i <= counter; i++) {
        sum = sum+i ;
    }
    return sum; 
}                            // operation process

function handleFirstRequest(req,res) {

    var counter = req.query.counter;
    console.log(req.query.counter2);
    console.log(req.query.counter3);
    var calculatedsum = calculatesum(counter);

    var answer = `the sum is ${calculatedsum}`
    // res.send(answer);
    res.status(401).send(answer):
}
app.get('/handleSum' , handleFirstRequest)



// function handleFirstRequest (req, res) {
//     console.log(req.headers);
//     var counter = req.headers.counter;           // another way to send data (header)
//     var calculatedsum = calculatesum(counter);  // allows user to pass values
    

//     var answer = `the sum is ${calculatedsum}`
//     res.send(answer)
// }                           // Exposite in Localhost


//app.get('/handleSum', handleFirstRequest)    //  '/handleSum' - is a route which can callback the  handleFirstRequest function
app.post('/handleSum', handleFirstRequest)

function started(){
    console.log(`Example app listening on port ${port}`);
}

app.listen(port, started)   // here the code runs continously. and ready for reciving incoming request

//  exposing 