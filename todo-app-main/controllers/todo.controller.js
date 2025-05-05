const db = require("../models");
const Todo = db.todos;

// Create a new Todo
exports.create = async (req, res) => {
  try {
    const todo = await Todo.create({
      title: req.body.title,
      description: req.body.description,
    });
    res.status(201).send(todo);
  } catch (error) {
    res.status(500).send({ message: "Error creating Todo" });
  }
};

// Get all Todos
exports.findAll = async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.status(200).send(todos);
  } catch (error) {
    res.status(500).send({ message: "Error retrieving Todos" });
  }
};

// Update a Todo
exports.update = async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    if (todo) {
      todo.title = req.body.title || todo.title;
      todo.description = req.body.description || todo.description;
      todo.completed =
        req.body.completed !== undefined ? req.body.completed : todo.completed;

      await todo.save();
      res.status(200).send(todo);
    } else {
      res.status(404).send({ message: "Todo not found" });
    }
  } catch (error) {
    res.status(500).send({ message: "Error updating Todo" });
  }
};

// Delete a Todo
exports.delete = async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    if (todo) {
      await todo.destroy();
      res.status(200).send({ message: "Todo deleted" });
    } else {
      res.status(404).send({ message: "Todo not found" });
    }
  } catch (error) {
    res.status(500).send({ message: "Error deleting Todo" });
  }
};
