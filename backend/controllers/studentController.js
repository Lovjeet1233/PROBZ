const db = require('../config/db');

exports.getStudents = (req, res) => {
  db.query('SELECT * FROM students', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

exports.createStudent = (req, res) => {
  const { name, age, gender, englishScore, physicsScore, chemistryScore, mathsScore, jeeRank, selfStudyHours } = req.body;
  db.query('INSERT INTO students (name, age, gender, englishScore, physicsScore, chemistryScore, mathsScore, jeeRank, selfStudyHours) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', 
  [name, age, gender, englishScore, physicsScore, chemistryScore, mathsScore, jeeRank, selfStudyHours], 
  (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'Student added successfully' });
  });
};
