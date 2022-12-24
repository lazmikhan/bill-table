import React from 'react';
import { Link } from 'react-router-dom';
import SummaryInput from './SummaryInput';
import SummaryTiles from './SummaryTiles';

const Summary = ({arr1, arr2}) => {
    console.log(arr1, arr2);
   
    return (
        <div>
            <table class="table-auto border-collapse border border-slate-400 ">
            <tr>
      <th className='border border-slate-300' rowSpan={2}>S . NO.</th>
      <th className='border border-slate-300' rowSpan={2}>Description</th>
      <th className='border border-slate-300' rowSpan={2}>Unit</th>
      <th className='border border-slate-300' rowSpan={2}>Rate</th>
      <th className='border border-slate-300' colSpan={3}>Quantity</th>
     
      <th className='border border-slate-300' colSpan={3}>Amount</th>
      <th className='border border-slate-300' rowSpan={2}>Remarks</th>
    </tr>
    <tr>
  
        <th className='border border-slate-300'>This</th>
        <th className='border border-slate-300'>Previous</th>
        <th className='border border-slate-300'>Cummulitive</th>
        <th className='border border-slate-300'>This</th>
        <th className='border border-slate-300'>Previous</th>
        <th className='border border-slate-300'>Cummulitive</th>
        
    </tr>
    
    <tr className='text-yellow'>
    <th className='border border-slate-300'>A</th>
    <th className='border border-slate-300 bg-[#1da1f2]'>GRANITE WORK</th>
    <th className='border border-slate-300'></th>
    <th className=' border border-slate-300'></th>
    <th className='border border-slate-300'></th>
    <th className='border border-slate-300'></th>
    <th className='border border-slate-300'></th>
    <th className='border border-slate-300'></th>
    <th className='border border-slate-300'></th>
    <th className='border border-slate-300'></th>
    <th className='border border-slate-300'></th>

 
    </tr>
    
        
    {    arr1.map( item=>(<tr>
        <td className='border border-slate-300'>{item.count1}</td>
        <td className='border border-slate-300'>{item.description}</td>
       
    </tr>))}
    

<tr className='text-yellow'>
    <th className='border border-slate-300'>B</th>
    <th className='border border-slate-300 bg-[#1da1f2]'>TILES WORK</th>
    <th className='border border-slate-300'></th>
    <th className='border border-slate-300'></th>
    <th className='border border-slate-300'></th>
    <th className='border border-slate-300'></th>
    <th className='border border-slate-300'></th>
    <th className='border border-slate-300'></th>
    <th className='border border-slate-300'></th>
    <th className='border border-slate-300'></th>
    <th className=' border border-slate-300'></th>

 
    </tr>
 
{    arr2.map( item=>(<SummaryTiles item={item}></SummaryTiles>))}
<br />
<tr>

<th  className='border border-slate-300'></th>
<th  className='border border-slate-300'></th>
<th  className='border border-slate-300'></th>
<th  className='border border-slate-300'></th>
    <th colSpan={3} className='border border-slate-300'>Total Amount</th>
    <th  className='border border-slate-300'></th>
    <th  className='border border-slate-300'></th>
    <th  className='border border-slate-300'></th>
    <th  className='border border-slate-300'></th>
</tr>
</table>
<br />
<Link className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' to="/billInput">Go Back to Input</Link>
        </div>
    );
};

export default Summary;