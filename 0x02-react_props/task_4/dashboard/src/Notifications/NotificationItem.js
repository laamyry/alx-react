import React from "react";
import proptypes from "prop-types";

export default function NotificationItem({ type, html, value }) {
  return (
    <li data-notification-type={type} dangerouslySetInnerHTML={html ? { __html: html } : null}>
      {value}
    </li>
  );
}

NotificationItem.proptypes = {
  html: proptypes.shape({
    __html: proptypes.string.isRequired,
  }),
  type: proptypes.string.isRequired,
  value: proptypes.string.isRequired,
};
NotificationItem.defaultPorps = {
  type: "default",
};
