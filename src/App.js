import './App.css';
import { Switch, Route } from 'react-router-dom';
import Solution from './pages/solution.component';
import HomePage from './pages/homepage.component';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/:username' component={Solution} />
        <Route path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
