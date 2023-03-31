import { v4 } from "uuid";
import { COLORS } from "./colors";

export const VENUS = {
    size: 90,
    id: v4(),
    name: 'VENUS',
    img: ['./assets/planet-venus.svg', './assets/planet-venus-internal.svg', './assets/geology-venus.png', './assets/geology-venus.png'],
    text: ['Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earths night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.', 'The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.', 'Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.'],
    source: ['https://en.wikipedia.org/wiki/Venus', 'https://en.wikipedia.org/wiki/Venus#Internal_structure', 'https://en.wikipedia.org/wiki/Venus#Surface_geology' ],
    color: COLORS.venus,
    rotation: '243 DAYS',
    revolution: '224.7 DAYS',
    radius: '6,051.8 KM',
    temp: '471ºC',
    route: '/venus'
}