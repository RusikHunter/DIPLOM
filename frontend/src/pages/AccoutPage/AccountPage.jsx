import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../store/reducers/clientReducer'
import userAvatar from '../../assets/icons/useravatar.png'
import translationsJSON from '../../assets/translations.json'
import './AccountPage.scss'
import { useNavigate } from 'react-router-dom';
import { setIsLogged, setCurrentUser } from '../../store/reducers/clientReducer'
import axios from 'axios'

export default function AccountPage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const language = useSelector(state => state.client.language)
    const currentUser = useSelector(state => state.client.currentUser)
    const isLogged = useSelector(state => state.client.isLogged)
    const translations = translationsJSON

    const textUsernameUnsuccessRef = useRef()
    const textUsernameSuccessRef = useRef()

    const [usernameInputValue, setUsernameInputValue] = useState(currentUser.username || "")
    const [emailInputValue, setEmailInputValue] = useState(currentUser.email || "")
    const [planValue, setPlanValue] = useState(currentUser.plan || "")

    const handleChange = (event) => {
        setUsernameInputValue(event.target.value);
    }

    const handleChangeUsername = async () => {
        try {
            const response = await axios.put(`http://localhost:8000/users/${currentUser.email}`, {
                username: usernameInputValue,
            })

            dispatch(setCurrentUser({
                ...currentUser,
                username: usernameInputValue
            }))

            textUsernameSuccessRef.current.style.display = "block"

            setTimeout(() => {
                textUsernameSuccessRef.current.style.display = "none"
            }, 3000)
        } catch (error) {
            textUsernameUnsuccessRef.current.style.display = "block"

            setTimeout(() => {
                textUsernameUnsuccessRef.current.style.display = "none"
            }, 3000)
        }
    }

    useEffect(() => {
        dispatch(setCurrentPage('account'))
    }, [])

    useEffect(() => {
        if (currentUser && Object.keys(currentUser).length > 0) {
            localStorage.setItem('user', JSON.stringify(currentUser));
        }
        if (currentUser.username) {
            setUsernameInputValue(currentUser.username);
        }
        if (currentUser.email) {
            setEmailInputValue(currentUser.email);
        }
        if (currentUser.plan) {
            setPlanValue(currentUser.plan);
        }
    }, [currentUser])

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
                                    <input type="text" name="accountInputUsername" className="account__input account__input--username" placeholder={translations[language].account.username} value={usernameInputValue} onChange={handleChange} />
                                    <button type="button" className="account__button--change" onClick={handleChangeUsername}>{translations[language].account.change}</button>
                                </label>
                                <p ref={textUsernameUnsuccessRef} className="account__success-text--unsuccess">{translations[language].accountForm.usernameAlreadyTaken}</p>
                                <p ref={textUsernameSuccessRef} className="account__success-text--success">{translations[language].accountForm.usernameChanged}</p>

                                <label htmlFor="accountInputEmail" className='account__label account__label--email'>
                                    <input type="email" name="accountInputEmail" className="account__input account__input--email" value={emailInputValue} disabled />
                                </label>

                            </div>

                            <div className="account__plan-wrap">
                                <h3 className="account__subtitle">{translations[language].account.plan}</h3>
                                <a href="#" className="account__link--plan">
                                    <span className="account__link-text--plan">{translations[language].account.selectAnotherPlan}</span>
                                </a>

                                <div className="account__plan-block">
                                    {/* <h6 className="account__plan-title">{translations[language].account.planPremium}</h6> */}
                                    <h6 className="account__plan-title">{planValue}</h6>

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