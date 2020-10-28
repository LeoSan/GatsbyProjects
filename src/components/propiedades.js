import React from 'react';
import Iconos from '../components/iconos'
import Image from 'gatsby-image'; 
import Layout from './layout';
import {graphql} from 'gatsby';


import styled from '@emotion/styled'; 

const Contenido = styled.div`
    max-width:1200px;
    margin:0 auto; 
    width:95%;

    @media(min-width:768px){
        display:grid;
        grid-template-columns:2fr 1fr;
        column-gap:5rem;


    }


`;

const Sidebar = styled.div`
    .precio{
        font-size:3rem; 
        color:#75ab00;
    }

    .agente{
        margin-top:4rem;
        border-radius:2rem;
        padding:3rem;
        color:#FFF; 

        p{
            margin:0;
        }
    }


`;


export const query = graphql`
        query($id:String){
            allStrapiPropiedades(filter: {id: {eq: $id}}) {
                nodes {
                    id
                    nombre
                    estacionamineto
                    precio
                    banio
                    habitaciones
                    descripcion
                    imagen{
                        sharp: childImageSharp{
                            fluid (maxWidth:1200){
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }

                    }
                }
            }
        }
`;


const Propiedades = ({data:{allStrapiPropiedades:{nodes}}}) => {

  const {nombre, estacionamineto, descripcion, precio, banio, habitaciones, imagen} = nodes[0]; 


    return ( 
        <Layout>
            <h1>{nombre}</h1>
            <Contenido>
                <main>
                    <Image 
                        fluid={imagen.sharp.fluid}
                    />
                    <p>{descripcion}</p>
                </main>
                <Sidebar>
                    <p className="precio"> ${precio}</p>
                    <Iconos 
                          banio={banio}
                          estacionamiento={estacionamineto}
                          habitaciones={habitaciones}
                        />
                    <div className="agente">
                        <h2>Tecnologias</h2>
                        <p>html</p>
                        <p>html</p>
                        <p>html</p>
                        <p>html</p>
                      
                    </div>    
                </Sidebar>
            </Contenido>
        </Layout>
     );
}
 
export default Propiedades;