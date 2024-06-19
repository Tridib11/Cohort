const express = require("express");
const { createTodo } = require("./types");
const todo = require("./db");
const app = express();

app.use(express.json());

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsePayload = createPayload.safeparse(createPayload);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "Your inputs are wrong",
    });
    return;
  }

  //put it in mongodb

  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.json({
    msg: "Todo created",
  });
});

app.get("/todos", async (req, res) => {
  const todos = await todo.find({});
  res.json({
    todos,
  });
});

app.put("/completed", async (req, res) => {
  const createPayload = req.body;
  const parsePayload = createPayload.safeparse(createPayload);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "Your inputs are wrong",
    });
    return;
  }

  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  )
  res.json({
    msg:"Todo marked as completed"
  })
  
  
  ;
});

app.listen(3000, () => {
  console.log("Server started");
});
