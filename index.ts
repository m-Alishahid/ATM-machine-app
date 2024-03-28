#! /usr/bin/env node
import inquirer from "inquirer"
let myBalance = 50000;
let myPin = 230027;

let pinQuestion = await inquirer.prompt([
    {
        name: "question1",
        message: "Enter your pin",
        type: "number",
    }

]);
if (pinQuestion.question1 === myPin) {
    console.log("Correct pin code!!");

    let options = await inquirer.prompt([{

        name: "operation",
        message: "Please select option! what do you want?",
        type: "list",
        choices: ["Withdraw", "Check balance"]
    }]);

    console.log(options)

    if (options.operation === "Withdraw") {
        let amountQuestion = await inquirer.prompt([{
            name: "amount",
            message: "Enter your amount",
            type: "number",

        }]);
        if (amountQuestion.amount <= myBalance) {
            myBalance -= amountQuestion.amount;
            console.log(`Your remaining balance is ${myBalance}`);
        }

        else if (amountQuestion.amount > myBalance) {
            console.log("Not enough! your current balance is 50000");
        }


    }
    else if (options.operation == "Check balance") {
        console.log(`Your current balance is ${myBalance}`);

    }

}




else {
    console.log("Incorrect!");
}