import React, { useState } from 'react'
import '../styles/description.scss'

const Description = ({ submited }) => {
    const [desc, setDesc] = useState("");

    return (
        <div className='desc-wrapper'>

            {submited ?
                <p>Descrição: {desc}</p>

                :
                <>
                    <label htmlFor="description">Descrição: </label>
                    <textarea id="description" name="description" rows="4" cols="50" placeholder="Escreva aqui..." value={desc} onChange={(event) => setDesc(event.target.value)}></textarea>
                </>
            }
        </div>
    )
}

export default Description