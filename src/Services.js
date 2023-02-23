import React from 'react'
import styled from 'styled-components'
import { Button } from './styles/Button';
import design from "./images/design/designfront.jpg"
import qalab from "./images/Lab/qalab.jpeg"
import { NavLink } from 'react-router-dom';



const Services = () => {
  return (
  <>
    <Wrapper>
    <h2 className="common-heading">OUR SERVICES</h2>
    <div className='container'>
      <div className='left'>
        <h2 className='one'>Design</h2>
        <img src={design}  className ='design' alt='design'/>
        <p>Rajneesh Associates is a full-service Vancouver-based studio practice focused on modern design, interiors and landscapes. Current projects include residential and vacation homes, multi-family housing, as well as public spaces. Our work is split equally between new builds and renovations.</p>
        <NavLink to="/Design">
        <Button className='btn btn-1'>Click To design</Button>
        </NavLink>
      </div>
      <div className='right'>
      <h2 className='second'>LAB</h2>
      <img src={qalab}  className ='labf' alt='lab'/>
      <p>Rajneesh Associates Are into Analysis of complete parameters of building material testing, to identify the durability, strength and sustainability of the products or material which as used in construction of roads, highway, building etc. building material testing laboratory also plays an important role to identify the properties present in the material used for construction purposes.</p>      <NavLink to="/Lab">
       <Button className='btn btn-2'>QA lab</Button>
       </NavLink>
      </div>
    </div>
    </Wrapper>
    </>
  )
}
const Wrapper = styled.section`


 

 .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(98 84 243);
      font-size: 1.4rem;
      &:hover {
        background-color: rgb(98 84 243);
        color: #fff;
      }
 }
 div.container{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

  }
 p{
  font-size: 1rem;
  width:200px;
  line-height: 1.5;
  word-wrap: break-word;    
   
 }
 

.left , .right{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border:1px solid black;
    padding: 0 4px;
    box-shadow:2px 2px 2px ;
    border-radius:8px;
    margin:8rem;
    height:65rem;
     

}
.right{
  margin:2rem;
}
img{
  transition: transform .2s
  border-radius:8px;
  max-height:30rem;
  padding : 10px;
}
img:hover{
  transform: scale(1.1  ); 
}

.one{
  margin:2rem 0 2rem 0;
}
.second{
  margin:2rem 0 2rem 0;
}
.labf{
  width:40rem;
  height:37rem;
}




@media (max-width: ${({ theme }) => theme.media.tab}) {
    .grid-three-column {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    
    .container{
    flex-direction:column;
    
    }
  }
`;

export default Services
