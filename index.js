// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  "What is the name of the project (Required)?: ",
  "Enter a description for the project: ",
  "Enter instalation instructions for the project: ",
  "Enter usage information for the project: ",
  "Enter contributing guidelines for the project: ",
  "Enter test instructions for the project: ",
  "Enter your GitHub username: ",
  "Enter your email address: ",
  "Choose a license for your project",
];

const mockData = {
  name: "Allan",
  description:
    "Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et.",
  instalation: "npm install",
  usage: "personal readme file creator",
  contributing: "allanp94 steve-0 nickolas",
  tests: "all the tests were made",
  license: "MIT Lincense",
  github: "allanp94",
  email: "allan.p94@gmail.com",
};

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: questions[0],
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
      name: "description",
      message: questions[1],
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
      name: "instalation",
      message: questions[2],
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
      name: "usage",
      message: questions[3],
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
      name: "contributing",
      message: questions[4],
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
      name: "tests",
      message: questions[5],
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
      name: "license",
      message: questions[8],
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
      name: "gitHub",
      message: questions[6],
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
      name: "email",
      message: questions[7],
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
function writeToFile(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "File created",
      });
    });
  });
}

// TODO: Create a function to initialize app
function init() {
  promptUser()
    .then((readmeData) => {
      console.log(readmeData);
      return generateMarkdown(mockData);
    })
    .then((data) => {
      return writeToFile("./dist/readme.md", data);
    })
    .catch((err) => {
      console.log(err);
    });
}

// Function call to initialize app
init();
