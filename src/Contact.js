import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  
      
  return(
    <Wrapper>
      <h2 className='common-heading'>Contact US</h2>
      <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3482.370287361979!2d78.9686778!3d29.212660999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390a43f65b875b8d%3A0x277160b99ab20058!2sRajneesh%20Associates!5e0!3m2!1sen!2sin!4v1672763865423!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
        <div className='container'>
          <div className='contact-form'>
            <form action='https://formspree.io/f/meqwjaqg'method='POST' className='contact-inputs'>
              <input type="text" name='username' placeholder='name' autoComplete="off" required/>
              <input type="numeric" name='Mobile' placeholder='mobile' autoComplete="off"   required/>
              <input type="Email" 
              name='Email'
              placeholder='Email' autoComplete="off"
              required/>
              <textarea name='message' cols="30" rows="6" placeholder='Write The Message'/>

              <input type="submit" value="send"/>

            </form>
          </div>
        </div>
    </Wrapper>
  ) 
  }
  const Wrapper = styled.section`
     padding: 9rem 0 5rem 0;
    .container {
      margin-top: 6rem;
      text-align: center;
      .contact-form {
        max-width: 50rem;
        margin: auto;
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }



    }`;
  
  

export default Contact
