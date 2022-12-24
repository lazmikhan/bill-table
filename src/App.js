import logo from './logo.svg';
import './App.css';
import BillInput from './components/BillInput/BillInput';
import { Route, Routes } from 'react-router-dom';
import Summary from './components/BillInput/Summary';


function App() {
  var arr=[];
  return (
    <div className="App">
  <Routes>
  <Route path='/' element={<BillInput arr={arr}></BillInput>}>   </Route>
    <Route path='/billInput' element={<BillInput></BillInput>}>

    </Route>
    <Route path='/summary' element={<Summary  arr={arr}></Summary>}>

</Route>
  </Routes>
    </div>
  );
}

export default App;
