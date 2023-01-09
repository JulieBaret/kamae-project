import React, { useState } from 'react';
import TrainingsList from '../TrainingsList/TrainingsList';
import './Trainings.css';

const initialTrainings = [
    {
        title: 'Introduction Cybersécurité',
        category: 'Cybersécurité',
        status: 'Victoire'
    },
    {
        title: 'Protéger son WiFi personnel',
        category: 'À la maison',
        status: 'À commencer'
    },
    {
        title: 'Je reconnais des données personnelles',
        category: 'RGPD',
        status: 'À commencer'
    },
    {
        title: 'Reconnaître un mail de phishing',
        category: 'Cybersécurité',
        status: 'Défaite'
    },
    {
        title: 'Bien utiliser son smartphone',
        category: 'À la maison',
        status: 'À commencer'
    },
    {
        title: 'Choisir un mot de passe invincible',
        category: 'Cybersécurité',
        status: 'À commencer'
    },
    {
        title: 'Limiter mon empreinte numérique',
        category: 'À la maison',
        status: 'À commencer'
    },
    {
        title: 'Pourquoi le RGPD est important',
        category: 'RGPD',
        status: 'À commencer'
    },
    {
        title: 'Introduction RGPD',
        category: 'RGPD',
        status: 'Défaite'
    }
];

const Trainings = () => {

    const [trainings, setTrainings] = useState(initialTrainings);

    console.log(trainings[0].title); //Log : Protéger son WiFi personnel

    // function handleTrainings(titre) {
    //     updateTrainings(draft => {
    //         const training = draft.find(a =>
    //         a.title === titre
    //         );
    //         training.status = "Victoire";
    //     });
    // }

    // function handleTrainings(trainingIndex) {
    //     setTrainings(trainings.map((el, i) => {
    //         if (i === trainingIndex) {
    //         // Create a *new* object with changes
    //         return { ...el, status: "Victoire" };
    //         } else {
    //         // No changes
    //         return el;
    //         }
    //     }));
    // }

    function handleTrainings(titre, newStatus) {
        setTrainings(trainings.map(el => {
            if (el.title === titre) {
            return { ...el, status: newStatus };
            } else {
            return el;
            }
        }));
    }

    return (
        <div className="table-container">
            <div className="table-content">
            <TrainingsList trainings={trainings} onHandle={handleTrainings}/>                
            </div>
        </div>
    );
};

export default Trainings;