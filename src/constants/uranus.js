import { v4 } from "uuid";
import { COLORS } from "./colors";

export const URANUS = [{
    id: v4(),
    name: 'URANUS',
    img: ['./assets/planet-uranus.svg', './assets/planet-uranus-internal.svg', './assets/planet-uranus.svg', './assets/geology-uranus.png'],
    text: ['Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.', 'The standard model of Uranuss structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.', 'The composition of Uranuss atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.'],
    source: ['https://en.wikipedia.org/wiki/Uranus', 'https://en.wikipedia.org/wiki/Uranus#Internal_structure','https://en.wikipedia.org/wiki/Uranus#Atmosphere' ],
    color: COLORS.uranus,
    rotation: '17.2 HOURS',
    revolution: '84 YEARS',
    radius: '25,362 KM',
    temp: '-195ºC',
    route: '/uranus'
}]