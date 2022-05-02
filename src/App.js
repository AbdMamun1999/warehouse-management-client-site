import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddNewItem from './Components/AddNewItem/AddNewItem';
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
import ManageInventory from './Components/ManageInventory/ManageInventory';
import QunatityUpdate from './Components/QuantityUpdata/QunatityUpdate';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>
       <Route path='/' element={<HomePage></HomePage>}></Route>
       <Route path='/inventory/:inventoryId' element={<QunatityUpdate></QunatityUpdate>}></Route>
       <Route path='/manageInventory' element={<ManageInventory></ManageInventory>}></Route>
       <Route path='/addNewItem' element={<AddNewItem></AddNewItem>}></Route>
     </Routes>
    </div>
  );
}

export default App;
