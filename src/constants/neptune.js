import { v4 } from "uuid";
import { COLORS } from "./colors";

export const NEPTUNE = [{
    id: v4(),
    name: 'NEPTUNE',
    img: ['./assets/planet-saturn.svg', './assets/planet-saturn-internal.svg', './assets/planet-saturn.svg', './assets/geology-saturn.png'],
    text: ['Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.', 'Neptunes internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.', 'Neptunes atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.'],
    source: ['https://en.wikipedia.org/wiki/Neptune', 'https://en.wikipedia.org/wiki/Neptune#Internal_structure', 'https://en.wikipedia.org/wiki/Neptune#Atmosphere'],
    color: COLORS.neptune,
    rotation: '16.08 HOURS',
    revolution: '164.79 YEARS',
    radius: '24,622 KM',
    temp: '-201ºC',
    route: '/neptune'
}]