import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setCurrentUser, setIsLogged } from './store/reducers/clientReducer';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BurgerMenu from "./components/Header/BurgerMenu/BurgerMenu";
import PrivateRouteAccount from './components/PrivateRoutes/PrivateRouteAccount';
import PrivateRouteAuth from './components/PrivateRoutes/PrivateRouteAuth';
import MainPage from './pages/MainPage/MainPage';
import SearchPage from './pages/SearchPage/SearchPage';
import FilmsPage from './pages/FilmsPage/FilmsPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import MoviePage from './pages/MoviePage/MoviePage';
import AuthPage from './pages/AuthPage/AuthPage';
import AccountPage from './pages/AccoutPage/AccountPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import PlanPage from './pages/PlanPage/PlanPage';
import TermsPage from './pages/TermsPage/TermsPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

// ! все элементы (текст, фоны, бордеры), сменяющие цвет по смене темы - сменяются через scss 
// ! весь текст, меняющийся при смене языка - меняется через условный рендеринг в jsx компонентах
// ! все svg-иконки делаются через тег svg в jsx компонентах и меняют свой цвет через scss
// ! кнопка смены языка описывается в jsx компоненте тегом svg через условный рендеринг (какая именно картинка языка),
// ! а затем в scss рендерится ее цвет

export default function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))

        if (user) {
            dispatch(setIsLogged())
            dispatch(setCurrentUser(user))
        }
    }, [])

    return (
        <BrowserRouter>
            <Header />
            <BurgerMenu />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/films" element={<FilmsPage />} />
                <Route path="/category" element={<NotFoundPage />} />
                <Route path="/category/:title" element={<CategoryPage />} />
                <Route path='/movie' element={<NotFoundPage />} />
                <Route path='/notfound' element={<NotFoundPage />} />
                <Route path='/movie/:id' element={<MoviePage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/auth" element={<PrivateRouteAuth element={<AuthPage />} />} />
                <Route path="/account" element={<PrivateRouteAccount element={<AccountPage />} />} />
                <Route path="/favorites" element={<FavoritesPage />} />
                <Route path="/plan" element={<PlanPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}