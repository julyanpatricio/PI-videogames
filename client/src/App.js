import './App.css';
import { Route, Switch } from "react-router-dom"
import Nav from './components/Nav';
import Game from './components/Game';
import Games from './components/Games';
import AddGame from './components/AddGame';
import Landing from './components/Landing'


function App() {

  return (
    <div className="App">
      <Route path="/" component={Nav} />
      <Route path="/" exact component={Landing} />
      <Route path="/games" exact>
        <Games />
      </Route>
      <Switch>
        <Route path="/game/add" exact component={AddGame} />
        <Route path="/game/:id" exact component={Game} />
      </Switch>
    </div>
  );
}

export default App;
