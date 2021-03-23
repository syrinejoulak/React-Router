import shawshank from "../Movies/ShawshankRedemption.jpg";
import apocalypto from "../Movies/Apocalypto.jpg";
import gladiator from "../Movies/Gladiator.jpg";
import interstellar from "../Movies/Interstellar.jpg";
import joker from "../Movies/Joker.jpg";
import scarface from "../Movies/Scarface.jpg";
import tenet from "../Movies/Tenet.jpg";
import godfather from "../Movies/TheGodfather.jpg";
import greenmile from "../Movies/TheGreenMile.jpg";
import godzilla from "../Movies/godzilla.jpg";
import suicide from "../Movies/suicide.jpg";

export const movies = [
  {
    poster: shawshank,
    title: "The Shawshank Redemption",
    rate: 9.3,
    overview:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    trailer: (
      <iframe
        src="https://www.youtube.com/embed/6hB3S9bIaco"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        className="trailer"
      ></iframe>
    ),
  },
  {
    poster: apocalypto,
    title: "Apocalypto",
    rate: 7.8,
    overview:
      "As the Mayan kingdom faces its decline, a young man is taken on a perilous journey to a world ruled by fear and oppression.",
    trailer: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ngWBddVNVZs"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        className="trailer"
      ></iframe>
    ),
  },
  {
    poster: suicide,
    title: "Suicide Squad",
    rate: 6.1,
    overview:
      "A secret government agency recruits some of the most dangerous incarcerated super-villains to form a defensive task force. Their first mission: save the world from the apocalypse.",
    trailer: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/WI3hecGO_04"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        className="trailer"
      ></iframe>
    ),
  },
  {
    poster: gladiator,
    title: "Gladiator",
    rate: 8.5,
    overview:
      "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    trailer: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/owK1qxDselE"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        className="trailer"
      ></iframe>
    ),
  },
  {
    poster: interstellar,
    title: "Interstellar",
    rate: 8.6,
    overview:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    trailer: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/zSWdZVtXT7E"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        className="trailer"
      ></iframe>
    ),
  },
  {
    poster: joker,
    title: "Joker",
    rate: 8.4,
    overview:
      "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
    trailer: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/zAGVQLHvwOY"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        className="trailer"
      ></iframe>
    ),
  },
  {
    poster: scarface,
    title: "Scarface",
    rate: 8.3,
    overview:
      "In 1980 Miami, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.",
    trailer: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/cv276Wg3e7I"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        className="trailer"
      ></iframe>
    ),
  },
  {
    poster: tenet,
    title: "Tenet",
    rate: 7.5,
    overview:
      "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
    trailer: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/AZGcmvrTX9M"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        className="trailer"
      ></iframe>
    ),
  },
  {
    poster: godfather,
    title: "The godfather",
    rate: 9.2,
    overview:
      "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
    trailer: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/sY1S34973zA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        className="trailer"
      ></iframe>
    ),
  },
  {
    poster: greenmile,
    title: "The green mile",
    rate: 8.6,
    overview:
      "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
    trailer: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Ki4haFrqSrw"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        className="trailer"
      ></iframe>
    ),
  },
  {
    poster: godzilla,
    title: "Godzilla: King of the Monsters",
    rate: 6.1,
    overview:
      "The crypto-zoological agency Monarch faces off against a battery of god-sized monsters, including the mighty Godzilla, who collides with Mothra, Rodan, and his ultimate nemesis, the three-headed King Ghidorah.",
    trailer: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/odM92ap8_c0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        className="trailer"
      ></iframe>
    ),
  },
];
