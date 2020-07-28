//importing requirements
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
// const questions = [

// ];

// function to write README file
// function writeToFile(fileName, data) {
// }

// function to initialize program
// function init() {

// }

// prompt questions
const promptUser = () => {
    return inquirer.prompt ([
    {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
    },
    {
        type: 'confirm',
        name: 'table',
        message: 'Would you like to add a table of contents?',
        default: false
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How does one install your project?'
    },
{
    type: 'input',
    name: 'usage',
    message: 'How is this application used?'
},
{
    type: 'confirm',
    name: 'screenshotConfirm',
    message: 'Would you like to include screenshot(s)?',
    default: false
},
{
    type: 'link',
    name: 'screenshot',
    message: 'Enter the link to your screenshot.'
},
{
    type: 'confirm',
    name: 'screenshotConfirmTwo',
    message: 'Would you like ot include another screenshot?',
    default: false
},
{
type: 'input',
name: 'credits',
message: 'Who worked on this project and needs to be listed in the credit section?'
},
{
    type: 'link',
    name: 'creditLink',
    message: 'Please enter the GitHub link for your collaborator.'
},
{
    type: 'input',
    name: 'credit',
    message: 'What license does this project hold?'
},
{
    type: 'confirm',
    name: 'badgesConfirm',
    message: 'Would you like to list any badges?'
},
{
    type: 'input',
    name: 'badges',
    message: 'What badges would you like to add?'
},
{
    type: 'confirm',
    name:'contributingConfirm',
    message: 'Would you like to list any contributors?'
}
])
};
promptUser().then(answers => console.log(answers));

// function call to initialize program
// init();
// promptUser();