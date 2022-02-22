import React from "react";
import { services } from "../../utils/constants";
import "./Services.css";
export const Services = () => {
  return (
    <div className="conatiner">
      <div className="row service-center">
        <div className="service-header">
          <div className="row">
            <div className="col-sm-4 ">
              <h3>
                Custom Furniture
                <br />
                Only Build for you
              </h3>
            </div>
            <div className="col-sm-4">
              <p>
                Microblogging site Twitter was down for several users across the
                globe, the second outage in nearly a week.
              </p>
            </div>
          </div>
        </div>
        <div className="main-service px-2 py-2 ">
          <div className="row ">
            {services.map((service) => {
              const { id, icon, title, text } = service;
              return (
                <>
                  <div className="col-sm-4">
                    <article
                      key={id}
                      className="service px-2 bg-primary br-50 "
                      style={{ textAlign: "center" }}
                    >
                      <span>{icon}</span>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </article>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
