// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const inquirerUserPrompt = require("./utils/userPrompts");

const mockData = {
  title: "Allan",
  description:
    "Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et.",
  instalation: "npm install",
  usage: "personal readme file creator",
  contributing: "allanp94 steve-0 nickolas",
  tests: "all the tests were made",
  license: ["GNUGPLv3", "Apache-2.0", "MIT"],
  github: "allanp94",
  email: "allan.p94@gmail.com",
};

const promptUser = () => {
  return inquirer.prompt(inquirerUserPrompt);
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
      return generateMarkdown(readmeData);
    })
    .then((data) => {
      return writeToFile("./dist/README.md", data);
    })
    .catch((err) => {
      console.log(err);
    });
}

// Function call to initialize app
init();
