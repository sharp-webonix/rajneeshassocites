import React from 'react'
import styled from 'styled-components'
import Carousel from 'react-bootstrap/Carousel';
import logo from "./images/testimonial/logo.jpg"
const testimonial = () => {
  return (
    <Wrapper>
      <h2>Our Customers</h2>
      <Carousel className='corosel'>
          <Carousel.Item interval={1000}>
        <div className='medias d-flex justify-content-between '>
            <div className='d-flex justify-content-center align-items-center'>
              {/* <img
                className="d-block "
                src={logo}
                alt="First slide"
              /> */}
            </div>
            <div className='d-flex justify-content-center align-items-center flex-column'>
              <Carousel.Caption className='position-static '>
                <div >
                  <h3>D. bali Infrastructures & Developers Ltd.</h3>
                  <p>Incredible dedication from the team, very responsive and enthusiastic. Always willing to accommodate our requirements. Very talented individuals working on the project who took a genuine interest in the project which showed in the quality of the outcomes.
                  </p>
                </div>
              </Carousel.Caption>
            </div>
        </div>
          </Carousel.Item>
        <Carousel.Item interval={1000}>
        <div className='medias d-flex justify-content-between '>

          <div className='d-flex justify-content-center align-items-center'>
          
          </div>
          <div className='d-flex justify-content-center align-items-center flex-column'>
          <Carousel.Caption className='position-static'>
            <h3>Unipro Infrastructure Pvt. Ltd.</h3>
            <p>
            Always willing to go the extra mile to ensure the projects success. Innovative ideas and advice to enhance the value of the outcome. They built a level of trust where we feel like we are delivering the project as partners.
            </p>
          </Carousel.Caption>
          </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
        <div className='medias d-flex justify-content-between '>

          <div className='d-flex justify-content-center align-items-center'>
          
          </div>
          <div className='d-flex justify-content-center align-items-center flex-column'>
          <Carousel.Caption className='position-static'>
            <h3>RK Engineer's Sales Ltd.</h3>
            <p>
            A very hard working and professional team who approach a project like it's their own. Got my planning permission obtained promptly for a commercial project. Highly recommended.
            We appreciate your expeditiousness. Youth has a vibrancy and energy that is infectious. We wish you all well. </p>
          </Carousel.Caption>
          </div>
          </div>
        </Carousel.Item>
        
      </Carousel>
    </Wrapper>
  )
}
const Wrapper = styled.section`

img{
 text-align:center;
 max-width:100%;
 max-height:200rem;
 filter: grayscale(100%);
 cursor:pointer;
}

h3{
  color:black;
  
}
.corosel{
  border:solid 2px #C8C8C8;
  padding: 1rem;
  margin:4rem;
  border-radius:10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow:2px 2px 2px #C8C8C8;
  background-color:#C8C8C8;
   
}
p{
  color:black;
  ${'' /* text-align:center; */}
}
@media screen and (max-width:800px){
  .medias{
    flex-direction:column;
  }
  img{
    height:22rem;
  }
}`;
export default testimonial
