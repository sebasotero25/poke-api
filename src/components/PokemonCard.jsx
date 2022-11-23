import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PokemonCard = ({ url }) => {
  const [pokemon, setPokemon] = useState({});
  useEffect(() => {
    axios.get(url).then((res) => setPokemon(res.data));
  }, []);

  return (
    <Link to={`/pokemons/${pokemon.id}`}>
      <h1>{pokemon.name}</h1>
      <img
        className="poke-img"
        src={pokemon?.sprites?.other["official-artwork"].front_default}
        alt=""
      />
    </Link>
  );
};

export default PokemonCard;
