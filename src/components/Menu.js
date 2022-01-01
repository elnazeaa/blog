import React, { useContext } from "react";
import styled from "styled-components";
import { FiAlignJustify } from "react-icons/fi";
import { NavContext } from "../context/NavContext";

const Menu = (props) => {
  const { isOpenMenu, setIsOpenMenu } = useContext(NavContext);
  return (
    <Wrapper>
      <button
        className="menuBtn"
        onClick={() => {
          setIsOpenMenu(!isOpenMenu);
        }}
      >
        <FiAlignJustify />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;
  @media (max-width: 991px) {
    display: block;
    position: fixed;
    top: 1rem;
    right: 3rem;
    z-index: 10000;
    .menuBtn {
      background: #fdcaac;
      outline: none;
      border: none;
      padding: 0.7rem;
      cursor: pointer;
    }
    .menuBtn svg {
      font-size: 1.7rem;
      color: #abc2ad;
    }
  }
`;

export default Menu;
