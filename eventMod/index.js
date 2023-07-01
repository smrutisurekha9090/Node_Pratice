const EventEmitter = require("events");

const event =new EventEmitter();
 
// event.on('saymyname', ()=>{
//     console.log("my name is smruti");
// });

// event.on('saymyname', ()=>{
//     console.log("my name is surekha");
// });

// event.on('saymyname', ()=>{
//     console.log("my name is sahoo");
// });
//create a new event
// event.emit("saymyname");

event.on("checkpage",(sc,msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}`);
});

event.emit("checkpage", 200 , "ok");