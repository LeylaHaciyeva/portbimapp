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
            <div className='container pt-5 career-detail'>
                <div className='row mt-5'>
                    <div className='col-lg-12'>
                        <Link className='goback' onClick={()=>navigate(-1)}>Go back</Link>
                    </div>
                    <div className='col-lg-12'>
                        <h1 className='position'>{content?.position}</h1>
                        <p><span>Vəzifə :</span> {content?.position}</p>
                        <p><span>İş Növü :</span> {content?.type}</p>
                        <p><span>İş Yeri :</span> {content?.location}</p>
                        <p><span>Departament :</span> {content?.department}</p>
                        <p><span>Last date :</span> {content?.lastDate}</p>
                        <p><span>Created date :</span> {content?.postedDate}</p>

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
