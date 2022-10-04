import Topbar from './components/topbar/Topbar'
import Intro from './components/intro/Intro'
import Testimonials from './components/testimonials/Testimonials'
import Work from './components/work/Work'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import './App.scss'
import { useState } from 'react'
import Menu from "./components/menu/Menu"

function App() {
  const [menuOpen,setMenuOpen]  = useState(false);
  return (
    <div className="App">
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> 
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <Portfolio />
        <Work />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
