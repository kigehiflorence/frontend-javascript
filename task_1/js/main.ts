// Function interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function implementation
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Test example:
console.log(printTeacher("John", "Doe")); // Output: J. Doe


// StudentClass constructor interface
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// StudentClass interface (for methods)
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// StudentClass implementation
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage:
const student1 = new StudentClass("Florence", "Kigehi");
console.log(student1.displayName()); // Output: Florence
console.log(student1.workOnHomework()); // Output: Currently working
