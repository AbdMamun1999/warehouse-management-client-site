import React from 'react';
import { useParams } from 'react-router-dom';

const QunatityUpdate = () => {
    const {inventoryId} = useParams()
    return (
        <div>
            <h2>Quantity Update page :{inventoryId}</h2>
        </div>
    );
};

export default QunatityUpdate;