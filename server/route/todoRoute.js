const { getTodo, addTodo, updateTodo, deleteTodo } = require("../controller/todoController")

const router=require("express").Router()

router 
      .get("/",getTodo)
      .post("/add-todo",addTodo)
      .put("/update-todo",updateTodo)
      .delete("/delete-todo",deleteTodo)



module.exports=router