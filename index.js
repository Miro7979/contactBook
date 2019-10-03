const express = require('express');

// Read the data from persons.json
// const persons = require('./persons.json');
// console.log(persons);

// Create a copy of persons without their hobbies
// const personsWithoutHobbies = JSON.parse(JSON.stringify(persons));
// for(let person of personsWithoutHobbies){
//   delete person.hobbies;
// };

// Create a new web server
// (usually called app in all Express documentation)
const app = express();

// Tell express to serve static files
// from the folder www
// (that contains all our frontend code)
app.use(express.static('www'));

// All persons (but without their hobbies)
// app.get('/api/persons', (req, res) => {
//   res.json(personsWithoutHobbies);
// });

// A specific person (all data about the person)
// you can have params in your routes (add colon before)
// // you can read the params as properties of req.params
// app.get('/api/persons/:nameOfPerson', (req, res) => {
//   let name = req.params.nameOfPerson;
//   let result = persons.filter(person => person.name === name);
//   res.json(result);
// });

// Start the webbserver
// tell it what port to listen to
app.listen(3000, () => console.log('Listening on port 3000'));