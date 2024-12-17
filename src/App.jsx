
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';

function App() {
  return (
    <Router>
      <Header/>
      <Home/>
    
  </Router>
  );
}

export default App;
