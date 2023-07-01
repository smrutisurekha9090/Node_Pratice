const path =require("path");

// console.log(path.dirname(" C:/node-pratice/pathModule/pathMd.js"));

// console.log(path.extname(" C:/node-pratice/pathModule/pathMd.js"));

// console.log(path.basename(" C:/node-pratice/pathModule/pathMd.js"));

// console.log(path.parse(" C:/node-pratice/pathModule/pathMd.js"));

const myPath= path.parse(" C:/node-pratice/pathModule/pathMd.js");
console.log(myPath.name);