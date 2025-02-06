import React from "react"
import '../Registration/AccountForm.scss'

export default function Authorization({ handleChangeToReg }) {
    return (
        <section className="account-form">
            <div className="account-form__inner container">
                <div className="account-form__row row">
                    <div className="account-form__column column">
                        <h1 className="account-form__title">Авторизация</h1>

                        <form className="account-form__form">
                            <label htmlFor="accountFormEmail" className="account-form__label account-form__label--email">
                                <input className="account-form__input account-form__input--email" type="email" name="accountFormEmail" required autoComplete="email" placeholder="Електронна пошта" />
                            </label>

                            <label htmlFor="accountFormPassword" className="account-form__label account-form__label--password">
                                <input className="account-form__input account-form__input--password" type="password" name="accountFormPassword" required minLength="6" placeholder="Пароль" />
                            </label>

                            <button type="submit" className="account-form__button account-form__button--submit">
                                Вход
                            </button>
                        </form>

                        <span className="account-form__text--to-reg">
                            Впервые на Vibix?
                            <a href="#" className="account-form__link--to-reg" onClick={handleChangeToReg}>Зарегистрируйтесь</a>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}




