import './Body.css';

import React from 'react';
import Trainings from '../../components/Trainings/Trainings';

const Body = () => {
    return (
        <div className="body-container">
            <div className="heading">
                Liste des <span className="highlight">entraînements :</span>
            </div>
            <div>
            <Trainings />
            </div>
        </div>

    );
};

export default Body;