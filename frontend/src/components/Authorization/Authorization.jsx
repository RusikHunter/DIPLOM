import React from "react"
import { useState, useEffect } from "react"
import '../Registration/AccountForm.scss'
import { useSelector, useDispatch } from "react-redux"
import translationsJSON from '../../assets/translations.json'
import { useForm } from "react-hook-form";
import { setCurrentUser, setIsLogged } from "../../store/reducers/clientReducer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Authorization({ handleChangeToReg }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const language = useSelector(state => state.client.language)
    const translations = translationsJSON

    // Состояние для ошибки
    const [errorMessage, setErrorMessage] = useState('')

    // form

    const apiUrl = 'http://127.0.0.1:8000'

    // создание формы
    const {
        register,
        handleSubmit,
        watch, // Слежение за полями
        formState: { errors }
    } = useForm()

    const loginUser = async (loginData) => {
        try {
            const response = await axios.post(`${apiUrl}/users/login`, loginData)

            if (response.status === 200 && response.data) {
                return response.data
            } else {
                throw new Error(translations[language].accountForm.userNotFound)
            }
        } catch (error) {
            setErrorMessage(translations[language].accountForm.incorrectData)
            throw error
        }
    };

    const onSubmit = async (data) => {
        try {
            const accountToRequest = {
                email: data.email,
                password: data.password
            }

            const userToAuthorization = await loginUser(accountToRequest)

            // Если пользователь успешно авторизован
            localStorage.setItem('user', JSON.stringify(userToAuthorization))
            localStorage.setItem('isLogged', true)
            dispatch(setCurrentUser(userToAuthorization))
            dispatch(setIsLogged())
            navigate('/account')
        } catch (error) { }
    }

    // Получаем значение пароля для сравнения
    const password = watch("password")

    return (
        <section className="account-form">
            <div className="account-form__inner container">
                <div className="account-form__row row">
                    <div className="account-form__column column">
                        <h1 className="account-form__title">{translations[language].accountForm.authorization}</h1>

                        <form className="account-form__form" onSubmit={handleSubmit(onSubmit)}>
                            {/* Email */}
                            <label htmlFor="accountFormEmail">
                                <input
                                    {...register("email", {
                                        required: translations[language].accountForm.enterEmail,
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                            message: translations[language].accountForm.incorrectEmail
                                        }
                                    })}
                                    className="account-form__input account-form__input--email"
                                    type="email"
                                    placeholder={translations[language].accountForm.email}
                                />
                                {errors.email && <p className="account-form__error-text">{errors.email.message}</p>}
                            </label>

                            {/* Password */}
                            <label htmlFor="accountFormPassword">
                                <input
                                    {...register("password", {
                                        required: translations[language].accountForm.enterPassword,
                                        minLength: { value: 6, message: translations[language].accountForm.min6Letters }
                                    })}
                                    className="account-form__input account-form__input--password"
                                    type="password"
                                    placeholder={translations[language].accountForm.password}
                                />
                                {errors.password && <p className="account-form__error-text">{errors.password.message}</p>}
                            </label>

                            {/* Error message */}
                            {errorMessage && (
                                <p className="account-form__error-text">{errorMessage}</p>
                            )}

                            {/* Submit Button */}
                            <button type="submit" className="account-form__button account-form__button--submit">
                                {translations[language].accountForm.logIn}
                            </button>
                        </form>

                        <span className="account-form__text--to-reg">
                            {translations[language].accountForm.noAccount}
                            <a href="#" className="account-form__link--to-reg" onClick={handleChangeToReg}>{translations[language].accountForm.signUp}</a>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}




