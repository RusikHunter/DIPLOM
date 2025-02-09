import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../store/reducers/clientReducer";
import Plan from '../../components/Plan/Plan.jsx'

export default function PlanPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setCurrentPage('plan'))
    }, [])

    return (
        <main>
            <Plan />
        </main>
    )
}