// Collections.jsx
import React, { useState } from "react"
import FilmCardSlider from "../FilmCardSlider/FilmCardSlider"
import "./Collections.scss"
import translationsJSON from "../../assets/translations.json"
import { useSelector } from "react-redux"
import { useQuery } from "@tanstack/react-query"
import { fetchAllMovies } from "../../api/fetchFunctions"

export default function Collections() {
    const translations = translationsJSON
    const language = useSelector((state) => state.client.language)

    const [visibleSlideSets, setVisibleSlideSets] = useState(1)

    const { data, isError, isLoading } = useQuery({
        queryKey: ["all-movies"],
        queryFn: async () => fetchAllMovies(),
    })

    if (isLoading) return <React.Fragment />
    if (isError || !data) return <React.Fragment />

    const slideSets = [
        {
            novelty: data.new.slice(0, 20),
            forYou: data.genre.slice(0, 20),
            top: data.top.slice(0, 20),
        },
        {
            novelty: data.new.slice(20, 40),
            forYou: data.genre.slice(20, 40),
            top: data.top.slice(20, 40),
        },
        {
            novelty: data.new.slice(40, 60),
            forYou: data.genre.slice(40, 60),
            top: data.top.slice(40, 60),
        },
    ]

    const handleAddMore = () => {
        if (visibleSlideSets < slideSets.length) {
            setVisibleSlideSets((prev) => prev + 1)
        }
    }

    const visibleSlides = slideSets.slice(0, visibleSlideSets)

    return (
        <section className="section section__collections collections">
            <div className="collections__inner container">
                {visibleSlides.map((slideSet, index) => (
                    <React.Fragment key={index}>
                        {["novelty", "forYou", "top"].map((type) => (
                            <FilmCardSlider
                                key={`${type}-${index}`}
                                title={type}
                                movies={slideSet[type]}
                            />
                        ))}
                    </React.Fragment>
                ))}

                <button
                    className="collections__button--add-more"
                    style={{
                        display: visibleSlideSets >= slideSets.length ? "none" : "flex",
                    }}
                    onClick={handleAddMore}
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
                    {translations[language].collections.showMore}
                </button>
            </div>
        </section>
    )
}