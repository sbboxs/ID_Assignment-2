<ins>**Register Test**</ins>
1. Click the 'Register' button in the Navigation Bar.
2. Enter your **Username, Email Address, Password, Confirm Password**
3. Click the 'Create Account' button
4. Successful registration shows a modal pop-up notifying users that they have successfully created an account.

<br>

<ins>**Login Test**</ins>
1. Enter your existing **Username, Password**
2. Click the 'Login' button
3. Successful login will close the login modal and your username will appear in the Navigation Bar.

<br>

<ins>**Testimonial Test**</ins>
1. Login into your account
2. Click on the '+' button
3. Click the 'Select Class' dropdown menu and select a class
4. Click the stars to give star ratings
5. Type in your review
6. Click the 'Submit' button
7. Successful submission of testimonial will show a modal pop up that says "Your testimonial has been submitted successfully!"

<br>

 _**Please note that, due to the high latency of API, please wait for at least 3 seconds before starting testing the game.**_

<br>

<ins>**Wordle**</ins>
1. Go to "English" page by clicking on the "Learn" button inside the "English" card.
2. Click on the "Start Learning" button to go to the Wordle game.
3. Ensure a wordle title, two-button below the title, a 5 by 5 board and an in-game keyboard below the board are all present.
4. Click the definition button and verify that a modal pop up shows the definition of the word to be guessed.
5. Click the reset button, and verify that the page is reloaded with everything reset to default and a new word is generated.
6. Input letters [A - Z] using an in-game keyboard or actual keyboard, and verify if the letter inputted is shown in the specific tile of the board on the current row.
7. Press enter when the number of letters is less than 5 and verify that is an error message saying "Must enter 5 letters" is shown below the title and the current row of the board has a shake animation.
8. Press enter when the number of letters is 5 and the combination of the 5 letters is not a valid word. Verify that an error message shows "Please enter a valid word", and the current row will have a shake animation.
9. Press enter when the inputted word is valid and verify that all the 5 tile colour was changed to green / yellow / grey.
10. Enter 5 incorrect words and verify that the word to be guessed will be shown below the "WORDLE" title. 
11. Press reset button to start a new round and verify everything is reset.
12. Enter the correct word and verify that the word to be guessed will also be shown below the "WORDLE" title. (Hint: look at the top of the console log for the answer)

<br>

<ins>**Science Game**</ins>
1. Go to "Biology" page by clicking on the "Learn" button inside the "Biology" card.
2. Click on the "Start Learning" button to go to the Science game.
3. Press any key on the keyboard and verify that the in-game keyboard's keys turn grey and are disabled. If the letter is in the name, the letter will appear in the same position as the word.
4. Press the instruction button and verify that a modal pop-out will appear with the header of "INSTRUCTION" and a total of 4 steps of instructions.
5. Press the reset button and verify that the page has been reloaded, a new organ picture will show (or the same picture due to randomisation). The wrong guesses, words to be guessed and keyboard will also be reset.
6. Guess the name of the organ picture and verify that a modal pop up will show with a green header "End of the game" follow by congrats, the correct name and a reminder to press the reset button to start a new round.
7. Guess incorrectly 6 times and verify that a modal pop up will show with a red header "End of the game" followed by "Oh no, you ran out of chances!", the correct name of the organ picture and a reminder to press reset button to start a new round.
8. At the end of the game, press any key on the keyboard / reset button and verify that the page will be reloaded and everything will be reset.

<br>

<ins>**Math Game**</ins>
1. Go to "Mathematics" page by clicking on the "Learn" button inside the "Mathematics" card.
2. Click on the "Start Learning" button to go to the Math Quiz game.
3. Press the wrong answer option and verify that the hearts are deleted from right to left.
4. Guess incorrectly 3 times and verify that when all the 3 hearts disappear, the game will end. A pop up will show " Well Done!" and the total number of points scored.
5. Press the correct answer option and verify that the point score will be plus one, and the next equation with 3 new answer options will be shown.
6. Please note that the game will only end when all 3 hearts disappear.

