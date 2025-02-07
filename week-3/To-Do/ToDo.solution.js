const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());


let todos = [];             // creates an empty list (array) to store all your todos in the server's memory. 
                           //  It’s like a temporary notepad where your todos are saved while the server is running. (incase iff we restart the server the list gets erased)

function findIndex(arr, id) {             // findIndex - itterates over the array and find theindexx at which the ceratin ID is present 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) return i;
  }
  return -1;
}

function removeAtIndex(arr, index) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== index) newArray.push(arr[i]);
  }
  return newArray;
}

app.get('/todos', (req, res) => {
  res.json(todos);
});


var ctr = 1;
app.post('/todos', (req, res) => {
  const newTodo = {
    id: ctr,
    // id: Math.floor(Math.random() * 1000000), // unique random id
    title: req.body.title,
    description: req.body.description
  };
  ctr+1;
  todos.push(newTodo);
  res.status(201).json(newTodo);
});


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


