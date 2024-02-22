import React from "react";
import proptypes from "prop-types";

export default function NotificationItem({ type, html, value }) {
  return (
    value ? 
    <li
    data-notification-type={type}
    >{value}</li> 
    :
    <li
    data-notification-type={type}
    dangerouslySetInnerHTML={html}
    ></li> 
  );
}

NotificationItem.proptypes = {
  html: proptypes.shape({
    __html: proptypes.string.isRequired,
  }),
  type: proptypes.string.isRequired,
  value: proptypes.string,
};
NotificationItem.defaultProps = {
  type: "default",
};
