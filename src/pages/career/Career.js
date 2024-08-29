import React, { useEffect, useState } from 'react'
import './Career.css'
import PageHeader from '../../components/header/pageheader/PageHeader.js'
import CareerCard from '../../components/careercard/CareerCard.js'
import Footer from '../../components/footer/Footer.js'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useTranslation } from 'react-i18next'
const Career = () => {
  let lang = useSelector((state) => state.languageReducer.lang)
  let [content, setContent] = useState(null)
  const { t } = useTranslation()
  const fetchContent = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/career/${lang}`);
      setContent(response.data);
    } catch (error) {
      console.error('Error fetching about us content:', error);
    }
  };
  useEffect(() => {
    fetchContent();
  }, [lang]);
  return (
    <div>
      <PageHeader />
      <div className='container mt-5 pt-5  career-header'>
        <div className='row pt-5 pb-5'>
          <div className='col-lg-4'>
            <h3> {t('VACANCİES')}</h3>
          </div>
          <div className='col-lg-8'>
            <p>{t('Start Your Career Journey With Us')}</p>
          </div>
        </div>
      </div>
      <div className="container career-cards">
      <div className="row">
      {
        content?.map((item, index) => {
          return (<CareerCard key={index} item={item} />)
        })
      }
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default Career