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

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/free-tips" element={<Free />} />
        <Route path="/vip-tips" element={<Premium />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/single-blog" element={<SingleBlog />} />
        <Route path="/login" element={<Auth />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
