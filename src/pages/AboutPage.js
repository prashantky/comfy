import React from "react";
import styled from "styled-components";
//import { PageHero } from '../components'
//import aboutImg from '../assets/hero-bcg.jpeg'
import Button from "react-bootstrap/Button";
import aboutImage from "../assets/hero-bcg.jpeg";
import { PageHero } from "../components/PageHero.js/PageHero";
const AboutPage = () => {
  return (
    <>
    <PageHero title="about"/>
      <div className="container">
        <div className="row">
          <div className="header-aboutpage  w-100 px-2 py-2 bg-gray ">
            <div className="mb-2">Hello from about</div>
            <div className="d-flex ">
              <div className="row ">
                <div className="col-sm-6">
                  <img src={aboutImage} alt="" className="w-100 h-50" />
                </div>
                <div className="col-sm-6 mt-4 ml-4 ">
                  <article>
                    <div className="title" style={{textAlign:"left"}}>
                      <h2>Our Story</h2>
                      <div className="underline" style={{borderBottom:"3px solid black",marginLeft:"0px"}}></div>
                      <div className="about-info">
                        <p>
                          Microblogging site Twitter was down for several users
                          across the globe, the second outage in nearly a week.
                          Several users across the world were unable to access
                          their tweets or view their Twitter profile.{" "}
                          <span on>Read More</span>
 </p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
