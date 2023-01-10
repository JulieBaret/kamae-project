import React from 'react';
import './Table.css';

const Table = ({ trainings, onHandle }) => {

    const sortOrder = ["À commencer", "Défaite", "Victoire"];
    const result = sortOrder[Math.floor(Math.random() * 2) + 1];

    const compareTrainings = (a, b) => {
        if (sortOrder.indexOf(a.status) < sortOrder.indexOf(b.status)) {
            return -1;
        }
        if (sortOrder.indexOf(a.status) > sortOrder.indexOf(b.status)) {
            return 1;
        }
        return 0;
    }

    return (
            <div className="table-block">
                <table>
                    <thead>
                        <tr>
                            <th scope="col" className="head-title-col">
                                Titre
                            </th>
                            <th scope="col" className="head-category-col">
                                Catégorie
                            </th>
                            <th scope="col" className="head-status-col">
                                Statut
                            </th>
                            <th scope="col" className="head-button-col">
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {trainings.sort(compareTrainings)
                            .map((item, index) => (
                                <tr className="table-instance">
                                    <th scope="row" className="title-col">
                                        {item.title}
                                    </th>
                                    <td className="category-col">
                                    {item.category === "RGPD" &&
                                        <span className="category-RGPD">{item.category}</span>
                                    }
                                    {item.category === "Cybersécurité" &&
                                        <span className="category-Cyber">{item.category}</span>
                                    }
                                    {item.category === "À la maison" &&
                                        <span className="category-Home">{item.category}</span>
                                    }
                                    </td>
                                    <td className="status-col">
                                    {item.status === "À commencer" &&
                                        <span className="status-start">{item.status} 🥋</span>
                                    }
                                    {item.status === "Victoire" &&
                                        <span className="status-winning">{item.status} ✅</span>
                                    }
                                    {item.status === "Défaite" &&
                                        <span className="status-defeat">{item.status}</span>
                                    }
                                    </td>
                                    <td className="button-col">
                                        {item.status !== "Victoire" ? (
                                            <button onClick={() => { onHandle(item.title, result) }}>Go!</button>
                                        ) : null}
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
    );
};

export default Table;