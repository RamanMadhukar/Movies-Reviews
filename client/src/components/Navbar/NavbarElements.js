import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: transparent;
  height: 60px;
  display: flex;
  justify-content: center;
  padding: 16px 7%;
  z-index: 10;

  @media screen and (max-width: 768px){
    background: #0f2133;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: flex-start;
    align-items: stretch;
    height: fit-content;

  }

`;

export const NavLink = styled(Link)`
  color: #abb7c4;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  text-decoration: none;
  text-transform: uppercase;
  padding: 0 2rem;
  height: 100%;
  cursor: pointer;

  &:hover{
    color: #dcf836;
  }

  @media screen and (max-width: 768px) {
    padding: 1rem 1rem;

    
  }
`;

export const Bars = styled.div`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  ${'' /* margin-left: 150px; */}
  white-space: nowrap;


  @media screen and (max-width: 768px) {
    display: none; 
    margin-left: 0;
    white-space: nowrap;
    flex-direction: column;
    align-items: flex-start;

  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  justify-content: flex-end;
  width: 100vw;


  @media screen and (max-width: 768px) {
    display: none; 
    justify-content: center;
    width: fit-content;

  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;