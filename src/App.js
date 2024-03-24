import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import External from './components/Research/External';
import Internal from './components/Research/Internal';
import Hardware from './components/Designing/Hardware';
import Software from './components/Designing/Software';
import Prd from './components/Planning/Prd';
import Specs from './components/Planning/Specs';
import Online from './components/Sales-Marketing/Online';
import Dealership from './components/Sales-Marketing/Dealership';
import Material from './components/Manufacturing/Material';
import Production from './components/Manufacturing/Production';
import Mid from './components/MidSection/Mid';
import Footer from './components/Footer/Footer';
import B2C from './components/Research/B2C';
import B2B from './components/Research/B2B';
import OnlineResearch from './components/Research/OnlineResearch';
import Interview from './components/Research/Interview';
import PublicData from './components/Research/PublicData';
import Health from './components/Research/Health';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/external' element={<External />} />
            <Route path='/internal' element={<Internal />} />
            <Route path='/hardware' element={<Hardware />} />
            <Route path='/software' element={<Software />} />
            <Route path='/prd' element={<Prd />} />
            <Route path='/specs' element={<Specs />} />
            <Route path='/online' element={<Online />} />
            <Route path='/dealership' element={<Dealership />} />
            <Route path='/material' element={<Material />} />
            <Route path='/production' element={<Production />} />
            <Route path='/b2c' element={<B2C/>} />
            <Route path='/b2b' element={<B2B/>} />
            <Route path='/online-research' element={<OnlineResearch/>} />
            <Route path='/interview' element={<Interview/>} />
            <Route path='/publicData' element={<PublicData/>} />
            <Route path='/health' element={<Health/>} />

            <Route path='*' element={<Mid/>}></Route>

          </Routes>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
