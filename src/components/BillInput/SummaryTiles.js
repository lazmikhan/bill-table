import React from 'react';

const SummaryTiles = (props) => {
    const {description} = props.item;
    return (
        <div>
            {description}
        </div>
    );
};

export default SummaryTiles;