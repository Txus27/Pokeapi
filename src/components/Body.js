import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';  // Importamos Link

const Body = ({ page }) => {
  const [data, setData] = useState([]);
  const [avatars, setAvatars] = useState({});

  // Función para obtener 10 Pokémon aleatorios
  const fetchRandomPokemons = async () => {
    try {
      const randomIds = Array.from({ length: 10 }, () => Math.floor(Math.random() * 898) + 1); // Pokémon de ID 1 a 898
      const responses = await Promise.all(
        randomIds.map((id) => axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`))
      );
      setData(responses.map((res) => res.data));
    } catch (error) {
      console.error('Error al obtener Pokémon:', error);
    }
  };

  useEffect(() => {
    setData([]);
    if (page === 'home') fetchRandomPokemons();
    else if (page === 'gen1') fetchPokemonsByGeneration('gen1');
    else if (page === 'gen2') fetchPokemonsByGeneration('gen2');
    else if (page === 'digimon') fetchRandomDigimons();
    else if (page === 'contact') fetchAvatars();
  }, [page]);

  // Función para obtener 10 Pokémon de una generación específica
  const fetchPokemonsByGeneration = async (generation) => {
    try {
      const generationLimits = {
        gen1: [1, 151],
        gen2: [152, 251],
      };
      const [start, end] = generationLimits[generation];
      const randomIds = Array.from({ length: 10 }, () => // En length se cambian los pokemon a mostrar
        Math.floor(Math.random() * (end - start + 1)) + start
      );
      const responses = await Promise.all(
        randomIds.map((id) => axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`))
      );
      setData(responses.map((res) => res.data));
    } catch (error) {
      console.error('Error al obtener Pokémon por generación:', error);
    }
  };

  // Función para obtener 10 Digimon aleatorios
  const fetchRandomDigimons = async () => {
    try {
      const digimonCount = 209; // Número total aproximado de Digimon en la API
      const randomIds = Array.from({ length: 10 }, () => Math.floor(Math.random() * digimonCount) + 1); // En length se cambian los DIGIMON a mostrar
      const responses = await Promise.all(
        randomIds.map((id) =>
          axios.get(`https://digi-api.com/api/v1/digimon/${id}`)  // Asegúrate de que la URL sea correcta para la API de Digimon
        )
      );
      setData(responses.map((res) => res.data));
    } catch (error) {
      console.error('Error al obtener Digimon:', error);
    }
  };

  // Función para obtener avatares aleatorios para los contactos
  const fetchAvatars = () => {
    setAvatars({
      juanluis: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
      pedro: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
    });
  };

  return (
    <div className="container mt-4">
      {/* Página de inicio con 10 Pokémon aleatorios */}
      {page === 'home' && (
        <div>
          <h1>Bienvenido a la web de Pokémon: HLC prueba kubernetes</h1>
          <div className="row">
            {data.map((pokemon) => (
              <div className="col-md-3" key={pokemon.id}>
                <div className="card">
                  <img
                    src={pokemon.sprites.front_default}
                    className="card-img-top"
                    alt={pokemon.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{pokemon.name}</h5>
                    <p>#{pokemon.id}</p>
                    <Link to={`/pokemon/${pokemon.id}`} className="btn btn-primary">Saber más</Link>  {/* Cambié <a> por <Link> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Página de generación 1 o 2 */}
      {(page === 'gen1' || page === 'gen2') && (
        <div>
          <h2>{page === 'gen1' ? 'Pokémon Generación 1' : 'Pokémon Generación 2'}</h2>
          <div className="row">
            {data.map((pokemon) => (
              <div className="col-md-3" key={pokemon.id}>
                <div className="card">
                  <img
                    src={pokemon.sprites.front_default}
                    className="card-img-top"
                    alt={pokemon.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{pokemon.name}</h5>
                    <p>#{pokemon.id}</p>
                    <Link to={`/pokemon/${pokemon.id}`} className="btn btn-primary">Saber más</Link>  {/* Usamos Link aquí también */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Página de Digimons */}
      {page === 'digimon' && (
        <div>
          <h2>10 Digimon Aleatorios</h2>
          <div className="row">
            {data.map((digimon, index) => (
              <div className="col-md-3" key={index}>
                <div className="card">
                  <img
                    src={digimon.images ? digimon.images[0].href : 'https://via.placeholder.com/150'}
                    className="card-img-top"
                    alt={digimon.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{digimon.name || 'Nombre no disponible'}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Página de contacto */}
      {page === 'contact' && (
        <div>
          <h2>Contacto</h2>
          <div className="row">
            <div className="col-md-6">
              <img src={avatars.juanluis} alt="Juan Avatar" />
              <h5>Juan Luis - HLC</h5>
              <p>Email: juan.luis@iescuravalera.com</p>
              <p>Teléfono: 950-654-320</p>
            </div>
            <div className="col-md-6">
              <img src={avatars.pedro} alt="Pedro Avatar" />
              <h5>Pedro</h5>
              <p>Email: pedro@iescuravalera.com</p>
              <p>Teléfono: 950-654-321</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
