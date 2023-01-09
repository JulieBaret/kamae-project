import React from 'react';
import Button from '../Button/Button';
import './TrainingsList.css';

const TrainingsList = ({ trainings, onHandle }) => {

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
        <div>
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
                                    <span class="bg-grey text-orange text-xs font-medium mr-2 px-3 py-1 rounded-full">{item.category}</span>
                                </td>
                                <td className="status-col">
                                    {item.status}
                                </td>
                                <td className="button-col">
                                    {item.status !== "Victoire" ? (
                                        // <button onClick={onHandle(item.title)}>Go!</button>
                                        <button onClick={() => { onHandle(item.title, result) }}>Go!</button>
                                        // <Button />
                                    ) : null}
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default TrainingsList;