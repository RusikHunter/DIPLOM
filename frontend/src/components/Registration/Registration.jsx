import React from "react"
import './AccountForm.scss'

export default function Registration({ handleChangeToAuth }) {
    return (
        <section className="account-form">
            <div className="account-form__inner container">
                <div className="account-form__row row">
                    <div className="account-form__column column">
                        <h1 className="account-form__title">Регистрация</h1>

                        <form className="account-form__form">
                            <label htmlFor="accountFormEmail" className="account-form__label account-form__label--email">
                                <input className="account-form__input account-form__input--email" type="email" name="accountFormEmail" required autoComplete="email" placeholder="Електронна пошта" />
                            </label>

                            <label htmlFor="accountFormUsername" className="account-form__label account-form__label--username">
                                <input className="account-form__input account-form__input--username" type="text" name="accountFormUsername" required autoComplete="nickname" placeholder="Придумайте псевдонім" />
                            </label>

                            <label htmlFor="accountFormPassword" className="account-form__label account-form__label--password">
                                <input className="account-form__input account-form__input--password" type="password" name="accountFormPassword" required minLength="6" placeholder="Пароль" />
                            </label>

                            <label htmlFor="accountFormConfirmPassword" className="account-form__label account-form__label--confirm-password">
                                <input className="account-form__input account-form__input--confirm-password" type="password" name="accountFormConfirmPassword" required minLength="6" placeholder="Підтвердити пароль" />
                            </label>

                            <button type="submit" className="account-form__button account-form__button--submit">
                                Зарегистрироваться
                            </button>
                        </form>

                        <span className="account-form__text--to-auth">
                            Уже имеете аккаунт на Vibix?
                            <a href="#" className="account-form__link--to-auth" onClick={handleChangeToAuth}>Войдите</a>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}