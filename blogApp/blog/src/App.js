import Wrapper from './components/Wrapper';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

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
          <Route path="/contact"
            component={Contact}
          />
        </Wrapper>
      </Router>
    </div>
  );
}

export default App;
