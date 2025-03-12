import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './Conponents/Navbar/Navbar';
import Aboutus from "./Pages/Aboutus"
import Home from  "./Pages/Home";
import Services from  "./Pages/Services";
import Footer from './Conponents/Footer/Footer';
import Blog from './Pages/Blog';

function App() {
  console.log(Navbar, Aboutus, Home);

  return (
    <>
    <Navbar></Navbar>

    <Routes>
      <Route path='/' element={<Home></Home>} />
      <Route path="/About" element={<Aboutus />} />
      <Route path='/Services' element={<Services />} />
      <Route path='/Blog' element={<Blog />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
