import React, { useState, useEffect } from 'react'
import aboutimage from '../../images/detailslider1.jpg'
import Header from '../../components/header/mainheader/Header'
import './About.css'
import PageHeader from '../../components/header/pageheader/PageHeader'
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import clientlogo from '../../images/clientLogo.png'
import clientlogo2 from '../../images/clientLogo2.png'
import Footer from '../../components/footer/Footer'
import about2 from '../../images/about2.png'
import about3 from '../../images/about3.png'
import axios from 'axios';
const About = () => {
  const [content, setContent] = useState(null);
  const [language, setLanguage] = useState("en")
  const fetchContent = async () => {
    console.log("fetch content");
    try {
      const response = await axios.get(`http://localhost:8080/api/about/${language}`);
      setContent(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching about us content:', error);
    }
  };
  useEffect(() => {
    console.log("hiiii");
    fetchContent();
  }, []);
  return (
    <div>
      <PageHeader />
      <div className='about-image' >
        <div style={{ "backgroundImage": `url(data:image/jpeg;base64,${content?.mainImage})` }}></div>
        <p>{content?.header}</p>
      </div>
      <div className='container about-text-container'>
        <h2>
          {
            content?.descHeader
          }
        </h2>
        <div className='about-text-desc row'>
          <div className='col-lg-6'>
            <p>{content?.desc1}</p>
          </div>
          <div className='col-lg-6'>
            <p>
              {content?.desc1}
            </p>
          </div>
        </div>
      </div>
      <div className='clients container'>
        <div>
          <h2>{content?.clientHeader}</h2>
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 0,
              pauseOnMouseEnter: true,
              disableOnInteraction: false
            }}
            // cssMode={true}
            loop={true}
            className='swiper'
            spaceBetween={50}
            slidesPerView={5}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {
              content ? content?.clientImages.map((src) => {
                return (
                  <SwiperSlide><img className='swiper-image' src={`data:image/jpeg;base64,${src}`} title="" /></SwiperSlide>
                )
              }) : null
            }

          </Swiper>
        </div>
      </div>
      <div className='about-between'>
        <div className='about-image2' style={{ background: `url(data:image/jpeg;base64,${content?.descImage1}) no-repeat bottom center fixed`, height: "500px", backgroundSize: "cover" }}></div>
        <div className='between-text container text-center pt-5 mt-5 pb-5 pt-5 mb-5'>
          <h4>{content?.descBetweenHeader}</h4>
          <h5>{content?.descBetweenDescription}</h5>
        </div>
        <div className='about-image3' style={{ background: `url(${content?.descImage2}) no-repeat bottom center fixed`, height: "500px", backgroundSize: "cover" }}></div>
      </div>
      <div className='tools container'>
        <div>
          <h2>{content?.toolHeader}</h2>
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 0,
              pauseOnMouseEnter: true,
              disableOnInteraction: false
            }}
            loop={true}
            className='swiper'
            spaceBetween={50}
            slidesPerView={5}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
           {
              content ? content?.toolImages.map((src) => {
                return (
                  <SwiperSlide><img className='swiper-image' src={`data:image/jpeg;base64,${src}`} title="" /></SwiperSlide>
                )
              }) : null
            }
          </Swiper>
        </div>
      </div>
      <div className='contact'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <h2>Contact</h2>
              <p className='adress'>
                Selskokhozyaistvennaya street 17/2, Moscow
              </p>
              <p className='number'>+7 495 973-08-16</p>
              <p className='mail'>portbim2121@.com
                <span className='line'></span>
              </p>
              <p className='working-hours'>Monday–friday from 09:00 to 18:00</p>
            </div>
            <div className='col-lg-6'>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Content = () => {
//     const [content, setContent] = useState(null);
//     const fetchContent = async () => {
//         console.log("fetch content");
//         try {
//             const response = await axios.get(`http://localhost:8080/api/about/en`);
//             setContent(response.data);
//             console.log(response.data);

//         } catch (error) {
//             console.error('Error fetching about us content:', error);
//         }
//     };
//     useEffect(() => {
//         console.log("hiiii");
//         fetchContent();
//     }, []);
//     return <div>
//         {
//             content ? <><img src={`data:image/jpeg;base64,${content.mainImage}`} /> <div>{content?.language}</div></> : null
//         }
//         {/* {
//             content ? content.images.map((src) => {
//                 return(
//                 <img src={`data:image/jpeg;base64,${src}`} />
//                 )
//             }) : null
//         } */}
//     </div>;
// };

// export default Content;
