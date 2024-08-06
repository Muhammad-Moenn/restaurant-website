import './App.css';
import About from './Component/About/About';
import Footer from './Component/Footer/Footer';
import Hero from './Component/Hero/Hero';
import Menu from './Component/Menu/Menu';
import Navbar from './Component/Navbar/Navbar';
import Service from './Component/Service/Service';
import Start from './Component/Start/Start';

function App() {
  return (
    <div className="App">
      <div className='nav-hero'>
        <Navbar/>
        <Hero/>
      </div>
      <Service/>
      <Menu/>
      <About/>
      <Start/>
      <Footer/>
    </div>
  );
}

export default App;
