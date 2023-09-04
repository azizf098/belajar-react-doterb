import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from './components/Login';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import SignUp from './components/SignUp';
import Counter from './components/Counter';

function App() {
  return (
    <div>
    <div className="app-header">
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
 