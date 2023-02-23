import React from 'react'
import styled from 'styled-components';
import error from './images/error.jpg'
import {Button} from '../src/styles/Button'
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <Wrapper>
<img src={error} alt='error' className='errorimg'/>
<NavLink to ="/">
<Button className='btn'> Go Back</Button>
</NavLink>
    </Wrapper>
  )
}
const Wrapper = styled.section`
padding: 9rem 0;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

.btn {
  font-size: 1.8rem;
  margin-top: 5rem;
}
.errorimg{
  height:380px;
}
`;

export default Error
