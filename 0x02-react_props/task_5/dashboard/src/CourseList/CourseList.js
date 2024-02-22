import React from "react";
import "./CourseList.css";
import CourseShape from "./CourseShape";
import CourseListRow from "./CourseListRow";
import prototype from "prop-types";
export default function CourseList({ listOfCourses }) {
  return (
    <table id="CourseList" cellPadding="0" cellSpacing="0">
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
      </thead>
      <tbody>
        {listOfCourses.length === 0 && <CourseListRow textFirstCell="No course available yet" isHeader={false} />}
        {listOfCourses.map((course) => (
          <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} isHeader={false} />
        ))}
      </tbody>
    </table>
  );
}
CourseList.prototype = {
  listOfCourses: prototype.arrayOf(CourseShape),
};
CourseList.defaultProps = {
  listOfCourses: [],
};
