export default function getListSudentIds(StudentArray) {
	if (!Array.isArray(StudentArray)){
		return [];
	}
	
	const studentIds = StudentArray.map(stdnt => stdnt.id);
	return studentIds;
}
