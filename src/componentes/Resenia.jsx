import { useState } from "react"

const Resenia = ({resenia}) =>{

    // Definir estados iniciales.

    const [rating , setRating] = useState(resenia.rating)
    const [comment, setComment] = useState(resenia.text)

    //Cambiar el estado del rating

    const cambiarNota = ()=>{
        // setRating(rating+1)
        setRating((prev)=>{
            return prev+1
        })
        console.log(rating)
    }

    const restNota = ()=>{
        // setRating(resenia.rating-1)
        setRating((prev)=>{
            return prev-1
        })
        console.log(rating)
    }
    return(
        <div className="card">
            <div className="num-display">
                { rating }
            </div>
            <div className="text-display">
                { comment }
            </div>
            <button onClick={ cambiarNota }>
                Cambiar Nota
            </button>
            <button onClick={ restNota }>
                Bajar Nota
            </button>
        </div>
    )
}

export default Resenia