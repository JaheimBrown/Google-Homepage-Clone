import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Profile from '../../images/Profile.svg'

const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  font-size: 14px;
`;

const LeftLinks = styled.div`
  padding: 10px;
  margin-left: 10px;
`;

const RightLinks = styled.div`
  padding: 10px;
  margin-right: 16px;
  display: flex;
  align-items: center;
  `;

const NavLinks = styled(Link)`
  padding: 0 8px;
  text-decoration: none;
  color: #000;

  &:hover {
      text-decoration: underline;
  }

  svg {
    height: 32px;
    width: 32px;
    padding: 5px;
    transition: .3s ease;
    border-radius: 50%;
    background-color: transparent;

      &:hover {
        background-color: #f2f2f2;
        
      }
  }

  img{
    height: 32px;
    width: 32px;
    padding: 5px;
    transition: .3s ease;
    border-radius: 50%;
    background-color: transparent;

      &:hover {
        background-color: #f2f2f2;
        
      }
    }
  
`;

const Navbar = () => {
    return (
        <Container>
            <LeftLinks>
                <NavLinks to='/about'>About</NavLinks>
                <NavLinks to='/store'>Store</NavLinks>           
            </LeftLinks>
            <RightLinks>
                <NavLinks to='/gmail'>Gmail</NavLinks>
                <NavLinks to='/images'>Images</NavLinks>
                <NavLinks to='/' >
                    <svg focusable='false' viewBox='0 0 24 24'>
                        <path d='M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z' />
                    </svg>
                </NavLinks>
                <NavLinks to='/'>
                    <img src={Profile} alt='profile' />
                </NavLinks>
            </RightLinks>
        </Container>
    )
}

export default Navbar
