const EventEmitter=require('events');
var emitter=new EventEmitter();



//defining a function
emitter.on("myevent",(arg1,arg2)=>{
    console.log("id is"+arg1+  "and name:"+arg2)
}
);

//FIRING PROCESS

emitter.emit('myevent',1,"Joy");