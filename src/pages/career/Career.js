import React, { useEffect, useState } from 'react'
import './Career.css'
import PageHeader from '../../components/header/pageheader/PageHeader.js'
import CareerCard from '../../components/careercard/CareerCard.js'
import Footer from '../../components/footer/Footer.js'
import { useSelector } from 'react-redux'
import axios from 'axios'
const Career = () => {
    let lang = useSelector((state) => state.languageReducer.lang)
    let [content,setContent]=useState(null)
    const fetchContent = async () => {
    //   console.log("fetch content");
      try {
        const response = await axios.get(`http://localhost:8080/api/career/${lang}`);
        setContent(response.data);
        // console.log(response.data);
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
                    <div className='col-lg-6'>
                        <h3>Vakansiya</h3>
                    </div>
                    <div className='col-lg-6'>
                        <p>Karyera Səyahətinizə Bizimlə Başlayın</p>
                    </div>
                </div>
            </div>
            {
                content?.map((item,index)=>{
                   return (<CareerCard key={index} item={item}  />)
                })
            }
           
            <Footer />
        </div>
    )
}

export default Career