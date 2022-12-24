import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const BillInput = ({arr1,arr2}) => {

    const descriptionRef = useRef('');
    const unitRef = useRef('');
    const titleRef = useRef('');
    const rateRef = useRef('');
    const quantityThisRef = useRef('');
    const quantityPrevRef = useRef('');
    const quantityCummRef = useRef('');
    const amountThisRef = useRef('');
    const amountPrevRef = useRef('');
    const amountCummRef = useRef('');
    const [count1 , setCount1]= useState(1);
    const [count2 , setCount2]= useState(1);
const handleData=(event)=>{
    event.preventDefault();
const description= descriptionRef.current.value;
const unit= unitRef.current.value;
const title= titleRef.current.value;
const rate= rateRef.current.value;
const quantityThis= quantityThisRef.current.value;
const quantityPrev= quantityPrevRef.current.value;
const quantityCumm= quantityCummRef.current.value;
const amountThis= amountThisRef.current.value;
const amountPrev= amountPrevRef.current.value;
const amountCumm= amountCummRef.current.value;



if(title =="Granite")
{setCount1(count1+1);
const GraniteObj ={ count1:count1, description: description, unit:unit, title:title, rate:rate, this:amountThis, previous:amountPrev, cummulative: amountCumm };
//console.log(GraniteObj);
arr1.push(GraniteObj);
}
else if(title=="Tiles")
{setCount2(count2+1);
  const TilesObj ={ count2:count2, description: description, unit:unit, title:title, rate:rate, this:amountThis, previous:amountPrev, cummulative: amountCumm};
  arr2.push(TilesObj);
}
}
    return (
        <div className='grid h-screen place-items-center'>
            <h1 className='text-3xl'>Please Fill In the Details</h1>
            <div className="w-full max-w-xs">
  <form onSubmit={handleData} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="Title">
        Title
      </label>
      <select ref={titleRef} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option  selected>Choose a Genre</option>
  <option value="Granite">Granite Work</option>
  <option value="Tiles">Tiles Work</option>
 
</select>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="Description">
        Description
      </label>
      <input  ref={descriptionRef} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="unit" type="text" placeholder="Description"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="Unit">
        Unit
      </label>
      <input ref={unitRef} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="unit" type="text" placeholder="Unit"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="Rate">
        Rate
      </label>
      <input ref={rateRef} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="rate" type="text" placeholder="Rate"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="Quantity">
        Quantity
      </label>
      <input ref={quantityThisRef} className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="this" type="text" placeholder="This"/>
      <input ref={quantityPrevRef} className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="previous" type="text" placeholder="Previous"/>
      <br />
      <input ref={quantityCummRef} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cummulative" type="text" placeholder="Cummulative"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="Amount">
        Amount
      </label>
      <input ref={amountThisRef} className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="this" type="text" placeholder="This"/>
      <input ref={amountPrevRef} className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="previous" type="text" placeholder="Previous"/>
      <br />
      <input ref={amountCummRef} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cummulative" type="text" placeholder="Cummulative"/>
    </div>
    <div className="grid  place-items-center">
    
    <input  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" />
    </div>
  </form>
  <p class="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p>
</div>
<Link to="/summary">See The Data Summary</Link>
        </div>
    );
};

export default BillInput;