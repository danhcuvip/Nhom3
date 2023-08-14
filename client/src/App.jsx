import "./App.css";
import { useState, useEffect } from 'react';
import axios from 'axios';
import SignInForm from './components/SignInForm';
import SigupnForm from './components/SignupForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import 'Routes'

import Header from './components/Header';
import QLSach from './components/QLSach';
import Home from './components/Home';
import SignupForm from "./components/SignupForm";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Thêm biến trạng thái isLoggedIn



 

  // Hàm để cập nhật trạng thái đăng nhập khi đăng nhập thành công
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

    return (
      <div>

      {/* Hiển thị SignInForm nếu chưa đăng nhập */}
      {!isLoggedIn && <SignInForm onLogin={handleLogin} />}
      
      {/* Hiển thị giao diện chính nếu đã đăng nhập */}
        {isLoggedIn && (
          <div className="app">
            <Header />
            <main className="app-main">
              <Router>
                <Routes>
                  <Route path="/trangchu" element={<Home />} />
                  <Route path="/quansach" element={<QLSach />} />
                </Routes>
              </Router>
            </main>
          </div>
        )}
      </div>
    );
  }

export default App;
