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