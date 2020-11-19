import Wrapper from './components/Wrapper';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Wrapper>
          <Route
            path="/"
            component={Home}
          />
        </Wrapper>
      </Router>

    </div>
  );
}

export default App;
