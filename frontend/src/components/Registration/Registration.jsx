import React from "react"
import { useState } from "react"
import './AccountForm.scss'
import { useSelector } from "react-redux"
import translationsJSON from '../../assets/translations.json'
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom"


export default function Registration({ handleChangeToAuth }) {
    const navigate = useNavigate()

    const language = useSelector(state => state.client.language)
    const translations = translationsJSON

    // form

    // Состояние для ошибки
    const [errorMessage, setErrorMessage] = useState('')

    const apiUrl = 'http://127.0.0.1:8000'

    const {
        register,
        handleSubmit,
        watch, // Слежение за полями
        formState: { errors }
    } = useForm()

    const createUser = async (registrationData) => {
        try {
            const response = await axios.post(`${apiUrl}/users/`, registrationData)
            console.log('User created successfully:', response.data)

            if (response.status === 200 && response.data) {
                return response.data
            } else {
                throw new Error("error")
            }
        } catch (error) {
            setErrorMessage(translations[language].accountForm.dataAlreadyTaken)
            throw error
        }
    };

    const onSubmit = async (data) => {
        try {
            // console.log("Данные формы:", data)

            const userToCreate = {
                email: data.email,
                username: data.username,
                password: data.password,
                plan: "basic",
                favoriteMovies: []
            }

            await createUser(userToCreate)

            handleChangeToAuth()
        }
        catch (error) { }
    };

    // Получаем значение пароля для сравнения
    const password = watch("password")

    return (
        <section className="account-form">
            <div className="account-form__inner container">
                <div className="account-form__row row">
                    <div className="account-form__column column">
                        <h1 className="account-form__title">{translations[language].accountForm.registration}</h1>

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

                            {/* Username */}
                            <label htmlFor="accountFormUsername">
                                <input
                                    {...register("username", {
                                        required: translations[language].accountForm.enterUsername,
                                        minLength: { value: 3, message: translations[language].accountForm.min3Letters }
                                    })}
                                    className="account-form__input account-form__input--username"
                                    type="text"
                                    placeholder={translations[language].accountForm.username}
                                />
                                {errors.username && <p className="account-form__error-text">{errors.username.message}</p>}
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

                            {/* Confirm Password */}
                            <label htmlFor="accountFormConfirmPassword">
                                <input
                                    {...register("confirmPassword", {
                                        required: translations[language].accountForm.repeatPassword,
                                        validate: (value) =>
                                            value === password || translations[language].accountForm.passwordDontMatch
                                    })}
                                    className="account-form__input account-form__input--confirm-password"
                                    type="password"
                                    placeholder={translations[language].accountForm.repeatPassword}
                                />
                                {errors.confirmPassword && <p className="account-form__error-text">{errors.confirmPassword.message}</p>}
                            </label>

                            {/* Error message */}
                            {errorMessage && (
                                <p className="account-form__error-text">{errorMessage}</p>
                            )}

                            {/* Submit Button */}
                            <button type="submit" className="account-form__button account-form__button--submit">
                                {translations[language].accountForm.signUp}
                            </button>
                        </form>

                        <span className="account-form__text--to-auth">
                            {translations[language].accountForm.alreadyRegistered}
                            <a href="#" className="account-form__link--to-auth" onClick={handleChangeToAuth}>{translations[language].accountForm.logIn}</a>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}