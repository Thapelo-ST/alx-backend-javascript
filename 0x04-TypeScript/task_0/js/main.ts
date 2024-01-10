interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
      firstName: "Thapelo",
      lastName: "Ncube",
      age: 23,
      location: "Hibberdene"
};

const student2: Student = {
      firstName: "Mmeli",
      lastName: "Ncube",
      age: 19,
      location: "Hibberdene"
};

const studentList: Student[] = [student1, student2];

const table = document.createElement("table");

const headerRow = table.insertRow();
