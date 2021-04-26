// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [];

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of the project (Required)?: ",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the name of your Project!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "Description",
      message: "Enter a description for the project: ",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          console.log("Please enter a description for the project!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "Instalation",
      message: "Enter instalation instructions for the project: ",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          console.log("Please enter instalation instructions for the project!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "Usage",
      message: "Enter usage information for the project: ",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          console.log("Please enter usage information for the project!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "Contributing",
      message: "Enter contributing guidelines for the project: ",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          console.log("Please enter contributing guidelines for the project!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "Tests",
      message: "Enter test instructions for the project: ",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          console.log("Please enter test instructions for the project!");
          return false;
        }
      },
    },
    {
      type: "checkbox",
      name: "License",
      message: "Enter test instructions for the project: ",
      choices: [
        "GNU AGPLv3",
        "GNU GPLv3",
        "GNU LGPLv3",
        "Mozilla Public License 2.0",
        "Apache License 2.0",
        "MIT License",
        "Boost Software License 1.0",
        "The Unlicense",
      ],
    },
    {
      type: "input",
      name: "GitHub",
      message: "Enter your GitHub username: ",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          console.log("Please enter your GitHub username!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "Email",
      message: "Enter your email address: ",
      validate: (input) => {
        if (input) {
          return true;
        } else {
          console.log("Please enter your email address!");
          return false;
        }
      },
    },
  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init(
  promptUser().then((readmeData) => {
    console.log(readmeData);
  })
);
