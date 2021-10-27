import './App.css';
import { Switch, Route } from 'react-router-dom';
import Solution from './pages/solution.component';
import HomePage from './pages/homepage.component';
import SecondLab from './components/secondLab.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/:username' component={Solution} />
        <Route exact path='/:udername/2' component={SecondLab} />
        <Route path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
