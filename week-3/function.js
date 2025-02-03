

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
