import React, { Component } from "react";
import "../css/base.css";
import "../css/main.css";
import project_card from "./Project_card";

const Projects = () => {
  const listProject = project_card.map((item) => (
    <div className="bgrid folio-item">
      <a href={item.project_link} target="_blank">
        <div className="item-wrap">
          <img src={item.thumb} data-aos={item.animation_effect} />
          <p className="overlay">
            <div className="folio-item-table">
              <div className="folio-item-cell">
                <h3 className="folio-title">{item.project_name}</h3>
                <span className="folio-types">{item.technologies}</span>
              </div>
            </div>
          </p>
        </div>
      </a>
    </div>
  ));
  return <>{listProject}</>;
};

export default Projects;
