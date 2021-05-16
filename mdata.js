var mongoose = require('mongoose');
var employeeSchema = new mongoose.Schema({
    name:String,
    email:String,
    etype:String,
    hourlyrate: Number,
    totalHour: Number,

});

var employeeModel = mongoose.model('Employee', employeeSchema);

var employees = new employeeModel({name:'Anu',email:'anu@gmail.com',etype:'hourly',hourlyrate:10,totalHour:15,})
console.log("Total INCOME : " + employees.hourlyrate * employees.totalHour);