import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss'
import logoVibixImage from '../../assets/icons/logo.svg';


export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer__inner container">
                    <div className="footer__row footer__row--1 row">
                        <div className="footer__column footer__column--1 column">
                            <Link to="/">
                                {/* // ! todo обрезать края изображения */}
                                <img src={logoVibixImage} alt="Vibix" className="footer__logo" width={110} height={80} />
                            </Link>

                            <div className="footer__social-networks-navigation">
                                <a href="#" className='footer__social-network-link footer__social-network-link--facebook'>

                                </a>

                                <a href="#" className="footer__social-network-link footer__social-network-link--instagram">

                                </a>

                                <a href="#" className="footer__social-network-link footer__social-network-link--youtube">

                                </a>
                            </div>
                        </div>
                        <div className="footer__column footer__column--2 column">
                            <ul className="footer__links-list">
                                <li className="footer__list-item">
                                    <a href="#" className="footer__link">Передоплати</a>
                                </li>
                                <li className="footer__list-item">
                                    <a href="#" className="footer__link">Програма лояльності</a>
                                </li>
                                <li className="footer__list-item">
                                    <a href="#" className="footer__link">Активувати промокод</a>
                                </li>
                                <li className="footer__list-item">
                                    <a href="#" className="footer__link">Способи оплати</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__column footer__column--3 column">
                            <ul className="footer__links-list">
                                <li className="footer__list-item">
                                    <a href="#" className="footer__link">Умови користування</a>
                                </li>
                                <li className="footer__list-item">
                                    <a href="#" className="footer__link">Політика конфіденційності</a>
                                </li>
                                <li className="footer__list-item">
                                    <a href="#" className="footer__link">Про нас</a>
                                </li>
                                <li className="footer__list-item">
                                    <a href="#" className="footer__link">Пристрої</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__column footer__column--4 column">
                            <ul className="footer__links-list">
                                <li className="footer__list-item">
                                    <a href="#" className="footer__link">Вихідні дані медіа</a>
                                </li>
                                <li className="footer__list-item">
                                    <a href="#" className="footer__link">Структура власності</a>
                                </li>
                                <li className="footer__list-item">
                                    <a href="#" className="footer__link">Передплата для закладів</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__column footer__column--5 column">
                            <ul className="footer__links-list">
                                <li className="footer__list-item">
                                    <a href="#" className="footer__link">Партнерам</a>
                                </li>
                                <li className="footer__list-item">
                                    <a href="#" className="footer__link">Співпраця</a>
                                </li>
                                <li className="footer__list-item">
                                    <a href="#" className="footer__link">Вакансії</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__column footer__column--6 column">
                            <ul className="footer__links-list">
                                <li className="footer__list-item">
                                    <a href="mailto:vibix.support@gmail.com" className="footer__link--mail">
                                        vibix.support@gmail.com
                                    </a>
                                </li>
                                <li className="footer__list-item">
                                    <a href="#" className="footer__link">Контакти</a>
                                </li>
                                <li className="footer__list-item">
                                    <a href="#" className="footer__link">FAQ</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__row footer__row--2 row">
                        <div className="footer__column footer__column-7 column">
                            <h2 className="footer__title">
                                © 2025 Vibix. Всі права захищені.
                            </h2>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

