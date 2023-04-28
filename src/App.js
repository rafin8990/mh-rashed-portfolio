import './App.css';
import About from './Section/About/About';
import Contact from './Section/Contact/Contact';
import Home from './Section/Home/Home';
import Navbar from './Section/Navbar/Navbar';
import Skills from './Section/Skills/Skills';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Skills></Skills>
      <Contact></Contact>
      <About></About>
    </div>
  );
}

export default App;
