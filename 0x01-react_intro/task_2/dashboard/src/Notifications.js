import "./Notifications.css";
import React from "react-dom";
import closeIcon from "./closeIcon.png";
import { getLatestNotification } from "./utils";
export default function Notifications() {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        />
      </ul>
      <button
        id="closeBtn"
        style={{ float: "right", ariaLabel: "Close" }}
        onClick={(e) => console.log("Close button has been clicked")}
      >
        <img id="iconClose" src={closeIcon} alt="closeIcon"></img>
      </button>
    </div>
  );
}
