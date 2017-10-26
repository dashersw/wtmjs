const Person = require('./person')
const Database = require('./database');

console.log('Hello world');

const armagan = new Person('Armagan', 33);
const mihri = new Person('Mihri', 29);

const instructors = [armagan, mihri];

Database.save(instructors);

const loadedFile = Database.load();

console.log(loadedFile[0].age);
