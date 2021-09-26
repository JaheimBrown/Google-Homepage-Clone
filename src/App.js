import { Switch, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Store from './components/Store';
import Images from './components/Images';
import Gmail from './components/Gmail';

function App() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
