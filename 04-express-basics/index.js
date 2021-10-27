const express = require("express");

const app = express();

app.use(express.json());

const todoCollection = [
  { id: "t1", label: "to buy the jeans", status: "pending" },
  { id: "t2", label: "to buy the pulse", status: "completed" },
  { id: "t3", label: "to pot the plants", status: "pending" },
  { id: "t4", label: "to renew bike insurance", status: "completed" },
];

// CRUD REST API

// http://localhost:9090/api/todos/:id {PATCH with Route Parameter and Req Body}
app.patch("/api/todos/:id", (req, res) => {
  const { id } = req.params;
  const foundTodo = todoCollection.find((todo) => todo.id == id);
  const position = todoCollection.findIndex(todo => todo.id === id)
  if (foundTodo) {
    const updatedTodo = {
      ...foundTodo,
      ...req.body,
    };
    todoCollection[position] = updatedTodo;
    return res.send(updatedTodo)
  }
  return res.send({message : 'Unable to find item for ID #',id})
});

// http://localhost:9090/api/todos/:id {DELETE with Route Parameter}
app.delete("/api/todos/:id", (req, res) => {
  const { id } = req.params;
  const position = todoCollection.findIndex((todo) => todo.id === id);
  if (position >= 0) {
    const removedItem = todoCollection.splice(position, 1);
    return res.send(todoCollection);
  }
  return res.send({ message: "Unable to delete for ID #", id });
});

// http://localhost:9090/api/todos?linit=2 {GET with Query Parameter}
app.get("/api/todos", (req, res) => {
  const { limit } = req.query;
  if (limit) {
    const filteredTodos = todoCollection.filter((todo, index) => index < limit);
    return res.send(filteredTodos);
  }
  return res.send(todoCollection);
});

// http://localhost:9090/api/todos/t2 {GET with Route Parameter}
app.get("/api/todos/:id", (req, res) => {
  const { id } = req.params;
  const foundTodo = todoCollection.find((todo) => todo.id === id);
  if (foundTodo) {
    return res.send(foundTodo);
  }
  return res.send({ message: "Sorry! Can't find item having ID #", id });
});

// http://localhost:9090/api/todos {POST}
app.post("/api/todos", (req, res) => {
  todoCollection.push({ ...req.body });
  return res.send({ item: req.body });
});

app.listen(9090, () => {
  console.log("Server started at PORT : 9090");
});
