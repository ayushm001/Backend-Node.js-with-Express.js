const express = require('express')
const app = express()
const port = 3000



function calculatesum (counter) {
    var sum =0;
    for (var i=1  ; i <= counter; i++) {
        sum = sum+i ;
    }
    return sum; 
}                            // operation process




 function handleFirstRequest (req, res) {

    var counter = req.query.counter;
    var calculatedsum = calculatesum(counter);

    var answer = "The sum is " + calculatedsum

    res.send(answer);
 }

 app.get('/handleSum', handleFirstRequest)

 function started() {
    console.log(`App listen in port ${port}`);
 }
 app.listen(port, started)