import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AddNewItem from './Components/AddNewItem/AddNewItem';
import Blogs from './Components/Blogs/Blogs';
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
import Login from './Components/Login/Login';
import ManageInventory from './Components/ManageInventory/ManageInventory';
import MyItems from './Components/MyItems/MyItems';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import QunatityUpdate from './Components/QuantityUpdata/QunatityUpdate';
import Register from './Components/Register/Register';
import RequireAuth from './Components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/inventory/:inventoryId' element={
          <RequireAuth>
            <QunatityUpdate></QunatityUpdate>
          </RequireAuth>
        }></Route>
        <Route path='/manageInventory' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/addNewItem' element={<AddNewItem></AddNewItem>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/myItem' element={<MyItems></MyItems>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
