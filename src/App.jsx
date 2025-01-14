import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import InvoicePage from './components/InvoicePage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import TryLogin from './components/TryLogin';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<TryLogin />} />
        <Route path="/invoice" element={<InvoicePage />} />
        <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path='/try' element={<LoginPage/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
