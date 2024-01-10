export default function updateStudentGradeByCity (students, city, newGrades) {
	if (!Array.isArray(students) || !Array.isArray(newGrades)) {
		return [];
	}
	if (typeof city !== 'string') {
		return [];
	}
    
	const updatedStudent = students.
		filter(students => students.location === city)
		.map((student) => {
			const grades = newGrades.find(grade => grade.studentId === student.id);
			return {
				...student,
				grade: grades ? grades.grade : 'N/A',
			};
		});

	return updatedStudent;
}
