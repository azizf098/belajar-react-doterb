import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  
  import Login from '../pages/auth/Login';
  import Contact from '../pages/landing-page/components/contact/index';
  import SignUp from '../pages/auth/SignUp';
  import Header from "../pages/landing-page/index";
  import Product from "../pages/landing-page/components/product/index";
  import Store from "../pages/landing-page/components/store/index";
  import Cart from "../pages/landing-page/components/cart/index";
  import SingleProduk from "../pages/landing-page/components/singleproduk";
  import Categori from "../pages/landing-page/components/category";
  
  function Router() {

    return (
      <BrowserRouter> 
          <Routes>
            <Route path="/" element={<Header/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/shop" element={<Store/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/singleproduk/:id" element={<SingleProduk/>}/>
            <Route path="/categori" element={<Categori/>}/>
          </Routes>
        </BrowserRouter>
    );
  }
  export default Router;