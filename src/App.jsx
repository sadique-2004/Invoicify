import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import InvoicePage from './components/InvoicePage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import TryLogin from './components/TryLogin';
import Templates from './components/Templates';
import InvoiceForm from './components/InvoiceForm';
import NotFound from './components/NotFound';
import SquishyCard from './components/Subscription';

// LOGIN/Sign Up - /subscription   - /templates/INVOICE1 OR /templates/INVOICE2


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Card/> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/login" element={<TryLogin />} />
        <Route path="/subscription" element={<SquishyCard />} />
        <Route path="/templates/free" element={<Templates />} />
        <Route path="/invoice1" element={<InvoicePage />} />
        <Route path="/invoice2" element={<InvoiceForm />} />
        {/* Default route for non-existing paths */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
