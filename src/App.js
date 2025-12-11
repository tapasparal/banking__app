import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Login from "./pages/Login";
import LoanCalculator from "./pages/LoanCalculator";
import AdminLogin from "./pages/AdminLogin";
import Contact from "./pages/Contact";
import Downloads from "./pages/Downloads";
import TenderList from "./pages/TenderList";
import HomeLoan from "./components/HomeLoan";
import TopInfoBar from "./components/TopInfoBar";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EmiCalculator from "./components/EmiCalculator";
import VehicleLoan from "./components/VehicleLoan";
import CashCreditLoan from "./components/CashCreditLoan";
import PersonalLoan from "./components/PersonalLoan";
import EccsLoan from "./components/EccsLoan";
import ShgLoan from "./components/ShgLoan";
import ScrollToTop from "./components/ScrollToTop";
import KccLoan from "./components/KccLoan";
import WorkOrderLoan from "./components/WorkOrderLoan";
import TermLoan from "./components/TermLoan";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/login" element={<Login />} />
          <Route path="/lmwf" element={<LoanCalculator />} />
          <Route path="/shg-login" element={<AdminLogin />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/tender" element={<TenderList />} />
          <Route path="/home_loan" element={<><TopInfoBar /><Header /><Navbar /><HomeLoan /><Footer /></>} />
          <Route path="/emi-calculator" element={<><TopInfoBar /><Header /><Navbar /><EmiCalculator /><Footer /></>} />
          <Route path="/vehicle_loan" element={<><TopInfoBar /><Header /><Navbar /><VehicleLoan /><Footer /></>} />
          <Route path="/cash_credit_loan" element={<><TopInfoBar /><Header /><Navbar /><CashCreditLoan /><Footer /></>} />
          <Route path="/personal_loan" element={<><TopInfoBar /><Header /><Navbar /><PersonalLoan /><Footer /></>} />
          <Route path="/eccs_loan" element={<><TopInfoBar /><Header /><Navbar /><EccsLoan /><Footer /></>} />
          <Route path="/shg_loan" element={<><TopInfoBar /><Header /><Navbar /><ShgLoan /><Footer /></>} />
          <Route path="/kcc_loan" element={<><TopInfoBar /><Header /><Navbar /><KccLoan /><Footer /></>} />
          <Route path="/work_order_loan" element={<><TopInfoBar /><Header /><Navbar /><WorkOrderLoan /><Footer /></>} />
          <Route path="/term_loan" element={<><TopInfoBar /><Header /><Navbar /><TermLoan /><Footer /></>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
