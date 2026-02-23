import React from "react";
import Child from './Child';

const student = { name: "ABC", id: 12, dept: "CSE", mark: 91 };

function Parent() {
  const calculateGrade = (mark) => {
    if(mark >= 90) return "O";
    if(mark >=85) return "A";
    if(mark >=75) return "B";
    return "F";
  };

  return (
    <div>
      <Child students={student} calculateGrade={calculateGrade} />
    </div>
  )
}

export default Parent;

