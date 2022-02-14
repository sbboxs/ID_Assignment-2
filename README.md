# ID Assignment 02: Mathematics Educational Web Application owo

This project is a collaborative effort between 3 students to create a math-centered, educational web application for children, aged 6-12, to smoothly interact and play with. The website's purpose is to give children an alternative way to learn and enjoy mathematics through the use of simple games. The contents of the website will include a login page, a testimonial page and a few simple games such as Sudoku.

Click [here](...) to go to our website, or click the link in the "About" section of this respository.

_This project was done as an assignment for the Interactive Development module in Ngee Ann Polytechnic._

## Design Process

In this section, we will go over our design process and design elements implemented.

_To be completed_

## Features

In this section, We will explain the features of my website and list down some additional features that could be implemented to make the website more functional and interactive.
1. Classes:

   1. Wordle:
      Users are prompted to guess a 5 letter word and a definition of the word will be given. The user can either input the letter using the in-game keyboard or using their own keyboard device. If the user press enters when the 5 tile in the row is not completely filled, the user will not proceed and a message will show to tell user must enter 5 letters.
      If the user inputs 5 letters and press enter, if the 5 letters do not recognise as a valid word, the user will also not proceed and a message will show to tell user must enter a valid word.
      If the user input a valid guess word, if the guess letters in the guess word are in the same position as the word, the tile will be green. If the guessed letter is in the word but not in the same position, the tile will be yellow. If the guessed letter is not in the word, the tile will be grey.
      if the guess word is the same as the word, the user will win the game.

   2. Science game:
      In the science game, there are 5 different topics, and the different topics will have different type of pictures for the user to guess. The user is prompted to guess the name of the picture using in-game keyboard. The user has a total of 6 chances to make a mistake. If a letter is guessed, the letter will not be able to press again. If the letter guessed is in the name of the picture, the letter will show in the exact same position as the letter in the name. Moreover, there is a reset button, upon pressing the game will reset and a new picture will show.

   3. Math game:

      Practice math game:
      In practice math, game users are given an equation but the answer of it will not be shown. On the right of the equation there is 3 answers for the user to choose but only 1 answer is the correct answer and user only have allow to make up to 3 wrong answer.Every right answer is make, the user will be award 1 points. Every wrong answer made, one out of the 3 hearts which represent chances of mistake make left will dissapear. When, the 3 hearts / 3 wrong answer, the game will ended. When game is ended, the total points score will be shown.

      Timed math game:
      --Not done yet--

2. Login & Register:

   Login: When the user pressed the login button, a login form will pop up. In the login, form users are prompted to input their username and password. After they press the login button in the form, they will log in to the website. If the username is not found or the password is unmatched and for security purposes, only an error message "Invalid username/password combination" will be shown. Moreover, if the user in the login form does not have an account, they are also allowed to proceed to the registration form via clicking the "Don't have an account? Click here!"

   Register: When the user presses the register button, the registration form will pop up. In the register form, users are prompted to input the username, email addresses, password and confirm the password.
   .For username, if the username entered is less than 8 characters in length, an error message will show and only the error message only will clear after the user input meets the requirement.
   .For email address, if the email address entered is not a valid one, an error message will show and only the error message only will clear after the user input meets the requirement.
   .For password, if the password does not have at least 8 char in length or does not consist of at least a capital letter and a number, an error message will show and only the error message only will clear after the user input meets the requirement.
   . To confirm a password, if the input in confirms password does not meet the input in password, an error message will show and only the error message only will clear after the user input meets the requirement.

   If there is an error, the user will not proceed to the next stage and the account will not create after user press "create account" button.
   If all input meets the requirement, after the user presses the "create account" button, the registration form will close and a Lottie animation will be shown and tell the user account created successfully.

   If the user in the registration form has an account, they can press the "Already have an account? log in here!" button to proceed with the login form.

### Existing Features

- Navigation bar - allows users to navigate between different pages of the website by clicking on each page's label.

- Classes - main feature of website, users are able to play these games, which are based on the maths education theme chosen.

- Wordle Game - 
  
- Science Game - 
  
- Math Game - 

- Testimonials - requires login to add a testimonial, allow users to see and review our website.

- Login - allows users to create and login to their accounts on our website.

### Features Left to Implement

- More exclusive features for Members - allow users who are members with an account to view additional contents, giving more benefits to users who login.

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
   Using the navigation buttons...

   _To be completed_

2. Login:
   1. Login button will be shown at the nav bar in every pages.
   2. Try pressing the login button, a login form should pop up and you should be able to see 2 input box, one login button and an option "Don't have an account!Click me".
   3. Try submit an empty form and press login and verify that an message of "Invalid username/password combination" will appear.
   4. Try submit but keying wrong username/detail and verify that an message of "Invalid username/password combination" will appear.
   5. Try pressing "Don't have an account?Click me" button and verify you will be sent to register form.
   6. Try submit with all correct input and verify is the login form will close, login and register button on the nav bar will be replace with an icon and your username.

3. Register:

4. Classes:
   1. Wordle:
      1. Go to English Class and start playing the wordle game.
      2. Ensure you can see a wordle title and two button below the title, a 5 row 5 column board and a in game keyboard below the board.
      3. Please note that, due to the high lagency of api, please wait for at least 3 second before start testing of the game.
      4. Try click on the definition button and verify that a pop up will show the definition of the word to be guess. By clicking the cross button or anywhere outside pop up will close it.
      5. Try lick on the reset button, and verify that is the page will be reload, everything should be reset to default and a new word to be guess is generated.
      6. Try input letter [A - z] using in game keyboard or your own keyboard device, and verify is the letter input is show in the specific tile of the board.
      7. Try pressing enter when number of letter is less than 5 and verify that is an error message "Must enter 5 letter" show below title and is the current row of the board will have a shake animation.
      8. Try pressing enter when number of letter is 5 and verify that if the combination of the 5 letter is not a valid word, an error message will be shown "Please enter a valid word", and the current row will have a shake animation.
      9. Try pressing enter, if the combination of 5 letter word is valid and verify that all the 5 tile color will changed. If green means letter is in the same position as the word to be guess. If yellow means the letter is in the word to be guess but not the same position. If grey means the letter is not exist in the word to be guess.
      10. Try used out all the 5 chances to input valid word and verify that the word to be guess will be show below the "WORDLE" title. Game will be end and only be able to continue if user press reset button.
      11. Try guessed the word and verify that the word to be guess will also be show below the "WORDLE" title. Game will be end and only by pressing reset button then will start a new round.
   
   2. Science Game:
      1. Update soon.

   3. Math Game (Practice):
      1. Go to Mathematics class and start playing the Practice game.
      2. In the math game, you should be able to see 3 hearts which represents the number of mistakes that can be made, an equation with the answer appear as "?", a score which will plus 1 whenever u answer correctly and 3 answer option to be select but only 1 is the correct answer.
      3. Try by pressing the wrong answer option and verify that 1 out of 3 hearts will be deleted, 
      4. Try used out all 3 chances and verify that when all the 3 hearts disappear, game will end. A pop up will show " Well Done!" and the total number of points you scored.
      5. Try by  pressing the correct answer option and verify that the point score will be plus one, and the next equation with the 3 new answer options will be shown.
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

### Media

The photos used in this site were obtained from

- [Math Quiz Hearts](http://clipart-library.com/vector-heart.html)

- [Default Profile Pic](https://www.vectorstock.com/royalty-free-vector/default-avatar-profile-icon-vector-39013212)

_To be completed_

### Acknowledgements

- We received inspiration for this project from Mr Peter Hung, our tutor for this Interactive Development module at Ngee Ann Polytechnic.
