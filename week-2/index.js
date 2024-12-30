

const fs  = require("fs");

 function callbackFn(err, data){
    console.log(data);
}

fs.readFile("a.txt", "utf-8", callbackFn);



  




function calculatesum (counter) {
    var sum =0;
    for (var i=0 ; i < counter; i++) {
        sum = sum+1 ;
    }
    return sum;
}

var calculatedsum = calculatesum(10);
console.log(calculatedsum);