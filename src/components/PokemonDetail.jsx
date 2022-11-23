import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const PokemonDetail = () => {
  const [pokemon, setPokemon] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => setPokemon(res.data));
  }, [id]);
  console.log(pokemon.abilities);
  return (
    <div>
      PokemonDetail
      <h1>{pokemon.name}</h1>
      <img
        src={pokemon?.sprites?.other["official-artwork"].front_default}
        alt=""
      />
      <section>
        <article>
          <p>Weight</p>
          <p>{pokemon.weight}</p>
        </article>
        <article>
          <p>Height</p>
          <p>{pokemon.height}</p>
        </article>
      </section>
      <section>
        <section>
          <h3>Type</h3>
          <section>
            {pokemon.types?.map((type) => (
              <p key={type.type.name}>{type.type.name}</p>
            ))}
          </section>
        </section>
      </section>
      <h3>Abilities</h3>
      <section>
        {pokemon.abilities?.map((abilitie) => (
          <p key={abilitie.ability.name}>{abilitie.ability.name}</p>
        ))}
      </section>
      <h3>Stats</h3>
      <section>
        {pokemon.stats?.map((stat) => (
          <article key={stat.stat.name}>
            <section>
              <p>{stat.stat.name}</p>
              <p>{`${stat.base_stat} / 150`}</p>
            </section>
          </article>
        ))}
      </section>
    </div>
  );
};

export default PokemonDetail;
