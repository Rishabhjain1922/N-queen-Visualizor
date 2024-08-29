N-Queens Visualizer
This project is a visual representation of the classic N-Queens problem, implemented using HTML, CSS, and JavaScript. The N-Queens problem is a famous puzzle where the objective is to place N queens on an N×N chessboard so that no two queens threaten each other.

Table of Contents
Overview
Features
Technologies Used
Installation
Usage
How It Works
Customization
Challenges and Future Enhancements
Contributing
License
Overview
The N-Queens Visualizer provides an interactive and educational way to explore the N-Queens problem. Users can choose the size of the board, watch the algorithm place queens step by step, and switch between light and dark modes for comfortable viewing.

Features
Interactive Board Size Selection: Users can select the size of the board (N) from 4x4 up to 16x16.
Algorithm Visualization: The visualizer shows the placement of queens on the board in real-time as the algorithm solves the problem.
Dark Mode: Toggle between light and dark themes for a more comfortable viewing experience.
Control Buttons:
Start: Begin the visualization.
Pause/Resume: Pause and resume the visualization.
Reset: Clear the board and start over.
Responsive Design: The visualizer is fully responsive and works on all devices.
Technologies Used
HTML5: For structuring the content of the webpage.
CSS3: For styling the visualizer, including support for light and dark modes.
JavaScript (ES6): For implementing the N-Queens solving algorithm and controlling the visualization.
Installation
To run this project locally, follow these steps:

Clone the repository:
bash
Copy code
git clone https://github.com/your-username/n-queens-visualizer.git
Navigate to the project directory:
bash
Copy code
cd n-queens-visualizer
Open index.html in your browser:
bash
Copy code
open index.html
Alternatively, you can use a live server extension in your code editor to view the project.
Usage
How to Use
Set the Board Size: Enter a number between 4 and 16 in the board size input field to set the size of the chessboard.
Start Visualization: Click the "Start" button to begin solving the N-Queens problem. The queens will be placed on the board step by step.
Pause and Resume: You can pause the visualization at any time by clicking "Pause" and resume it by clicking "Resume."
Reset the Board: Click "Reset" to clear the board and start the process over.
Toggle Dark Mode: Use the "Dark Mode" button to switch between light and dark themes.
How It Works
The N-Queens problem is solved using a backtracking algorithm. Here's how the visualizer works:

Board Initialization: When the user selects a board size and clicks "Start," the board is dynamically generated using JavaScript.
Placing Queens: The algorithm tries to place queens on the board one row at a time, ensuring no two queens can attack each other.
Backtracking: If the algorithm encounters a conflict (where a queen can't be safely placed in the current row), it backtracks to the previous row and tries a different position.
Visualization: Each placement and removal of a queen is visualized on the board, with a delay between steps to allow the user to follow the process.
Customization
Modifying Board Size Range
You can change the allowed range for the board size by adjusting the min and max attributes in the HTML input field:

html
Copy code
<input type="number" id="board-size" value="8" min="4" max="16">
Changing Themes
To customize the colors used in light and dark modes, modify the CSS variables in styles.css:

css
Copy code
:root {
    --background-color: #f0f0f0;
    --text-color: #333;
    --primary-color: #007bff;
    --board-color-light: #f7f7f7;
    --board-color-dark: #333;
    --queen-color: #ff6347;
    --border-color: #007bff;
}
Adjusting Animation Speed
To change the speed of the queen placements, modify the sleep(ms) function in scripts.js:

javascript
Copy code
async function solveNQueens(row = 0) {
    // Existing logic
    await sleep(500); // Adjust the delay here (in milliseconds)
}
Challenges and Future Enhancements
Challenges Faced
Performance on Larger Boards: Visualizing the solution for larger boards (like 16x16) required careful optimization to maintain smooth performance.
User Interaction: Balancing the complexity of the algorithm with a simple and user-friendly interface was crucial to making the visualizer accessible.
Future Enhancements
Speed Control: Allow users to adjust the speed of the visualization.
Multiple Solutions: Provide an option to explore all possible solutions for a given board size.
Interactive Mode: Let users place queens manually and see if their solution is valid.
Contributing
Contributions are welcome! If you have suggestions for improvements or want to report bugs, feel free to open an issue or submit a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.

This README.md provides all the necessary information about your N-Queens Visualizer project, making it easy for others to understand, install, and use your project.
