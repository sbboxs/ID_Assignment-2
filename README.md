# ID Assignment 02: Mathematics Educational Web Application owo

This project is a collaborative effort between 3 year-1 polytechnic students to create an educational web application for children, aged 7-12, to smoothly interact and play with. The website's purpose is to give children an alternative way to learn while having fun through the use of simple games. The contents of the website include a home page, an about page to briefly explain our website, a testimonial page where users can post their reviews and opinions, and a classes page for our users to access the our educational games.

Click [here](https://sbboxs.github.io/ID_Assignment-2/) to go to our website, or click the link in the "About" section of this respository.

_This project was done as an assignment for the Interactive Development module in Ngee Ann Polytechnic._

## Design Process

In this section, we will go over our design process and design elements implemented.

Our overall design is geared towards children, with cuter icons and playful fonts.

The main colour of our website is a light pink. We chose this pink as our base colour to complement our fonts and icons with a softer look to the website. Similarly, we also used a light purple in the game pages to keep our pages fresh while keeping to our soft theme. The home page has a slightly more vibrant background than the other pages, using gradients of pink and blue to entice users to click further.

As mentioned above, our main font is more playful to stand out from other more commonly-used fonts. When necessary, we also use more readable fonts to display certain text.

The colourful character icons seen on our website's logo are created from scratch by one of our members. Their character models are created to appeal to a child's innocence with cute and simple designs.

In short, our website was designed while keeping in mind what a child would want to see in a fun (and educational) website.

## Features

In this section, We will explain the features of we website and list down some additional features that could be implemented to make the website more functional and interactive.

### Existing Features

- Navigation bar - allows users to navigate between different pages of the website by clicking on each page's label.

- Classes - main feature of website, users pick a class and play the game(s) for each subject available

  - Wordle Game - allow users to improve on their vocabulary by learning more 5 letter word and its definition through playing.

  - Science Game - allow users to explore more about different biology topics by playing a game of hangman.

  - Math Game - allow users to enhance their math foundation in the 4 basic operations and train their mental arithmetic skills.

- Testimonials - requires login to add a testimonial, allow users to see and review our website.

- Login & register - allows users to create and login to their accounts on our website for access to more features.

### Explanation of Existing Features

1. Classes:
   Users can navigate our classes pages to find the game they want to play.

   1. Wordle:
      The aim of this feature is to allow the user to improve their vocabulary through playing. In wordle, the user are prompted to guess a 5-letter word within 5 tries using hints and clues given with each guess. The definition of the word is also provided if the user is feeling stuck.

   2. Science game:
      The aim of this feature is to allow the user to familiarise themselves with different topics in biology. In the science game, the user will be given a picture related to the specific topic. They will have to guess the name of the picture shown and are only allow to make a total of 6 mistakes in a similar style to hangman.

   3. Math game:
      The aim of this game is to test the user's understanding of basic mathematics and train their mental arithmetic calculation. In the math game, the user will be given a equation and they have to select the correct answer in order to proceed to the next question. The Math game also has a score system to further enhance the user's experience by showing their progress.

2. Login & Register:
   With this feature, the user can register an account and login on our website. With an account, they will be able to access more exculsive features of our website such as posting a testimonial and trying out all the games in the different subject classes. If a user is not logged in, all those aforementioned features will be locked.

3. Testimonials:
   The testimonial page has a feature that allows the user to rate a class in our website and give their comments on it. This feature will not only allow the user to give their honest opinion but also recommend others to give our website a try. To sum it up, this feature provides a platform for reviews and feedback so that we can make further improvements on issues raised to suit the user's needs.

### Features Left to Implement

- More exclusive features for Members - allow users who are members with an account to view additional contents, giving more benefits to users who login.
- More features for subject classes - add more features and games for users to explore and play around with.
  - English - a story of the day for users to read and a platform for users to share their essay writing.
  - Science - teach users basic knowledge of other biology topics by adding more science-related pictures to the science game to enhance their understanding.
  - Math - create a timed version of the current quiz game and a leaderboard feature, to stimulate healthy competition better growth in mathematics.

## Technologies Used

These languages are the technologies used in the creation of this project.

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
  - Used to create the body and layout of the web pages
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
  - Used to style and format the web pages
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  - Used for interactive features and game creation
- [jQuery](https://jquery.com/)
  - Javascript library to create interactive features, game creation and API implementation
- [Bootstrap](https://getbootstrap.com/docs/5.1/getting-started/introduction/)
  - CSS framework in formatting web pages

## Testing

This section covers the testing of features and their intended output when a user's action is taken.

1. Navigation Bar:

   1. Verify that the navigation bar is shown on every page with a Mochii EDU icon, a link to Home, About, Classes and Testimonials, and a login and register button.
   2. Click on each link of "Home", "About", "Classes" and "Testimonials". Verify that the correct pages has been loaded.
   3. Click on the Mochii Edu icon on each page and verify that you are sent to the home page.

2. Login:

   1. Login button will be shown on the navigation bar of every page.
   2. Press the login button and verify that a login form modal has popped up. The form will have 2 input boxes, one login button and a link, saying "Don't have an account! Click me".
   3. Submit an empty form and verify that an error message appears, saying "Invalid username/password combination".
   4. Submit the form with a wrong username and/or password and verify that a message with the text, "Invalid username/password combination", appears.
   5. Submit the form with all correct inputs and verify that the login form closes, and the login and register button on the right-hand side of the navigation bar have been replaced with a default profile icon and the account's username.
   6. Press the "Don't have an account? Click me" link and verify that the registration form modal shows up.
   7. Once logged in, go to the "Testimonials" page and submit a testimonial. Verify that a large grey button appears in the grid of boxes and a new testimonial can be posted.
   8. Once logged in, go to the game in each class and verify that the feature is not locked behind a modal anymore.
   9. Press the profile icon and verify that a dropdown option to log out will show. Upon pressing log out, the website should reset back to its default state. (i.e. locked modals in each game and no testimonial button)

3. Register:

   1. Register button will be shown on the navigation bar of every page.
   2. Press the register button and verify that a registration form modal pops up. The form will have 4 input boxes, username, email address, password and confirm password.
   3. Click on each input box without entering anything in and click out of them. Verify that an error message is shown below each (other than confirm password) input box.
   4. Enter < 8 characters in length in the username input box and verify that an error message "Username must be at least 8 characters in length." is shown.
   5. Enter at least an 8 characters username and verify that the error message disappears.
   6. Enter any letter in the email address input box and verify that an error message"Please enter a valid email address"
   7. Enter a valid email address (i.e. with an @ sign and .com) and verify that the error message disappears.
   8. Enter < 8 characters in length in the password input box and verify that an error message "Password must be at least 8 characters in length is shown.
   9. Enter 8 letters / 8 numbers for password and verify that an error message "Password must contain at least a capital letter and a number is shown.
   10. Enter a password that meets all the requirements and verify that the error message disappears.
   11. Enter anything different from input in password, in the confirm password input box and verify that an error message "Password is not matched" is shown.
   12. Enter the exact same password in the password input box inside of the confirm password input box and verify that the error message disappears.
   13. Submit an empty form / incomplete form and verify that the form is not submitted (i.e. no changes on screen).
   14. Submit a complete form and verify that a success modal pops up with confetti animation and a "Account Created Successfully" message.
   15. Click the "Already have an account? log in here!" link and verify that the login form appears.

4. Classes:
   After going to "Classes" page...

   1. Wordle:
      **Please note that, due to the high latency of API, please wait for at least 3 seconds before starting testing the game.**

      1. Go to "English" page by clicking on the "Learn" button inside the "English" card.
      2. Click on the "Start Learning" button to go to the Wordle game.
      3. Ensure a wordle title, two-button below the title, a 5 by 5 board and an in-game keyboard below the board are all present.
      4. Click the definition button and verify that a modal pop up shows the definition of the word to be guessed.
      5. Click the reset button, and verify that the page is reloaded with everything reset to default and a new word is generated.
      6. Input letters [A - z] using an in-game keyboard or actual keyboard, and verify if the letter inputted is shown in the specific tile of the board on the current row.
      7. Press enter when the number of letters is less than 5 and verify that is an error message saying "Must enter 5 letters" is shown below the title and the current row of the board has a shake animation.
      8. Press enter when the number of letters is 5 and the combination of the 5 letters is not a valid word. Verify that an error message shows "Please enter a valid word", and the current row will have a shake animation.
      9. Press enter when the inputted word is valid and verify that all the 5 tile colour was changed. If green, the letter is in the same position as the letter in the word to be guessed. If yellow, the letter is in the word to be guessed but not in the same position. If grey, the letter does not exist in the word to be guessed.
      10. Enter 5 incorrect words and verify that the word to be guessed will be shown below the "WORDLE" title. The game will end and only be able to continue if the user presses the reset button.
      11. Enter the correct word and verify that the word to be guessed will also be shown below the "WORDLE" title. The game will end and only by pressing the reset button will the game start a new round. (Hint: look at the top of the console log for the answer)

   2. Science Game:

      1. Go to "Biology" page by clicking on the "Learn" button inside the "Biology" card.
      2. Click on the "Start Learning" button to go to the Science game.
      3. Ensure the title "Name The Picture", follow by 2 buttons "Instruction" and "Reset", an organ picture, the number of wrong guesses, a place for a word to be guessed and a keyboard are all present.
      4. Press any key on the keyboard and verify that the in-game keyboard's keys turn grey and are disabled. If the letter is in the name, the letter will appear in the same position as the word.
      5. Press the instruction button and verify that a modal pop-out will appear with the header of "INSTRUCTION" and a total of 4 steps of instructions.
      6. Press the reset button and verify that the page has been reloaded, a new organ picture will show (or the same picture due to randomisation). The wrong guesses, words to be guessed and keyboard will also be reset.
      7. Guess the name of the organ picture and verify that a modal pop up will show with a green header "End of the game" follow by congrats, the correct name and a reminder to press the reset button to start a new round.
      8. Guess incorrectly 6 times and verify that a modal pop up will show with a red header "End of the game" followed by "Oh no, you ran out of chances!", the correct name of the organ picture and a reminder to press reset button to start a new round.
      9. After the end of the game, press any key on the keyboard and verify that the page will be reloaded and everything will be reset.

   3. Math Game (Practice):

      1. Go to "Mathematics" page by clicking on the "Learn" button inside the "Mathematics" card.
      2. Click on the "Start Learning" button to go to the Math Quiz game.
      3. Ensure 3 hearts which represents the number of lives, an equation with the answer appearing as "?", a score which will add 1 whenever answered correctly and 3 answer option with 1 correct option are all present.
      4. Press the wrong answer option and verify that the hearts are deleted from right to left.
      5. Guess incorrectly 3 times and verify that when all the 3 hearts disappear, the game will end. A pop up will show " Well Done!" and the total number of points scored.
      6. Try by pressing the correct answer option and verify that the point score will be plus one, and the next equation with 3 new answer options will be shown.
      7. Please note that the game will only end when all 3 hearts disappear.

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

For our website's display, we mainly used bootstrap to ensure that our layouts remain responsive. Thus, the mobile/small screen size layout of the website is mostly polished and refined so users will not have difficulties navigating and interacting with our website's features.

An additional feature we added to our website's responsiveness is the navigation button. When a small-enough screen is used, the navigation bar will consolidate into a dropdown triggered by a navigation button. We added this with bootstrap so as to not cramp everything in the navigation bar into a row in a mobile layout.

### Bugs & Issues

- Mobile issue: Login/Register features not working in all the games' pages
  - When loading the website on a smartphone, the locking feature of the games when the user is not logged in does not work properly. The login and register button on those pages also do not work. However, the game's functionality is still perfect despite this mobile-only error.

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
