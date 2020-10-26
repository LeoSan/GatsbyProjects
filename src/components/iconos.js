import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';

import styled from '@emotion/styled'; 

const ListadoIconos = styled.ul`
    display:flex;
    justify-content:space-between;
    flex:1; 
    max-width:500px;
    margin:3rem auto 0 auto;
    li{
        display:flex;
        img{
            margin-right:1rem; 
        }
    }


`;

const Iconos = ({banio, estacionamiento, habitaciones}) => {
    
    const {icono} = useStaticQuery(graphql`
    query{
        icono: allFile(filter: {relativeDirectory: {eq: "iconos"}}){
          edges {
            node{
              publicURL
            }
          }
        }
      }
      
    `); 
    
    const imagenesIconos = icono.edges;

    return (
         <ListadoIconos>
            <li>
                <img src={imagenesIconos[1].node.publicURL}  alt="icono estacionamiento"/>
                 {estacionamiento}
            </li>
            <li>
                <img src={imagenesIconos[2].node.publicURL}  alt="icono baños"/>
                 {banio}
            </li>
             <li>
                 <img src={imagenesIconos[0].node.publicURL}  alt="icono habitaciones"/>
                 {habitaciones}
            </li>
         </ListadoIconos>   
    );
}
 
export default Iconos;