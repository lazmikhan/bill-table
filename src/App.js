import logo from './logo.svg';
import './App.css';
import BillInput from './components/BillInput/BillInput';
import { Route, Routes } from 'react-router-dom';
import Summary from './components/BillInput/Summary';


function App() {
  var arr1=[];
  var arr2=[];
  return (
    <div className="App">
  <Routes>
  <Route path='/' element={<BillInput arr1={arr1} arr2={arr2}></BillInput>}>   </Route>
    <Route path='/billInput' element={<BillInput></BillInput>}>

    </Route>
    <Route path='/summary' element={<Summary arr2={arr2}  arr1={arr1}></Summary>}>

</Route>
  </Routes>
    </div>
  );
}

export default App;
