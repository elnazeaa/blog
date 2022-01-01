import React from "react";
import styled from "styled-components";
import first from "../images/firstSection/firstImg.svg";

const FirstSection = (props) => {
  return (
    <Wrapper id="home">
      <div className="img" data-aos="fade-right" data-aos-delay="150">
        <img src={first} alt="first Section" />
      </div>
      <div className="content" data-aos="fade-left" data-aos-delay="300">
        <h1>Lorem ipsum is placeholder text commonly used in the graphic</h1>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <button className="btn" data-aos="fade-up" data-aos-delay="450">
          Lorem ipsum
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 3rem 9%;
  .img {
    flex: 1 1 24rem;
  }
  .img img {
    width: 100%;
  }
  .content {
    width: 39rem;
  }
  .content h1 {
    font-size: 2.3rem;
    font-weight: normal;
    letter-spacing: 1px;
    line-height: 1.4;
    padding: 1rem 0;
    color: #263238;
  }
  .content p {
    font-size: 1.2rem;
    line-height: 1.4;
    padding: 1rem 0;
    color: #263238;
  }
  .content .btn {
    padding: 0.7rem;
    border: 1px solid #d6aec9;
    background: #a692b9;
    font-size: 17px;
    letter-spacing: 1px;
    cursor: pointer;
  }
`;

export default FirstSection;
