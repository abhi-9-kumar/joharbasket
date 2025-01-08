import Policies from './components/Policies.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <Router>
      <Header/>
      <Home/>
      <div className="col-span-2 w-full mt-8">
        <Policies />
      </div>
      <div className="col-span-2 w-full mt-8">
        <Footer />
      </div>
      
  </Router>
  );
}

export default App;
