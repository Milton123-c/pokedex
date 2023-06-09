
import { useNavigate } from 'react-router-dom';
import '../styles/containerPoke.css'
import '../styles/color.css'

export const OnePoke = ({pokemon}) => {

    const navigate = useNavigate()

    let index = 0;

    const handleOpenModal = () => {

        if(pokemon?.id){
            const patch = `/pokedex/${pokemon.id}`
        navigate(patch)
        }
    }

  return (
    <article className="container" onClick={handleOpenModal}>
<span className="see">See pokemon</span>
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

         <div className={`background__poke ${pokemon?.types[0].type.name}`}>
                 <img className="background__img" src={pokemon?.sprites.other.dream_world.front_default} alt="name" />
         </div>

    </article>
  )
}
