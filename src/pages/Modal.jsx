import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import "../styles/modal.css";

const Modal = () => {
  const { name } = useParams();

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

  const [pokemon, error, getPokemon] = useFetch(url);

  const navigate = useNavigate();

  useEffect(() => {
    getPokemon();
  }, []);

  console.log(pokemon);
  const handleClose = () => {
    navigate('/pokedex')
  }

  return (
    <section className="modal">
        
      <article className="modal__container">
      <button onClick={handleClose} className="x">X</button>
        <div className={`background__dinamic ${pokemon?.types[0].type.name}`}>
          <img src={pokemon?.sprites.other.dream_world.front_default} alt="" />
        </div>

        <div className="modal__img">
          <img src={pokemon?.sprites.other.dream_world.front_default} alt="" />
        </div>

        <article className="modal__body">
          <p>#{pokemon?.id}</p>
          <div className="underline">
            <h2 className="h2">{pokemon?.name}</h2>
            <div></div>
            <h2>p</h2>
          </div>

          <ul>
            <li>
              <span>Weight </span> <span>{pokemon?.weight}</span>
            </li>
            <li>
              {" "}
              <span>Height </span> <span>{pokemon?.height}</span>{" "}
            </li>
          </ul>

          <div className="cont__type">
            <div>
              <p>Type</p>
              <ul>
                {pokemon?.types.map((objType) => (
                  <li className={`color${objType.slot}`} key={objType.type.url}>{objType.type.name}</li>
                ))}
              </ul>
            </div>

            <div>
              <p>Hability</p>
              <ul>
                {pokemon?.abilities.map((objabi) => (
                  <li className={`color${objabi.slot}`} key={objabi.ability.url}>{objabi.ability.name}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="stats"> 
                
            <div className="stats__title">
                <span>Stats</span>
                <span></span>
                <div>
                    <img src="/img/pokebolaTransparente.png" alt="" />
                </div>
            </div>    
           
            {pokemon?.stats.map((objStat) => (
              <div key={objStat.stat.url}>

                  <div className="span"><span>{objStat.stat.name}</span>
                <span>{objStat.base_stat}%/150</span></div>

                <progress   
                className={`progress`}   
                  max="150"
                  value={objStat.base_stat}
                >
                  70%
                </progress>
              
              </div>
            ))}
          </div>

          <div className="moves">
                 
          <div className="stats__title">
                <span>Moves</span>
                <span></span>
                <div>
                    <img src="/img/pokebolaTransparente.png" alt="" />
                </div>
            </div>   
            <ul>
              {pokemon?.moves.map((objMove) => (
                <li className={`color${Math.floor(Math.random() * 6)}`}  key={objMove.move.url}>{objMove.move.name}</li>
              ))}
            </ul>
          </div>
        </article>
      </article>
    </section>
  );
};

export default Modal;
