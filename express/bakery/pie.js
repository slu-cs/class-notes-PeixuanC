// Router for pie-related requests
const express = require('express');

// Create the router
const router = express.Router();

const pies = [
  {id: 'apple', flavor: 'Apple'},
  {id: 'cherry', flavor: 'Cherry'}
];


// cs-linuxlab-##.stlawu.edu:3000/pies/
router.get('/', function(request, response) {
  response.render('pies/index',{pies:pies});
});

// cs-linuxlab-##.stlawu.edu:3000/pies/id
router.get('/:id', function(request, response, next) {
  const pie = pies.find(pie => pie.id === request.params.id);
});

module.exports = router;
