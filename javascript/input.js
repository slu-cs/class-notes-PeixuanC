//syntax for console file input

const readline =require('readline');

//console configuration
const user =readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//consle inoput
user.question('Filename:',function(filename){
  console.log(filename);

}

//this part isnt after the console
console.log('here');
