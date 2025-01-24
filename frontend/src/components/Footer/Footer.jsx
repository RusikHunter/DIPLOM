import React from 'react';
import { Link } from 'react-router-dom';
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
                                <a href="#" className='footer__social-network-link'>

                                </a>

                                <a href="#" className="footer__social-network-link">

                                </a>

                                <a href="#" className="footer__social-network-link">

                                </a>
                            </div>
                        </div>
                        <div className="footer__column footer__column--2 column">
                            <ul className="footer__links-list">
                                <li className="footer__list-item">
                                    <a href="#" className="footer__link">Передоплати</a>
                                </li>
                                <li className="footer__list-item">
                                    <a href="#" className="footer__link">Передоплати</a>
                                </li>
                                <li className="footer__list-item">
                                    <a href="#" className="footer__link">Передоплати</a>
                                </li>
                                <li className="footer__list-item">
                                    <a href="#" className="footer__link">Передоплати</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__column footer__column--3 column">
                            <ul className="footer__links-list">
                                <li className="footer__list-item">
                                    <a href="#" className="footer__link">Передоплати</a>
                                </li>
                                <li className="footer__list-item">
                                    <a href="#" className="footer__link">Передоплати</a>
                                </li>
                                <li className="footer__list-item">
                                    <a href="#" className="footer__link">Передоплати</a>
                                </li>
                                <li className="footer__list-item">
                                    <a href="#" className="footer__link">Передоплати</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__column footer__column--4 column">
                            <ul className="footer__links-list">
                                <li className="footer__list-item">
                                    <a href="#" className="footer__link">Передоплати</a>
                                </li>
                                <li className="footer__list-item">
                                    <a href="#" className="footer__link">Передоплати</a>
                                </li>
                                <li className="footer__list-item">
                                    <a href="#" className="footer__link">Передоплати</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__column footer__column--5 column">
                            <ul className="footer__links-list">
                                <li className="footer__list-item">
                                    <a href="#" className="footer__link">Передоплати</a>
                                </li>
                                <li className="footer__list-item">
                                    <a href="#" className="footer__link">Передоплати</a>
                                </li>
                                <li className="footer__list-item">
                                    <a href="#" className="footer__link">Передоплати</a>
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
                                    <a href="#" className="footer__link">Передоплати</a>
                                </li>
                                <li className="footer__list-item">
                                    <a href="#" className="footer__link">Передоплати</a>
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