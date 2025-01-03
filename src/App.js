import './App.css';
import { Banner } from './components/Banner';
import { NavBar } from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  );
}

export default App;
