// import necessary modules
const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const { todosDB, usersDB } = require('./db');
const { authenticateToken } = require('./middleware');

// create new todo
router.post('/api/todos', authenticateToken, (req, res) => {

    // open request body
    const { title, completed } = req.body;

    // add todo to object for jsonification
    const newTodo = {
        tid: uuidv4(),
        title: title,
        completed: completed,
        uId: req.user.id,
    };

    // add to todo database
    todosDB.insert(newTodo);
    res.json(newTodo);
});

// Get a todo
router.get('/api/todos/:id', authenticateToken, (req, res) => {
    const todo = todosDB.find(todo => todo.tid === req.params.id);
    if (!todo) {
      return res.status(404).send('Error: Todo not found');
    }
    if (req.user.role !== 'admin' && todo.uId !== req.user.id) {
      return res.status(401).send('Error: Unauthorized access attempt');
    }
    res.json(todo);
  });