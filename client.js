//check that javascript is working
console.log('Running js!');

$ (document).ready(readyNow);


function readyNow () {
//check that jQuery is working
console.log('jq is working!');

// click listeners

// button to submit employee info
$ ('#submitButton').on('click', submitInfo);

// button to add up salaries
$ ('#submitButton').on('click', calculateMonthlyCosts);

// need to add delete button
$ ('.tableTarget').on('click', '.deleteBtn', deleteButton);





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
    totalMonthlyCosts.push(employeeObj);
    //append the employee input info to the DOM
    $ ("#tableOutput").append(`<tr>
        <td>${employeeObj.firstName}</td>
        <td>${employeeObj.lastName}</td>
        <td>${employeeObj.id}</td>
        <td>${employeeObj.title}</td>
        <td>${employeeObj.annualSalary}</td>
        <td>
            <button class="deleteBtn">DELETE</button>
        </td>
        </tr>
    `)
}

//TODO
// 1. Calculate monthly costs and append to the DOM

let totalMonthlyCosts = []; 

function calculateMonthlyCosts () {
    // I want to target the annual salary // employeeObj.annualSalary
    // I want to add the annual salaries together 
    // The added annual salaries need to go to an input that keeps track of the totals
    let monthlyCosts = 0;
    for (let i=0; i<totalMonthlyCosts.length; i++) {
        monthlyCosts += totalMonthlyCosts[i].annualSalary / 12;
    }

    console.log(('salary total', monthlyCosts.toFixed(2)));
    $ ('#totalMonthlyCost').text(`Total Monthly Costs: $${monthlyCosts.toFixed(2)}`);

    // if monthly costs > 20,000, add red backgound
    if (monthlyCosts > 20000) {
        $ ('#totalMonthlyCost').addClass('highlighter');
    }
}

function deleteButton () {
    //testing function
    console.log('hello');
    $ (this).closest('tr').remove();
}
