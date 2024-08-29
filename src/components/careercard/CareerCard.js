import React, { useEffect, useState } from "react";
import "./CareerCard.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
const CareerCard = ({ item }) => {
  let { t } = useTranslation();
  let lang = useSelector((state) => state.languageReducer.lang);
  return (
    <div className="col-lg-4 ">
      <div className="career-card">
        <Link to={`/${lang}/careers/${item.id}`}>
          <div>
            <p className="location">{item?.location}</p>
            <p className="position">{item?.position}</p>
          </div>
          <div>
            <button>Read more</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CareerCard;
