import "./Notifications.css";
import React from "react";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
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
        style={{
          position: "absolute",
          right: "24px",
          top: "24px",
          ariaLabel: "Close",
          cursor: "pointer",
          background: "none",
          border: "none",
        }}
        onClick={(e) => console.log("Close button has been clicked")}
      >
        <img id="iconClose" src={closeIcon} alt="closeIcon"></img>
      </button>
    </div>
  );
}
