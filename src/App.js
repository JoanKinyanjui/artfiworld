import logo from './logo.svg';
import './App.css';
import Appbar from './components/APPBAR/Appbar';
import Hero from './components/HERO/Hero';
import Brands from './components/BRANDPARTNERS/Brands';
import Gallery from './components/GALLERY/Gallery';
import Aboutus from './components/ABOUTUS/Aboutus';
import Nike from './components/NIKE/Nike';
import Blogs from './components/BLOGS/Blogs';
import Subscribe from './components/SUBSCRIBE/Subscribe';
import Footer from './components/FOOTER/Footer';
import { Toolbar } from '@mui/material';
import BoxesDiv from './components/BOXES/Boxes';


function App() {
  return (
    <>
    <Appbar/>
    <Hero />
    <Brands />
    <Gallery />
    <Aboutus />
    <BoxesDiv/>
    <Nike/>
    <Blogs />
    <Subscribe />
    <Footer />
    </>
  );
}

export default App;
