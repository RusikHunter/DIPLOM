import React from "react"
import '../Registration/AccountForm.scss'
import { useSelector } from "react-redux"
import translationsJSON from '../../assets/translations.json'

export default function Authorization({ handleChangeToReg }) {
    const language = useSelector(state => state.client.language)
    const translations = translationsJSON

    return (
        <section className="account-form">
            <div className="account-form__inner container">
                <div className="account-form__row row">
                    <div className="account-form__column column">
                        <h1 className="account-form__title">{translations[language].accountForm.authorization}</h1>

                        <form className="account-form__form">
                            <label htmlFor="accountFormEmail" className="account-form__label account-form__label--email">
                                <input className="account-form__input account-form__input--email" type="email" name="accountFormEmail" required autoComplete="email" placeholder={translations[language].accountForm.email} />
                            </label>

                            <label htmlFor="accountFormPassword" className="account-form__label account-form__label--password">
                                <input className="account-form__input account-form__input--password" type="password" name="accountFormPassword" required minLength="6" placeholder={translations[language].accountForm.password} />
                            </label>

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




