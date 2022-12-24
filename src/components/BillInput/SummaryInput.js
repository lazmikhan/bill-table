import React, { useState } from 'react';

const SummaryInput = (props) => {
const {description}= props.item;
const [count ,setCount]= useState(1);
    return (
        <div>
             <th className='border border-slate-300'> {count}</th>
             <th className='border border-slate-300'> {description}</th>
             
           
      
        </div>
    );
};

export default SummaryInput;