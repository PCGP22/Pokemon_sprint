
type Types = "bug" | "dark" | "dragon" | "fairy" | "electric" | "fighting" | "fire" | "ghost" | "grass" | "normal" | "none" | "psychic" | "ground" | "ice" | "poison" | "rock" | "steel" | "water" | "flying"

type index = {
  [index: string]: string | any;
}

type TypesArray = {
    bug: Types[],
    dark: Types[],
    dragon: Types[],
    electric: Types[],
    fairy: Types[],
    fighting: Types[],
    fire: Types[],
    ghost: Types[],
    grass: Types[],
    normal: Types[],
    psychic: Types[],
    ground: Types[],
    ice: Types[],
    poison: Types[],
    rock: Types[],
    steel: Types[],
    water: Types[],
}

type weaknesses = index & TypesArray

const weaknesses:weaknesses = {
  bug: ["grass", "psychic", "dark"],
  dark: ["psychic", "ghost"],
  dragon: ["dragon"],
  electric: ["water","flying"],
  fairy:["fighting", "dragon", "dark"],
  fighting: ["normal","ice","rock","dark","steel"],
  fire: ["grass","ice","bug","steel"],
  ghost: ["psychic", "ghost"],
  grass: ["water", "ground", "rock"],
  normal: ["none"],
  psychic: ["fighting", "poison"],
  ground: ["fire", "electric", "poison", "steel"],
  ice: ["grass", "ground", "flying", "dragon"],
  poison: ["grass"],
  rock: ["fire", "ice", "flying", "bug"],
  steel: ["ice", "rock"],
  water: ["fire", "ground", "rock"],
};

export default weaknesses
