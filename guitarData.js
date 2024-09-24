const { v4: uuidv4 } = require('uuid');


const guitars = [
  { id: uuidv4(), brand: 'Fender', model: 'Stratocaster', color: 'Sunburst', year: 1962 },
  { id: uuidv4(), brand: 'Gibson', model: 'Les Paul', color: 'Cherry Burst', year: 1959 },
  { id: uuidv4(), brand: 'PRS', model: 'Custom 24', color: 'Charcoal Burst', year: 2020 }
]


module.exports = guitars;