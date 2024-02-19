import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from './NotificationItem';

function Notifications() {
  function buttonHandler() {
    console.log("Close button has been clicked");
  }

  return (
    <div className="Notifications">
      <button
        style={{ float: "right" }}
        aria-label="Close"
        onClick={buttonHandler}
      >
        <img src={closeIcon} alt="Close notifications" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type="default" value="New course available"/>
        <NotificationItem type="urgent" value="New resume available"/>
        <NotificationItem type="urgent" html={getLatestNotification()}/>
      </ul>
    </div>
  );
}

export default Notifications;
