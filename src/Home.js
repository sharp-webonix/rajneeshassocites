
import Carousel from 'react-bootstrap/Carousel';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from './styles/Button';
import heroimg2 from './images/heroimg2.jpeg';
import Services from './Services'
import Contact from './Contact';



const Home = () => {
  
  return (
    <>
    <Wrapper>
<div className='container grid grid-two-column'>
<div className='section-hero-data'>
    <p className='hero-top-data'>THIS IS US</p>
    <h1 className='hero-heading'>M/S Rajneesh Associates</h1>
    <p className='hero-para'>
    We practice situational modernism — a subject-based, humanist approach that considers a project through the aspirations of a client, the opportunities of a site and the constraints of a municipality, budget and schedule. We work to understand these need sets — to treat them as minimum standards of practice — and move forward to create ideal spaces based on this criteria. The measure of success for us is when clients tell us that while the space might not look like what they had imagined, their experience of it is what they had desired at the project outset.
    </p>
    <NavLink to="/services" className='btn' >
    <Button className='btn hireme-btn'>
    Our Works
</Button>
</NavLink>
</div>

<div className='section-hero-image '>
    <picture>
        
        <Carousel className='corosel'>
      <Carousel.Item interval={1000}>
      <div className='d-flex justify-content-center align-items-center'> 
        <img
          className="d-block w-100 hero1"
          src={heroimg2}
          alt="First slide"
        />
        </div>
        
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <div className='d-flex justify-content-center align-items-center'> 
        <img
          className="d-block w-100 hero1"
          src={heroimg2}
          alt="Second slide"
        />
        </div>
       
      </Carousel.Item>
      <Carousel.Item interval={1000}>
       <div className='d-flex justify-content-center align-items-center'> 
       <img
          className="d-block w-100 hero1"
          src={heroimg2}
          alt="Third slide"
        />
        </div>
        
      </Carousel.Item>
    </Carousel>
        
    </picture>
</div>

</div> 


    </Wrapper>
    <Services/>
    <Contact/>
    </>
  )
}
const Wrapper=styled.section`  padding: 9rem 0;
.section-hero-data {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.btn {
  max-width: 16rem;
}
.hero-top-data {
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.helper};
}
.hero-heading {
  text-transform: uppercase ;
  font-size: 3.8rem;
  font-weight: 900;
}
.hero-para {
  margin-top: 1.5rem;
  margin-bottom: 3.4rem;
  max-width: 60rem;
}
.section-hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}
picture {
  text-align: center;
}

.hero1{
  ${'' /* height:30rem; */}
  
}
@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .grid {
    gap: 7.2rem;
  }
}`;


    
 

export default Home
