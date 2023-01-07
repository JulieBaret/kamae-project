import React from 'react';
import Button from '../Button/Button';
import './TrainingsList.css';

const TrainingsList = ({ item, index }) => {
    return (
        <tr className="table-instance">
            <th scope="row" className="title-col">
                {item.title}
            </th>
            <td className="category-col">
                {item.category}
            </td>
            <td className="status-col">
                {item.status}
            </td>
            <td className="button-col">
            {item.status!=="Victoire" ? (
            <Button />
            ) : null }
            </td>


        </tr>


    );
};

export default TrainingsList;