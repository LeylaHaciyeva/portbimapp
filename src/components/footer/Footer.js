import React from 'react'
import '../footer/Footer.css'
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaLongArrowAltUp } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const Footer = () => {
    function handleScrolltoTop(){
        window.scrollTo(0,0)
    }
    const {t} = useTranslation()
    return (
        <div className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                        <div className='footer-logo'>
                            <h2><Link to="/">PortBIM</Link></h2>     
                        </div>
                        <ul className='footer-menu'>
                                <li>
                                    <Link to="/about" >{t('About')}</Link>
                                </li>
                                <li>
                                    <Link to="/projects" >{t('Projects')}</Link>
                                </li>
                                <li>
                                    <Link to="/design" >{t('Design and MEP')}</Link>
                                </li>
                                <li>
                                    <Link to="/bimservices" >{t('BIM Services')}</Link>
                                </li>
                                <li>
                                    <Link to="/news" >{t('News')}</Link>
                                </li>
                                <li>
                                    <Link to="/careers" >{t('Career')}</Link>
                                </li>
                                <li>
                                    <Link to="/contact" >{t('Contact')}</Link>
                                </li>
                            </ul>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                        <div className='d-flex justify-content-end'>
                            <ul className='footer-social-menu'>
                                <li>
                                    <Link to="">
                                        <FaLinkedinIn fontSize=".875em" color='#1a1a1a' />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="">
                                        <FaFacebookF fontSize=".875em" color='#1a1a1a' />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="">
                                        <FaYoutube fontSize=".875em" color='#1a1a1a' />
                                    </Link>
                                </li>
                            </ul>
                            <button className='scrolltotop' onClick={handleScrolltoTop}>
                                <p>
                                    {t("Back to top")}
                                </p>
                                <FaLongArrowAltUp />
                            </button>
                        </div>
                    
                        <div className='d-flex justify-content-end privacy'>
                            <p>
                                <a>
                                    Legal and policies
                                    © 2024 PortBIM MMC All Rights Reserved.
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
