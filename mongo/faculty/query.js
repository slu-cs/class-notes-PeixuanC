//// Query the faculty database

const mongoose = require('mongoose');
const connect = require('./db');
const Professor = require('./schema');

connect(); // To the database

/*//const query = Professor.find();
query.exec(function(error, professors) {
  if (error) console.error(error.stack);
  console.log(professors);
});*/

const queries=[

  //what ara names in alphabetical order?
  Professor.find().sort('name'),

  //who started most recently?
  Professor.find().sort('-started').limit(1),

  //whi started in 2003
  Professor.find().where('started').equals(2003),

  //who teaches 362?
  Professor.find().where('courses').in(362),

  //what are all the ranks
  Professor.distinct('rank')

];




  Promise.all(queries)
    .then(function(results) {
      console.log('Names in order: ', results[0].map(p => p.name));
      console.log('Started most recently: ', results[1].map(p => p.name));
      console.log('Started in 2003: ', results[2].map(p => p.name));
      console.log('Teaches 362: ', results[3].map(p => p.name));
      console.log('Distinct ranks: ', results[4]);
      mongoose.connection.close();
    }).catch(error => console.error(error.stack));
