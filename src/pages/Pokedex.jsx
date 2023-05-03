import { useEffect, useState } from "react";
import FormPoke from "../components/Pokedex/FormPoke";
import useFetch from "../hooks/useFetch";
import "../styles/pokedex.css";
import PokeContainer from "./PokeContainer";
import { useSelector } from "react-redux";
import { OnePoke } from "./OnePoke";
import { Pagination } from "../components/Pokedex/Pagination";

const Pokedex = () => {
  const { showName } = useSelector((state) => state);

  const {count} = useSelector(state => state)

  const {showCategory} = useSelector(state => state)

  const url = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${count}`

  const [pokemon, error, getPokemon] = useFetch(url)

  const urlForName = `https://pokeapi.co/api/v2/pokemon/${showName || 'ch'}`

  const [forName, errorName, getForName] = useFetch(urlForName)

  const [category, errorCategory, getcategory] = useFetch(showCategory)


  useEffect(()=>{
    
    getPokemon()

  }, [count])
  
  useEffect(()=>{
    
    getcategory()

  }, [showCategory])

  useEffect(()=> {
    getForName()
  },[showName])

 
  return (
    <section className="pokedex">
      <div className="nav__pokedex">
        <div className="p__one"></div>
        <div className="p__two"></div>
        <div className="p__circle">
          <div className="p__circle--shildren">
            <div className="p__shildren--two"></div>
          </div>
        </div>

        <div className="nav__img">
          <img src="/img/name.svg" alt="" />
        </div>
      </div>

      <article className="pokedex__main">
        
       <FormPoke />

      

        {
            errorName
            ?
             <>
             {
        showCategory == 0 ?
        <>
         <Pagination type='defult' />
          {
                pokemon?.results.map(poke => (
                    <PokeContainer key={poke.url} name={poke.name} url={poke.url} />
                ))
            }
        </>
        :
        <>
        {
            category?.pokemon.map(poke => (
                <PokeContainer key={poke.pokemon.url} name={poke.pokemon.name} url={poke.pokemon.url} />
            ))
        }
        </>
       }
             </>
            :

            <OnePoke pokemon={forName} />
        }

       

        

      </article>
    </section>
  );
};

export default Pokedex;
