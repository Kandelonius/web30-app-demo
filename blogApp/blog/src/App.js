import Wrapper from './components/Wrapper';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from './components/pages/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Wrapper>
          <Route
            exact={true}
            path="/"
            component={Home}
          />
          <Route
            path="/about"
            component={About}
          />
        </Wrapper>
      </Router>
    </div>
  );
}

export default App;
