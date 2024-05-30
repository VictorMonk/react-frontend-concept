import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import { Route , Routes } from 'react-router-dom';
import Services from './Pages/Services';
import About from './Pages/About';
import Contact from './Pages/Contact';



function App() {
  return (
    <>
    <Header />
        <main>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
    <Footer />
    </>
  );
}

export default App;
