import { useState } from 'react';
import { HashRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Reviews from './pages/Reviews';
import Wifi from './pages/Wifi';
import './index.css';

export default function App() {
  const [lang, setLang] = useState('en');

  return (
    <BrowserRouter>
      <div className="app-wrapper" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <Header lang={lang} setLang={setLang} />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home lang={lang} />} />
            <Route path="/menu" element={<Menu lang={lang} />} />
            <Route path="/reviews" element={<Reviews lang={lang} />} />
            <Route path="/wifi" element={<Wifi lang={lang} />} />
          </Routes>
        </main>
        <Footer lang={lang} />
      </div>
    </BrowserRouter>
  );
}
