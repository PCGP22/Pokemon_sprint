import dark from "../img/Texturas/dark.png";
import dragon from "../img/Texturas/dragon.png";
import fighting from "../img/Texturas/fight.png";
import ghost from "../img/Texturas/gh.png";
import ground from "../img/Texturas/ground.png";
import ice from "../img/Texturas/ice.png";
import insect from "../img/Texturas/insect.png";
import normal from "../img/Texturas/normal.png";
import poison from "../img/Texturas/poison.png";
import psychic from "../img/Texturas/psychic.png";
import rock from "../img/Texturas/rock.png";
import steel from "../img/Texturas/steel.png";
import electric from "../img/Texturas/Tazo_0012_ELECTRICO.png";
import water from "../img/Texturas/Tazo_0013_AGUA.png";
import fire from "../img/Texturas/Tazo_0014_FUEGO.png";
import grass from "../img/Texturas/Tazo_0015_HIERBA.png";

type CardProps = {
  data: {
    abilities: object[],
    base_experience: number,
    forms: object[],
    game_indices: object[],
    height: number,
    held_items: [] | object[],
    id: number,
    is_default: boolean,
    location_area_encounters: string,
    moves: object[],
    name:string,
    order:number,
    past_types: [] | object[],
    species: object,
    sprites: object,
    stats: object[],
    types: [
        {
            slot:number,
            type: {
                name:string,
                url:string,
            }   
        }
    ],
    weight: number,
  }
};

function Card(props: CardProps) {
  return (

      <figure>
    <img src={props.data.types[0].type.name}/>
    props.data

  </figure>;
)
}

export default Card;
