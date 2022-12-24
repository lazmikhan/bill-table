import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const BillInput = ({arr}) => {

    const descriptionRef = useRef('');
    const unitRef = useRef('');
const handleData=(event)=>{
    event.preventDefault();
const description= descriptionRef.current.value;
const unit= unitRef.current.value;


const billObj ={description: description, unit:unit};
arr.push(billObj);

}
    return (
        <div className='grid h-screen place-items-center'>
            <h1 className='text-3xl'>Please Fill In the Details</h1>
            <div className="w-full max-w-xs">
  <form onSubmit={handleData} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="rate" type="text" placeholder="Rate"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="Quantity">
        Quantity
      </label>
      <input className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="this" type="text" placeholder="This"/>
      <input className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="previous" type="text" placeholder="Previous"/>
      <br />
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cummulative" type="text" placeholder="Cummulative"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="Amount">
        Amount
      </label>
      <input className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="this" type="text" placeholder="This"/>
      <input className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="previous" type="text" placeholder="Previous"/>
      <br />
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cummulative" type="text" placeholder="Cummulative"/>
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