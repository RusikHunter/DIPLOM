import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss'
import logoVibixImage from '../../assets/icons/logo.svg';
import translationsJSON from "../../assets/translations.json"
import { useSelector } from 'react-redux';


export default function Footer() {
    const translations = translationsJSON

    const language = useSelector(state => state.client.language)

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
                                    <a href="#" className="footer__link">{translations[language].footer.linksPrepayments}</a>
                                </li>
                                <li className="footer__list-item">
                                    <a href="#" className="footer__link">{translations[language].footer.linksLoyaltyProgram}</a>
                                </li>
                                <li className="footer__list-item">
                                    <a href="#" className="footer__link">{translations[language].footer.linksPromo}</a>
                                </li>
                                <li className="footer__list-item">
                                    <a href="#" className="footer__link">{translations[language].footer.linksPaymentMethods}</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__column footer__column--3 column">
                            <ul className="footer__links-list">
                                <li className="footer__list-item">
                                    <a href="#" className="footer__link">{translations[language].footer.linksTerms}</a>
                                </li>
                                <li className="footer__list-item">
                                    <a href="#" className="footer__link">{translations[language].footer.linksPrivacyPolicy}</a>
                                </li>
                                <li className="footer__list-item">
                                    <a href="#" className="footer__link">{translations[language].footer.linksAboutUs}</a>
                                </li>
                                <li className="footer__list-item">
                                    <a href="#" className="footer__link">{translations[language].footer.linksDecives}</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__column footer__column--4 column">
                            <ul className="footer__links-list">
                                <li className="footer__list-item">
                                    <a href="#" className="footer__link">{translations[language].footer.linksMediaOutput}</a>
                                </li>
                                <li className="footer__list-item">
                                    <a href="#" className="footer__link">{translations[language].footer.linksOwnStruct}</a>
                                </li>
                                <li className="footer__list-item">
                                    <a href="#" className="footer__link">{translations[language].footer.linksPrepInstitution}</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__column footer__column--5 column">
                            <ul className="footer__links-list">
                                <li className="footer__list-item">
                                    <a href="#" className="footer__link">{translations[language].footer.linksForPartners}</a>
                                </li>
                                <li className="footer__list-item">
                                    <a href="#" className="footer__link">{translations[language].footer.linksCollaboration}</a>
                                </li>
                                <li className="footer__list-item">
                                    <a href="#" className="footer__link">{translations[language].footer.linksVacancies}</a>
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
                                    <a href="#" className="footer__link">{translations[language].footer.linksContacts}</a>
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
                                © 2025 Vibix. {translations[language].footer.allRightsReserved}.
                            </h2>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

