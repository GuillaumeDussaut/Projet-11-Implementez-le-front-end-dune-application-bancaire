import './App.scss';
import Home from './pages/home';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Signin from './pages/signin';
import Users from './pages/user'

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Signin/>
      <Users/>
      <Footer/>
    </div>
  );
}

export default App;
