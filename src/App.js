import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Employment } from "./components/Employment";
import { Education } from "./components/Education";
import  Applications  from "./components/Applications";
import  {Publications}  from './components/Publications';
import { References } from "./components/Reference";
import Contact from './components/Contact';

import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Education />
      <Employment />
      <Publications />
      <References/>
      <Applications />
      
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
