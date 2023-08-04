import logo from './logo.svg';
import './App.css';
import Navbar from './Componetss/Navbar';
import Footer from './Componetss/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Componetss/Home';
import Register from './Componetss/Register';
import Login from './Componetss/Login';
import AddProduct from './Componetss/AddProduct';
import AllProduct from './Componetss/AllProduct';
import SingleProduct from './Componetss/SingleProduct';
import Cart from './Componetss/Cart';
import Profile from './Componetss/Profile';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/register' element={<Register/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/addproduct' element={<AddProduct/>} />
        <Route exact path='/allproducts' element={<AllProduct />} />
        <Route exact path='/singleproduct/:id' element={<SingleProduct />} />
        <Route exact path='/cart' element={< Cart/>} />
        <Route exact path='/profile' element={< Profile/>} />

      </Routes>
      <Footer/>
      
      </div>
  );
}

export default App;
