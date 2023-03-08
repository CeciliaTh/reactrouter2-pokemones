import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Pokemones = () => {
    const [idPokemon, setIdPokemon] = useState("");
    const [pokemones, setPokemones] = useState({});
    const [cargadoP, setCargadoP] = useState(true);
   
    const navigate = useNavigate();
    const irAPokemones = () => {
      let id = idPokemon.replace("https://pokeapi.co/api/v2/pokemon/","");
      id.replace("/","");
      console.log(id)
        navigate(`/pokemones/${id}`);
    };

    async function getPokemones() {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
        const data = await res.json();
        setPokemones(data.results);
        console.log(data.results);
        setCargadoP(false);

    }
    useEffect(() => {
        //effect
        getPokemones();
    },);
    
    return (
        cargadoP ?
        <h3> Cargando</h3> :
        <div className="div-pokemones"> 
          <h1>Selecciona un pokemon</h1>
            <select name="pokemonesid" onChange={(e) => setIdPokemon(e.target.value)}>
            <option value="">Seleccione un pokemon</option>
           {
                pokemones.map((p) => <option key={p.url} value={p.url}>{p.name}</option>)
           }
             </select>
                 
            {" - "}
            <button className="btn btn-info" onClick={irAPokemones}>Ver Detalles</button>
        </div>
    )
}

export default Pokemones


