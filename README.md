# Choose Smart

Choose Smart is a responsive website that allows users to view it on range of devices.<br>
It is a decision-based game where every choice the user makes influences the story and its outcome.<br>
Users making critical decisions that shape the narrative, leading to multiple possible endings.<br>
Choose Smart offers a unique experience where your decisions truly matter.

![amIresponsive ss](/docs/testing/am-i-responsive.png)

[View Choose Smart on Github Pages](https://tamas-gavlider.github.io/choose-smart/)

## Contents
- [User Experience (UX)](#user-experience-ux)
  - [User Stories](#user-stories)
    - [First Time Visitor Goals](#first-time-visitor-goals)
    - [Returning Visitor Goals](#returning-visitor-goals)
- [Design](#design)
   - [Colour Scheme](#colour-scheme)
   - [Wireframe](#wireframe)
   - [Typography](#typography)
   - [Features](#features)
     - [Home Page](#home-page)
     - [Instructions Page](#instructions-page)
     - [Game Page](#game-page)
     - [404 Error Page](#404-error-page)
     - [Future implementations](#future-implementations) 
- [Technologies used](#technologies-used)
  - [Languages used](#languages-used)
  - [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)
- [Deployment & Local Development](#deployment--local-development)
  - [Deployment](#deployment)
  - [Local Development](#local-development)
  - [How to Clone](#how-to-clone)
  - [Testing](#testing)
  - [W3C Validator](#w3c-validator)
  - [JavaScript Validator](#javascript-validator)
  - [Lighthouse](#lighthouse)
  - [Wave](#wave)
  - [Full Testing](#full-testing)
- [Credits](#credits)
  - [Media](#media)
  - [Content](#content)
  - [Acknowledgements](#acknowledgements)

## User Experience (UX)

### User Stories

#### First Time Visitor Goals

- I want to play a game that makes me feel like I'm the one driving the story.
- I want the site to be responsive on my device
- I want the site to be easy navigate

#### Returning Visitor Goals

- I want to replay the game and explore a different story path to see how the outcome changes.

## Design

### Colour Scheme

The design features a black background complemented by neon green and whitesmoke colors. Neon green is applied to headers, buttons, and as a hover effect for navigation links, enhancing the page's sense of mystery.<br>
Some elements are blinking with a neon light effect, creating a tense vibe on the page.

### Wireframe

Wireframes were created for mobile, tablet and desktop.

Index page:<br>
[Mobile](/docs/wireframe/index-mobile.png)<br>
[Tablet](/docs/wireframe/index-tablet.png)<br>
[Desktop](/docs/wireframe/index-browser.png)<br>
Index page after the Start Game button pressed:<br>
[Mobile](/docs/wireframe/index-after-details-mobile.png)<br>
[Tablet](/docs/wireframe/index-after-details-tablet.png)<br>
[Desktop](/docs/wireframe/index-after-details-desktop.png)<br>
Instructions page:<br>
[Mobile](/docs/wireframe/instructions-mobile.png)<br>
[Tablet](/docs/wireframe/instructions-tablet.png)<br>
[Desktop](/docs/wireframe/instructions-desktop.png)<br>
Game page:<br>
[Mobile](/docs/wireframe/game-mobile.png)<br>
[Tablet](/docs/wireframe/game-tablet.png)<br>
[Desktop](/docs/wireframe/game-desktop.png)


### Typography

Google Fonts was used to import the chosen fonts for use in the site.
I chose the Old Standard TT font. This font reproduces a specific type of Modern (classicist) style of serif typefaces, very commonly used in various editions of the late 19th and early 20th century, but almost completely abandoned later. The reason I chose this font is that it can be considered a good choice for typesetting scientific papers, especially on social and humanitarian sciences, as its specific features are closely associated in people's eyes with old books they learned on.

### Features

The website is comprised of a home page, a games page, an instructions page, and a 404 error page.

All Pages on the website are responsive and have:

 - A [favicon](/docs/webpage-ss/favicon-ss.png) in the browser tab.

#### Home Page

The home page features the name of the page displayed in a blinking neon green color, and prompts the user to enter their name and age. After the user submits their details and clicks on the 'Start Game' button, a [message](/docs/webpage-ss/home-page-welcome.png) is displayed with the user's [name](/docs/webpage-ss/home-page-welcome-message.png). I ensured that the first letter of the user's name always appears in uppercase with a JS code. The user can navigate to the instructions page by clicking on the 'How to Play?' button or start the game immediately by clicking on 'Start Game'. Both buttons will exhibit a [neon effect](/docs/webpage-ss/hover-effect.png) when the user hovers over them.
At the bottom of the page, the footer contains a blinking 'Leave your feedback' text alongside an email icon. Clicking the icon opens the user's email client with a prefilled email subject "Feedback".
![Home Page](/docs/webpage-ss/home-page.png)

#### Instructions Page

The instructions page features a "How to Play?" heading in a blinking neon green color, followed by an introduction to the game. It explains the gameplay, the meaning of [icons](/docs/webpage-ss/game-controls.png) on the instructions and game pages, and suggests playing the game with the [sound on](/docs/webpage-ss/sound-suggestion.png).
The [footer](/docs/webpage-ss/footer-instructions.png) contains three icons: the first takes the user back to the home page, the second directs them to the game page, and the third allows them to mute or unmute the sound.

![Instructions page](/docs/webpage-ss/instructions-page.png)

#### Game Page

The game page features a 'Happy Birthday. Wish for something!' welcome message with a blinking green neon effect. This message disappears once the user clicks on the first choice. Initially, the user can choose from three options, each leading to a different outcome in the game.
The [footer](/docs/webpage-ss/footer-game.png) contains three icons: the first takes the user back to the home page, the second restarts the game from the first choice, and the third allows the user to mute or unmute the sound.
Some outcomes will result in a [loop](/docs/webpage-ss/loop-text.png). If the user clicks on the text, the game restarts.
The video and sound change with each choice.
![Game page](/docs/webpage-ss/game-page.png)

#### 404 Error Page

The 404 Error page features '404' with a blinking green neon effect, the text 'You shouldn't be here,' and a link to return to the Home page." The [link](/docs/webpage-ss/404-link.png) displays a green neon effect when the user hovers over it.

![404 Error page](/docs/webpage-ss/404-page.png)

#### Future Implementations

Some choices lead to outcomes with significant potential for a great story. The plan is to expand these stories and develop them into a full game.

## Technologies used

### Languages used

HTML,CSS and JavaScript were used to create this website.

### Frameworks, Libraries & Programs Used

Git - for Version Control.

Github - To save and store the files for the website.

Google Fonts - To import the fonts used on the website.

[Balsamiq](https://balsamiq.com/)- Used to create wireframes.

[Font Awesome](https://fontawesome.com/) - Used for icon and logo images.

Google Dev Tools - To troubleshoot and test features, solve issues with responsiveness and styling.

[Am I Responsive](https://ui.dev/amiresponsive) To show the website image on a range of devices.

[Favicon.io](https://favicon.io/favicon-converter/#google_vignette) - To create Favicon.

[Pixabay](https://pixabay.com/) - Used to donwload audio and video. 

[FreeConvert](https://www.freeconvert.com/) - Used to reduce the video size.

## Deployment & Local Development

### Deployment

Github Pages was used to deploy the live website. The instructions to achieve this are below:

1. Log in (or sign up) to Github.
1. Find the repository for this project, choose-smart.
1. Click on the Settings link.
1. Click on the Pages link in the left hand side navigation bar under "Code and Automation".
1. In the Source section, choose main from the drop down select branch menu. Select Root from the drop down select folder menu.
1. Click Save. Your live Github Pages site is now deployed at the URL shown.

### Local Development

How to Fork

To fork the choose-smart repository:

1. Log in (or sign up) to Github.
1. Go to the repository for this project, Tamas-Gavlider/choose-smart.
1. Click the Fork button in the top right corner.

### How to Clone

To clone the choose-smart repository:

1. Log in (or sign up) to Github.
1. Go to the repository for this project, Tamas-Gavlider/choose-smart.
1. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
1. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
1. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

### Testing

I have used Chrome Developer tool while building the web page and troubleshoot any issues immediately.

The following issues were raised during my mid project meeting with my mentor:

 - The source code contained too many unnecessary whitespaces and lack of comments.
 - Move the game data into a new js file and import it into the main js file. 
 - Main js file included too many if else if statements for audio/video. It can be aggregated with the game data.
 - Instructions page had the text on the left side without margin/padding. 

### W3C Validator

The [W3C](https://validator.w3.org/) validator was used to validate the HTML on all pages of the website. It was also used to validate CSS in the style.css file.

[index.html](/docs/testing/validator/w3c-index.png)<br>
[instructions.html](/docs/testing/validator/w3c-instructions.png)<br>
[game.html](/docs/testing/validator/w3c-game.png)<br>
[404.html](/docs/testing/validator/w3c-404-html.png)<br>
[style.css](/docs/testing/validator/css-validation.png)


### JavaScript Validator

[jshint](https://jshint.com/) was used to validate the JavaScript files.

[main.js](/docs/testing/validator/main-js-test.png)<br>
[audio.js](/docs/testing/validator/audio-js-test.png)<br>
[start.js](/docs/testing/validator/start-js-test.png)<br>
[data.js](/docs/testing/validator/data-js-test.png)

### Lighthouse

I used Lighthouse within the Chrome Developer Tools to test the performance, accessibility, best practices and SEO of the website.<br>
The performance on the game and index pages for mobile were initially below 85, but preloading the fonts improved it.<br>
[Index for mobile](/docs/testing/lighthouse/lighthouse-index-mobile.png)<br>
[Index for desktop](/docs/testing/lighthouse/lighthouse-index-desktop.png)<br>
[Instructions for mobile](/docs/testing/lighthouse/lighthouse-instructions-mobile.png)<br>
[Instructions for desktop](/docs/testing/lighthouse/lighthouse-instructions-desktop.png)<br>
[Game for mobile](/docs/testing/lighthouse/lighthouse-game-mobile.png)<br>
[Game for desktop](/docs/testing/lighthouse/lighthouse-game-desktop.png)<br>
[404 for mobile](/docs/testing/lighthouse/lighthouse-404-mobile.png)<br>
[404 for desktop](/docs/testing/lighthouse/lighthouse-404-desktop.png)

### Wave

All 4 pages were tested at [Wave](https://wave.webaim.org/).<br>
The game page had an error caused by an empty button element. This issue was resolved by adding a hidden span element within the button, which provided the necessary content without affecting the design.

[Index page](/docs/testing/wave/wave-index-html.png)<br>
[Instructions page](/docs/testing/wave/wave-instructions-html.png)<br>
[Game page with the error](/docs/testing/wave/wave-game-html-error.png)<br>
[Game page without error](/docs/testing/wave/wave-game-html.png)<br>
[404 page](/docs/testing/wave/wave-404-html.png)


### Full Testing

I performed the following testing using a number of browsers (google chrome, safari, mozilla firefox,edge) and devices (Macbook Pro 15 inch, iMac 21.5 inch, iPhone 11, iPhone 6s and a 15 inch Dell laptop).
I also used Google Chrome Developer Tools to ensure that each page is responsive on different screen sizes.
Each device tested the site using the following browsers:

- Google Chrome
- Safari
- Edge
- Firefox 

#### Home Page

The name and age inputs are required. The form cannot be submitted without filling in both the Name and Age fields. If either field is left empty, the form prompts the user to fill in the missing information.<br>
When the Name is entered in lowercase, it is automatically converted to uppercase.<br>
The 'How to Play?' and 'Start Game' buttons have a green neon effect when hovered over. The 'How to Play?' button direct me to the Instructions page, and the 'Start Game' button direct me to the Game page.<br>
Clicking on the email logo opens the email client. This functionality works in all four browsers.

#### Instructions Page

I tested all three icons in the footer.
The home icon took me back to the Home page.
The second icon took me to the Game page.
The mute/unmute button worked as expected.


#### Game Page

#### 404 Error page

## Credits 

### Media

All the video and audio files were downloaded from [Pixabay](https://pixabay.com/).<br>
All screenshots used in this README file were taken by myself.

### Content

All content for the website was written by myself. 
The blinking text effect code in CSS was found at [Stack Overflow](https://stackoverflow.com/questions/16344354/how-to-make-blinking-flashing-text-with-css-3.).<br>
The neon effect code was found at [CSS-tricks.com](https://css-tricks.com/how-to-create-neon-text-with-css/).

### Acknowledgements

I would like to acknowledge my Code Institute mentor Graeme Taylor for his valuable advices.
