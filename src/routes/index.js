import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  
  import Login from '../pages/auth/Login';
  import Contact from '../pages/Contact';
  import SignUp from '../pages/auth/SignUp';
  import Counter from '../pages/Counter';
  import MainLayout from "../components/MainLayout";
import Header from "../pages/Header";
  
  function Router() {
    return (
      <div>
      <div className='min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <BrowserRouter>
      <MainLayout>
          <Routes>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/" element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/counter' element={<Counter/>}/>
          </Routes>
          </MainLayout>
        </BrowserRouter>
      </div>
    </div>
  
    );
  }

  export default Router;