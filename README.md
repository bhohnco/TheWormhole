# W O R M H O L E

#### connecting to music all over the world

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Walkthrough](#walkthrough)
* [Authors](#authors)
* [Technologies](#technologies)

## Description

Would you like to find new music no matter how far away it was created? Are you about to travel and want to listen to the local top 10 hits on the plane ride over?  Then welcome to our Wormhole music listing app.

This was a group project.  We were given two weeks to stretch ourselves to learn a new technology and reinforce technologies recently learned in an app we design start to finish on our own.  
As a group we agreed to use Redux, React, Router, Asynchronous JavaScript, Cypress end to end acceptance testing, and conditional rendering. The Rubric & Spec for this project can be found [here](https://frontend.turing.edu/projects/module-3/stretch.html)

## Notable Features

* The choice to see music by Country or the Randomization of music from new countries
* Lists of artists by Country
* List of top hits by country
* Cypress testing to test user flows
* Responsive and Responsible - can be used on all screen sizes with considerations for tabbing, color choices, and button sizing for easer of UX

## Link

* We are [Published](the-wormhole.surge.sh)

## Installation

1. Clone this repo using:
  * `git clone`  `https://github.com/bhohnco/StretchMod3`
2. `cd` into your cloned directory
3. Run `npm install`
4. Run `npm start`

#### Learn More

You can learn more about creating apps using `React` and `JSX` here: [Create React App Documentation](https://create-react-app.dev/docs/getting-started/)

For more about combining `React` with `Redux` here: [React Redux Documentation](https://react-redux.js.org/introduction/getting-started)

#### Cypress Testing

1. Once the app is set up locally, from the root directory, install `Cypress`
  * Run `npm install cypress --save-dev`
2. To open and run the tests
  * Run `npx cypress open`

## Walkthrough

1. Once the app is accessed, a user is immediately shown a welcoming page with a newly randomized locations music list

2. There is an artist list and a top tracks list

3. To access a specific Country, there is a drop down menu to search specific for specific music in each Once

## Learning Goals

* Further understand and implement modularity of Reacts Component structure with SCSS styling
* Build on React Application using the *Global State Management* tool, Redux
* Test all Component flows and Asynchronous JavaScript using cypress

## Evolution of the Project

We were given this project as an opportunity to stretch ourselves to learn a new technology and implement it.  All of our work to better learn React, Cypress, Router and finally Redux was independent of our instructors. We met as a team every day to pull apart our iterations and apply what we were learning on Redux together, and to make sure we were on track with our work/life balance goals. As a team we found our other classmates to be a huge resource in discovering how redux is best applied in an application.

## Future Iterations

* Refactor all of modular files for best practice approaches for redux, to ensure all user flows are accounted for

* Access to the images paired in our artists api
  * This may mean the use of a new api
  * Otherwise we will implement a crawler to help grab the images from the wiki pages our api has them living on, at the moment

* Implementing Aria inside the react component structure to verify that our page is truly accessible

* Creating the ability to save our users favorites

## Authors

<table>
    <tr>
        <td> Peter Muellerleile <a href="https://github.com/pcmueller">GH</td>
        <td> Bryan Hohn <a href="https://github.com/bhohnco">GH</td>
        <td> Angie Battillo <a href="https://github.com/battan40">GH</td>
    </tr>
    </tr>
        <td><img src="https://avatars.githubusercontent.com/u/51062974?v=4" alt="P. Muellerleile" width="125" height="auto" /></td>
        <td><img src="https://avatars.githubusercontent.com/u/71860165?v=4" alt="B. Hohn" width="125" height="auto" /></td>
        <td><img src="https://avatars.githubusercontent.com/u/58871312?v=4" alt="A. Battillo" width="125" height="auto" /></td>
    </tr>
</table>

## Technologies

<table>
    <tr>
        <td>Functionality</td>
        <td>Framework</td>
        <td>Global State Management</td>
        <td>Structure</td>
        <td>Styling</td>
        <td>Styling</td>
        <td>Testing</td>
        <td>Package Installation</td>
    </tr>
    </tr>
        <td><img src="./src/assets/images/js-icon.png" alt="javascript" width="100" height="auto" /></td>
        <td><img src="./src/assets/images/reactjs-logo.jpeg" alt="react" width="100" height="auto" /></td>
        <td><img src="./src/assets/images/redux.png" alt="redux" width="100" height="auto" /></td>
        <td><img src="./src/assets/images/html-logo.png" alt="html" width="100" height="auto" /></td>
        <td><img src="./src/assets/images/css-logo.png" alt="css" width="100" height="auto" /></td>
        <td><img src="./src/assets/images/scss.png" alt="sass" width="100" height="auto" /></td>
        <td><img src="./src/assets/images/cypress-logo.jpeg" alt="cypress" width="100" height="auto" /></td>
        <td><img src="./src/assets/images/npm.png" alt="npm" width="100" height="auto" /></td>
    </tr>
</table>
