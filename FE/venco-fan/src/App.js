import './App.css';
import {Routes, Route, useLocation, useNavigate, Navigate} from "react-router-dom"
import { Header } from './component/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './component/footer/Footer';
import { Login } from './component/login/Login';
import { Content } from './component/body/Content';
import { Details } from './component/body/Details';
import { ShopingCart } from './component/body/ShopingCart';


function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/login' element={<Login />}/>
      <Route path='/' element={<Content />}/>
      <Route path='/details' element={<Details />}/>
      <Route path='/cart' element={<ShopingCart />}/>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
