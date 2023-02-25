import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/about' element={<About />}></Route>
      <Route exact path='/contact' element={<Contact />}></Route>
      <Route exact path='/login' element={<Login />}></Route>
      <Route exact path='/signup'element={<Signup />}></Route>
      </Routes>
    </>
  );
}

export default App;
