const chalk = require('chalk');

function displayColorfulMessage() {
    console.log(chalk.blue('This is a blue message!'));
    console.log(chalk.red.bold('This is a bold red message!'));
    console.log(chalk.green.underline('This is an underlined green message!'));
    console.log(chalk.yellow.bgBlue('This is a yellow text on blue background!'));
    console.log(chalk.rainbow('This is a rainbow message!'));
}

module.exports = displayColorfulMessage; 