import React from 'react';

const Summary = ({arr}) => {
    console.log(arr);
    return (
        <div>
{    arr.map( item=>(item.description))}
        </div>
    );
};

export default Summary;