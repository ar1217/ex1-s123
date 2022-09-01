import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/Contacto.class.js';

const ComponenteB = ({ contacto }) => {
    
    return (
        // renderizar en A
        <div>
            <h3>Nombre: { contacto.nombre } </h3>
            <h3>Apellido: { contacto.apellido } </h3>
            <h3>Email: { contacto.email } </h3>
            <h3>Conectado: { contacto.conectado ? 'Contacto En Línea' : 'Contacto No Disponible' } </h3>
        </div>
    );
};


ComponenteB.propTypes = {
    item: PropTypes.instanceOf(Contacto)
};


export default ComponenteB;