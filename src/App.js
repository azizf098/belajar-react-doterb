import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from './components/Login';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';

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
        </Routes>
      </BrowserRouter>
    </div>
  </div>

  );
}

export default App;
