const fs= require ("fs");


const bioData ={
    name : "smruti",
    age : 21,
    channel: "smuritsuhil",
};

console.log(bioData.channel);

//if object chnge into json format stringfy() method
const jsonData=JSON.stringify(bioData);
//if json chnge into object format parse() method
const objData=JSON.parse(jsonData);

fs.writeFile("json1.json",jsonData,(err)=>{
    console.log("done");
});

fs.readFile("json1.json","utf-8",(err,data)=>{
    // console.log(data);
     const orgData =JSON.parse(data);
     console.log(data);
     console.log(orgData);
});

// console.log(objData);