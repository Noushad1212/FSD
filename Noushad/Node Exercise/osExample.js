const os=require('os');
var totMem=os.totalmem();
var freeMem=os.freemem();
Console.log("totalMemory="+totMem);
Console.log("freeMemory="+freeMem);