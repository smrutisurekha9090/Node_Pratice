const chalk=require("chalk");
const validator=require("validator");
// import chalk from "chalk";


// console.log(chalk.magenta('Hello world!'));
// console.log(chalk.red.underline.inverse("false"));

const res=validator.isEmail("smruti@gmail.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));