import React from "react";
import aboutImage from "./../../assets/hero-bcg.jpeg";
import aboutImage2 from "./../../assets/hero-bcg-2.jpeg";
import "./Hero.css"
import { Link } from "react-router-dom";
export const Hero = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="header-aboutpage  w-100 px-2 py-2 bg-gray ">
            <div className="mb-2">Hello from about</div>
            <div className="d-flex ">
              <div className="row ">
                <div className="col-sm-6">
                  <article>
                    <div className="title" style={{ textAlign: "left" }}>
                      <h2>
                        Design Your
                        <br /> Comfort Zone
                      </h2>
                      <div
                        className="underline"
                        style={{
                          borderBottom: "3px solid black",
                          marginLeft: "0px"
                        }}
                      ></div>
                      <div className="about-info">
                        <p>
                          Microblogging site Twitter was down for several users
                          across the globe, the second outage in nearly a week.
                          Several users across the world were unable to access
                          their tweets or view their Twitter profile.{" "}
                          <span on>Read More</span>
                        </p>
                        <Link to="/products">Shop</Link>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="col-sm-6 mt-4 ml-4 img-container ">
                  <img src={aboutImage} alt="table2" className="  main-img" />
                  <img src={aboutImage2} alt="table1" className=" accent-img" />


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
