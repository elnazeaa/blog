import React from "react";
import styled from "styled-components";
import { datas } from "../utils/info";

const SectionNumFive = (props) => {
  return (
    <Wrapper>
      {datas.map((item, index) => {
        let num = 0;
        for (let i = 0; i < index; i++) {
          num = num + 200;
        }
        return (
          <div
            className="box"
            key={item.id}
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration={num}
          >
            <div className="img">
              <img src={item.img} alt="item" />
              <h2>{item.title}</h2>
            </div>
            <div className="content">
              <h2>{item.title}</h2>
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
  .img img {
    width: 100%;
  }
  .img h2 {
    text-align: center;
    font-size: 2.1rem;
    font-weight: normal;
  }
  .box {
    position: relative;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #abc2ad;
    padding: 1rem;
    transition: 0.4s ease;
  }
  .box:hover .content {
    opacity: 1;
  }
  .box .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #abc2ad;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    opacity: 0;
  }
  .content h2 {
    font-size: 2.1rem;
    font-weight: normal;
    margin-bottom: 1rem;
  }
  .content p {
    font-size: 1.1rem;
    line-height: 1.5;
    letter-spacing: 1px;
  }
`;

export default SectionNumFive;
