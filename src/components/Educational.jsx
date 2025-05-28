import React from 'react'
import Input from './Input'

const Educational = ({ submited }) => {
    return (
        <div className="educational">
            <h3 className="title">Educação: </h3>
            <Input name="Título" type="text" submited={submited} />
            <Input name="Instituição" type="text" submited={submited} />
            <Input name="Data Início" type="text" submited={submited} />
            <Input name="Data fim" type="text" submited={submited} />
        </div>
    )
}

export default Educational