import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/Contacto.class.js';
import { useState } from 'react';


const ComponenteB = ({ contacto }) => {
    const [conectado, setConectado] = useState(contacto.conectado);
    
    return (
        // renderizar en A
        <div>
            <h3>Nombre: { contacto.nombre } </h3>
            <h3>Apellido: { contacto.apellido } </h3>
            <h3>Email: { contacto.email } </h3>
            <h3>Conectado: { conectado ? 'Contacto En Línea' : 'Contacto No Disponible' } </h3>
            <button onClick={() => setConectado(!conectado)}> {conectado ? 'Conectado' : 'Desconectado'}</button>
        </div>
    );
};


ComponenteB.propTypes = {
    item: PropTypes.instanceOf(Contacto)
};


export default ComponenteB;