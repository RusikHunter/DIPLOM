import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../store/reducers/clientReducer'
import userAvatar from '../../assets/icons/useravatar.png'
import translationsJSON from '../../assets/translations.json'
import './AccountPage.scss'

export default function AccountPage() {
    const dispatch = useDispatch()
    const language = useSelector(state => state.client.language)
    const translations = translationsJSON

    useEffect(() => {
        dispatch(setCurrentPage('account'))
    }, [])

    return (
        <>
            <section className="section section__account account">
                <div className="account__inner container">
                    <div className="account__row account__row--1 row">
                        <h1 className="account__title">{translations[language].account.userAccount}</h1>
                    </div>
                    <div className="account__row account__row--2 row">
                        <div className="account__column account__column--1 column">
                            <img src={userAvatar} alt="Avatar" className="account__avatar" />
                        </div>
                        <div className="account__column account__column--2 column">
                            <div className="account__details-wrap">
                                <h3 className="account__subtitle">{translations[language].account.userData}</h3>

                                <label htmlFor="accountInputUsername" className='account__label account__label--username'>
                                    <input type="text" name="accountInputUsername" className="account__input account__input--username" placeholder={translations[language].account.username} value="dmfshove" />
                                    <button type="button" className="account__button--change">{translations[language].account.change}</button>
                                </label>

                                <label htmlFor="accountInputEmail" className='account__label account__label--email'>
                                    <input type="email" name="accountInputEmail" className="account__input account__input--email" value="funnymoments610@gmail.com" disabled />
                                </label>

                            </div>

                            <div className="account__plan-wrap">
                                <h3 className="account__subtitle">{translations[language].account.plan}</h3>
                                <a href="#" className="account__link--plan">
                                    <span className="account__link-text--plan">{translations[language].account.selectAnotherPlan}</span>
                                </a>

                                <div className="account__plan-block">
                                    <h6 className="account__plan-title">{translations[language].account.planPremium}</h6>
                                    <span className="account__plan-details">4K</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}