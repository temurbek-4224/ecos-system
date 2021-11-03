import './App.css';
import { Switch, Route } from 'react-router-dom';
import Solution from './pages/solution.component';
import HomePage from './pages/homepage.component';
import SecondLab from './components/secondLab.component';
import FirstLab from './components/firstLab.component';
import SixthLab from './components/sixthLab.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/:username' component={Solution} />
        <Route exact path='/:udername/2' component={SecondLab} />
        <Route exact path='/:udername/1' component={FirstLab} />
        <Route exact path='/:udername/6' component={SixthLab} />
        <Route path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
