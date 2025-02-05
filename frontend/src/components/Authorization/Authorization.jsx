import React from "react"
import './Authorization.scss'

export default function Authorization() {
    return (
        <section className="authorization">
            <div className="authorization__inner container">
                <div className="authorization__row row">
                    <div className="authorization__column column">
                        <h1 className="authorization__title">Авторизация</h1>

                        <form className="authorization__form">
                            <label htmlFor="authorizationEmail" className="authorization__label authorization__label--email">
                                <input className="authorization__input authorization__input--email" type="email" name="authorizationEmail" required autocomplete="email" />
                            </label>

                            <label htmlFor="authorizationPassword" className="authorization__label authorization__label--password">
                                <input className="authorization__input authorization__input--password" type="password" name="authorizationPassword" required minlength="6" />
                            </label>

                            <button type="submit" className="authorization__button authorization__button--submit">
                                Вход
                            </button>
                        </form>

                        <span className="authorization__text--to-reg">
                            Впервые на Vibix?
                            <a href="#" className="authorization__link--to-reg">Зарегистрируйтесь</a>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}