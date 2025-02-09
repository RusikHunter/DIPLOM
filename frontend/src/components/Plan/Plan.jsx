import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentUser } from "../../store/reducers/clientReducer";
import translationsJSON from '../../assets/translations'
import axios from "axios";
import './Plan.scss'

export default function Plan() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.client.currentUser)
    const currentPlan = useSelector(state => state.client.currentUser.plan)
    const language = useSelector(state => state.client.language)
    const translations = translationsJSON

    const planRefs = []

    for (let i = 0; i < 3; ++i) {
        planRefs[i] = useRef()
    }

    const [planToChange, setPlanToChange] = useState(currentPlan)

    const handleSelectPlan = (selectedPlan, id) => {
        setPlanToChange(selectedPlan)

        console.log('plan', selectedPlan)

        for (let i = 0; i < 3; ++i) {
            planRefs[i].current.classList.remove('plan__wrap--active')
        }

        planRefs[id].current.classList.add('plan__wrap--active')
    }

    const handleChangePlan = async () => {
        dispatch(setCurrentUser({
            ...currentUser,
            plan: planToChange
        }))

        await axios.put(`http://localhost:8000/users/${currentUser.email}`, {
            ...currentUser,
            plan: planToChange,
        })

        navigate('/account')
    }

    useEffect(() => {
        if (currentUser && Object.keys(currentUser).length > 0) {
            localStorage.setItem('user', JSON.stringify(currentUser));
        }
    }, [currentUser])

    if (!currentPlan) {
        return <React.Fragment />
    }

    return (
        <section className="section section__plan plan">
            <div className="plan__inner conteiner">
                <div className="plan__row plan__row--1 row">
                    <h1 className="plan__title">Оберіть план</h1>
                </div>

                <div className="plan__row plan__row--2 row">
                    <label ref={planRefs[0]} className="plan__wrap">
                        <input type="radio" name="planBasicInput" className="plan__input" onClick={() => handleSelectPlan('basic', 0)} />

                        <div className="plan__plan-block">
                            <h6 className="plan__plan-title">{translations[language].plan.planBasic}</h6>

                            <span className="plan__plan-details">720p</span>
                        </div>

                        <dl className="plan__features-list">
                            <div className="plan__feature-wrap">
                                <dt className="plan__feature-term">{translations[language].plan.pricePerMonth}</dt>
                                <dt className="plan__feature-definition">199 UAH</dt>
                            </div>

                            <div className="plan__feature-wrap">
                                <dt className="plan__feature-term">{translations[language].plan.quality}</dt>
                                <dt className="plan__feature-definition">{translations[language].plan.qualityGood}</dt>
                            </div>

                            <div className="plan__feature-wrap">
                                <dt className="plan__feature-term">{translations[language].plan.divisiveness}</dt>
                                <dt className="plan__feature-definition">720p {`(HD)`}</dt>
                            </div>

                            <div className="plan__feature-wrap">
                                <dt className="plan__feature-term">{translations[language].plan.supportedDevices}</dt>
                                <dt className="plan__feature-definition">{translations[language].plan.devices}</dt>
                            </div>

                            <div className="plan__feature-wrap">
                                <dt className="plan__feature-term">{translations[language].plan.simultaneouslyDevices}</dt>
                                <dt className="plan__feature-definition">1</dt>
                            </div>

                            <div className="plan__feature-wrap">
                                <dt className="plan__feature-term">{translations[language].plan.toDownloadDevices}</dt>
                                <dt className="plan__feature-definition">1</dt>
                            </div>
                        </dl>
                    </label>

                    <label ref={planRefs[1]} className="plan__wrap">
                        <input type="radio" name="planBasicInput" className="plan__input" onClick={() => handleSelectPlan('standart', 1)} />

                        <div className="plan__plan-block">
                            <h6 className="plan__plan-title">{translations[language].plan.planStandart}</h6>

                            <span className="plan__plan-details">1080p</span>
                        </div>

                        <dl className="plan__features-list">
                            <div className="plan__feature-wrap">
                                <dt className="plan__feature-term">{translations[language].plan.pricePerMonth}</dt>
                                <dt className="plan__feature-definition">199 UAH</dt>
                            </div>

                            <div className="plan__feature-wrap">
                                <dt className="plan__feature-term">{translations[language].plan.quality}</dt>
                                <dt className="plan__feature-definition">{translations[language].plan.qualityWonderful}</dt>
                            </div>

                            <div className="plan__feature-wrap">
                                <dt className="plan__feature-term">{translations[language].plan.divisiveness}</dt>
                                <dt className="plan__feature-definition">720p {`(HD)`}</dt>
                            </div>

                            <div className="plan__feature-wrap">
                                <dt className="plan__feature-term">{translations[language].plan.supportedDevices}</dt>
                                <dt className="plan__feature-definition">{translations[language].plan.devices}</dt>
                            </div>

                            <div className="plan__feature-wrap">
                                <dt className="plan__feature-term">{translations[language].plan.simultaneouslyDevices}</dt>
                                <dt className="plan__feature-definition">1</dt>
                            </div>

                            <div className="plan__feature-wrap">
                                <dt className="plan__feature-term">{translations[language].plan.toDownloadDevices}</dt>
                                <dt className="plan__feature-definition">1</dt>
                            </div>
                        </dl>
                    </label>

                    <label ref={planRefs[2]} className="plan__wrap">
                        <input type="radio" name="planBasicInput" className="plan__input" onClick={() => handleSelectPlan('premium', 2)} />

                        <div className="plan__plan-block">
                            <h6 className="plan__plan-title">{translations[language].plan.planPremium}</h6>

                            <span className="plan__plan-details">4K</span>
                        </div>

                        <dl className="plan__features-list">
                            <div className="plan__feature-wrap">
                                <dt className="plan__feature-term">{translations[language].plan.pricePerMonth}</dt>
                                <dt className="plan__feature-definition">199 UAH</dt>
                            </div>

                            <div className="plan__feature-wrap">
                                <dt className="plan__feature-term">{translations[language].plan.quality}</dt>
                                <dt className="plan__feature-definition">{translations[language].plan.qualityBest}</dt>
                            </div>

                            <div className="plan__feature-wrap">
                                <dt className="plan__feature-term">{translations[language].plan.divisiveness}</dt>
                                <dt className="plan__feature-definition">720p {`(HD)`}</dt>
                            </div>

                            <div className="plan__feature-wrap">
                                <dt className="plan__feature-term">{translations[language].plan.supportedDevices}</dt>
                                <dt className="plan__feature-definition">{translations[language].plan.devices}</dt>
                            </div>

                            <div className="plan__feature-wrap">
                                <dt className="plan__feature-term">{translations[language].plan.simultaneouslyDevices}</dt>
                                <dt className="plan__feature-definition">1</dt>
                            </div>

                            <div className="plan__feature-wrap">
                                <dt className="plan__feature-term">{translations[language].plan.toDownloadDevices}</dt>
                                <dt className="plan__feature-definition">1</dt>
                            </div>
                        </dl>
                    </label>
                </div>

                <div className="plan__row plan__row--3 row">
                    <button className="plan__button" onClick={handleChangePlan}>
                        Обрати
                    </button>
                </div>
            </div>
        </section>
    )
}








