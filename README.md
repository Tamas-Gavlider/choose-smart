# Choose Smart

Choose Smart is a responsive website that allows users to view it on range of devices.<br>
It is a decision-based game where every choice the user makes influences the story and its outcome.<br>
Users making critical decisions that shape the narrative, leading to multiple possible endings.<br>
Choose Smart offers a unique experience where your decisions truly matter.

![amIresponsive ss](docs/testing/am-I-responsive.png)

[View Choose Smart on Github Pages](https://tamas-gavlider.github.io/choose-smart/)

## Contents

## User Experience (UX)

### User Stories

#### First Time Visitor Goals

#### Returning Visitor Goals

#### Frequent Visitor Goals

## Design

### Colour Scheme

The design features a black background complemented by neon green and whitesmoke colors. Neon green is applied to headers, buttons, and as a hover effect for navigation links, enhancing the page's sense of mystery.

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

The website is comprised of a home page, a games page, and an instructions page.

All Pages on the website are responsive and have:

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
 - Move the game data into a new js file and import it into the main js file 
 - Main js file included too many if else if statements for audio/video. It can be aggregated with the game data
 - Instructions page had the text on the left side without margin or padding. 

### W3C Validator

The [W3C](https://validator.w3.org/) validator was used to validate the HTML on all pages of the website. It was also used to validate CSS in the style.css file.

[index.html](/docs/testing/validator/w3c-index.png)<br>
[instructions.html](/docs/testing/validator/w3c-instructions.png)<br>
[game.html](/docs/testing/validator/w3c-game.png)<br>
[style.css](/docs/testing/validator/css-validation.png)


### JavaScript Validator

[jshint](https://jshint.com/) was used to validate the JavaScript files.

[main.js](/docs/testing/validator/main-js-test.png)<br>
[audio.js](/docs/testing/validator/audio-js-test.png)<br>
[start.js](/docs/testing/validator/start-js-test.png)<br>
[data.js](/docs/testing/validator/data-js-test.png)

### Lighthouse

I used Lighthouse within the Chrome Developer Tools to test the performance, accessibility, best practices and SEO of the website.<br>
[Index for mobile](/docs/testing/lighthouse/Lighthouse-index-mobile.png)<br>
[Index for desktop](/docs/testing/lighthouse/Lighthouse-index-desktop.png)<br>
[Instructions for mobile](/docs/testing/lighthouse/Lighthouse-instructions-mobile.png)<br>
[Instructions for desktop](/docs/testing/lighthouse/Lighthouse-instructions-desktop.png)<br>
[Game for mobile](/docs/testing/lighthouse/Lighthouse-game-mobile.png)<br>
[Game for desktop](/docs/testing/lighthouse/Lighthouse-game-desktop.png)

### Wave

All 3 pages were tested at [Wave](https://wave.webaim.org/).<br>
The game page had an error caused by an empty button element. This issue was resolved by adding a hidden span element within the button, which provided the necessary content without affecting the design.

[Index page](/docs/testing/wave/wave-index-html.png)<br>
[Instructions page](/docs/testing/wave/wave-instructions-html.png)<br>
[Game page with the error](/docs/testing/wave/wave-game-html-error.png)<br>
[Game page without error](/docs/testing/wave/wave-game-html.png)


### Full Testing

I performed the following testing using a number of browsers (google chrome, safari, mozilla firefox,edge) and devices (Macbook Pro 15 inch, iMac 21.5 inch, iPhone 11, iPhone 6s and a 15 inch Dell laptop).
I also used Google Chrome Developer Tools to ensure that each page is responsive on different screen sizes.

## Credits 

### Media

All the video and audio files were downloaded from [Pixabay](https://pixabay.com/).<br>
All screenshots used in this README file were taken by myself.

### Content

All content for the website was written by myself. 
The blinking text effect code in CSS was found at [Stack Overflow](https://stackoverflow.com/questions/16344354/how-to-make-blinking-flashing-text-with-css-3.).<br>
The neon effect code was found at [CSS-tricks.com](https://css-tricks.com/how-to-create-neon-text-with-css/).
