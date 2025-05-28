import React, { useState } from 'react'
import Input from './Input'

const Personal = ({ submited }) => {

    return (
        <div className="personal">
            <h3 className="title">Dados pessoais</h3>
            <Input name="Nome" type="text" submited={submited} />
            <Input name="Email" type="text" submited={submited} />
            <Input name="Cel" type="text" submited={submited} />

        </div>

    )
}

export default Personal