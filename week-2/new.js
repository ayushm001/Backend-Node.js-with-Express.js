const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const port = 3000




function calculatesum (counter) {
    var sum =0;
    for (var i=1  ; i <= counter; i++) {
        sum = sum+i ;
    }
    return sum; 
}  



function handleFirstRequest (req, res) {

    var counter = req.query.counter;
    var calculatedsum = calculatesum(counter);

    var answerObject = {
        sum : calculatedsum,
    }  

    res.send(answerObject);
}

app.get('/handleSum', handleFirstRequest)

function started (){
    console.log(`Example app listening on port ${port}`);
}
app.listen(port, started) 