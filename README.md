# Ten Second Math Game

### Introduction
This game will help you get better at math by quickly solving small math problems. You have a visible timer that displays the time you have left to answer questions. When the counter reaches zero you are **game over**.

Everytime you get an answer right, you'll receive an additional **10 seconds** to keep playing. If you are fast enough, you can keep accumulating seconds to play. The game ends when you run out of time.

When the game ends, it will display your score and allow you to play again.

### Technologies
- HTML
- CSS
- Bootstrap
- Javascript
- Jquery

### Basic Features

- Display:
  - `count-down clock`. Initial value is **10 seconds**
  - `random math problem` to solve. Initial operation is **addition** only: ie. *(2 + 5 = `<input>`)*

- When the user inputs any character in the `solution input`:
  - Timer will start counting down
  - Check the user's answer against the solution:
  - If the **answer is empty/wrong**: it will display a red border in the `solution input`
  - If the **answer is correct**:
    - Clear the `solution input`
    - Add 10 extra seconds to the count-down clock
    - Replaces question with a new math problem

- When the timer hits `zero`:
  - It will hide the `solution input`
  - It will display:
    - Game over banner
    - Number of points accumulated by the user (5 per correct answer)

### Extra Features (BONUS)

##### Before the Game Starts

- Add a slider to increase number generation difficulty: `10` (min) - `100` (max) in increments of 10
- Add checkboxes to select what operators to quiz: `addition`, `substraction`, `multiplication`, `division`, `powers of 2` and `square root`, and randomly generate problems for all kind of operations

##### InGame

When the user guesses an answer right

- Add encouraging messages. Make them `show` for 5 seconds and then `fadeout`
- Change the color of the `solution input` to green for 5 seconds

##### When the Game finishes

Calculate a better score based on:
  - Number of questions answered correctly
  - Selected difficulty (more difficulty == more points per answer)
  - Number of operators enabled (`{add: 1, sub: 2, mult: 5, div: 10, power: 10, square: 20}`)

### Instructions

1. Fork the [project on Github](https://github.com/wdi-hk-10/ten-seconds-math)
1. Clone the project to your computer
1. Build the game!
1. Commit your changes and push to github (`git push origin master`)
1. Submit a pull-request to the original repo!

> [Original idea](http://www.mental-math-trainer.com)