import { v4 } from "uuid"
import { COLORS } from "./colors"

export const EARTH =  [
    {id: v4(),
        name: 'EARTH',
        img: ['./assets/planet-earth.svg', './assets/planet-earth-internal.svg', './assets/geology-earth.png', './assets/geology-earth.png'],
        text: ['Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earths surface is land with remaining 70.8% is covered with water. Earths distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.', 'Earths interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.', 'The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.'],
        source: ['https://en.wikipedia.org/wiki/Earth', 'https://en.wikipedia.org/wiki/Earth#Internal_structure', 'https://en.wikipedia.org/wiki/Earth#Surface'],
        color: COLORS.earth,
        rotation: '0.99 DAYS',
        revolution: '365.26 DAYS',
        radius: '6,371 KM',
        temp: '16ºC',
        route: '/earth'}
]