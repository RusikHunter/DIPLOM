import React from 'react';
import { useSelector } from 'react-redux';
import translationsJSON from '../../assets/translations.json'
import './Search.scss'

export default function Search() {
    const translations = translationsJSON
    const language = useSelector((state) => state.client.language)

    return (
        <main className="main">
            <section className="section section__search search">
                <div className="search__inner container">
                    <div className="search__row search__row--1 row">
                        <h1 className="search__title">Пошук</h1>
                    </div>
                    <div className="search__row search__row--2 row">
                        <form className='search__form'>
                            <input type="text" className="search__form-input" placeholder='Пошук' />
                        </form>

                        <button type="button" className="search__button--filter">
                            <span>Фильтр</span>

                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.7773 10.936L11.7998 14.2505L7.82227 10.936" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div className="search__row search__row--3 row">
                        <div className="search__column search__column--1 column">
                            <div className="search__dropdown search__dropdown--sort">
                                <div className="search__dropdown-title search__dropdown-title--sort">
                                    <span>Сортирувати за</span>

                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.7773 10.936L11.7998 14.2505L7.82227 10.936" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <div className="search__dropdown-interactive search__dropdown-interactive--sort">
                                    <label className="search__dropdown-element search__dropdown-element--sort">
                                        <input className="search__dropdown-input search__dropdown-input--sort" type="radio" name="sort" value="relevance" />
                                        За релевантністю
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.22273 13.0641L12.2002 9.74951L16.1777 13.0641" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </label>
                                    <label className="search__dropdown-element search__dropdown-element--sort">
                                        <input className="search__dropdown-input search__dropdown-input--sort" type="radio" name="sort" value="relevance" />
                                        За релевантністю
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.7773 10.9359L11.7998 14.2505L7.82227 10.9359" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </label>
                                    <label className="search__dropdown-element search__dropdown-element--sort">
                                        <input className="search__dropdown-input search__dropdown-input--sort" type="radio" name="sort" value="relevance" />
                                        За оцінкою IMDb
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.22273 13.0641L12.2002 9.74951L16.1777 13.0641" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </label>
                                    <label className="search__dropdown-element search__dropdown-element--sort">
                                        <input className="search__dropdown-input search__dropdown-input--sort" type="radio" name="sort" value="relevance" />
                                        За оцінкою IMDb
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.7773 10.9359L11.7998 14.2505L7.82227 10.9359" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </label>
                                    <label className="search__dropdown-element search__dropdown-element--sort">
                                        <input className="search__dropdown-input search__dropdown-input--sort" type="radio" name="sort" value="relevance" />
                                        За датою виходу
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.22273 13.0641L12.2002 9.74951L16.1777 13.0641" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </label>
                                    <label className="search__dropdown-element search__dropdown-element--sort">
                                        <input className="search__dropdown-input search__dropdown-input--sort" type="radio" name="sort" value="relevance" />
                                        За датою виходу
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.7773 10.9359L11.7998 14.2505L7.82227 10.9359" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </label>
                                </div>
                            </div>

                            <div className="search__dropdown search__dropdown--genre">
                                <div className="search__dropdown-title search__dropdown-title--genre">
                                    <span>Жанр</span>

                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.7773 10.936L11.7998 14.2505L7.82227 10.936" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <div className="search__dropdown-interactive search__dropdown-interactive--genre">
                                    <label className="search__dropdown-element search__dropdown-element--genre">
                                        <input className="search__dropdown-input search__dropdown-input--genre" type="checkbox" name="genre" value="relevance" />
                                        Екшн
                                    </label>

                                    <label className="search__dropdown-element search__dropdown-element--genre">
                                        <input className="search__dropdown-input search__dropdown-input--genre" type="checkbox" name="genre" value="relevance" />
                                        Драма
                                    </label>

                                    <label className="search__dropdown-element search__dropdown-element--genre">
                                        <input className="search__dropdown-input search__dropdown-input--genre" type="checkbox" name="genre" value="relevance" />
                                        Криминал
                                    </label>

                                    <label className="search__dropdown-element search__dropdown-element--genre">
                                        <input className="search__dropdown-input search__dropdown-input--genre" type="checkbox" name="genre" value="relevance" />
                                        Екшн
                                    </label>

                                    <label className="search__dropdown-element search__dropdown-element--genre">
                                        <input className="search__dropdown-input search__dropdown-input--genre" type="checkbox" name="genre" value="relevance" />
                                        Драма
                                    </label>

                                    <label className="search__dropdown-element search__dropdown-element--genre">
                                        <input className="search__dropdown-input search__dropdown-input--genre" type="checkbox" name="genre" value="relevance" />
                                        Криминал
                                    </label>

                                    <label className="search__dropdown-element search__dropdown-element--genre">
                                        <input className="search__dropdown-input search__dropdown-input--genre" type="checkbox" name="genre" value="relevance" />
                                        Екшн
                                    </label>

                                    <label className="search__dropdown-element search__dropdown-element--genre">
                                        <input className="search__dropdown-input search__dropdown-input--genre" type="checkbox" name="genre" value="relevance" />
                                        Драма
                                    </label>

                                    <label className="search__dropdown-element search__dropdown-element--genre">
                                        <input className="search__dropdown-input search__dropdown-input--genre" type="checkbox" name="genre" value="relevance" />
                                        Криминал
                                    </label>
                                </div>
                            </div>

                            <div className="search__dropdown search__dropdown--country">
                                <div className="search__dropdown-title search__dropdown-title--country">
                                    <span>Краина</span>

                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.7773 10.936L11.7998 14.2505L7.82227 10.936" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <div className="search__dropdown-interactive search__dropdown-interactive--country">
                                    <label className="search__dropdown-element search__dropdown-element--country">
                                        <input className="search__dropdown-input search__dropdown-input--country" type="checkbox" name="country" value="relevance" />
                                        США
                                    </label>

                                    <label className="search__dropdown-element search__dropdown-element--country">
                                        <input className="search__dropdown-input search__dropdown-input--country" type="checkbox" name="country" value="relevance" />
                                        Украина
                                    </label>

                                    <label className="search__dropdown-element search__dropdown-element--country">
                                        <input className="search__dropdown-input search__dropdown-input--country" type="checkbox" name="country" value="relevance" />
                                        Германия
                                    </label>

                                    <label className="search__dropdown-element search__dropdown-element--country">
                                        <input className="search__dropdown-input search__dropdown-input--country" type="checkbox" name="country" value="relevance" />
                                        Германия
                                    </label>

                                    <label className="search__dropdown-element search__dropdown-element--country">
                                        <input className="search__dropdown-input search__dropdown-input--country" type="checkbox" name="country" value="relevance" />
                                        Германия
                                    </label>

                                    <label className="search__dropdown-element search__dropdown-element--country">
                                        <input className="search__dropdown-input search__dropdown-input--country" type="checkbox" name="country" value="relevance" />
                                        Германия
                                    </label>

                                    <label className="search__dropdown-element search__dropdown-element--country">
                                        <input className="search__dropdown-input search__dropdown-input--country" type="checkbox" name="country" value="relevance" />
                                        Германия
                                    </label>

                                    <label className="search__dropdown-element search__dropdown-element--country">
                                        <input className="search__dropdown-input search__dropdown-input--country" type="checkbox" name="country" value="relevance" />
                                        Германия
                                    </label>

                                    <label className="search__dropdown-element search__dropdown-element--country">
                                        <input className="search__dropdown-input search__dropdown-input--country" type="checkbox" name="country" value="relevance" />
                                        Германия
                                    </label>

                                    <label className="search__dropdown-element search__dropdown-element--country">
                                        <input className="search__dropdown-input search__dropdown-input--country" type="checkbox" name="country" value="relevance" />
                                        Германия
                                    </label>
                                </div>
                            </div>

                            <div className="search__dropdown search__dropdown--year">
                                <div className="search__dropdown-title search__dropdown-title--year">
                                    <span>Год</span>

                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.7773 10.936L11.7998 14.2505L7.82227 10.936" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <div className="search__dropdown-interactive search__dropdown-interactive--year">
                                    <input className="search__dropdown-input search__dropdown-input--year" type="range" min="1900" max="2025" step="1" value="1970" />
                                    <span class="search__dropdown-span-year">1970</span>

                                    <button className="search__dropdown-button--year">
                                        Застосувати
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="search__column search__column--2 column">
                            <button className="search__button--clear">
                                <span>Очистити фільтр</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

