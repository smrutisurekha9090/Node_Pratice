const fs = require("fs");

//create a new file 
// fs.writeFile("read.txt","today is awesome day" , 
// (err) => {
//     console.log("files is created");
//     console.log(err);
// });

   
// fs.appendFile("read.txt",
// "plz like and share my youtube chanel" ,
// (err) =>{
//     console.log("data added")
// });

fs.readFile("read.txt","UTF-8",
(err,data)=>{
    console.log(data);
} );