import weaknesses from "../data/weakness";
import bug from "../img/Texturas/insect.png";
import dark from "../img/Texturas/dark.png";
import dragon from "../img/Texturas/dragon.png";
import electric from "../img/Texturas/Tazo_0012_ELECTRICO.png";
import fighting from "../img/Texturas/fight.png";
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

type CardProps = {
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

  return (
    <figure>
      <div>
        <img src={imageSources[type]} alt={`background for ${type} type`} />
        <img
          src={props.data.sprites.front_default}
          alt={`sprite of ${props.data.name}`}
        />
        <p>{props.data.name}</p>
      </div>
      <div>
        <div>
          <p>More info</p>
        </div>
        <button>🖤❤️</button>
        <div>
          <p>Strong against</p>
          {weaknesses[type].map((t: string) => {
            return <img src={imageSources[t]} key={t} width="20" />;
          })}
        </div>
      </div>
    </figure>
  );
}

export default Card;
