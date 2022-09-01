import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/Contacto.class';
import ComponenteB from '../pure/componenteB';


const ComponenteA = () => {
    return (
        <div>
            {/* renderizar en APP  */}
            <ComponenteB contacto = { new Contacto('Arya','Stark','aryastark@domain.com', true)}></ComponenteB>
        </div>
    );
};





export default ComponenteA;

