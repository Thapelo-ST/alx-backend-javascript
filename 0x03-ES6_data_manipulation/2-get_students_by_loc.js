export default function getStudentsByLocation(students, locationFilter) {
	const studentsByLocation = students.filter(stdnt => stdnt.location == locationFilter);
	return studentsByLocation;
}
