import AboutUs from './AboutUs';
import './App.css';
import './index.css'
import Contact from './Contact';
import Events from './Events';
import Hero from './Hero';
import Leadership from './Leadership';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutUs />
      <Events />
      <Leadership />
      <Contact />
    </div> 
  );
}

export default App;
