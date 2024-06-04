export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  if (!Array.isArray(listStudents)) {
    return [];
  }

  const studentsByCity = listStudents.filter((student) => student.location === city);

  return studentsByCity.map((student) => {
    const studentId = student.id;
    const newGrade = newGrades.find((grade) => grade.studentId === studentId);
    return {
      id: studentId,
      firstName: student.firstName,
      location: student.location,
      grade: newGrade ? newGrade.grade : 'N/A',
    };
  });
}
