import { v4 } from "uuid";
import { COLORS } from "./colors";

export const SATURN = [
    {
        id: v4(),
        name: 'SATURN',
        img:['./assets/planet-saturn.svg', './assets/planet-saturn-internal.svg', './assets/planet-saturn.svg', './assets/geology-saturn.png'],
        text: ['Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.', 'SDespite consisting mostly of hydrogen and helium, most of Saturns mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturns mass.', 'The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planets most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust.'],
        color: COLORS.saturn,
        source : ['https://en.wikipedia.org/wiki/Saturn', 'https://en.wikipedia.org/wiki/Saturn#Internal_structure', 'https://en.wikipedia.org/wiki/Saturn#Atmosphere'],
        rotation: '10.8 HOURS',
        revolution: '1.88 YEARS',
        radius: '58,232 KM',
        temp: '-138 ºC',
        route: '/saturn'
    }
]