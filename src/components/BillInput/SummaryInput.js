import React, { useState } from 'react';

const SummaryInput = (props) => {
const {description}= props.item;
const [count ,setCount]= useState(0);
    return (
        <div>
       {description}
        </div>
    );
};

export default SummaryInput;