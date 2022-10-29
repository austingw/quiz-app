<p align="center">
<img src="https://raw.githubusercontent.com/austingw/austingw.github.io/main/src/assets/quiz-app.gif" alt="Quiz GIF" />
</p>

# Kitchen Sink Quiz #

A React-based quiz game that pulls 5 completely random questions of varying difficulty from the <a href="https://opentdb.com/" >Open Trivia Database</a>.

Play <a href="austingw.github.io/quiz-app">here</a>

# About # 

This React app was made completely from scratch based upon the lessons I learned from the Scrimba React course. The only assistance given was overall visual design examples, but the structure, game logic, etc. were all up to me. I would say the most difficult aspects of this project were figuring out the best way to handle the data received from the OpenTDB API, rendering the question and answer options as components, and maintaining player choice so that the game logic functioned correctly. Overall, working on this project for a week or so in my free time helped me not only understand React better, but also solidified my understanding of array methods. 

# Features #

- Player choice and win state kept track of via state
- API integration to pull questions from various categories and difficulty levels (thus the title "Kitchen Sink Quiz")
- Reactive UI elements to indicate player choice, correct and incorrect responses, etc.
- Functional answer tally display upon submit
- Restart button to instantly load more questions for another round
- Clean, aesthetically pleasing design

# Built with #

- React
- CSS
- Vite
- The Open Trivia Database API
