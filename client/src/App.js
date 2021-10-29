import 'antd/dist/antd.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Landing from './components/landing/landing';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <Landing></Landing>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
