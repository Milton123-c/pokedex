import { useEffect, useState } from "react"
import '../../styles/pagination.css'
import { useDispatch, useSelector } from "react-redux";
import { mathCount,countStatic } from "../../store/slices/counter.slice";

export const Pagination = ({type}) => {

   const [boton, setBoton] = useState();

   const {count} = useSelector(state => state)

   const dispath = useDispatch()

   useEffect(()=> {
    const botones = []
    if(type == 'defult'){
        for(let i = 1; i < 11; i++){
            botones.push({id: i})
        }
    }

    setBoton(botones)

   }, [])



   const handleCountNext = () => {
        dispath(mathCount(1))
   }

   const handleCountPreviews = () => {

    if(count == 1){
        dispath(countStatic(1))
    }else{
        dispath(mathCount(-1))
    }

    
   }

   const handleBoton = id => {
     dispath(countStatic(id))
   }
  console.log(count);
  return (
    <div className="pagination">

        <button onClick={handleCountPreviews}> {'<<'} </button>
            {
                boton?.map(b => (
                    <button onClick={()=> handleBoton(b.id)} className={count == b.id ? 'active' : ''} key={b.id}> {b.id} </button>
                ))
            }
        <button className={count > 10 ? 'active__two' : 'close'}>{count > 10 ? count : ''}</button>
        <button onClick={handleCountNext}> {'>>'} </button>
       
    </div>
  )
}
