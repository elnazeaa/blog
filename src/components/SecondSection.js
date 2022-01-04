import React from "react";
import styled from "styled-components";
import { icons } from "../utils/info";

const SecondSection = (props) => {
  return (
    <Wrapper id="news">
      {icons.map((item, index) => {
        let num = 0;
        for (let i = 0; i < index; i++) {
          num = num + 50;
        }

        return (
          <div
            className="box"
            key={item.id}
            data-aos="fade-up"
            data-aos-delay={num}
          >
            <div className="icon">
              <span>{item.icon}</span>
            </div>
            <div className="text">
              <h3>{item.title}</h3>
              <p>{item.txt}</p>
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 3rem 9%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 2rem;
  background: #f2e5ee;
  .box {
    position: relative;
    display: flex;
    align-items: center;
    gap: 1rem;
    background: #fffcfa;
    padding: 1rem 2rem 3rem 2rem;
    border-radius: 3px;
    justify-content: center;
    align-items: start;
  }
  .icon {
    margin-top: 0.7rem;
    z-index: 1;
  }
  .icon span {
    background: #abc2ad;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  .icon svg {
    color: #ffe6d4;
    font-size: 3rem;
  }
  .text {
    z-index: 1;
  }
  .text h3 {
    color: #263238;
    font-size: 1.6rem;
    line-height: 2;
    font-weight: 500;
  }
  .text p {
    color: #484d69;
    line-height: 1.8rem;
    font-size: 1rem;
    font-weight: 500;
  }
  .box:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    bottom: -30px;
    border-radius: 3px;
    transition: all 0.7s ease;
    background: #a692b9;
    opacity: 0;
    z-index: -1;
  }
  .box:hover::after {
    bottom: 0;
    opacity: 1;
    z-index: 0;
  }
`;

export default SecondSection;
