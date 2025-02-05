import React from "react"
import './Registration.scss'

export default function Registration() {
    return (
        <section className="registration">
            <div className="registration__inner container">
                <div className="registration__row row">
                    <div className="registration__column column">
                        <h1 className="registration__title">Регистрация</h1>

                        <form className="registration__form">
                            <label htmlFor="registrationEmail" className="registration__label registration__label--email">
                                <input className="registration__input registration__input--email" type="email" name="registrationEmail" required autocomplete="email" />
                            </label>

                            <label htmlFor="registrationUsername" className="registration__label registration__label--username">
                                <input className="registration__input registration__input--username" type="text" name="registrationUsername" required autocomplete="nickname" />
                            </label>

                            <label htmlFor="registrationPassword" className="registration__label registration__label--password">
                                <input className="registration__input registration__input--password" type="password" name="registrationPassword" required minlength="6" />
                            </label>

                            <label htmlFor="registrationConfirmPassword" className="registration__label registration__label--confirm-password">
                                <input className="registration__input registration__input--confirm-password" type="password" name="registrationConfirmPassword" required minlength="6" />
                            </label>

                            <button type="submit" className="registration__button registration__button--submit">
                                Зарегистрироваться
                            </button>
                        </form>

                        <span className="registration__text--to-auth">
                            Уже имеете аккаунт на Vibix?
                            <a href="#" className="registration__link--to-auth">Войдите</a>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}