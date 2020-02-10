//query the falcuty Database

const mongoose=require('mongoose');
const connect=require('./db');
const Professor=require('./schema');

connect();//to hte database


//what documents are in the collection
const query=professor.find();
query.exec(function(error,professors){
  if (error)console.error(error.stack);
  console.log(professors);
});
