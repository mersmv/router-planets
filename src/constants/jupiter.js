import { v4 } from "uuid";
import { COLORS } from "./colors";

export const JUPITER = {
  
    size: 90,
    id: v4(),
        name: 'JUPITER',
        img: ['./assets/planet-jupiter.svg', './assets/planet-jupiter-internal.svg', './assets/planet-jupiter.svg', './assets/geology-jupiter.png'],
        text: ['Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.', 'When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiters formation, which would have disrupted an originally solid Jovian core.', 'The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.'],
        source: ['https://en.wikipedia.org/wiki/Jupiter', 'https://en.wikipedia.org/wiki/Jupiter#Internal_structure', 'https://en.wikipedia.org/wiki/Jupiter#Great_Red_Spot_and_other_vortices'],
        color: COLORS.jupiter,
        rotation: '9.93 HOURS',
        revolution: '1.88 YEARS',
        radius: '69,911 KM',
        temp: '-108ºC',
        route: '/jupiter'
}