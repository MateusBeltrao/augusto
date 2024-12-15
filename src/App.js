import './App.css';
import { Banner } from './components/Banner';
import { NavBar } from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner></Banner>
    </div>
  );
}

export default App;
