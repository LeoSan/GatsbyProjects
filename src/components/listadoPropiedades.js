import React, {useState, Fragment, useEffect} from 'react';
import heroCss from '../css/hero.module.css'; 
import usePropiedades from '../hooks/usePropiedades'; 
import PropiedadVista from '../components/propiedadVista'; 

import useFiltro from '../hooks/useFiltro'; 


const ListadoPropiedades = () => {

    const resultado = usePropiedades();
    const [propiedades] = useState(resultado);   
    const [filtradas, setFiltradas] = useState([]);
    
    
    //Filtrado de propiedades 
    const { categoria,  FiltroUI } = useFiltro();

    useEffect(() => {
        
        if(categoria){
            const filtro = propiedades.filter(propiedad => propiedad.categoria.nombre === categoria );
            setFiltradas(filtro);
        }else{
            setFiltradas(propiedades);
        }

    }, [categoria, propiedades]);

    return ( 
        <Fragment>
        <p className={heroCss.separa}>Nuestra Propiedades </p>

        { FiltroUI() }

        <ul className={heroCss.propiedades}>
            {filtradas.map( propiedad =>(
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