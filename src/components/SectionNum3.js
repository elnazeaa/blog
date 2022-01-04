import React from "react";
import styled from "styled-components";
import one from "../images/sectionNum3/01.svg";
import two from "../images/sectionNum3/02.svg";
import three from "../images/sectionNum3/03.png";
import four from "../images/sectionNum3/04.svg";
import five from "../images/sectionNum3/05.svg";

const SectionNumberThree = (props) => {
  return (
    <Wrapper id="about">
      <div className="img" data-aos="fade-right" data-aos-delay="150">
        <img src={one} alt="one" />
      </div>
      <div
        className="content"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div className="image">
          <img src={three} alt="three" />
        </div>
        <div className="txt">
          <h2>Easy setup and management</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
          <div className="feature">
            <div className="box">
              <img src={two} alt="twe" />
              <h4>title</h4>
              <p>70 places</p>
            </div>
            <div className="box">
              <img src={four} alt="twe" />
              <h4>title</h4>
              <p>100 places</p>
            </div>
            <div className="box">
              <img src={five} alt="twe" />
              <h4>title</h4>
              <p>150 places</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
  padding: 3rem 9%;
  .img {
    flex: 1 1 24rem;
  }
  .content {
    flex: 1 1 20rem;
  }
  .img img {
    width: 100%;
  }
  ${
    "" /* .txt {
    width: 40rem;
  } */
  }
  .txt h2 {
    font-size: 2.3rem;
    font-weight: normal;
    letter-spacing: 1px;
    line-height: 1.4;
    padding: 1rem 0;
    color: #263238;
  }
  .txt p {
    font-size: 1.2rem;
    line-height: 1.4;
    padding: 1rem 0;
    color: #263238;
  }
  .image img {
    width: 70px;
    object-fit: cover;
  }
  .feature {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }
  .box {
    padding: 0 2rem;
    border: 1px solid #ddd;
    margin: 1rem 0;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
  .box h4 {
    font-size: 1.1rem;
    font-weight: normal;
    line-height: 1.4;
  }
  .box p {
    font-size: 0.8rem;
    line-height: 1.4;
  }
  .box img {
    width: 80px;
  }
`;

export default SectionNumberThree;
