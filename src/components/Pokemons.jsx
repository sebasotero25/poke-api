import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PokemonCard from "./PokemonCard";

const Pokemons = () => {
  const userName = useSelector((state) => state.name);
  const [pokemons, setPokemons] = useState([]);
  const [pokemonName, setPokemonName] = useState("");
  const [types, setTypes] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100")
      .then((res) => setPokemons(res.data.results));

    axios
      .get("https://pokeapi.co/api/v2/type")
      .then((res) => setTypes(res.data.results));
  }, []);

  const searchPokemon = () => {
    navigate(`/pokemons/${pokemonName}`);
  };
  const filterType = (e) => {
    axios.get(e.target.value).then((res) => setPokemons(res.data.pokemon));
  };
  const [page, setPage] = useState(1);
  const pokemonsPerPage = 10;
  const lastIndex = page * pokemonsPerPage;
  const firstIndex = lastIndex - pokemonsPerPage;
  const pokemonPaginated = pokemons.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(pokemons?.length / pokemonsPerPage);
  const numbers = [];
  for (let i = 1; i <= totalPages; i++) {
    numbers.push(i);
  }
  return (
    <div>
      <h1>Pokemons</h1>
      <p>Welcome {userName} !</p>
      <div>
        <input
          type="text"
          placeholder="Search Pokemon"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
        />
        <button onClick={searchPokemon}>Search</button>
        <select onChange={filterType} name="" id="">
          {types.map((type) => (
            <option key={type.url} value={type.url}>
              {type.name}
            </option>
          ))}
        </select>
        <div>
          <button onClick={() => setPage(page - 1)} disabled={page === 1}>
            Prev pag
          </button>
          {numbers.map((number) => (
            <button key={number} onClick={() => setPage(number)}>
              {number}
            </button>
          ))}
          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
          >
            Next pag
          </button>
        </div>
      </div>
      <ul>
        {pokemonPaginated.map((pokemon) => (
          <PokemonCard
            key={pokemon.url ? pokemon.url : pokemon.pokemon.url}
            url={pokemon.url ? pokemon.url : pokemon.pokemon.url}
          />
        ))}
      </ul>
    </div>
  );
};

export default Pokemons;
