import {Routes, Route} from 'react-router-dom';
import Planet from '../pages/Planets';

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Planet}/>
        </Routes>
    )
}

export default Router