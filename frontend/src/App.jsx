import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './pages/MainPage/MainPage';
import SearchPage from './pages/SearchPage/SearchPage';
import FilmsPage from './pages/FilmsPage/FilmsPage';
import NewPage from './pages/NewPage/NewPage';
import AuthPage from './pages/AuthPage/AuthPage';
import AccountPage from './pages/AccoutPage/AccountPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import TermsPage from './pages/TermsPage/TermsPage';

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/films" element={<FilmsPage />} />
                <Route path="/new" element={<NewPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/account" element={<AccountPage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
                <Route path="/terms" element={<TermsPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}