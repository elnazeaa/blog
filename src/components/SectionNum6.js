import React from "react";
import styled from "styled-components";
import { FaAddressBook, FaEnvelope, FaRegAddressCard } from "react-icons/fa";

const SectionNumSix = (props) => {
  return (
    <Wrapper id="contact">
      <div className="contact" data-aos="fade-up" data-aos-duration="150">
        <div className="box">
          <div className="icon">
            <span>
              <FaAddressBook />
            </span>
          </div>
          <div className="content">
            <h4>phone</h4>
            <p>111-222-333-444-555</p>
          </div>
        </div>
        <div className="box">
          <div className="icon">
            <span>
              <FaEnvelope />
            </span>
          </div>
          <div className="content">
            <h4>email</h4>
            <p>email_email@email.com</p>
          </div>
        </div>
        <div className="box">
          <div className="icon">
            <span>
              <FaRegAddressCard />
            </span>
          </div>
          <div className="content">
            <h4>address</h4>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div className="form" data-aos="fade-up" data-aos-duration="150">
        <div className="inputBox">
          <input
            type="text"
            name="name"
            className="name"
            placeholder="name..."
          />
          <input
            type="email"
            name="email"
            className="email"
            placeholder="email..."
          />
        </div>
        <div className="inputBox">
          <input
            type="text"
            name="phone"
            className="phone"
            placeholder="phone..."
          />
          <input
            type="text"
            name="subject"
            className="subject"
            placeholder="subject"
          />
        </div>
        <div className="textArea">
          <textarea
            name="msg"
            className="message"
            cols="30"
            rows="10"
            placeholder="message..."
          ></textarea>
        </div>
        <button>Send Message</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: #f2e5ee;
  padding: 3rem 10%;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  .box {
    display: flex;
    align-items: center;
    margin: 2rem 0;
  }
  .icon {
    margin: 0 1rem;
  }
  .icon span {
    width: 50px;
    height: 50px;
    background: #abc2ad;
    padding: 1rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon span svg {
    font-size: 2rem;
    color: #f8e9de;
  }
  .content h4 {
    font-size: 1.8rem;
    font-weight: normal;
    color: #abc2ad;
    margin: 0.5rem 0;
  }
  .content p {
    font-size: 0.8rem;
    color: #abc2ad;
  }
  .contact {
    width: 25rem;
  }
  .form {
    flex: 1 1 41rem;
  }
  .inputBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .inputBox input {
    padding: 1rem 4rem 1rem 0.2rem;
    font-size: 1.1rem;
    outline: none;
    border: 1px solid #ddd;
    width: 100%;
  }
  input[name="name"],
  input[name="phone"] {
    margin: 0 0.4rem 0.4rem 0;
  }
  input[name="email"],
  input[name="subject"] {
    margin: 0 0 0.4rem 0.4rem;
  }
  .textArea {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.3rem 0;
  }
  .textArea textarea {
    width: 100%;
    resize: none;
    height: 15rem;
    padding: 1rem;
    font-size: 1.2rem;
    outline: none;
    border: 1px solid #abc2ad;
  }
  button {
    text-align: center;
    margin: 0 auto;
    background: #abc2ad;
    padding: 1rem 1.4rem;
    font-size: 1.1rem;
    outline: none;
    border: none;
    cursor: pointer;
  }
  @media (max-width: 500px) {
    .inputBox {
      flex-wrap: wrap;
    }
  }
`;

export default SectionNumSix;
