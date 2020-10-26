import React, {useState, Fragment, useEffect} from 'react';
import heroCss from '../css/hero.module.css'; 
import usePropiedades from '../hooks/usePropiedades'; 
import PropiedadVista from '../components/propiedadVista'; 

const ListadoPropiedades = () => {

    const resultado = usePropiedades();
    const [propiedades, setPropiedades] = useState([]);    

    useEffect(() => {
        setPropiedades(resultado);
    }, []);

    return ( 
        <Fragment>
        <p className={heroCss.separacion}>Listado </p>

        <ul className={heroCss.propiedades}>
            {propiedades.map( propiedad =>(
                    <PropiedadVista 
                        key={propiedad.id}
                        propiedad = {propiedad}
                    >

                    </PropiedadVista>
            ))}
        </ul>
        </Fragment>
     );
}
 
export default ListadoPropiedades;