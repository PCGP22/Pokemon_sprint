import weaknesses from "../data/weakness";
import bug from "../img/Texturas/insect.png";
import dark from "../img/Texturas/dark.png";
import dragon from "../img/Texturas/dragon.png";
import electric from "../img/Texturas/Tazo_0012_ELECTRICO.png";
import fighting from "../img/Texturas/fight.png";
import flying from "../img/Texturas/flying.png";
import fire from "../img/Texturas/Tazo_0014_FUEGO.png";
import ghost from "../img/Texturas/ghost.png";
import grass from "../img/Texturas/Tazo_0015_HIERBA.png";
import ground from "../img/Texturas/ground.png";
import ice from "../img/Texturas/ice.png";
import normal from "../img/Texturas/normal.png";
import poison from "../img/Texturas/poison.png";
import psychic from "../img/Texturas/psychic.png";
import rock from "../img/Texturas/rock.png";
import steel from "../img/Texturas/steel.png";
import water from "../img/Texturas/Tazo_0013_AGUA.png";
import pokeball from "../img/Poké_Ball_icon.svg.png";

type CardProps = {
  data: FullPokemonInfo;
};

type FullPokemonInfo = {
  abilities: object[];
  base_experience: number;
  forms: object[];
  game_indices: object[];
  height: number;
  held_items: [] | object[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: object[];
  name: string;
  order: number;
  past_types: [] | object[];
  species: object;
  sprites: {
    front_default: string;
    back_default: string;
  };
  stats: object[];
  types: [
    {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }
  ];
  weight: number;
};

type imageSources = {
  [index: string]: string;
};

function Card(props: CardProps) {
  let imageSources: imageSources = {
    bug: bug,
    dark: dark,
    dragon: dragon,
    electric: electric,
    fighting: fighting,
    fire: fire,
    flying: flying,
    ghost: ghost,
    grass: grass,
    normal: normal,
    none: "",
    psychic: psychic,
    ground: ground,
    ice: ice,
    poison: poison,
    rock: rock,
    steel: steel,
    water: water,
  };

  let type = props.data.types[0].type.name;
  let name: string = props.data.name;
  let rest = name.slice(1, name.length);
  let firstLetter = name[0].toUpperCase();
  name = firstLetter + rest;

  return (
    <figure className="flippo">
      <div className="flippo__face">
        <img
          src={imageSources[type]}
          alt={`background for ${type} type`}
          width="200"
        />
        <img
          src={props.data.sprites.front_default}
          alt={`sprite of ${props.data.name}`}
          width="180"
          className="flippo__sprite"
        />
        <svg
          viewBox="0 -20 150 150"
          width="150"
          height="150"
          className="flippo__name">
          <defs>
            <path id="circle" d="m 0 20 a 3 3 20 0 0 130 -155" />
          </defs>
          <text fill="white" className="flippo__name__text">
            <textPath xlinkHref="#circle" className="flippo__name__text">
              #{props.data.id} {name}
            </textPath>
          </text>
        </svg>
      </div>
      <div className="flippo__face">
        <img src={pokeball} alt="Pokeball back image" width="200" />
        <button className="flippo__favorite" diabled>
          🖤
        </button>
        {/* <button className="flippo__favorite">❤️</button> */}

        <div className="flippo__weaknesses">
          <p>Strong against</p>
          {weaknesses[type]?.map((t: string) => (
            <img src={imageSources[t]} key={t} width="20" />
          ))}
        </div>
      </div>
    </figure>
  );
}

export default Card;
