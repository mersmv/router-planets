import {Routes, Route} from 'react-router-dom';
import { PLANETS } from '../constants/planets';
import Planet from '../pages/Planets';

const Router = () => {
    return (
        <Routes>
            {PLANETS.map(planet =>(
                <Route path={planet.route} element={<Planet {...planet}/>}/>
            ))}
            

        </Routes>
    )
}

export default Router