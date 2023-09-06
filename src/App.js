import { Component } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import  MainLayout from './components/MainLayout';

class App extends Component {
  render()  {
    
    return (
      <div className="App" >
        <div className='navbar'>
          <Navbar/>
        </div>
      </div>
)
}
}
export default App;