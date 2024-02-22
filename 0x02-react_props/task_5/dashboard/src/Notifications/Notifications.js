import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
import proptypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

export default function Notifications({ displayDrawer, listNotifications }) {
  return (
    <>
      <div className="menuItem">Your notifications</div>
      {displayDrawer ? (
        <div className="Notifications">
          <button
            style={{ float: "right" }}
            aria-label="Close"
            onClick={(e) => {
              console.log("Close button has been clicked");
            }}
          >
            <img id="iconClose" src={closeIcon} alt="Close notifications" />
          </button>
          {listNotifications.length !== 0 ? <p>Here is the list of notifications</p> : null}
          <ul>
            {listNotifications.length == 0 ? <NotificationItem type="default" value="No new notification for now" /> : null}
            {listNotifications.map((notif) => {
              return <NotificationItem type={notif.type}  html={notif.html} value={notif.value} key={notif.id} />;
            })}
          </ul>
        </div>
      ) : null}
    </>
  );
}

Notifications.proptypes = {
  displayDrawer: proptypes.bool,
  listNotifications: proptypes.arrayOf(NotificationItemShape),
};
Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};
