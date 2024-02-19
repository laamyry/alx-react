import React from "react";

import prototype from  "prop-types";

export default function CourseListRow({
  isHeader = false,
  textFirstCell,
  textSecondCell = null,
}) {
  if (!isHeader) {
    return (
      <tr>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </tr>
    );
  } else {
    if (textSecondCell === null) {
      return <th colSpan="2">{textFirstCell}</th>;
    } else {
      return (
        <>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </>
      );
    }
  }
}
CourseListRow.prototype = {
  isHeader: prototype.bool,
  textFirstCell: prototype.string.isRequired,
  textSecondCell: prototype.string,
};
