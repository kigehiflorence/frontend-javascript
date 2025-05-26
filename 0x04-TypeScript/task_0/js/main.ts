// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 22,
  location: 'Nairobi'
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 21,
  location: 'Mombasa'
};

// Create an array containing the students
const studentsList: Student[] = [student1, student2];

// Create a table and add it to the document
const table = document.createElement('table');
const tableHead = document.createElement('thead');
const headerRow = document.createElement('tr');

const nameHeader = document.createElement('th');
nameHeader.textContent = 'First Name';
const locationHeader = document.createElement('th');
locationHeader.textContent = 'Location';

headerRow.appendChild(nameHeader);
headerRow.appendChild(locationHeader);
tableHead.appendChild(headerRow);
table.appendChild(tableHead);

// Create a table body and populate it with student data
const tableBody = document.createElement('tbody');

studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const nameCell = document.createElement('td');
  nameCell.textContent = student.firstName;

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);
