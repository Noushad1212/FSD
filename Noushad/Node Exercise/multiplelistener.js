const EventEmitter=require("events");
var myEmitter=new EventEmitter();
myEmitter.on('myEvent',()=>{
    console.log('GOT LISTNER');

});
myEmitter.on('myEvent',()=>{
    console.log("SECOND LISTENER")
});
myEmitter.emit("myEvent");