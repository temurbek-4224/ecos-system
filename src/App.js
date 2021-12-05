import './App.css';
import { Switch, Route } from 'react-router-dom';
import Solution from './pages/solution.component';
import HomePage from './pages/homepage.component';
import SecondLab from './components/secondLab.component';
import FirstLab from './components/firstLab.component';
import SixthLab from './components/sixthLab.component';
import ThirdLab from './components/thirdLab.component';
import FourthLab from './components/fourthLab.component';
import FifthLab from './components/fifthLab.component';
import SeventhLab from './components/seventhLab.component';
import EightLab from './components/eightLab.component';
import NinethLab from './components/ninethLab.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/:username' component={Solution} />
        <Route exact path='/:username/1' component={FirstLab} />
        <Route exact path='/:username/2' component={SecondLab} />
        <Route exact path='/:username/3' component={ThirdLab} />
        <Route exact path='/:username/4' component={FourthLab} />
        <Route exact path='/:username/5' component={FifthLab} />
        <Route exact path='/:username/6' component={SixthLab} />
        <Route exact path='/:username/7' component={SeventhLab} />
        <Route exact path='/:username/8' component={EightLab} />
        <Route exact path='/:username/9' component={NinethLab} />
        <Route path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
