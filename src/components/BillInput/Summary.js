import React from 'react';
import SummaryInput from './SummaryInput';
import SummaryTiles from './SummaryTiles';

const Summary = ({arr1, arr2}) => {
    console.log(arr1, arr2);
   
    return (
        <div>
{    arr1.map( item=>(<SummaryInput item={item}></SummaryInput>))}
{    arr2.map( item=>(<SummaryTiles item={item}></SummaryTiles>))}
        </div>
    );
};

export default Summary;