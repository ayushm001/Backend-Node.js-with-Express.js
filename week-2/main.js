const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const port = 3000

// app.use(bodyParser.json( ))


// function Middleware1( req, res, next) {
//     console.log(` FROM INSIDE THHE MIDDLEWARE ${req.headers.counter}`);
//     next();
// }
// app.use(Middleware1);

app.use(bodyParser.json())  // extract the body                         

//
function calculatesum (counter) {
    var sum =0;
    for (var i=1  ; i <= counter; i++) {
        sum = sum+i ;
    }
    return sum; 
}                            // operation process

//
function calculateMulti(counter) {
    var answer = 1;
    for (var i = 1; i <= counter; i++) {
        answer= answer * i;
    }
    return answer;
}




 function handleFirstRequest (req, res) {

    var counter = req.body.counter;

    var calculatedsum = calculatesum(counter);
    var calculateMulti = calculateMulti(counter);

    var answerObject = {
        sum : calculatedsum,
        mul : calculateMulti, 
    }  

    res.json(answerObject);
    res.status(200).send(answerObject);






    // console.log(req.query);
    // console.log(req.body);   // In this case  it prints Undefined 
    // var counter = req.body.counter;           // another way to send data (header)

    // if (counter < 1000) {
    //     var calculatedsum = calculatesum(counter);
    //     var answer = `the sum is ${calculatedsum}`
    //     res.send(answer)

    // }
    // else {
    //     res.status(411).send(`You have very big number`)
    // }
    // var calculatedsum = calculatesum(counter);  // allows user to pass values
     

}                           // Exposite in Localhost


function givePage (reeq, res ){
    res.send(`<head>
    <title>
        Hello from page 
    </title>
              </head>

               <body>
    <b> Hi there </b>
               </body>`) 

     // res.sendFile(__dirname + "/index.html")    // for sending directory
}
app.get('/', givePage)


app.post('/handleSum', handleFirstRequest)    //  '/handleSum' - is a route which can callback the  handleFirstRequest function




function started(){
    console.log(`Example app listening on port ${port}`);
}

app.listen(port, started)   // here the code runs continously. and ready for reciving incoming request

//  exposing  


 










// NOTE 

//  Middlewares -> are the way to capture the request in the authonticaton 