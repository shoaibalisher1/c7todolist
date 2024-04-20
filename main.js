import inquirer from 'inquirer';
// todos array
// function
// operation
let todos = [];
let condition = true;
while (condition) {
    let todoQuestions = await inquirer.prompt([
        {
            name: "firstQuestion",
            type: "input",
            message: "What do you like to add in your todos? ",
        },
        {
            name: "secondQuestion",
            type: "confirm",
            message: "Do you like to add more in you todos",
            default: "true",
        }
    ]);
    todos.push(todoQuestions.firstQuestion);
    console.log(todos);
    condition = (todoQuestions.secondQuestion);
}
