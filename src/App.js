import './App.css';
import Hero from './components/Hero';
import Project from './components/Project';
import Services from './components/Services';
import UpcomingProjects from './components/UpcomingProjects';

function App() {
  return (
    <>
      <Hero />
      <UpcomingProjects/>
      <Services/>
      <Project/>
    </>
  );
}

export default App;
