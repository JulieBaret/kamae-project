import React, { useEffect, useState } from 'react';
import TrainingsList from '../TrainingsList/TrainingsList';
import './Trainings.css';

const Trainings = () => {
    const trainings = [
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

    const [data, setData] = useState(trainings);

    console.log(data[0].title); //Log : Protéger son WiFi personnel

    const sortOrder = ["À commencer", "Défaite", "Victoire"];

    const compare = (a, b) => {
        if (sortOrder.indexOf(a.status) < sortOrder.indexOf(b.status)) {
            return -1;
        }
        if (sortOrder.indexOf(a.status) > sortOrder.indexOf(b.status)) {
            return 1;
        }
        return 0;
    }

    return (
        <div className="table-container">
            <div className="table-content">
                <table>
                    <thead>
                        <tr>
                            <th scope="col">
                                Titre
                            </th>
                            <th scope="col">
                                Catégorie
                            </th>
                            <th scope="col">
                                Statut
                            </th>
                            <th scope="col">
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.sort(compare)
                            .map((item, index) => (
                                <TrainingsList item={item} index={index} />
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Trainings;