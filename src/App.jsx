import './App.css';
import Home from './components/Home'; // caminho depende da estrutura do seu projeto
import About from './components/About';
import Work from './components/Work';
import Testemonial from './Testemonial';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Home />
      <About/>
        <Work/>
        <Testemonial/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
