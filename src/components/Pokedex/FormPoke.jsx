import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showPoke } from "../../store/slices/showName.slice";
import useFetch from "../../hooks/useFetch";
import { getSearchCategory } from "../../store/slices/searchCategory.slice";

const FormPoke = () => {

    let url = 'https://pokeapi.co/api/v2/type/';

    const [category, error, getAllCategory] = useFetch(url)

    const {trainerName} = useSelector(state => state)
   
    const buscarPoke = useRef();
    const searchCategory = useRef()

    const dispath = useDispatch()

    useEffect(()=> {
        getAllCategory()
    }, [])

    const handleBuscar = (e) =>{
        e.preventDefault()

        dispath(showPoke(buscarPoke.current.value.trim().toLowerCase()))
        
    }

    const handleCategory = () => {
        dispath(getSearchCategory(searchCategory.current.value))
       
    }

 

  return (
    <div className="pokedex__container">
      <h3 className="pokedex__form--title">
        <span className="pokedex__span">
        Welcome {`'${trainerName}'`}</span>, here you can find your favorite Pokemon.
      </h3>

      <form className="pokedex__form" onClick={handleBuscar}>
        <div className="pokedex__form--container">
          <input
          ref={buscarPoke}
            className="login__input"
            type="text"
            placeholder="To search for your Pokemon"
          />
          <button className="login__button">Buscar</button>
        </div>
        <div className="pokedex__form--container">

          <select ref={searchCategory} onChange={handleCategory} className="select" name="cars" id="cars" >

          <option value="0">All Pokemon</option>
          {
                category?.results.map(element => (<option key={element.url} value={element.url}>{element.name}</option>))
            }
          </select>
        </div>
      </form>
    </div>
  );
};

export default FormPoke;
