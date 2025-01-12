import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Karmic from './components/Karmic';
import Project from './components/Project';
import Services from './components/Services';
import UpcomingProjects from './components/UpcomingProjects';
import Values from './components/Values';

function App() {
  return (
    <>
      <Hero />
      <UpcomingProjects/>
      <Services/>
      <Project/>
      <Karmic/>
      <Values/>
      <Footer/>
    </>
  );
}

export default App;
