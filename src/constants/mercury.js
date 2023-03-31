import { v4 } from "uuid";
import { COLORS } from "./colors";

export const MERCURY = {
    size: 90,
    id: v4(),
        name: 'MERCURY',
        img: ['./assets/planet-mercury.svg', './assets/planet-mercury-internal.svg', './assets/planet-mercury.svg', './assets/geology-mercury.png'],
        text: ['Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Suns planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.', 'Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planets density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earths density.', 'Mercurys surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Marss or the Moons.'],
        source: ['https://en.wikipedia.org/wiki/Mercury_(planet)', 'https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure', 'https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology'],
        color: COLORS.mercury,
        rotation: '58,6 DAYS',
        revolution: '87.97 DAYS',
        radius: '2,439 KM',
        temp: '430ºC',
        route: '/'
}