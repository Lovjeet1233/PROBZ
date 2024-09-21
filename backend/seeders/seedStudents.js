const db = require('../config/db');
const { rows } = require('../data/data'); // This will now work correctly

const seedStudents = () => {
  if (!rows) {
    console.error('No data to seed');
    return;
  }

  rows.forEach(student => {
    db.query('INSERT INTO students (name, age, gender, englishScore, physicsScore, chemistryScore, mathsScore, jeeRank, selfStudyHours) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [student.name, student.age, student.gender, student.englishScore, student.physicsScore, student.chemistryScore, student.mathsScore, student.jeeRank, student.selfStudyHours],
    (err) => {
      if (err) console.error('Error inserting data:', err);
    });
  });
  console.log('Data seeded successfully');
  db.end();
};

seedStudents();
