import React, { useMemo } from 'react';
import Button from '../Button/Button';
import Category from '../Category/Category';
import Status from '../Status/Status';
import './Table.css';

const sortOrder = ["À commencer", "Défaite", "Victoire"];

const Table = ({ trainings, changeStatus }) => {

    const handleClick = ({ title }) => {
        const result = sortOrder[Math.floor(Math.random() * 2) + 1];
        changeStatus(title, result);
    }

    const sortedTrainings = useMemo(() => {
        const compareTrainings = (a, b) => {
            if (sortOrder.indexOf(a.status) < sortOrder.indexOf(b.status)) {
                return -1;
            }
            if (sortOrder.indexOf(a.status) > sortOrder.indexOf(b.status)) {
                return 1;
            }
            return 0;
        }
        return trainings.sort(compareTrainings);
    }, [trainings]);

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
                    {sortedTrainings.map((item, index) => (
                            <tr className="table-instance" key={index}>
                                <td className="title-col">
                                    {item.title}
                                </td>
                                <Category category={item.category} />
                                <Status status={item.status} />
                                <Button item={item} handleClick={handleClick} />
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;