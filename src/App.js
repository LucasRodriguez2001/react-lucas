import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComps from './components/NavbarComps';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="App">
      <NavbarComps/>
      <Carousel/>
    </div>
  );
}

export default App;
