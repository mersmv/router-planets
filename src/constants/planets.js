import { v4 } from "uuid";
import { COLORS } from "./colors";

export const PLANETS = [
    {
        id: v4(),
        name: 'MERCURY',
        img: '',
        text: 'Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Suns planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.',
        color: COLORS.mercury,
        rotation: '58,6 DAYS',
        revolution: '87.97 DAYS',
        radius: '2,439 KM',
        temp: '430ºC',
        route: '/'
    },
    {
        id: v4(),
        name: 'VENUS',
        img: '',
        text: 'Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earths night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.shortest of all the Suns planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.',
        color: COLORS.venus,
        rotation: '243 DAYS',
        revolution: '224.7 DAYS',
        radius: '6,051.8 KM',
        temp: '471ºC',
        route: '/venus'
    },
    {
        id: v4(),
        name: 'EARTH',
        img: '',
        text: 'Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earths surface is land with remaining 70.8% is covered with water. Earths distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.',
        color: COLORS.earth,
        rotation: '0.99 DAYS',
        revolution: '365.26 DAYS',
        radius: '6,371 KM',
        temp: '16ºC',
        route: '/earth'
    },
    {
        id: v4(),
        name: 'MARS',
        img: '',
        text: 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".',
        color: COLORS.mars,
        rotation: '1.03 DAYS',
        revolution: '1.88 YEARS',
        radius: '3,389.5 KM',
        temp: '-28 ºC',
        route: '/mars'
    },
    {
        id: v4(),
        name: 'JUPITER',
        img: '',
        text: 'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.',
        color: COLORS.jupiter,
        rotation: '9.93 HOURS',
        revolution: '1.88 YEARS',
        radius: '69,911 KM',
        temp: '-108ºC',
        route: '/jupiter'
    },
    {
        id: v4(),
        name: 'SATURN',
        img: '',
        text: 'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.',
        color: COLORS.saturn,
        rotation: '10.8 HOURS',
        revolution: '1.88 YEARS',
        radius: '58,232 KM',
        temp: '-138 ºC',
        route: '/saturn'
    },
    {
        id: v4(),
        name: 'URANUS',
        img: '',
        text: 'Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.',
        color: COLORS.uranus,
        rotation: '17.2 HOURS',
        revolution: '84 YEARS',
        radius: '25,362 KM',
        temp: '-195ºC',
        route: '/uranus'
    },
    {
        id: v4(),
        name: 'NEPTUNE',
        img: '',
        text: 'Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.',
        color: COLORS.neptune,
        rotation: '16.08 HOURS',
        revolution: '164.79 YEARS',
        radius: '24,622 KM',
        temp: '-201ºC',
        route: '/neptune'
    }


]