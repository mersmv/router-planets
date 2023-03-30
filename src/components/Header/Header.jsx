import { useState } from "react"
import Menu from "../Menu/Menu"
import { StyledHeader, StyledHeaderTitle, StyledTotalHeader } from "./styles"

const Header = () => {
    const [open, setOpen] = useState(true)
    return (
        <StyledTotalHeader>
            <StyledHeader>
            <StyledHeaderTitle>THE PLANETS</StyledHeaderTitle>
            <img src="./public/assets/icon-hamburger.svg" alt="" onClick={() => setOpen(!open)}/>
            </StyledHeader>
            <Menu open={open}></Menu>
        </StyledTotalHeader>
    )
}

export default Header