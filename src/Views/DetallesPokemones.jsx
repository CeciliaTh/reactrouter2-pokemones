import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const DetallesPokemones = () => {

  const [pokemon, setPokemon] = useState({});
  const [cargado, setCargado] = useState(true);
      const { id } = useParams();
  
      async function getDetallePokemones() {
          const res = await fetch( `https://pokeapi.co/api/v2/pokemon/${id}`);
          const data = await res.json();
          console.log(data);
          setPokemon(data);
          setCargado(false);
      }
      useEffect(() => {
          //effect
          getDetallePokemones();
  
      },);

  return (
    cargado ?
    <h1>Cargando datos, espere por favor...</h1> :
    <div className='text-center'>
    <h1>{pokemon.name}</h1>
    <div className="div-detalles-pokemon">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} className="foto-pokemon"/>
      <div className="texto-pokemones">
        <p>Experiencia Base: {pokemon.base_experience}</p>
        <p>Peso: {pokemon.weight}</p>
        <p>Altura: {pokemon.height}</p>
        <p>Tipo: {pokemon.types[0].type.name}</p>
        <p>Habilidad: {pokemon.abilities[0].ability.name}</p>
        <p>Movimiento 1: {pokemon.moves[0].move.name}</p>
        <p>Movimiento 2: {pokemon.moves[1].move.name}</p>
        <p>Movimiento 3: {pokemon.moves[2].move.name}</p>
        <p>Movimiento 4: {pokemon.moves[3].move.name}</p>
      </div>
    </div>
   
    </div>
  );
}

export default DetallesPokemones