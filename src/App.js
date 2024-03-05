import './App.css';
import Home from './Components/Home/Home';
import { About } from './Components/About/About';
import { LoginSignup } from './Components/LoginSignup/LoginSignup';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    
    <div>
      <Router>
      <Navbar />
        <Switch>
          <Route path='/' Component={Home} exact><Home /></Route>
          <Route path='/About' Component={About} exact><About /></Route>
          {/* <Route path='/Contact' Component={Contact} exact><Contact /></Route> */}
          <Route path='/LoginSignup' Component={LoginSignup} exact><LoginSignup /></Route>

        </Switch>
      </Router>
      {/* <LoginSignup/> */}
    </div>
  );
}

export default App;
