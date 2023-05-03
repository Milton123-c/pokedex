import { useEffect } from "react"
import useFetch from "../hooks/useFetch"
import '../styles/containerPoke.css'
import { useNavigate } from "react-router-dom"

const PokeContainer = ({url}) => {

    const [pokemon, error, getPokemon] = useFetch(url)

    const navigate =  useNavigate()

    useEffect(()=>{
        getPokemon()
    }, [])

    const handleOpenModal = () => {

        if(pokemon?.id){
            const patch = `/pokedex/${pokemon.id}`
        navigate(patch)
        }
    }

    let index = 0;
  return (
    <article className="container" onClick={handleOpenModal}>

        <span className="see">Whatsh pokemon</span>

        <div className="container__img">
            <img className="poke__img" src={pokemon?.sprites.other.dream_world.front_default} alt="name" />
        </div>

       
        <article className="container__info">
            <ul className="poke__info">
                <li>{pokemon?.forms[0].name}</li>
                <li>
                   {
                    pokemon?.types.map(typ =>{ 
                       if(index != 1){
                          index = 1
                            return typ.type.name
                            
                       }else{
                        index = 0
                        return ' / ' + typ.type.name
                        
                       }
                    })
                   }
                </li>
                <li>Tipo</li>
            </ul>

            <ul className="poke__ability">
                <li>HP <span>{pokemon?.stats[0].base_stat}</span></li>
                <li>Attack <span>{pokemon?.stats[1].base_stat}</span></li>
                <li>Defense <span>{pokemon?.stats[2].base_stat}</span></li>
                <li>Speed <span>{pokemon?.stats[5].base_stat}</span></li>
            </ul>

        </article>

         <div className="background__poke">
                 <img className="background__img" src={pokemon?.sprites.other.dream_world.front_default} alt="name" />
         </div>

    </article>
  )
}

export default PokeContainer