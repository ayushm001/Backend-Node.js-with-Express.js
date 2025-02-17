const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());


let todos = [];             // creates an empty list (array) to store all your todos in the server's memory. 
                           //  It’s like a temporary notepad where your todos are saved while the server is running. (incase if we restart the server the list gets erased)


[
  {
    description: "ABCD",
    title: "fwefw",
    id: 1
  },
  {
    description: "SDFG",
    title: "fwefw",
    id: 2
  },
  {
    description: "XYZS",
    title: "fwefw",
    id: 3
  }
]

function findIndex(arr, id) {             // findIndex - itterates over the array and find the index at which the ceratin ID is present. 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) return i;              
  }
  return -1;
}

// removing index

function removeAtIndex(arr, index) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== index) newArray.push(arr[i]);
  }
  return newArray; 
}


app.get('/todos', (req, res) => {
  fs.readFile("todo.json", "utf8", (err, data) => {
    var answer = JSON.parse(data);               //   it parse the same ting but in a object form 
    res.json(answer);
  });
  // res.json(todos);
});


var ctr = 1;
app.post('/todos', (req, res) => {
  const newTodo = {
    // id: Math.floor(Math.random() * 10000000),   //Generates unique numb
    id : ctr,
    title: req.body.title,
    description: req.body.description
  };
  ctr = ctr + 1;
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// DELETE 
app.delete('/todos/:id', (req, res) => {
  const todoIndex = findIndex(todos, parseInt(req.params.id));
  if (todoIndex === -1) {
    res.status(404).send();
  } else {
    todos = removeAtIndex(todos, todoIndex);
    res.status(200).send();
  }
});

  
// for all other routes, return 404
app.use((req, res, next) => {
  res.status(404).send();
}); 

app.listen(3000);


