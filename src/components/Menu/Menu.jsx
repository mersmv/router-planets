
import { PLANETS } from "../../constants/planets"
import { StyledLi, StyledLink, StyledUl } from "./styles"

const Menu = () => {
 return (
        <StyledUl>
            {PLANETS.map(planet =>(
                <StyledLi key={planet.id}>
                    <StyledLink name={planet.name} to={planet.route}>{planet.name}</StyledLink>
                    <img src="/assets/icon-chevron.svg" alt="" />
                </StyledLi>
            ))}

        </StyledUl>
    )
}

export default Menu