import React, { useMemo } from 'react';
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
                                <th scope="row" className="title-col">
                                    {item.title}
                                </th>
                                <Category category={item.category} />
                                <Status status={item.status} />
                                <td className="button-col">
                                    {item.status !== "Victoire" ? (
                                        <button onClick={() => {handleClick(item)}}><span className="inside-button">Go!</span></button>
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