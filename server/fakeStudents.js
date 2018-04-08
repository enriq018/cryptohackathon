const faker = require('faker');
let students = []
for (let i = 0; i <= 5; i += 1) {
  students.push({ name: faker.name.findName(), id: faker.random.number()})
}
module.exports = students;