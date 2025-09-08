import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import Payment from './pages/payment'
import Premium from './pages/premium'
import Subscription from './pages/subscription'
import Free from './pages/free'
import SingleBlog from './pages/single-blog';
import Auth from './pages/auth';
import Blog from './pages/blog';
import ContactUs from './pages/contact';
import FAQ from './pages/faq';
import TermsOfService from './pages/terms';
import PrivacyPolicy from './pages/privacy';
import UserProfile from './pages/profile';
import UserAccount from './pages/account';
import AdminDashboard from './pages/admin-dashboard';
import ErrorPage from './components/error-page';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/free-tips" element={<Free />} />
        <Route path="/vip-tips" element={<Premium />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/single-blog" element={<SingleBlog />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/account" element={<UserAccount />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
