// data.js
export const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'age', label: 'Age', minWidth: 100 },
  { id: 'gender', label: 'Gender', minWidth: 100 },
  { id: 'englishScore', label: 'English Score', minWidth: 170, align: 'right' },
  { id: 'physicsScore', label: 'Physics Score', minWidth: 170, align: 'right' },
  { id: 'chemistryScore', label: 'Chemistry Score', minWidth: 170, align: 'right' },
  { id: 'mathsScore', label: 'Maths Score', minWidth: 170, align: 'right' },
  { id: 'jeeRank', label: 'JEE Rank', minWidth: 170, align: 'right' },
  { id: 'selfStudyHours', label: 'Self Study Hours', minWidth: 170, align: 'right' },
];

// Function to generate random names
export const generateRandomName = () => {
  const firstNames = ['Aarav', 'Vivaan', 'Aditya', 'Vihaan', 'Arjun', 'Sai', 'Reyansh', 'Anaya', 'Diya', 'Ira'];
  const lastNames = ['Sharma', 'Verma', 'Gupta', 'Singh', 'Kumar', 'Patel', 'Mehta', 'Desai', 'Nair', 'Reddy'];
  return `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
};

// Generate student data
export const rows = Array.from({ length: 150 }, (_, index) => ({
  name: generateRandomName(),
  age: Math.floor(Math.random() * 4) + 16,
  gender: Math.random() < 0.5 ? 'Male' : 'Female',
  englishScore: Math.floor(Math.random() * 101),
  physicsScore: Math.floor(Math.random() * 101),
  chemistryScore: Math.floor(Math.random() * 101),
  mathsScore: Math.floor(Math.random() * 101),
  jeeRank: Math.floor(Math.random() * 10001),
  selfStudyHours: Math.floor(Math.random() * 11),
}));
