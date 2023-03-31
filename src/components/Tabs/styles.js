import styled from "styled-components";



const StyledTabContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 20px;
    border-bottom: 1px solid grey;
`

const StyledTabTitle = styled.h3`
    position: relative;
    &::before{
        content: '';
        width: 100%;
        height: 5px;
        position: absolute;
        bottom: 5px;
        background-color: ${({ color }) => color};
    }

`

export {StyledTabContainer, StyledTabTitle}