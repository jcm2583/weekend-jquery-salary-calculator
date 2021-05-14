//check that javascript is working
console.log('Running js!');

$ (document).ready(readyNow);


function readyNow () {
//check that jQuery is working
console.log('jq is working!');

// click listeners
$ ('#submitButton').on('click', submitInfo)








}


//create a function to take in user input 
function submitInfo () {
let employeeObj = {
    //set variables to user input
    firstName: $('#firstNameInput').val(),
    lastName: $('#lastNameInput').val(),
    id: $('#idInput').val(),
    title: $('#titleInput').val(),
    annualSalary: $('#annualSalaryInput').val()
        }
    //clearing text box inputs 
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idInput').val('');
    $('#titleInput').val('');
    $('#annualSalaryInput').val('');
    //console log employeeObj to make sure it is working
    console.log(employeeObj);
    //append the employee input info to the DOM
    $ ("#tableOutput").append(`<tr>
        <td>${employeeObj.firstName}</td>
        <td>${employeeObj.lastName}</td>
        <td>${employeeObj.id}</td>
        <td>${employeeObj.title}</td>
        <td>${employeeObj.annualSalary}</td>
        </tr>
    `)
}

//TODO
// 1. Calculate monthly costs and append to the DOM

function calculateMonthlyCosts () {
    // I want to target the annual salary // employeeObj.annualSalary
    // I want to add the annual salaries together 
    // The added annual salaries need to go to an input that keeps track of the totals
    let monthlyCosts = 0;
    let salary = employeeObj.annualSalary;

        for (let i=0; i<salary.length; i++) {
            monthlyCosts += salary[i];
    }
    return monthlyCosts;
}

console.log(calculateMonthlyCosts());