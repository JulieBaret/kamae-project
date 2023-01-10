import React from 'react';

const Button = ({ sortOrder, item, changeStatus}) => {

    return (
        <td className="button-col">
            {item.status !== "Victoire" ? (
                <button onClick={() => { 
                    const result = sortOrder[Math.floor(Math.random() * 2) + 1];
                    changeStatus(item.title, result) }
                }>
                Go!</button>
            ) : null}
        </td>
    );
};

export default Button;