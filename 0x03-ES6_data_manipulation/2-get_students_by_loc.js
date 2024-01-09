export default function getStudentsByLocation(students, locationFilter) {
    if (!Array.isArray(students)) {
        return [];
    }

    const studentsByLocation = students.filter(stdnt => stdnt.location == locationFilter);
    return studentsByLocation;

}