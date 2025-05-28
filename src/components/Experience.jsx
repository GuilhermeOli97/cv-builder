import React, { useState } from 'react'
import Input from './Input';
import '../styles/experience.scss'
import Description from './Description';

const Experience = ({ submited }) => {
    const [countExp, setCountExp] = useState(0);

    return (
        <div className="experiences">
            <h3 className="title">Experiência: </h3>
            {
                !!countExp &&
                Array.from({ length: countExp }).map((_, index) => (
                    <div className='experience' key={index}>
                        <Input name="Empresa" type="text" submited={submited} />
                        <Input name="Cargo" type="text" submited={submited} />
                        <Description submited={submited} />
                        <Input name="Data Início" type="text" submited={submited} />
                        <Input name="Data Fim" type="text" submited={submited} />
                    </div>

                ))
            }
            {
                !submited &&
                <div className='btn-wrapper'>
                    <button type="button" onClick={() => setCountExp(countExp + 1)}>+</button>
                    <button type="button" onClick={() => countExp > 0 && setCountExp(countExp - 1)}>-</button>

                </div>
            }

        </div >
    )
}

export default Experience