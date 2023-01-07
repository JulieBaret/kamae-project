import React, { useEffect, useState } from 'react';
import ListPractices from '../ListPractices/ListPractices';
import './Practices.css';

const Practices = () => {
    const items = [
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

    const [data, setData] = useState(items);

    console.log(data[0].title);//Logs : Introduction Cybersécurité
    return (
        <div className="list-container">
            <ul>
                    {data.map((item, index) => (
                        <ListPractices item={item} index={index}/>
                    ))}
            </ul>
        </div>
    );
};

export default Practices;