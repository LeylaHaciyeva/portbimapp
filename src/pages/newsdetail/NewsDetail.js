import React from "react";
import "./NewsDetail.css";
import PageHeader from "../../components/header/pageheader/PageHeader";
import newsImage from "../../images/news2.jpg";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import Footer from '../../components/footer/Footer.js'
const NewsDetail = () => {
  const navigate = useNavigate();
  return (
    <div>
      <PageHeader />
      <div className="newsdetail-header container-fluid mt-5 pt-4">
        <div className="container pt-5">
          <div className="row">
            <div className="col-lg-12 d-flex align-items-baseline">
              <Link className="goback" onClick={() => navigate(-1)}>
                News
              </Link>
              <p className="slash"> / </p>
              <p className="newsdetail-title">
                Foster + Partners signs partnership agreement to commence next
                phase of design for King Salman International Airport
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="newsdetail-container container-fluid mt-2">
        <div className="row">
          <div className="col-lg-12 p-0">
            <div className="news-image-container">
              <div className="news-image"></div>
              <div className="news-image-text">
                <span> 21st August 2024</span>
                <p>
                  Foster + Partners signs partnership agreement to commence next
                  phase of design for King Salman International Airport
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6 d-flex justify-content-center">
            <p className="newsdetail-description">
              The multi-disciplinary design team led by Foster + Partners has
              been selected to deliver the concept masterplan validation and
              detailed masterplan, and the designs for key assets. Luke Fox,
              Head of Studio, Foster + Partners, said: “We are delighted to
              begin working on the next stage of the new King Salman
              International Airport – a truly innovative approach to airport
              design that reinvents the passenger experience at every level and
              creates a unique airport metropolis that is steeped in Riyadh’s
              culture.” King Salman International Airport is expected to be one
              of the world’s largest airports covering an area of approximately
              57 km², allowing for six parallel runways and several terminals.
              The airport aims to accommodate up to 100 million travellers by
              2030. The airport masterplan includes 12km² of, residential and
              recreational facilities, retail outlets, airport support
              facilities and other logistics real estate. It is linked together
              by the Wadi Loop, a green infrastructure corridor that builds up
              the existing wadi and joins the existing west midfield to the new
              east midfield. The loop brings landscaping and real estate
              developments directly into the heart of the new terminal and
              allows for seamless journeys across the site. By extending public
              transportation networks, the masterplan also enhances the
              airport’s connections with the wider city. The main terminal seeks
              to replicate the diverse experiences of the city at a human-scale
              and integrate natural elements. Passengers get an immediate sense
              of their surroundings as they step into the terminal, with
              multiple views through the buildings and visual connections to the
              outside world. Natural ventilation and climate-controlled lighting
              efficiently maintain an optimal internal environment throughout
              the year. Movement through the terminal is intuitive, with clear
              wayfinding and minimal level changes. The airport will become a
              dynamic aerotropolis centred around a seamless customer journey,
              world-class efficient operations, and innovation. Riyadh’s
              identity and the Saudi culture will be taken into consideration in
              the airport’s design to ensure a unique travel experience for
              visitors and transit travellers. With sustainability at its core,
              the new airport will achieve LEED Platinum certification by
              incorporating cutting edge green initiatives that take into
              account both embodied and operational carbon, and will be powered
              by renewable energy.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default NewsDetail;
