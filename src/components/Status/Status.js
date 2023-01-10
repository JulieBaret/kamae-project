import React from 'react';
import './Status.css';

const Status = ({ status }) => {
    const statusToClass = {
        "À commencer" : "status-start",
        "Victoire": "status-winning",
        "Défaite": "status-defeat"
    };

    const statusToEmoji = {
        "À commencer" : " 🥋",
        "Victoire": " ✅",
        "Défaite": ""
    }

    return (
        <td className="status-col">
            <span className={statusToClass[status]}>{status}{statusToEmoji[status]}</span>
        </td>
    );
};

export default Status;