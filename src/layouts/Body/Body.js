import './Body.css';

import React from 'react';
import Practices from '../../components/Practices/Practices';

const Body = () => {
    return (
        <div className="body-container">
            <div className="heading">
                Liste des <span className="highlight">entraînements :</span>
            </div>
            <div>
            <Practices />
            </div>
        </div>

    );
};

export default Body;