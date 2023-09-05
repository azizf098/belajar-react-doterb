import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from './pages/auth/Login';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import SignUp from './pages/auth/SignUp';
import Counter from './components/Counter';

function App() {
  return (
    <div>
    <div>
  <Navbar/>
    </div>
    <div className='min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
    <BrowserRouter>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/" element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/counter' element={<Counter/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  </div>

  );
}

export default App;
 