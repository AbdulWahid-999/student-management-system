#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(10000 + Math.random() * 90000);
let myBalance = 0;
let answer = await inquirer.prompt([
    {
        name: "students",
        type: "input",
        message: "Enter student name:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value.";
        },
    },
    {
        name: "courses",
        type: "list",
        message: "Select the course to enroll",
        choices: ["C++", "Javascript", "Python"]
    }
]);
const courseFee = {
    "C++": 2000,
    "Javascript": 5000,
    "Python": 6000
};
console.log(`\nCourse Fees: ${courseFee[answer.courses]}\n`);
console.log(`\nBalance: ${myBalance}\n`);
let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Please select payment method",
        choices: ["Bank Transfer", "Easypaisa", "Jazzcash"]
    },
    {
        name: "amount",
        type: "input",
        message: "Transfer Money:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value";
        }
    }
]);
console.log(`\nYou select payment method ${paymentType.payment}\n`);
const courseFees = courseFee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount);
if (courseFees === paymentAmount) {
    console.log(`Congratulations, you have successfully enrolled in ${answer.courses}.\n`);
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "What would you like to do next.",
            choices: ["View Status", "Exit"]
        }
    ]);
    if (ans.select === "View Status") {
        console.log("\n******status******\n");
        console.log(`Student Name: ${answer.students}\n`);
        console.log(`Student ID: ${randomNumber}\n`);
        console.log(`Course: ${answer.courses}\n`);
        console.log(`Course Fees: ${paymentAmount}\n`);
        console.log(`Balance: ${myBalance += paymentAmount}`);
    }
    else {
        console.log("\nExiting student management system");
    }
}
else {
    console.log("Invalid amount");
}
