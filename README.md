# ID Assignment 02: Mathematics Educational Web Application owo

This project is a collaborative effort between 3 students to create a math-centered, educational web application for children, aged 6-12, to smoothly interact and play with. The website's purpose is to give children an alternative way to learn and enjoy mathematics through the use of simple games. The contents of the website will include a login page, a testimonial page and a few simple games such as Sudoku.

Click [here](...) to go to our website, or click the link in the "About" section of this respository.

_This project was done as an assignment for the Interactive Development module in Ngee Ann Polytechnic._

## Design Process

In this section, we will go over our design process and design elements implemented.

_To be completed_
## Features

In this section, We will explain the features of my website and list down some additional features that could be implemented to make the website more functional and interactive.
### Existing Features

- Navigation bar - allows users to navigate between different pages of the website by clicking on each page's label.

- Classes - main feature of website, users are able to play these games, which are based on the maths education theme chosen.

- Wordle Game - allow users to improve on their vocabulary by learning more 5 letter word and its definition through playing.
  
- Science Game - allow users to explore more about different biology topics by playing.
  
- Math Game - allow users to enhance their math foundation and train their mental arithmetic skills.

- Testimonials - requires login to add a testimonial, allow users to see and review our website.

- Login & register - allows users to create and login to their accounts on our website.
### Explanation of Existing Features
1. Classes:

   1. Wordle:
      The aim of this feature is to allow the user to improve their vocabulary through playing. In wordle user are prompted to guess a 5-letter word within 5 try and definition of the word are given to help.

   2. Science game:
      The aim of this feature is to allow user to be familise with different topic in biology. In the science game, user will be given a picture related to the specific topic and user have to guess the name of the picture and only allow to make a total of 6 mistakes.

   3. Math game:
      The aim of this game is to test user understanding on basic math and train their skill of mental arithmetic. In the math game user will be given a equation and user have to select the correct answer in order to proceed to the next question. Math game also have a score system which further enhance user willingness to continue playing the game.     

2. Login & Register: 
   User can register an account in our website. As without login, some of the feature of the website will be lock. The user will unable to post a testimonials and try the game in different classes.

3. Testimonials:
   Testimonial is a feature that requires users to log in before use. Testimonials feature to allow users to rate a specific class in our website and comment their foot of thoughts. All user thought on our classes will allow us to further improve on it to suit the user needs.

### Features Left to Implement

- More exclusive features for Members - allow users who are members with an account to view additional contents, giving more benefits to users who login.
- More exclusive features for English classes - a story of the day for users to read and a platform for users to share their essay writing.
- More exclusive features for biology classes - teaches the user the basic knowledge of each biology topic and more question types to enhance their understanding.

## Technologies Used

These languages are the technologies used in the creation of this project.

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
  - Used to create the body and layout of the web pages
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
  - Used to style and format the web pages
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  - Used for interactive features and game creation

## Testing

This section covers the testing of features and their intended output when a user's action is taken.

1. Navigation Bar:
   1. Verify that the navigation bar is shown on every page with a Mochii EDU icon, button to Home, About, Classes, Testimonials, login and register.
   2. Try login into an account and verifying that the login and register button has been replaced with an icon and your username, and the rest should remain the same.
   3. Try clicking on each button and verify that it has directed you to the specific pages.
   4. Try minimizing the window until all button in the navbar is kept in the burger and verify that by clicking the burger button, all the hidden buttons will be listed out vertically.

2. Login:
   1. Login button will be shown on the navbar on every page.
   2. Try pressing the login button and verify that a login form should pop up and you should be able to see 2 input boxes, one login button and an option "Don't have an account! Click me".
   3. Try to submit an empty form and press login and verify that a message of "Invalid username/password combination" will appear.
   4. Try to submit but keying wrong username/detail and verify that a message of "Invalid username/password combination" will appear.
   5. Try pressing the "Don't have an account? Click me" button and verify you will be sent to the registration form.
   6. Try to submit with all correct input and verify if the login form will close, login and register button on the navbar will be replaced with an icon and your username.
   7. Try pressing on the icon and verifying that an option to log out will show, upon pressing log out you should be log out from the account and the navbar should reset back to default.
  1. Try to submit a testimonial and verify that you are allowed to submit and will not be locked from the feature.
   8. Try to play the game in each class and verify that you are not locked from the feature.

3. Register:
   1. Register button will be shown at the navbar on every page.
   2. Try pressing the register button and verify that a registration form should pop up and you should be able to see 4 input boxes, username,  email address, password and confirm password.
   3. Try pressing each input box, but don't key in anything and click somewhere else in the popup and verify that an error message should show below each (other than confirm password) input box.
   4. Try entering < 8 characters in length in the username input box and verifying that an error message "Username must be at least 8 characters in length." is shown.
   5. Try entering at least an 8 characters username and verify that the error message disappears.
   6. Try to enter any letter in the email address input box and verify that an error message"Please enter a valid email address" 
   7. Try to enter a valid email address and verify that the error message disappears.
   8. Try entering < 8 characters in length in the password input box and verify that an error message "Password must be at least 8 characters in length is shown.
   9. Try entering 8 letter / 8 number for password and verify that an error message "Password must contain at least a capital letter and a number is shown.
   10. Try to enter a password that meets all the requirements and verify that the error message disappears.
   11. Try entering anything different from input in password, in the confirm password input box and verify that an error message "Password is not matched" is shown.
   12. Try to enter the exact same thing you input in the password to confirm the password and verify that the error message disappears.
   13. Try to submit an empty form / incomplete form and verify that you are not proceeding to the next stage.
   14. Try to press the "Already have an account? log in here!" button and verify that you are directed to the login form.

4. Classes:
   1. Wordle:
      1. Go to English Class and start playing the wordle game.
      2. Ensure you can see a wordle title and two-button below the title, a 5 row 5 column board and an in-game keyboard below the board.
      3. Please note that, due to the high latency of API, please wait for at least 3 seconds before starting testing the game.
      4. Try clicking on the definition button and verify that a pop up is show the definition of the word to be guessed. By clicking the cross button or anywhere outside pop up will close it.
      5. Try lick on the reset button, and verify that is the page will be reloaded, everything should be reset to default and a new word to be guessed is generated.
      6. Try input letter [A - z] using an in-game keyboard or your own keyboard device, and verify if the letter input is shown in the specific tile of the board.
      7. Try pressing enter when the number of letters is less than 5 and verify that is an error message "Must enter 5 letters" shown below the title and if the current row of the board has a shake animation.
      8. Try pressing enter when the number of letters is 5 and verify that if the combination of the 5 letters is not a valid word, an error message will be shown "Please enter a valid word", and the current row will have a shake animation.
      9. Try pressing enter, if the combination of 5 letter word is valid and verify that all the 5 tile colour was changed. If green means letter is in the same position as the word to be guessed. If yellow means the letter is in the word to be guessed but not the same position. If grey means the letter does not exist in the word to be guessed.
      10. Try using out all the 5 chances to input a valid word and verify that the word to be guessed will be shown below the "WORDLE" title. The game will end and only be able to continue if the user presses the reset button.
      11. Try to guess the word and verify that the word to be guessed will also be shown below the "WORDLE" title. The game will end and only by pressing the reset button then will start a new round.
   
   2. Science Game:
      1. Go to Biology class and start learning human anatomy, and verify you are directed to the science game.
      2. In the science game, you should see the title"Name The Picture", follow by 2 buttons "Instruction and Reset", followed by an organ picture, the number of wrong guesses, a place for a word to be guessed and a keyboard.
      3. Try pressing any key on the keyboard and verify that the key will turn grey and disable. If the letter is in the name, the letter should appear in the same position as the name. 
      4. Try pressing the instruction button and verify that a pop-out will appear with the header of "INSTRUCTION" and a total of 4 step instructions.
      5. Try pressing the reset button and verify that the page has been reloaded, a new organ picture will show (or the same picture due to randomisation). The wrong guesses, words to be guessed and keyboard should also be reset.
      6. Try guessing the name of the organ picture and verify that a pop up will show with a green header "End of the game" follow by congrats, the correct name and a reminder to press the reset button to start a new round.
      7. Try using out all the wrong guesses and verify that a pop up will show with a red header "End of the game" followed by "Oh no, you ran out of chances!", the correct name of the organ picture and a reminder to press reset button to start a new round.
      8. After the end of the game, try pressing any key on the keyboard and verify that the page will be reloaded and everything will be reset.

   3. Math Game (Practice):
      1. Go to Mathematics class and start playing the Practice game.
      2. In the math game, you should be able to see 3 hearts which represents the number of mistakes that can be made, an equation with the answer appear as "?", a score which will plus 1 whenever u answer correctly and 3 answer option to be select but only 1 is the correct answer.
      3. Try by pressing the wrong answer option and verify that 1 out of 3 hearts will be deleted, 
      4. Try to use out all 3 chances and verify that when all the 3 hearts disappear, the game will end. A pop up will show " Well Done!" and the total number of points you scored.
      5. Try by pressing the correct answer option and verifying that the point score will be plus one, and the next equation with the 3 new answer options will be shown.
      6. Please note that the Game will only end when all 3 hearts disappear.

5. Testimonials:
   1. Ensure that a large grey button can be seen on testimonial board only if user is logged in
   2. Click on the button and verify that a new review template has be created and the grey button has disappeared
   3. Click on Submit button and verify that a error message has popped-up and the review box shakes.
   4. Click on the "Classes" dropdown and ensure that all 3 options can be selected and displayed in place of the previous "Classes" text
   5. Hover over the review stars and verify that the number of solid stars as compared to hollow stars changes as the cursor moves over them
   6. Type into the text box and verify the box expands downwards when the text box is filled
   7. Submit the review and verify the review becomes permanent like the other reviews and no content on it can be modified
   8. Check that the grey button has reappeared and a new review can be made


### Display

_To be completed_

### Bugs & Issues

_To be completed_

## Credits

### Content

- The design and layout of the website were inspired by [Educandy](https://www.educandy.com/) and [IXL](https://sg.ixl.com/)

1. For the wordle game, we received inspiration from YouTuber, Kenny Yip Coding'video. Click [here](https://www.youtube.com/watch?v=ckjRsPaWHX8) to see the video.
2. For the science game, we received inspiration from YouTuber, Science and Technology'video. Click [here](https://www.youtube.com/watch?v=dgvyE1sJS3Y###) to see the video.
3. For the math quiz game, we received inspiration from YouTuber, codefoxx's video. Click [here](https://www.youtube.com/watch?v=Uw9wc5wm_mw&t=524s&ab_channel=codefoxx) to see the video.
4. For the login feature, we received inspiration from YouTuber, dcode's video. Click [here](https://www.youtube.com/watch?v=3GsKEtBcGTk) to see the video.

### Media

The photos used in this site were obtained from

- [Math Quiz Hearts](http://clipart-library.com/vector-heart.html)

- [Default Profile Pic](https://www.vectorstock.com/royalty-free-vector/default-avatar-profile-icon-vector-39013212)
  
- [Science Game All Organ Pictures](https://www.iconfinder.com/iconsets/internal-organs-icon-set)

### Acknowledgements

- We received inspiration for this project from Mr Peter Hung, our tutor for this Interactive Development module at Ngee Ann Polytechnic.
