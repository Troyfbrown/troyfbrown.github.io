let person = [];
let salaries = [];

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('employee').focus();
});

function addSalary(event) {
    let selectedEmployee = document.getElementById('employee-dropdown').value;

    let enteredSalary = prompt(`Enter the salary for ${selectedEmployee}:`);

    if (selectedEmployee.trim() === '' || enteredSalary.trim() === '' || isNaN(enteredSalary)) {
        alert('Please enter a valid name and numeric salary.');
        return;
    }

    person.push(selectedEmployee);
    salaries.push(parseFloat(enteredSalary));

    document.getElementById('employee-dropdown').focus();
}

function displayResults(event) {
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

function displaySalary(event) {
    const table = document.getElementById('results_table');

    for (let i = 0; i < persons.length; i++) {
        const row = table.insertRow(-1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.textContent = persons[i];
        cell2.textContent = salaries[i];
    }
}

