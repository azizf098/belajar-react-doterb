import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  
  import Login from '../pages/auth/Login';
  import Contact from '../pages/landing-page/components/contact/index';
  import SignUp from '../pages/auth/SignUp';
  import Counter from '../pages/Counter';
  import Header from "../pages/landing-page/index";
  import Product from "../pages/Product";
  
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
          </Routes>
        </BrowserRouter>
    );
  }

  export default Router;