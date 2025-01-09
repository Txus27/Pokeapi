import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Para acceder al parámetro :id de la URL

const PokemonDetail = () => {
  const { id } = useParams(); // Obtén el ID del Pokémon desde la URL
  const [pokemon, setPokemon] = useState(null);

  // Función para obtener los detalles del Pokémon
  const fetchPokemonDetails = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      setPokemon(response.data); // Guardar los detalles del Pokémon en el estado
    } catch (error) {
      console.error('Error al obtener los detalles del Pokémon:', error);
    }
  };

  // Ejecutar la función de obtener detalles cuando se cargue el componente
  useEffect(() => {
    fetchPokemonDetails();
  }, [id]); // Cuando el ID cambie, se vuelve a ejecutar

  if (!pokemon) {
    return <div>Cargando...</div>; // Si los datos aún no están cargados, muestra "Cargando..."
  }

  return (
    <div className="container mt-4">
      <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
      <div className="card">
        <img
          src={pokemon.sprites.front_default}
          className="card-img-top"
          alt={pokemon.name}
        />
        <div className="card-body">
          <h5 className="card-title"><strong>Número: #</strong>{pokemon.id}</h5>
          <p><strong>Altura:</strong> {pokemon.height} decímetros</p>
          <p><strong>Peso:</strong> {pokemon.weight} hectogramos</p>
          <p><strong>Tipos:</strong> {pokemon.types.map(type => type.type.name).join(', ')}</p>
          <p><strong>Habilidades:</strong> {pokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>
          <h6>Estadísticas:</h6>
          <ul>
            {pokemon.stats.map(stat => (
              <li key={stat.stat.name}>
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
