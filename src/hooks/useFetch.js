import axios from "axios";
import { useState } from "react";


const useFetch = url =>{

    const [state, setState] = useState();
    const [err, setErr] = useState(false);

    const getAllPokemon = () => {
        axios.get(url)
        .then(res =>{ 
            setState(res.data)
            setErr(false)
        })
        .catch(() => setErr(true))
    }

    return [state, err, getAllPokemon];

}

export default useFetch;