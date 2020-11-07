import { Avatar } from '@material-ui/core';
import React from 'react';
import './Message.css';

function Message() {
    return (
        <div className="message">
            {/* #2.1 */}
            <Avatar />
            {/* #2.2 */}
            <div className="message__info">
                <h4>Ishan Makadia
                    <span className="message__timestamp">this is a timestamp</span>
                </h4>

                <p>This is a message</p>
            </div>
        </div>
    );
}

export default Message;
