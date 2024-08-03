import { Routes, Route } from 'react-router-dom';

import './Layout.css';
import Navbar from '../components/Navbar/Navbar';
import Home from '../pages/Home/Home';
import Footer from '../components/Footer/Footer';
import Users from '../pages/Users/Users';
import Transactions from '../pages/Transactions/Transactions';
import Subscriptions from '../pages/Subscriptions/Subscriptions';
import Loans from '../pages/Loans/Loans';
import SavingsPage from '../pages/Savings/SavingsPage';
import Account from '../pages/Account/Account';
import SettingsPage from '../pages/SettingsPage/SettingsPage';

const Layout = () => {
  return (
    <>
      <div className="main-content">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/users" element={<Users />} />
          <Route exact path="/transactions" element={<Transactions />} />
          <Route exact path="/subscriptions" element={<Subscriptions />} />
          <Route exact path="/loans" element={<Loans />} />
          <Route exact path="/savings" element={<SavingsPage />} />
          <Route exact path="/account" element={<Account />} />
          <Route exact path="/settings" element={<SettingsPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
