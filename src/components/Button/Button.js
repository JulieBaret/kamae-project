import React from 'react';
import './Button.css';

const Button = ({ item, handleClick }) => {

    return (
        <td className="button-col">
            {item.status !== "Victoire" ? (
                <button onClick={() => { handleClick(item) }}><span className="inside-button">Go!</span></button>
            ) : null}
        </td>
    );
};

export default Button;