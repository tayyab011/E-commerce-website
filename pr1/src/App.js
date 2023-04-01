
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NAvbar from './Components/NAvbar';

import Home from './Pages/Home';
import About1 from './Pages/About1';
import Contacts from './Pages/Contacts';
import Products from './Pages/Products';
import Storee from './Pages/Storee';
import Footer from './Components/Footer';


function App() {
  return (
    <div>
      <NAvbar />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About1 />} />
        <Route path="/contacts" element={<Contacts />} />
       {  <Route path="/" element={<Home />} /> }
        <Route path="/product" element={<Products />} />
        <Route path="/store" element={<Storee />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
