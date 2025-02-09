import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../store/reducers/clientReducer";
import Plan from '../../components/Plan/Plan.jsx'

export default function PlanPage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isLogged = useSelector(state => state.client.isLogged)

    useEffect(() => {
        if (isLogged) {
            dispatch(setCurrentPage('plan'))
        } else {
            navigate('/auth')
        }
    }, [])

    return (
        <main>
            <Plan />
        </main>
    )
}