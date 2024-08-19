import React, { useEffect, useState } from 'react'
import Help_card from './Help_card'
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import { helpcardActions } from '../store'
function Help_CardContainer() {
const {datas} = useSelector(store=>store.helpCard)
const dispatch = useDispatch()
    useEffect(() => {
        const handleFetchData = async () => {
            const helpCard = await axios.get('http://localhost:3000/api/v1/helpcard/getAllhelpCard')
            dispatch(helpcardActions.addHelpcard(helpCard.data.allhelpCard))
        }
        handleFetchData()
    }, [])

    

    return (
        <div className=' relative left-56 w-2/3 flex flex-wrap  justify-center'>
            {datas.map((item) => <Help_card key={item._id} title={item.title} description={item.description} />)}
        </div>
    )
}

export default Help_CardContainer
