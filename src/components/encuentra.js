import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import BackgroundImage from 'gatsby-background-image'; 
import styled from '@emotion/styled'; 
import heroCss from '../css/hero.module.css'; 


const ImageBg = styled(BackgroundImage)`
    height:300px;
`;


const Encuentra = () => {

    const { imagen } = useStaticQuery(graphql`
    query{
        imagen : file(relativePath:{eq: "encuentra.jpg"}){
                sharp:childImageSharp{
                    fluid( maxWidth:1500 ){
                          ...GatsbyImageSharpFluid_withWebp  
                    }
                }
            }
       }
    `); 


    return ( 
            <ImageBg
                tag="section"  fluid={imagen.sharp.fluid} fadeIn="soft"
            >
                <div className={heroCss.imagenBg}>
                    <h3 className={heroCss.titulo}>Encuentra la Casa de Tus sueños. </h3>
                    <p  >9 Años Experiencia</p>
                </div>
            
            </ImageBg>
      );

}
 
export default Encuentra;
