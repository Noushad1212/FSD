const EventEmitter=require('events');
var myEmitter=new EventEmitter();
myEmitter.once('myevent',()=>{
    console.log('ONLY ONE LISTENER')
});
myEmitter.emit("myevent");
myEmitter.emit("myevent");
