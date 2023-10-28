var person = [];
var salaries = [];

function addSalary() {
    let selectedEmployee = document.getElementById('employee').value;

    let enteredSalary = prompt(`Enter the salary for ${selectedEmployee}:`);

    if (selectedEmployee.trim() === '' || enteredSalary.trim() === '' || isNaN(enteredSalary)) {
        alert('Please enter a valid name and numeric salary.');
        return;
    }

    persons.push(selectedEmployee);
    salaries.push(parseFloat(enteredSalary));

    document.getElementById('employee').focus();
}

function displayResults() {
    let totalSalary = 0;
    let highestSalary = 0;

    for (let i = 0; i < salaries.length; i++) {
        totalSalary += salaries[i];
        if (salaries[i] > highestSalary) {
            highestSalary = salaries[i];
        }
    }

    const averageSalary = totalSalary / salaries.length;
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `<h2>Results</h2>
        <p>Average Salary: ${averageSalary}</p>
        <p>Highest Salary: ${highestSalary}</p>`;
}

function displaySalary() {
    const table = document.getElementById('results_table');
    
    table.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Salary</th>
        </tr>
    `;

    for (let i = 0; i < person.length; i++) {
        table.innerHTML += `
            <tr>
                <td>${person[i]}</td>
                <td>${salaries[i]}</td>
            </tr>
        `;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('employee').focus();
});