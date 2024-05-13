import React, {useState}from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import RecipesSection from '../components/RecipesSection';
import { homeObjOne } from '../components/InfoSection/Data';
import Contactus from '../components/Contactus';
import Products from '../components/Products/Products';
import HowToOrder from '../components/HowToOrder/HowToOrder';
import Footer from '../components/Footer/Footer';

const Home = () => {
const [isOpen, setIsOpen] = useState(false);

const toggle = () => {
    setIsOpen(!isOpen);
 }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <HowToOrder />
      <Products />
      <InfoSection {...homeObjOne}/>
      <RecipesSection />
      <Contactus />
      <Footer />
      
    </>
  )
}

export default Home;
