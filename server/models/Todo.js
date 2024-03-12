const mongoose = require("mongoose")
const todoSchema=new mongoose.Schema({
    task:String,
    desc:String,
    complete:Boolean,
},{
    timeseries:true
})

module.exports= mongoose.models.todo || mongoose.model("todo",todoSchema)