import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './pages/home';
import Signin from './pages/signin';
import Users from './pages/user';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/user" element={<Users />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;





