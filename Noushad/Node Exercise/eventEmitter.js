const EventEmitter=require('events');
var emitter=new EventEmitter();



//defining a function
function eventFunction(){
    console.log("MY EVENT OCCURRED")

}

//BINDING PROCESS
emitter.on("myevent",eventFunction);
//FIRING PROCESS

emitter.emit('myevent');