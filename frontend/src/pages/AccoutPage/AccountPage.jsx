import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../store/reducers/clientReducer'
import userAvatar from '../../assets/icons/avatar.png'

export default function AccountPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setCurrentPage('account'))
    }, [])

    return (
        <>
            <section className="section section__account accout">
                <div className="accout__row accout__row--1 row">
                    <h1 className="account__title">Аккаунт пользователя</h1>
                </div>
                <div className="accout__row accout__row--2 row">
                    <div className="account__column account__column--1 column">
                        <img src={userAvatar} alt="Avatar" className="account__avatar" />
                    </div>
                    <div className="account__column account__column--2 column">
                        <div className="account__details-wrap">
                            <h3 className="account__subtitle">Данные про пользователя</h3>

                            <label htmlFor="accountInputUsername" className='account__label account__label--username'>
                                <input type="text" name="accountInputUsername" className="account__input account__input--username" placeholder='dmfshove' />
                                <button type="button" className="account__button--change">Изменить</button>
                            </label>

                            <label htmlFor="accountInputEmail" className='account__label account__label--email'>
                                <input type="email" name="accountInputEmail" className="account__input account__input--email" placeholder="funnymoments610@gmail.com" />
                            </label>

                        </div>

                        <div className="account__plan-wrap">
                            <h3 className="account__subtitle">План</h3>
                            <span className="account__link--plan">Выбрать другой план</span>

                            <div className="account__plan-block">
                                <h6 className="account__plan-title">Премиум</h6>
                                <span className="account__plan-details">4K</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}