
---

# Question Paper Generator

## Overview

The Question Paper Generator is a simple Node.js application that has two endpoints for managing and generating question papers. It allows users to submit questions with attributes such as question text, subject, topic, difficulty, and marks. Additionally, it generates question papers based on specified difficulty percentages.

## Prerequisites

- Node.js installed on your machine ([Download Node.js](https://nodejs.org/))
- npm (Node Package Manager)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/question-paper-generator.git
   ```

2. Navigate to the project directory:

   ```bash
   cd question-paper-generator
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

### 1. Start the Server
use
```bash
npm start
```
or run
```
node server.js
```

This will start the server on http://localhost:3000.

### 2. Submit a Question

Use the provided HTML form `saveQuestion` to submit a question with attributes such as question text, subject, topic, difficulty, and marks.

### 3. Generate a Question Paper

Use the `generateQuestionPaper` button endpoint to generate a question paper with the specified difficulty percentages. The generated question paper will be returned in JSON format.

We can also set the Total marks of the question paper, percentage of questions from easy, medium and hard difficulty using the `updateDifficulty` form according to our requirements. If not provided, the default values have been set to total marks = 100 , Difficulty: (20% Easy, 50% Medium, 30% Hard ).

```bash
GET http://localhost:3000/generateQuestionPaper
```

packages: 
- express
- body-parser

### Documentation

#### Server-Side Logic (`server.js`)

##### Endpoints:

1. **Save Question Endpoint:**
   - **Path:** `/saveQuestion` (POST)
   - **Description:** Saves a new question to the question store file (`question_store.js`).
   - **Input:** JSON object containing question details (question, subject, topic, difficulty, marks).
   - **Output:** JSON response with a success message.

2. **Update Difficulty Endpoint:**
   - **Path:** `/updateDifficulty` (POST)
   - **Description:** Updates the difficulty levels based on the provided percentages.
   - **Input:** JSON object containing total marks, easy percentage, medium percentage, and hard percentage.
   - **Output:** JSON response with a success message.

3. **Generate Question Paper Endpoint:**
   - **Path:** `/generateQuestionPaper` (GET)
   - **Description:** Generates a question paper based on the stored questions and configured difficulty levels.
   - **Input:** Query parameter for the output format (e.g., JSON).
   - **Output:** JSON response containing the generated question paper.

##### Functions:

- **Shuffle Function:**
  - Shuffles an array using the Fisher-Yates algorithm.

#### Client-Side Logic (`index.html`)

##### UI Elements:

- **Submit a Question Form:**
  - Allows users to input question details and save them.

- **Update Difficulty Form:**
  - Allows users to update difficulty levels based on total marks and percentage values for easy, medium, and hard.

- **Generate Question Paper Button:**
  - Triggers the generation of a question paper based on the configured difficulty levels.

- **Question Paper Container:**
  - Displays the generated question paper.

##### Functions:

- **saveQuestion Function:**
  - Sends a POST request to the server to save a new question.

- **updateDifficulty Function:**
  - Sends a POST request to the server to update difficulty levels.

- **generateQuestionPaper Function:**
  - Sends a GET request to the server to generate a question paper and displays it.

- **displayQuestionPaper Function:**
  - Displays the generated question paper on the UI.

##### Extensions:
The application is completely adaptable to the following extensions ->
- **select topic and set precentage Function:**
  - Sends a POST request to select the required percentage of questions from the selected topic.

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, feel free to open an issue or create a pull request.

---

Feel free to include additional sections or customize the content based on the specific needs and features.