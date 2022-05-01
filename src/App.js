import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
import QunatityUpdate from './Components/QuantityUpdata/QunatityUpdate';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>
       <Route path='/' element={<HomePage></HomePage>}></Route>
       <Route path='/inventory/:inventoryId' element={<QunatityUpdate></QunatityUpdate>}></Route>
     </Routes>
    </div>
  );
}

export default App;
