export default function getStudentIdsSum(getListStudents) {
	let sum = 0;
	return getListStudents.reduce((acc, student) => sum += student.id);
};