//chalenge 2


const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('enter le budger en MAD = ', budg => {
  let  temp = budg / 11;
  console.log(`le budget est , ${temp.toFixed(2)}`);
  rl.close();
  });
  
  