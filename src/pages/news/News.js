import React from "react";
import "./News.css";
import PageHeader from "../../components/header/pageheader/PageHeader.js";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import newsImage from "../../images/news.jpg";

const News = () => {
  let lang = useSelector((state) => state.languageReducer.lang);
  return (
    <div>
      <PageHeader />
      <div className="news-header container-fluid">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1>News</h1>
            </div>
            <div className="col-lg-6">
              <p>3 Articles</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container news-cards">
        <div className="row mb-5">
          <div className="col-lg-5">
            <img width="100%" src={newsImage} />
          </div>
          <div className="col-lg-7">
            <div>
              <h3>
                Foster + Partners signs partnership agreement to commence next
                phase of design for King Salman International Airport
              </h3>
              <span>21st August 2024</span>
              <p>
                The signing ceremony signifying the next design phase of the
                King Salman International Airport project was recently held in
                Riyadh. The transformational urban masterplan project is set to
                boost Riyadh’s position as a global logistics hub, stimulate
                transport, trade and tourism, and act as a bridge linking the
                East with the West. The multi-disciplinary design team led by
                Foster + Partners has been selected to deliver the concept
                masterplan validation and detailed masterplan, and the designs
                for key assets.
              </p>
              <button>
                <Link to={`/${lang}/news/detail`}>Read more</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-lg-5">
            <img width="100%" src={newsImage} />
          </div>
          <div className="col-lg-7">
            <div>
              <h3>
                Foster + Partners signs partnership agreement to commence next
                phase of design for King Salman International Airport
              </h3>
              <span>21st August 2024</span>
              <p>
                The signing ceremony signifying the next design phase of the
                King Salman International Airport project was recently held in
                Riyadh. The transformational urban masterplan project is set to
                boost Riyadh’s position as a global logistics hub, stimulate
                transport, trade and tourism, and act as a bridge linking the
                East with the West. The multi-disciplinary design team led by
                Foster + Partners has been selected to deliver the concept
                masterplan validation and detailed masterplan, and the designs
                for key assets.
              </p>
              <button>
                <Link to={`/${lang}/news/detail`}>Read more</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-lg-5">
            <img width="100%" src={newsImage} />
          </div>
          <div className="col-lg-7">
            <div>
              <h3>
                Foster + Partners signs partnership agreement to commence next
                phase of design for King Salman International Airport
              </h3>
              <span>21st August 2024</span>
              <p>
                The signing ceremony signifying the next design phase of the
                King Salman International Airport project was recently held in
                Riyadh. The transformational urban masterplan project is set to
                boost Riyadh’s position as a global logistics hub, stimulate
                transport, trade and tourism, and act as a bridge linking the
                East with the West. The multi-disciplinary design team led by
                Foster + Partners has been selected to deliver the concept
                masterplan validation and detailed masterplan, and the designs
                for key assets.
              </p>
              <button>
                <Link to={`/${lang}/news/detail`}>Read more</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-lg-5">
            <img width="100%" src={newsImage} />
          </div>
          <div className="col-lg-7">
            <div>
              <h3>
                Foster + Partners signs partnership agreement to commence next
                phase of design for King Salman International Airport
              </h3>
              <span>21st August 2024</span>
              <p>
                The signing ceremony signifying the next design phase of the
                King Salman International Airport project was recently held in
                Riyadh. The transformational urban masterplan project is set to
                boost Riyadh’s position as a global logistics hub, stimulate
                transport, trade and tourism, and act as a bridge linking the
                East with the West. The multi-disciplinary design team led by
                Foster + Partners has been selected to deliver the concept
                masterplan validation and detailed masterplan, and the designs
                for key assets.
              </p>
              <button>
                <Link to={`/${lang}/news/detail`}>Read more</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-lg-5">
            <img width="100%" src={newsImage} />
          </div>
          <div className="col-lg-7">
            <div>
              <h3>
                Foster + Partners signs partnership agreement to commence next
                phase of design for King Salman International Airport
              </h3>
              <span>21st August 2024</span>
              <p>
                The signing ceremony signifying the next design phase of the
                King Salman International Airport project was recently held in
                Riyadh. The transformational urban masterplan project is set to
                boost Riyadh’s position as a global logistics hub, stimulate
                transport, trade and tourism, and act as a bridge linking the
                East with the West. The multi-disciplinary design team led by
                Foster + Partners has been selected to deliver the concept
                masterplan validation and detailed masterplan, and the designs
                for key assets.
              </p>
              <button>
                <Link to={`/${lang}/news/detail`}>Read more</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
