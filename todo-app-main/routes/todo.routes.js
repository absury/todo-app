module.exports = (app) => {
  const todos = require("../controllers/todo.controller.js");

  app.post("/todos", todos.create);
  app.get("/todos", todos.findAll);
  app.put("/todos/:id", todos.update);
  app.delete("/todos/:id", todos.delete);
};
