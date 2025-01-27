import React from "react"
import './MovieDetails.scss'
import tempBG from '../../assets/icons/bg-temp.png'
import avatar from '../../assets/icons/avatar.png'

export default function MovieDetails() {
    return (
        <section className="section section__movie-details movie-details">
            <div className="movie-details__inner container">
                <div className="movie-details__row movie-details__row--1 row">
                    <div className="movie-details__column movie-details__column--1 column">
                        <div className="movie-details__info-wrap">
                            <h5 className="movie-details__title">Інформація</h5>

                            <dl className="movie-details__info-description-list">
                                <div className="movie-details__info-description-list-item-wrap">
                                    <dt className="movie-details__info-description-term">Режисер:</dt>
                                    <dd className="movie-details__info-description-definition">Роберт Еггерс</dd>
                                </div>

                                <div className="movie-details__info-description-list-item-wrap">
                                    <dt className="movie-details__info-description-term">Сценаристи:</dt>
                                    <dd className="movie-details__info-description-definition">Роберт Еггерс Генрік Галеєн Брем Стокер</dd>
                                </div>


                                <div className="movie-details__info-description-list-item-wrap">
                                    <dt className="movie-details__info-description-term">Актори:</dt>
                                    <dd className="movie-details__info-description-definition">Лілі-Роуз Депп Ніколас Голт Білл Скашгорд Аарон Тейлор-Джонсон Віллем Дефо</dd>
                                </div>


                                <div className="movie-details__info-description-list-item-wrap">
                                    <dt className="movie-details__info-description-term">Країни:</dt>
                                    <dd className="movie-details__info-description-definition">Чехія США</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                    <div className="movie-details__column movie-details__column--2 column">
                        <div className="movie-details__info-wrap">
                            <h5 className="movie-details__title">Переклад</h5>

                            <ul className="movie-details__info-list">
                                <li className="movie-details__info-list-item">
                                    <span>Українська</span>
                                </li>
                                <li className="movie-details__info-list-item">
                                    <span>Англійська</span>
                                </li>
                                <li className="movie-details__info-list-item">
                                    <span>Польська</span>
                                </li>
                                <li className="movie-details__info-list-item">
                                    <span>Німецька</span>
                                </li>
                            </ul>
                        </div>

                        <div className="movie-details__info-wrap">
                            <h5 className="movie-details__title">Субтитри</h5>

                            <ul className="movie-details__info-list">
                                <li className="movie-details__info-list-item">
                                    <span>Українська</span>
                                </li>
                                <li className="movie-details__info-list-item">
                                    <span>Англійська</span>
                                </li>
                                <li className="movie-details__info-list-item">
                                    <span>Польська</span>
                                </li>
                                <li className="movie-details__info-list-item">
                                    <span>Німецька</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="movie-details__row movie-details__row--2 row">
                    <div className="movie-details__column movie-details__column--3 column">
                        <h5 className="movie-details__title">Трейлер та світлини</h5>

                        <div className="movie-details__images-block">
                            <img src={tempBG} className="movie-details__image movie-details__image--a" alt="image" width={245} height={131} />

                            <img src={tempBG} className="movie-details__image movie-details__image--b" alt="image" width={245} height={131} />

                            <img src={tempBG} className="movie-details__image movie-details__image--c" alt="image" width={245} height={131} />

                            <img src={tempBG} className="movie-details__image movie-details__image--d" alt="image" width={245} height={131} />

                            <img src={tempBG} className="movie-details__image movie-details__image--e" alt="image" width={245} height={131} />

                            <img src={tempBG} className="movie-details__image movie-details__image--f" alt="image" width={245} height={131} />

                            <img src={tempBG} className="movie-details__image movie-details__image--g" alt="image" width={245} height={131} />

                            <img src={tempBG} className="movie-details__image movie-details__image--h" alt="image" width={245} height={131} />

                            <img src={tempBG} className="movie-details__image movie-details__image--i" alt="image" width={245} height={131} />
                        </div>
                    </div>
                </div>
                <div className="movie-details__row movie-details__row--3 row">
                    <div className="movie-details__column movie-details__column--4 column">
                        <div className="movie-details__text-wrap">
                            <h5 className="movie-details__title">Відгуки</h5>

                            <span className="movie-details__reviews-count">44</span>
                        </div>

                        <div className="movie-details__reviews-wrap">
                            <form className="movie-details__review-form">
                                <img src={avatar} className="movie-details__review-image--my-account" alt="avatar" />

                                <input className="movie-details__review-input--text" type="text" placeholder="Відгук" />

                                <button className="movie-details__review-button--submit">
                                    Надіслати
                                </button>
                            </form>

                            <ul className="movie-details__review-list">
                                <li className="movie-details__review">
                                    <img src={avatar} className="movie-details__review-image" alt="avatar" />

                                    <div className="movie-details__review-author-info-wrap">
                                        <span className="movie-details__review-author-username">
                                            Author123
                                        </span>

                                        <p className="movie-details__review-text">
                                            Bullshit. Worst I'd ever seen, i hope, fuckin author will die by rock in his mf face
                                        </p>
                                    </div>
                                </li>
                                <li className="movie-details__review">
                                    <img src={avatar} className="movie-details__review-image" alt="avatar" />

                                    <div className="movie-details__review-author-info-wrap">
                                        <span className="movie-details__review-author-username">
                                            Author123
                                        </span>

                                        <p className="movie-details__review-text">
                                            Bullshit. Worst I'd ever seen, i hope, fuckin author will die by rock in his mf face
                                        </p>
                                    </div>
                                </li>
                                <li className="movie-details__review">
                                    <img src={avatar} className="movie-details__review-image" alt="avatar" width={48} height={48} />

                                    <div className="movie-details__review-author-info-wrap">
                                        <span className="movie-details__review-author-username">
                                            Author123
                                        </span>

                                        <p className="movie-details__review-text">
                                            Bullshit. Worst I'd ever seen, i hope, fuckin author will die by rock in his mf face
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="movie-details__row movie-details__row--4 row">
                    <button
                        className="movie-details__button--add-more"
                    // style={{
                    //     display: visibleSlideSets >= slideSets.length ? "none" : "flex",
                    // }}
                    // onClick={handleAddMore}
                    >
                        <svg
                            width="38"
                            height="36"
                            viewBox="0 0 38 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M32.8443 10.0278C30.0644 5.22876 24.8685 2 18.9176 2C12.1703 2 6.39372 6.1507 4.00867 12.0347M27.9612 12.0347H36V4.00695M5.15575 26.0833C7.93564 30.8824 13.1315 34.1111 19.0824 34.1111C25.8297 34.1111 31.6063 29.9604 33.9913 24.0764M10.0388 24.0764H2V32.1042"
                                stroke="white"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        Показати ще
                    </button>
                </div>
            </div>
        </section>
    )
}

