import { useState } from 'react';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Toolbox from './components/Toolbox';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" bg-[#0d0f11] text-white overflow-x-hidden">
      <Header />
      <Hero />
      <Projects />
      <Toolbox />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
