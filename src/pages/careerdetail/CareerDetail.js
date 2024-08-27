import React, { useEffect, useState } from 'react'
import './CareerDetail.css'
import PageHeader from '../../components/header/pageheader/PageHeader'
import Footer from '../../components/footer/Footer'
import { Link, useNavigate, useNavigation, useParams } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'
const CareerDetail = () => {
    const params= useParams()
    const navigate = useNavigate()
    let lang = useSelector((state) => state.languageReducer.lang)
    let [content,setContent]=useState(null)
    const fetchContent = async () => {
    //   console.log("fetch content");
      try {
        const response = await axios.get(`http://localhost:8080/api/career/${lang}/${params.id}`);
        setContent(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error('Error fetching about us content:', error);
      }
    };
    useEffect(() => {
      fetchContent();
    }, []);
    return (
        <>
            {/* <PageHeader /> */}
            <div className='container pt-5 mt-5'>
                <div className='row mt-5'>
                    <div className='col-lg-12'>
                        <Link onClick={()=>navigate(-1)}>Go back</Link>
                    </div>
                    <div className='col-lg-12'>
                        <h1>{content?.position}</h1>
                        <p>Vəzifə : {content?.position}</p>
                        <p>İş Növü : {content?.type}</p>
                        <p>İş Yeri : {content?.location}</p>
                        <p>Departament : {content?.department}</p>
                    </div>
                </div>
                <div className='row'>
                    <h4>
                        İş Təsviri & Məsuliyyətlər :
                    </h4>
                    <p dangerouslySetInnerHTML={{ __html: content?.responsibilities }}></p>
                </div>
                <div className='row'>
                    <div className='col-lg-12'>
                        <h4>
                            Bacarıqlar & Kvalifikasiyalar :
                        </h4>
                        <p dangerouslySetInnerHTML={{ __html: content?.skills }}></p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default CareerDetail
