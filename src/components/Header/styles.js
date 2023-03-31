import styled from "styled-components";

const StyledHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px grey;
    padding-left: 15px;
    padding-right: 15px;

    @media screen and (min-width: 768px){
        justify-content: center;
        border-bottom: solid 1px transparent
    }
    @media screen and (min-width: 1224px){
      justify-content: space-between;
    }
`

const StyledHeaderTitle = styled.h1`
    font-size: 2.5rem;
`

const StyledTotalHeader = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 1224px){
        flex-direction: row;
        align-items: center;
    }
`

const StyledIcon = styled.img`

    @media screen and (min-width: 768px){
        display: none;
    }
    
`

export {StyledHeader, StyledTotalHeader, StyledHeaderTitle, StyledIcon}