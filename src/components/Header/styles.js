import styled from "styled-components";

const StyledHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px grey;
`

const StyledHeaderTitle = styled.h1`
    font-size: 2.5rem;
`

const StyledTotalHeader = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export {StyledHeader, StyledTotalHeader, StyledHeaderTitle}