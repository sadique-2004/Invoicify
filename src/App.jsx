import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import InvoicePage from './components/InvoicePage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import TryLogin from './components/TryLogin';
import Templates from './components/Templates';
import InvoiceForm from './components/InvoiceForm';
import Card from './components/card';
import NotFound from './components/NotFound';




function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<TryLogin />} />
        <Route path="/invoice/new1" element={<InvoicePage />} />
        <Route path="/invoice" element={<Templates />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/invoice/new2" element={<InvoiceForm />} />
        <Route path="/card" element={<Card />} />
        {/* Default route for non-existing paths */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
