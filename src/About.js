import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from './styles/Button';
import about from './images/about1.png';




const About = () => {
  
  return (
    
    <Wrapper>
<div className='container grid grid-two-column'>
<div className='section-hero-data'>
    <p className='hero-top-data'>THIS IS Me</p>
    <h1 className='hero-heading'>mr. Rajesh Kumar</h1>
    <p className='hero-para'>
    Hello, My Name Is Rajesh Kumar.
    I'm Proprietor of M/S Rajneesh Associates, Our office is located in Kashipur.
    We have been pioneer in this field since 2006 and in future also I'm Always ready to serve you.
    

        </p>
    <NavLink to="/contact" className='btn' >
    <Button className='btn hireme-btn'>
    Contact me
</Button>
</NavLink>
</div>

<div className='section-hero-image'>
    <picture>
        <img src={about} alt='hii' className='hero-img'/>
        
    </picture>
</div>

</div> 
<div className='vision'>
<h2 className='heading'>Our Vision & Commitment</h2>
<p className='para'>We always take the necessary steps in considering every detail and element to ensure the design showcases every aspect of the final product, whether it be a luxury custom home or a 60 floor condominium with mixed-use commercial space. Each client has their own specific timeline and expectations, that is why the process of workflow is always initiated by the client and then thoroughly assessed. Once a timeline is outlined and the site plan is approved the working drawings begin. The working drawings are the site plan, plans, reflected ceiling plans, wall sections and other necessary project details. Each project is a process of constant collaborative exchange between firm and client from initial inquiry to well beyond project completion. To ensure the successful completion of every project, our president is directly involved and oversees every project through from start to finish.</p>
</div>


    </Wrapper>
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
  font-size: 3rem;
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

.hero-img {
  max-width: 500px;
  margin-right:15rem;
}
@media screen and (max-width:770px)
{
  .hero-img{
    width:300px;
  }
}
@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .grid {
    gap: 7.2rem;
  }
}
.vision{
  margin:5rem;
  padding:0 5rem 5rem 5rem;
  border: 1px solid black;
  border-radius:5px;
  align-items:justify;
}

.heading{
  text-decoration:underline dotted 3px;
}
@media screen and (max-width:325px)
{
  .heading{
    font-size:25px;
  }
}
.para{
  margin-top:3rem;
 
}`;


    
 

export default About
