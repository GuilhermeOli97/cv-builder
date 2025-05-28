import React, { useState } from 'react'
import '../styles/input.scss'

const Input = ({ name, type, submited }) => {
    const [value, setValue] = useState("");


    return (
        <>
            {submited ?
                <p>{name}: {value}</p>

                :
                <div className='inputWrapper'>
                    <label htmlFor={name}>{name}:</label>
                    <input type={type} name={name} id={name} value={value} onChange={(event) => setValue(event.target.value)} />
                </div>
            }

        </>

    )
}

export default Input