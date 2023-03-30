import {  NavLink } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../../constants/colors";

const StyledUl = styled.ul`
    list-style: none;
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
    display: flex;
    flex-direction: column;
    gap: 15px; 
    font-family: 'League Spartan', sans-serif;

    @media screen and (min-width: 768px){
        
    }

`

const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: white;
    position: relative;

    &::before{
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        left: -40px;
        background-color: grey;
        
    }
    &.active::before{
        background-color: ${({ name }) => (COLORS[name.toLowerCase()])};
    }
`

const StyledLi = styled.li`
    width: 80%;
    height: 50px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid grey;

`
export {StyledUl, StyledLink, StyledLi}