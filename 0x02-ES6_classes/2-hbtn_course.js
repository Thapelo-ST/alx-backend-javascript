export default class HolbertonCourse{
	constructor(name, length, students){
//		if (typeof name !== 'string' || typeof length !== 'number' || 
//		!Array.isArray(students) || !students.every(student => typeof 
//			student === 'string')) {
//			throw new TypeError('Invalid attribute inserted please check');
//		}
		this._name = name;
		this._length = length;
		this._students = students;
	}

	//getter and setter for name
	get name() {
		return this._name;
	}

	set name(newName) {
		if (typeof newName !== 'string') {
			throw new TypeError('Name must be a string');
		}
		this._name = newName;
	}

	//getter and setter for length
	get length() {
		return this._length;
	}

	set length(newLength) {
		if (typeof newLength !== 'number') {
			throw new TypeError('Length must be a number');
		}
		this._length = newLength;
	}
	// Getter for students
	get students() {
		return this._students;
	}

	// Setter for students
	set students(newStudents) {
		// Type verification for the array and its elements
		if (!Array.isArray(newStudents) || 
		!newStudents.every(student => typeof student === 'string')) {
			throw new TypeError('Students must be an array of strings');
		}
		this._students = newStudents;
	}
}