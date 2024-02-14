// import logo from './logo.svg';
import './App.css';
import { Home } from './Home'
import {Scan} from './Scan';
import { Qrreader } from './Qrreader';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
   
    <div className="App" >
      <Routes>
        <Route path="/" element= {<Qrreader/>} />
        <Route path="home" element= {<Home />} />
        <Route path="scan" element= {<Scan />} />
      </Routes>

  </div>
  
  )}

export default App;
