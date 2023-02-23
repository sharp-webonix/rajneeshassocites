import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import { FaFacebookF} from "react-icons/fa";
import nabl from "../images/nabl.png"
import mypdf from "../nabl.pdf"


const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get started?</h3>
            <h3>Here's our happy curtomer</h3>
          </div>

          <div className="contact-short-btn">
            <NavLink to="/Testimonial">
              <Button>happy smiles</Button>
            </NavLink>
          </div>
        </div>
        
      </section>

      {/* footer section  */}

      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>M/S Rajneesh Associates</h3>
            <p>An ISO 9001:2015 Certified Company.</p>
          </div>

          {/* 2nd column */}
          <div className="footer-subscribe">
            <h3>Certified By</h3>
           <a href={mypdf} target="_blank" rel="noreferrer"><img src={nabl} alt="hi" /></a>
           
          </div>

          {/* 3rs column  */}
          <div className="footer-social">
            <h3>Follows Us</h3>
            <div className="footer-social--icons">
              <div>
              <a href="https://www.facebook.com/rajesh.chauhan.10888938?mibextid=ZbWKwL" target='_blank'>
                <FaFacebookF className="icons" />
                </a>
              </div>
             
             
            </div>
          </div>

          {/* 4th column  */}
          <div className="footer-contact">
            <h3>Call Us at</h3>
            <h3>+91 9837385104</h3>
            <a href="mailto:rajneeshkumar106@gmail.com" className="p-text"><h3>rajneeshkumar106@gmail.com</h3></a>
            
          </div>
        </div>

        {/* bottom section  */}
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>
              @{new Date().getFullYear()} Rajneesh Associates. All Rights Reserved
            </p>
            <div>
            <h3 className="credit">Designed & Developed BY- NISHANT</h3>
            <h3 className="credit">Mob-9758105523</h3>
            <h3 className="credit">Mail-knishant719@gmail.com</h3>
            </div>
          </div>
        </div>
      </footer>
      
      
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
  }
  .contact-short-btn {
    justify-self: end;
    align-self: center;
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};

    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }

    .footer-bottom--section {
      padding-top: 9rem;

      hr {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .contact-short-btn {
        text-align: center;
        justify-self: flex-start;
      }
    }

    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }
  .credit{
    text-align:right;
    background:#0a1435;
    color:#fff;
  }
  img{
    max-height:15rem;
  }
`;

export default Footer;