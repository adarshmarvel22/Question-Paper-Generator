// server.js

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// 
let totalMarks = 100;
let easyPercentage = 0.3;
let mediumPercentage = 0.4;
let hardPercentage = 0.3;

// Endpoint to save a question to question_store.js
app.post('/saveQuestion', (req, res) => {
  const question = req.body;

  // Read existing questions from the file
  let questions = [];
  try {
    const data = fs.readFileSync('question_store.js', 'utf8');
    questions = JSON.parse(data);
  } catch (err) {
    console.error('Error reading question_store.js:', err);
  }

  // Add the new question
  questions.push(question);

  // Write updated questions back to the file
  fs.writeFileSync('question_store.js', JSON.stringify(questions, null, 2));

  res.status(200).json({ message: 'Question saved successfully!' });
});

app.post('/updateDifficulty', (req , res) => {
  let difficulty=req.body;
  total = difficulty.total;
  easyPercentage = (difficulty.easyPercentage)/100;
  mediumPercentage = (difficulty.mediumPercentage)/100;
  hardPercentage = (difficulty.hardPercentage)/100;

  res.status(200).json({message:"Difficulty Levels updated successfully"});
});

// Endpoint to generate a question paper
app.get('/generateQuestionPaper', (req, res) => {
  // Read questions from the file

  let questions = [];
  try {
    const data = fs.readFileSync('question_store.js', 'utf8');
    questions = JSON.parse(data);
  } catch (err) {
    console.error('Error reading question_store.js:', err);
    res.status(500).json({ error: 'Internal Server Error' });
    return;
  }

  // Calculate the number of questions for each difficulty level
  
  let easyMarks = Math.round(easyPercentage * totalMarks);
  let mediumMarks = Math.round(mediumPercentage * totalMarks);
  let hardMarks = Math.round(hardPercentage * totalMarks);
  
  // Filter questions based on difficulty and shuffle them
  const shuffledEasyQuestions = shuffle(questions.filter((q) => q.difficulty === 'Easy'));
  const shuffledMediumQuestions = shuffle(questions.filter((q) => q.difficulty === 'Medium'));
  const shuffledHardQuestions = shuffle(questions.filter((q) => q.difficulty === 'Hard'));
  
  // Select questions based on the calculated marks for each difficulty
  const selectedQuestions = [];
  for (const question of shuffledEasyQuestions) {
    if (easyMarks - question.marks >= 0) {
      selectedQuestions.push(question);
      easyMarks -= question.marks;
    } else {
      continue;
    }
  }
  
  for (const question of shuffledMediumQuestions) {
    if (mediumMarks - question.marks >= 0) {
      selectedQuestions.push(question);
      mediumMarks -= question.marks;
    } else {
      continue;
    }
  }
  
  for (const question of shuffledHardQuestions) {
    if (hardMarks - question.marks >= 0) {
      selectedQuestions.push(question);
      hardMarks -= question.marks;
    } else {
      continue;
    }
  }
  
  // Return the selected question paper in JSON format
  res.json({ questionPaper: selectedQuestions });
});

// Function to shuffle an array (Fisher-Yates algorithm)
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
