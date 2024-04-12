import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import DonateBlood from './pages/DonateBlood';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/donate-blood' element={<DonateBlood />} />
        
        {/* Authorizations */}
        <Route path='/blood-bank-login' element={<DonateBlood />} />
        {/* <Route path='/donate-blood' element={<DonateBlood />} />
        <Route path='/donate-blood' element={<DonateBlood />} />
        <Route path='/donate-blood' element={<DonateBlood />} /> */}
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
