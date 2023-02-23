import React from 'react'
import styled from 'styled-components'
import Carousel from 'react-bootstrap/Carousel';
import designimg1 from "./images/design/designimg1.jpg"
import designimg2 from "./images/design/designimg2.jpg"
import designimg3 from "./images/design/designimg3.jpg"
import designimg4 from "./images/design/designimg4.jpg"
import designimg5 from "./images/design/designimg5.jpg"
import designimg6 from "./images/design/designimg6.jpg"
import designimg7 from "./images/design/designimg7.jpg"
import process1 from "./images/design/Process/process1.jpg"
import process2 from "./images/design/Process/process2.jpg"
import process4 from "./images/design/Process/process4.jpg"
import process5 from "./images/design/Process/process5.jpg"


const Design = () => {
  return (
    <>
      <Wrapper>
        <h2>Design your Dream</h2>
        <Carousel className='corosel'>
          <Carousel.Item interval={1000}>
            <div className='d-flex justify-content-center align-items-center'>
              <img
                className="d-block w-100"
                src={designimg1}
                alt="First slide"
              />
            </div>


          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <div className='d-flex justify-content-center align-items-center'>
              <img
                className="d-block w-100"
                src={designimg2}
                alt="Second slide"
              />
            </div>

          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <div className='d-flex justify-content-center align-items-center'>
              <img
                className=" w-100"
                src={designimg3}
                alt="Third slide"
              />
            </div>

          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <div className='d-flex justify-content-center align-items-center'>
              <img
                className=" w-100"
                src={designimg4}
                alt="Fourth slide"
              />
            </div>

          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <div className='d-flex justify-content-center align-items-center'>
              <img
                className="imgc w-100"
                src={designimg5}
                alt="Sixth slide"
              />
            </div>

          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <div className='d-flex justify-content-center align-items-center'>
              <img
                className="imgc w-100"
                src={designimg6}
                alt="Seventh slide"
              />
            </div>

          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <div className='d-flex justify-content-center align-items-center'>
              <img
                className="imgc w-100"
                src={designimg7}
                alt="Seventh slide"
              />
            </div>

          </Carousel.Item>


        </Carousel>
        <div className='para'>
          <h3>As a full-service architectural firm, Measured is engaged in every phase of a project from concept to completion, enabling the creation of environments (building, interiors and landscape) that facilitate the desires of clients. Our process ensures this.

          </h3>
        </div>
        <h1 className='process'> OUR PROCESSES</h1>

        <div className='pcontent'>

          <div className='dimg'>
            <img src={process1} alt="processone" className='pimg' />
          </div>
          <div className='ptext'>
            <h3 className='discover'>01.discover</h3>
            <p>During discovery, we work closely with clients to gain an understanding of your desires and needs, both the philosophical (how do you want to live?) and the practical (how many bedrooms and bathrooms?). We strive to learn what is important to you and work to protect that throughout the life of the project.</p>
          </div>
        </div>


        <div className='pcontent'>
          <div className='dimg'>
            <img src={process2} alt="processone" className='pimg' />
          </div>
          <div className='ptext'>
            <h3 className='discover'>02.Imagine</h3>
            <p>Here is where we get to work, composing ideas through schematic drawings that conceptually entrench the results of discovery. In close discussion with clients — and when required, the municipality — we refine these drawings until we have a master site plan, an estimated schedule and an estimated budget provided by a third-party quantity surveyor.</p>
          </div>
        </div>
        <div className='pcontent'>

          <div className='dimg'>
            <img src={process4} alt="processone" className='pimg' />
          </div>
          <div className='ptext'>
            <h3 className='discover'>03.Develop</h3>
            <p>Now we prepare formal drawings that are submitted for permit to the municipality. By now, the budget has transitioned to a chosen builder and the schedule further clarified by the client, architect and general contractor. While waiting for municipality approval, we also complete the detailed construction documentation required for the builder.</p>
          </div>
        </div>
        <div className='pcontent'>

          <div className='dimg'>
            <img src={process5} alt="processone" className='pimg' />
          </div>
          <div className='ptext'>
            <h3 className='discover'>04.Manage</h3>
            <p>Once building commences, we provide construction administration, which includes both field reviews and billing oversight. We ensure that the general contractor is building what we’ve designed and has been approved by the municipality, and we work together on solutions for conditions that could not have been foreseen and are in keeping with the original intent of the project.</p>
          </div>
        </div>

      </Wrapper>

    </>
  )
}
const Wrapper = styled.section`


.corosel{
  
  padding:0 10rem 0 10rem ;
  margin:4rem;
  
  }

.imgc{
  padding: 0 2rem 0 2rem 
  }
  .para{
    
    margin:auto;
    max-width:50%;
    text-align:center;
  }
 .process{
    margin-top:5rem;
    text-align:center;
    text-decoration:underline;
  }
 
    .discover{
    text-transform:uppercase;
    text-align:center;
    padding:2rem;
    font-size:4rem; 
    color:rgb(98 84 243);  
     }
  @media screen and (max-width:880px)
  {
    
    .discover{
      text-align:center;
      
    }
    .process{
      font-size:5rem;
      text-decoration:underline;
      
    }
  }
  .pcontent{
    display:flex;
    max-width:90%;
    border:2px dotted black;
    margin:3rem;
    padding:1rem;
  }
  .ptext{
    flex-direction:column;
    text-align:left;
    display-items:justify
    
    
  }
  .pimg{
    margin :5rem;
    width:28rem;
    
  }
  @media screen and (max-width:880px)
  {
    .pcontent{
    display:block;
    margin-left:auto;
    margin-right:auto;

  }
  .pimg{
    display:block;
    margin-left:auto;
    margin-right:auto;
  }

  }
  
  `;
export default Design
