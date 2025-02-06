import React from "react"
import './AccountForm.scss'
import { useSelector } from "react-redux"
import translationsJSON from '../../assets/translations.json'
import { useForm } from "react-hook-form";

export default function Registration({ handleChangeToAuth }) {
    const language = useSelector(state => state.client.language)
    const translations = translationsJSON

    // form

    const {
        register,
        handleSubmit,
        watch, // Слежение за полями
        formState: { errors }
    } = useForm()

    const onSubmit = (data) => {
        console.log("Данные формы:", data)
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
                                    {...register("email", { required: "Email обязателен" })}
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
                                        required: "Введите имя пользователя",
                                        minLength: { value: 3, message: "Минимум 3 символа" }
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
                                        required: "Введите пароль",
                                        minLength: { value: 6, message: "Минимум 6 символов" }
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
                                        required: "Повторите пароль",
                                        validate: (value) =>
                                            value === password || "Пароли не совпадают"
                                    })}
                                    className="account-form__input account-form__input--confirm-password"
                                    type="password"
                                    placeholder={translations[language].accountForm.repeatPassword}
                                />
                                {errors.confirmPassword && <p className="account-form__error-text">{errors.confirmPassword.message}</p>}
                            </label>

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