import React from 'react';
import './Notifications.css';
import closeIcon from '../../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';

function Notifications() {
    function buttonHandler() {
        console.log('Close button has been clicked');
    }

    return (
        <div className="Notifications">
            <button style={{ float: 'right' }} aria-label='Close' onClick={buttonHandler}>
                <img src={closeIcon} alt='Close notifications' />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority='default'>New course available</li>
                <li data-priority='urgent'>New resume available</li>
                <li data-priority='urgent' dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
            </ul>
        </div >
    );
}

export default Notifications;