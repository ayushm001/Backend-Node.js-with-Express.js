const express = require('express');
const bodyParser = require('body-parser');
const fs = require("fs");

const app = express();

app.use(bodyParser.json());

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


app.get('/todos', (req, res) => {                   // Helps to retrive the list of todos 
  fs.readFile("todos.json", "utf8", (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));    // Here, it reads the JSON string from todos.json and turns it into a JavaScript array of todos.
    // res.json(data)
  });
});



app.post('/todos', (req, res) => {
  const newTodo = {
    id: Math.floor(Math.random() * 1000000), // unique random id
    title: req.body.title,
    description: req.body.description
  };
  fs.readFile("todos.json", "utf8", (err, data) => {
    if (err) throw err;
    const todos = JSON.parse(data);
    todos.push(newTodo);
    fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
      if (err) throw err;
      res.status(201).json(newTodo);
    });
  });
});



app.delete('/todos/:id', (req, res) => {

  fs.readFile("todos.json", "utf8", (err, data) => {
    if (err) throw err;
    const todos = JSON.parse(data);
    const todoIndex = findIndex(todos, parseInt(req.params.id));
    if (todoIndex === -1) {
      res.status(404).send();
    } else {
      todos = removeAtIndex(todos, todoIndex);
      fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
        if (err) throw err;
        res.status(200).send();
      });
    }
  });
});

// for all other routes, return 404
app.use((req, res, next) => {
  res.status(404).send();
});

app.listen(3000);

















// what is JSON ? ->       Anything that look like javascript object



//  what is JSON.parse(data) does ??  ->   This function takes a JSON string (in this case, the contents of your todos.json file) and converts it back into a JavaScript object or array.


//  what is JSON.stringify(todos) does ??  ->   This function takes a JavaScript object or array (in this case, your array of todos) and converts it into a JSON string.
//                                               Here, it takes your array of todos and turns it into a JSON string to save it back into the todos.json file.