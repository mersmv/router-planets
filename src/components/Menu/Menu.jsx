
import { PLANETS } from "../../constants/planets"
import { StyledIcon, StyledLi, StyledLink, StyledUl } from "./styles"

const Menu = ({open}) => {
    
 return (
        <StyledUl open={open}>
            {PLANETS.map((planet, index) =>(
                <StyledLi key={planet.id}>
                    <StyledLink name={planet[index].name} to={planet.route}>{planet.name}</StyledLink>
                    <StyledIcon src="/assets/icon-chevron.svg" alt="" />
                </StyledLi>
            ))}

        </StyledUl>
    )
}

export default Menu