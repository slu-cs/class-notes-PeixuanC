//syntax for console file input

const readline =require('readline');

//console configuration
const user =readline.createInterface((
  input: process.stdin,
));

//consle inoput
user.question('Filename:',function(filename){
  console.log(filename);

}
