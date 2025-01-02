const express = require('express')
const app = express()
const port = 3000


function calculatesum (counter) {
    var sum =0;
    for (var i=0 ; i <= counter; i++) {
        sum = sum+1 ;
    }
    return sum;
}                            // operation process


function handleFirstRequest (req, res) {
    var counter = req.query.counter;
    var calculatedsum = calculatesum(counter);  // allows user to pass values
    
    var answer = `the sum is ${calculatedsum}`
    res.send(answer)
}                           // Exposite in Localhost


app.get('/handleSum', handleFirstRequest)    //  '/handleSum' - is a route which can callback the  handleFirstRequest function


function started(){
    console.log(`Example app listening on port ${port}`);
}

app.listen(port, started)   // here the code runs continously. and ready for reciving incoming request

//  exposing 