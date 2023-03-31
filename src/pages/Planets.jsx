import Tabs from "../components/Tabs/Tabs"
import { COLORS } from "../constants/colors"

const Planet = ({name}) => {
    return (
        <Tabs color={COLORS[name.toLowerCase()]}/>
    )
}

export default Planet