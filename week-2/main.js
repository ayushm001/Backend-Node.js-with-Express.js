const express = require('express')
const app = express()
const port = 3000


function calculatesum (counter) {
    var sum =0;
    for (var i=0 ; i < counter; i++) {
        sum = sum+1 ;
    }
    return sum;
}                            // operation process


function handleFirstRequest (req, res) {
    var calculatedsum = calculatesum(100);
    console.log(calculatedsum);
    var answer = `the sum is ${calculatedsum}`
    res.send(answer)
}                           // Exposite in Localhost


app.get('/', handleFirstRequest)


function started(){
    console.log(`Example app listening on port ${port}`);
}

app.listen(port, started)

//  exposing 