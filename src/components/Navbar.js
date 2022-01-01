import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { navs } from "../utils/info";
import { BsChevronRight } from "react-icons/bs";
import logo from "../images/navbar/navlogo.png";
import { social } from "../utils/info";
import { NavContext } from "../context/NavContext";

const Navbar = (props) => {
  const { isOpenMenu, setIsOpenMenu } = useContext(NavContext);
  return (
    <Wrapper
      style={
        isOpenMenu
          ? { left: "0", boxShadow: "0 0 0 100vw rgba(0, 0, 0, 0.7)" }
          : {}
      }
    >
      <a href="#home" className="logo">
        <img src={logo} alt="brick" />
        Brick
      </a>
      <nav className="nav">
        {navs.map((item) => {
          return (
            <a
              href={item.url}
              key={item.id}
              onClick={() => {
                setIsOpenMenu(false);
              }}
            >
              <BsChevronRight />
              {item.name}
            </a>
          );
        })}
      </nav>
      <div className="social">
        {social.map((item) => {
          return (
            <a href="#" key={item.id}>
              {item.icon}
            </a>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 20rem;
  background: #a692b9;
  height: 100%;
  padding: 2rem;
  z-index: 1000;

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    color: #ffe6d4;
    margin-bottom: 2rem;
  }
  .logo img {
    width: 6rem;
  }
  .nav a {
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    color: #ffe6d4;
    letter-spacing: 1.4px;
    line-height: 2;
  }
  .nav a:hover {
    padding-left: 5px;
  }
  .nav a svg {
    font-size: 1rem;
    color: #abc2ad;
    margin: 0 0.3rem 0 0;
  }
  .social {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
  }
  .social a {
    background: #ffe6d4;
    width: 3rem;
    height: 3rem;
    color: #abc2ad;
    font-size: 2rem;
    text-align: center;
    margin: 1rem 0.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .social a:hover {
    background: #abc2ad;
    color: #ffe6d4;
  }
  @media (max-width: 991px) {
    left: -110%;
  }
`;

export default Navbar;
