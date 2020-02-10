//Store some data in the faculty database

const mongoose=require('mongoose');
const connect=require('./db');
const Professor=require('./schema');

connect();//to hte database

//create some favulty

const harcourt = new Professor({
  name: 'Ed harcourt',
  rank: 'Full',
  satrted: 2003,
  courses: [140, 220,345,362,364]
});

const torrey = new Professor({
  name: 'Lisa Torrey',
  rank: 'Associate',
  satrted: 2009,
  courses: [140,219,332,362,374,380]
});

const lee = new Professor({
  name: 'Choong-Soo Lee',
  rank: 'Associate',
  satrted: 2010,
  courses: [140, 219,256,321,370]
});

//Delete any previous dsata
mongoose.connection.dropDatabase(function(){

  //Save the new data
  harcourt.save(function(error){
    if (error)console.error(error.stack);

    torrey.save(function(error){
      if (error)console.error(error.stack);

        lee.save( (function(error){
          if (error)console.error(error.stack);

          //Disconnect
          mongoose.connection.close(function(){
            console.log('Database is ready');
          });

        });
    });
  });
  });
