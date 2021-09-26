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
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about'exact component={About} />
        <Route path='/store'exact component={Store} />
        <Route path='/gmail'exact component={Gmail} />
        <Route path='/images'exact component={Images} />
      </Switch>
    </>
  );
}

export default App;
