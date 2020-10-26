import React,  {Fragment} from 'react';
import Iconos from '../components/iconos'
import Image from 'gatsby-image'; 

import styled from '@emotion/styled'; 

const Card = styled.div` 
    border:1px solid #E1E1E1; 
    img{
        max-width:100%;
    }
`;

const Contenido = styled.div`
    padding:2rem;

    h3{
        font-family:'Lato', sans-serif;
        margin: 0 0 2rem 0; 
        font-size:2.4rem;

    }
    .precio{
        font-size:2rem;
        color:#75AB00;
    }




`;

const PropiedadVista = ({propiedad}) => {

    const {id, nombre, descripcion, precio, banio, estacionamineto, habitaciones, categoria,imagen} = propiedad;
    return ( 
        <Fragment>
                <Card>
                    <Image fluid={imagen.sharp.fluid} />

                    <Contenido>
                        <h3>{nombre}</h3>
                        <p className="precio">{precio}</p>
                        <Iconos 
                          banio={banio}
                          estacionamiento={estacionamineto}
                          habitaciones={habitaciones}
                        />
                    </Contenido>
                </Card>     
        </Fragment>
     );
}
 
export default PropiedadVista;