import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Lesson from './components/Lesson';
import {Routes,Route} from 'react-router-dom';
import Login from './components/Login';
import Profile from './components/Profile';
import Newaccount from './components/Newaccount';
import Test from './components/Test';
import Lesson1 from './components/Lesson/Lesson1';
import Lesson2 from './components/Lesson/Lesson2';
import Lesson3 from './components/Lesson/Lesson3';
import Lesson4 from './components/Lesson/Lesson4';
import Lesson5 from './components/Lesson/Lesson5';
import Lesson6 from './components/Lesson/Lesson6';
import Lesson7 from './components/Lesson/Lesson7';
import Lesson8 from './components/Lesson/Lesson8';
import Lesson9 from './components/Lesson/Lesson9';
import Lesson10 from './components/Lesson/Lesson10';
import Lesson11 from './components/Lesson/Lesson11';
import Lesson12 from './components/Lesson/Lesson12';
import Lesson13 from './components/Lesson/Lesson13';
import Lesson14 from './components/Lesson/Lesson14';
import Lesson15 from './components/Lesson/Lesson15';
import Lesson16 from './components/Lesson/Lesson16';
import Lesson17 from './components/Lesson/Lesson17';
import Lesson18 from './components/Lesson/Lesson18';
import Lesson19 from './components/Lesson/Lesson19';
import Lesson20 from './components/Lesson/Lesson20';
import Lesson21 from './components/Lesson/Lesson21';
import Lesson22 from './components/Lesson/Lesson22';
import Lesson23 from './components/Lesson/Lesson23';
import Lesson24 from './components/Lesson/Lesson24';
import Lesson25 from './components/Lesson/Lesson25';
import Lesson26 from './components/Lesson/Lesson26';
import Lesson27 from './components/Lesson/Lesson27';
import Lesson28 from './components/Lesson/Lesson28';
import Lesson29 from './components/Lesson/Lesson29';
import Lesson30 from './components/Lesson/Lesson30';

import './App.css';


function App() {
  let timer;
  clearInterval(timer)
  let log = true;
  const Log = ()=>{
    if(log){
      return <>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='About' element={ <About />} />
        <Route path='lesson' element={ <Lesson />} />
        <Route path='lesson1' element={ <Lesson1 />} />
        <Route path='lesson2' element={ <Lesson2 />} />
        <Route path='lesson3' element={ <Lesson3 />} />
        <Route path='lesson4' element={ <Lesson4 />} />
        <Route path='lesson5' element={ <Lesson5 />} />
        <Route path='lesson6' element={ <Lesson6 />} />
        <Route path='lesson7' element={ <Lesson7 />} />
        <Route path='lesson8' element={ <Lesson8 />} />
        <Route path='lesson9' element={ <Lesson9 />} />
        <Route path='lesson10' element={ <Lesson10 />} />
        <Route path='lesson11' element={ <Lesson11 />} />
        <Route path='lesson12' element={ <Lesson12 />} />
        <Route path='lesson13' element={ <Lesson13 />} />
        <Route path='lesson14' element={ <Lesson14 />} />
        <Route path='lesson15' element={ <Lesson15 />} />
        <Route path='lesson16' element={ <Lesson16 />} />
        <Route path='lesson17' element={ <Lesson17 />} />
        <Route path='lesson18' element={ <Lesson18 />} />
        <Route path='lesson19' element={ <Lesson19 />} />
        <Route path='lesson20' element={ <Lesson20 />} />
        <Route path='lesson21' element={ <Lesson21 />} />
        <Route path='lesson22' element={ <Lesson22 />} />
        <Route path='lesson23' element={ <Lesson23 />} />
        <Route path='lesson24' element={ <Lesson24 />} />
        <Route path='lesson25' element={ <Lesson25 />} />
        <Route path='lesson26' element={ <Lesson26 />} />
        <Route path='lesson27' element={ <Lesson27 />} />
        <Route path='lesson28' element={ <Lesson28 />} />
        <Route path='lesson29' element={ <Lesson29 />} />
        <Route path='lesson30' element={ <Lesson30 />} />
        <Route path='login' element={ <Login />} />
        <Route path='profile' element={ <Profile />} />
        <Route path='newaccount' element={ <Newaccount />} />
        <Route path='login' element={ <Login />} />
        <Route path='test' element={ <Test />} />
      </Routes>
      </>
    }
    else {
      return <Login />
    }
  }
  return (
    <div className="App">
      { Log() }
      
    </div>
  );
}
export default App;