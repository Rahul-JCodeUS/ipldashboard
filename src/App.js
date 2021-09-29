import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TeamPage from './pages/TeamPage';
import { MatchPage } from './pages/MatchPage'
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <h1>IPL DASHBOARD</h1>
      <Router>
        <Switch>
        <Route path="/teams/:teamName/matches/:year">
          <MatchPage></MatchPage>
        </Route>
        <Route path="/teams/:teamName">
          <TeamPage></TeamPage>
        </Route>
        <Route path="/teams">
          <HomePage></HomePage>
        </Route>
        <Route path="/">
          <HomePage></HomePage>
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
