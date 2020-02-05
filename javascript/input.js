//syntax for console file input

const readline =require('readline');
const fs=require('fs');

//console configuration
const user =readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//consle inoput
user.question('Filename:',function(filename){
  console.log(filename);

  const file=realine.createInterface({
    input: fs.createReadStream(filename)
  });

  //Asynchronous line-by lione inpout
  file.on('line',function(line){
    console.log(line);
  });

  //end the program when the file closes
  file.on('close', function(){
    process.exit(0);
  })

});

//this part isnt after the console



//fie configuration
