import { Route, Routes } from "react-router"


function App() {
 let allPokemon = []
  fetch("https://pokeapi.co/api/v2/pokemon?limit=151").then(res=>res.json()).then(res=> allPokemon = res)

  return (
    <>
      <Routes>
        <Route path="/" element="/" />
        <Route path="/home" element="" />
        <Route path="/login" element="/login" />
        <Route path="/register" element="/register" />
        <Route path="/pokedex" element="" />
        <Route path="/create_pokemon" element="" />
        <Route path="/favorites" element="" />
      </Routes>
    </>
  )
}

export default App
