export default function getStudentIdSum(students) {
	// checking if its array
	if (!Array.isArray(students)){
		return 0;
	}

	const idSumUp = students.reduce((accumulator, student) => accumulator + student.id, 0);
	return idSumUp;

}
