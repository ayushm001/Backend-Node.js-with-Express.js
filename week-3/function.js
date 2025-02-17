

//  callback (SIMPLE), Ex-

// const fs = require("fs");

// function callback (err, data) {
//     console.log(data);
// }

// fs.readFile("a.txt", "utf-8", callback)



 // Anonymous function (MEDIUM), ex-     
//   HERE RATHER THAN DEFINING THE FUNCTION SEPARATELY WE JUST PASTE THE FUNCTION AND GIVE IT AS 3RD ARGUMENT 

//  const fs = require("fs");

//  fs.readFile("a.txt","utf-8", function (err, data){           
//     console.log(data);
//  })


//  ARROW FUNCTION (HARD) , EX- 

const fs = require("fs");

fs.readFile("a.txt","utf-8",  (err, data) => {           
   console.log(data);
})



// let numbers = [10, 20, 30, 40, 50, 60];

// numbers.splice(2, 3); // Remove 1 element at index 2

// console.log(numbers); // [10, 20, 40, 50, 60]
