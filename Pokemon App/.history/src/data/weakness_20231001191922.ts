
type Types = "bug" | "dark" | "dragon" | "electric" | "fighting" | "fire" | "ghost" | "grass" | "normal" | "none" | "psychic" | "ground" | "ice" | "poison" | "rock" | "steel" | "water" | "flying"

type weaknesses = {
    // [index: string]: string;
    bug: Types[],
    dark: Types[],
    dragon: Types[],
    electric: Types[],
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

const weaknesses:weaknesses = {
  bug: ["grass", "psychic", "dark"],
  dark: ["psychic", "ghost"],
  dragon: ["dragon"],
  electric: ["water","flying"],
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
