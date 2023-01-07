import React from 'react';

const TrainingsList = ({ item, index }) => {
    return (
        <tr className="hover:bg-grey text-xs text-black">
            <th scope="row" className="px-6 py-4 font-normal">
                {item.title}
            </th>
            <td className="px-6 py-4 font-thin">
                {item.category}
            </td>
            <td className="px-6 py-4">
                {item.status}
            </td>
            <td className="px-6 py-4">
            {item.status!=="Victoire" ? (
            <button class="bg-purple  border border-purple hover:bg-white hover:text-purple text-white font-semibold py-2 px-4 rounded hover:shadow-none shadow-lg">
                Go!
            </button> 
            ) : null}
            </td>


        </tr>


    );
};

export default TrainingsList;