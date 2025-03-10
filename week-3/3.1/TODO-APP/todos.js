
const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");

// const cors = require("cors");    // Allows the request code from every where
// app.use(cors());                 // Allows the request code from every where


const app = express();

app.use(bodyParser.json());

let todos = [];

function findIndex(arr, id) {
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

app.get('/todos/:id', (req, res) => {
  const todoIndex = findIndex(todos, parseInt(req.params.id));
  if (todoIndex === -1) {
    res.status(404).send();
  } else {
    res.json(todos[todoIndex]);
  }
});

app.post('/todos', (req, res) => {
  const newTodo = {
    id: Math.floor(Math.random() * 1000000), // unique random id
    title: req.body.title,
    description: req.body.description
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.put('/todos/:id', (req, res) => {
  const todoIndex = findIndex(todos, parseInt(req.params.id));
  if (todoIndex === -1) {
    res.status(404).send();
  } else {
    todos[todoIndex].title = req.body.title;
    todos[todoIndex].description = req.body.description;
    res.json(todos[todoIndex]);
  }
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
// app.use((req, res, next) => {
//   res.status(404).send();
// });

app.get("/",  (req, res) => {
  res.sendFile(path.join(__dirname, "index.html")); 
})

app.listen(3000);




// CORS error -- > 
//  A CORS error happens when a web page tries to make a request to a different domain 
//(like loading data from another website) and is blocked because the server isn't set up to allow it.

// CORS stands for Cross-Origin Resource Sharing. It's a security feature built into web browsers to prevent
//  a website from making requests to a different website unless explicitly allowed by that other website. 