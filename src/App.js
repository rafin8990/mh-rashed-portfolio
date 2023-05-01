import './App.css';
import About from './Section/About/About';
import Contact from './Section/Contact/Contact';
import Home from './Section/Home/Home';
import Navbar from './Section/Navbar/Navbar';
import Project from './Section/Project/Project';
import Skills from './Section/Skills/Skills';
import Video from './Section/Video/Video';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Skills></Skills>
      <Video></Video>
      <Project></Project>
      <About></About>
      <Contact></Contact>
    </div>
  );
}

export default App;
