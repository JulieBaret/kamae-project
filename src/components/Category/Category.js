import React from 'react';
import './Category.css';

const Category = ({ category }) => {
    const categoryToClass = {
        "RGPD" : "category-rgpd",
        "Cybersécurité": "category-cyber",
        "À la maison": "category-home"
    };

    return (
        <td className="category-col">
            <span className={categoryToClass[category]}>{category}</span>
        </td>
    );
};

export default Category;