const events = require("events");
const event = new events.EventEmitter();

const first_event = function(a,b){
    console.log(a+b);
    event.emit('click2');
}

const sec_event = function(){
    console.log("Second Event");
}

event.on('click2',sec_event);
event.on('click',first_event);
//trigger
event.emit('click',4,5)

