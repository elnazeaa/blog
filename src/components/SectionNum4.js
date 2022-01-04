import React from "react";
import styled from "styled-components";
import { prices } from "../utils/info";
import card from "../images/sectionNum4/card_dot.png";
import { Link } from "react-router-dom";

const SectionNumFour = (props) => {
  return (
    <Wrapper id="price">
      {prices.map((item, index) => {
        let num = 0;
        for (let i = 0; i < index; i++) {
          num = num + 500;
        }
        return (
          <div
            className="box"
            key={item.id}
            data-aos="fade-right"
            data-aos-delay={num}
          >
            <div className="img">
              <img src={item.img} alt="one" />
            </div>
            <div className="content">
              <div className="card-top">
                <span>{item.year} Years</span>
                <h4>
                  ${item.price} <span> /month</span>
                </h4>
              </div>
              <div className="card-bottom">
                <ul>
                  <li>{item.txt1}</li>
                  <li>{item.txt2}</li>
                  <li>{item.txt3}</li>
                  <li>{item.txt4}</li>
                </ul>
                <Link href="#" className="btn" rel="noopener noreferrer">
                  get started
                </Link>
              </div>
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
  background: #f8e9de;
  gap: 2rem;

  .img {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .img img {
    width: 17rem;
  }
  .content {
    text-align: center;
  }
  .content .card-top span {
    color: #57667e;
    font-size: 24px;
    margin-bottom: 19px;
    display: inline-block;
  }
  .content .card-top h4 {
    color: #abc2ad;
    font-size: 3.125rem;
    font-weight: 500;
    margin-bottom: 1.625px;
    padding-right: 0.1875rem;
  }
  .content .card-top h4 span {
    color: #abc2ad;
    font-size: 1rem;
  }
  .content .card-top {
    border-bottom: 2px solid #abc2ad;
    margin-bottom: 2.875rem;
  }
  .card-bottom ul li {
    color: #263238;
    font-weight: 300;
    margin-bottom: 1rem;
    font-size: 1rem;
  }
  .btn {
    position: relative;
    background: #abc2ad;
    border-radius: 6px;
    padding: 1.125rem 2rem;
    text-transform: uppercase;
    display: inline-block;
    font-size: 1.1rem;
    color: #263238;
    z-index: 1;
  }
  .btn:before {
    content: "";
    background: #a692b9;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 6px;
    transition: transform 0.5s;
    transform-origin: 0 0;
    transition-timing-function: cubic-bezier(0.5, 1.6, 0.4, 0.7);
    transform: scaleX(0);
    z-index: -1;
  }
  .box:hover .btn:before {
    transform: scaleX(1);
  }
  .box {
    position: relative;
    background: #fff;
    padding: 2.5rem 1.5625rem;
    border-radius: 0.375rem;
    box-shadow: 0px 0px 9px 0px rgb(131 93 248 / 7%);
    transition: 0.4s;
  }
`;

export default SectionNumFour;
