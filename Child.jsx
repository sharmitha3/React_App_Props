import React from "react";

function Child({ students, calculateGrade }) {
  const grade = calculateGrade(students.mark);

  return (
    <div>
      <h2>Student Details</h2>
      <p>Name: {students.name}</p>
      <p>ID: {students.id}</p>
      <p>Dept: {students.dept}</p>
      <p>Mark: {students.mark}</p>
      <p>Grade: {grade}</p>
    </div>
  );
}

export default Child;
