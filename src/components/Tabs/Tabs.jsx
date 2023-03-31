import { StyledTabContainer, StyledTabTitle } from "./styles"


const Tabs = ({color}) => {
    const [active, setActive] = useState(0);
    return (
        <StyledTabContainer>
            <StyledTabTitle color={color} onClick={()=> setActive(0)}>Overview</StyledTabTitle>
            <StyledTabTitle color={color} onClick={() => setActive(1)}>Structure</StyledTabTitle>
            <StyledTabContainer color={color} onClick={() => setActive(2)}>Surface</StyledTabContainer>
        </StyledTabContainer>

    )
}
export default Tabs