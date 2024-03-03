import React from "react";

import prototype from "prop-types";

export default function CourseListRow({ isHeader = false, textFirstCell, textSecondCell = null }) {
  if (isHeader) {
    if (textSecondCell === null) {
      return (
        <tr>
          <th colSpan="2">{textFirstCell}</th>
        </tr>
      );
    } else {
      return (
        <tr>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </tr>
    );
  }
}
CourseListRow.prototype = {
  isHeader: prototype.bool,
  textFirstCell: prototype.string.isRequired,
  textSecondCell: prototype.oneOfType[[prototype.string, prototype.number]],
};
