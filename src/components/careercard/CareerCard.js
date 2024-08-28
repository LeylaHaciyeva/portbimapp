import React, { useEffect, useState } from 'react'
import './CareerCard.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
const CareerCard = ({ item }) => {
    let {t} =useTranslation()
    let lang = useSelector((state) => state.languageReducer.lang)
    return (
        <Link to={`/${lang}/careers/${item.id}`}>
            <div className='container career-card'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <div>
                            <p className=''>{t('Position')}</p>
                            <p className='position'>{item?.position}</p>
                        </div>
                    </div>
                    <div className='col-lg-4 d-flex justify-content-center'>
                        <div>
                            <p className=''>{t(`Location`)}</p>
                            <p className='location'>{item?.location}</p>
                        </div>
                    </div>
                    <div className='col-lg-4 d-flex justify-content-end'>
                        <div>
                            <p>{t(`Work type`)}</p>
                            <p className='type'>{item?.type}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CareerCard