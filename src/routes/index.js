import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  
  import Login from '../pages/auth/Login';
  import Contact from '../pages/landing-page/components/contact/index';
  import SignUp from '../pages/auth/SignUp';
  import Counter from '../pages/landing-page/components/counter/index';
  import Header from "../pages/landing-page/index";
  import Product from "../pages/landing-page/components/product/index";
  import Store from "../pages/landing-page/components/store/index";
  import Cart from "../pages/landing-page/components/cart/index";
  
  function Router() {

    return (
      <BrowserRouter> 
          <Routes>
            <Route path="/" element={<Header/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/counter" element={<Counter/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/shop" element={<Store/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
    );
  }
  export default Router;