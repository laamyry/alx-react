import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
import proptypes from "prop-types";

export default function Notifications({ displayDrawer}) {
  return (
    <>
      <div className="menuItem">Your notifications</div>
      {displayDrawer ? (
        <div className="Notifications">
          <button style={{ float: "right" }} aria-label="Close" onClick={(e) => {console.log("Close button has been clicked")}}>
            <img id="iconClose" src={closeIcon} alt="Close notifications" />
          </button>
          <p>Here is the list of notifications</p>
          <ul>
            <NotificationItem type="default" value="New course available" />
            <NotificationItem type="urgent" value="New resume available" />
            <NotificationItem type="urgent" html={getLatestNotification()} />
          </ul>
        </div>
      ) : null}
    </>
  );
}

Notifications.proptypes = {
  displayDrawer: proptypes.bool,
};
Notifications.defaultProps = {
  displayDrawer: false,
};