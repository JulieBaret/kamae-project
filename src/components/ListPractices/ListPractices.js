import React from 'react';

const ListPractices = ({ item, index }) => {
    return (
        <div className="flex flex-col mt-4 w-full items-center justify-center rounded-lg shadow">
            <div className="flex flex-col w-full">
                    <li key={index} className="flex flex-row">
                        <div className="select-none cursor-pointer flex flex-1 items-center p-4">
                            <div className="flex-1 pl-1">
                                <div className="font-medium">{item.title}</div>
                                <div className="text-xs text-orange">{item.category}</div>
                            </div>
                            <div className="flex flex-row items-center">
                                <div className="text-xs">{item.status}</div>
                                
                            </div>
                            <button>
                                    Go!
                                </button>
                        </div>
                    </li>
                </div>
            </div>


    );
};

export default ListPractices;