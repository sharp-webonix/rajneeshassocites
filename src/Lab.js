import React from 'react'
import styled from 'styled-components'
import Carousel from 'react-bootstrap/Carousel';
import one from "./images/Lab/qa/1.jpeg"
import two from "./images/Lab/qa/2.jpg"
import three from "./images/Lab/qa/3.jpg"
// import four from "./images/Lab/qa/4.jpeg"
import five from "./images/Lab/qa/5.jpg"
import bit from "./images/Lab/bit.jpeg"
import ctm from "./images/Lab/ctm.jpg"
import peterometer from "./images/Lab/peterometer.jpg"
import sieve from "./images/Lab/sieve.jpg"
import UTS from "./images/Lab/UTS.jpg"
const Lab = () => {
  return (
    <Wrapper>
    <h2>QUALITY ASSURANCE LAB</h2>
    <Carousel className='corosel'>
          <Carousel.Item interval={1000}>
            <div className='d-flex justify-content-center align-items-center'>
              <img
                className="d-block w-100"
                src={one}
                alt="First slide"
              />
            </div>


          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <div className='d-flex justify-content-center align-items-center'>
              <img
                className="d-block w-100"
                src={two}
                alt="Second slide"
              />
            </div>

          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <div className='d-flex justify-content-center align-items-center'>
              <img
                className=" w-100"
                src={three}
                alt="Third slide"
              />
            </div>

          </Carousel.Item>
          {/* <Carousel.Item interval={1000}>
            <div className='d-flex justify-content-center align-items-center'>
              <img
                className=" w-100"
                src="{four}"
                alt="Fourth slide"
              />
            </div>

          </Carousel.Item> */}
          <Carousel.Item interval={1000}>
            <div className='d-flex justify-content-center align-items-center'>
              <img
                className="imgc w-100"
                src={five}
                alt="Sixth slide"
              />
            </div>

          </Carousel.Item>
          </Carousel>
          <h1 className='process'> OUR MACHINES</h1>

        <div className='pcontent'>

          <div className='dimg'>
            <img src={bit} alt="processone" className='pimg' />
          </div>
          <div className='ptext'>
            <h3 className='discover'>01.Bitumen Extractor</h3>
            <p>Used for separation and extraction of bitumen by use of perchloroethylene or trichloroethylene solvents and sieving, for the separation of filler by centrifuge action and for the recovery of solvent material. The complete cycle is carried out automatically.</p>
          </div>
        </div>


        <div className='pcontent'>
          <div className='dimg'>
            <img src={ctm} alt="processone" className='pimg' />
          </div>
          <div className='ptext'>
            <h3 className='discover'>02.CTM</h3>
            <p>Compression tests are performed to characterize the behavior of a material under compressive loading. During the test, pressure is applied to a specimen using compression platens or special tools mounted on a universal testing machine to determine various properties of the material being tested.</p>
          </div>
        </div>
        <div className='pcontent'>

          <div className='dimg'>
            <img src={peterometer} alt="processone" className='pimg' />
          </div>
          <div className='ptext'>
            <h3 className='discover'>03.Penetro meter</h3>
            <p>
A diagnostic tool to measure the extent and depth of subsurface compaction is a penetrometer, or soil compaction tester. This tool can help producers determine if subsoiling might be beneficial and at what depth the subsoiler should be set.</p>
          </div>
        </div>
        
       
        <div className='pcontent'>

          <div className='dimg'>
            <img src={sieve} alt="processone" className='pimg' />
          </div>
          <div className='ptext'>
            <h3 className='discover'>04.sieve shaker</h3>
            <p>Sieve shakers are devices designed to help promote particle movement through a stack of sieves, facilitating accurate particle separation. As the particle separate, they are retained on the various sieves depending on their size, providing insight into the average particle size of your sample.</p>
          </div>
        </div>
        <div className='pcontent'>

          <div className='dimg'>
            <img src={UTS} alt="processone" className='pimg' />
          </div>
          <div className='ptext'>
            <h3 className='discover'>05.CBR TEST MACHINE</h3>
            <p>It defines the relative bearing ratio and expansion characteristics under known surcharge weight of base, sub-base, and sub-grade soils for the design of pavements, roads, and runways. The CBR test is used widely in the control of sub-grades and selection of materials.</p>
          </div>
        </div>
    </Wrapper>
  )
}
const Wrapper= styled.section`
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

export default Lab
