import React, { Fragment } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Nav from './navegacion';
import { css } from '@emotion/core'; 


const Header = () => {

    //Consultar Logo 

  const {logo} = useStaticQuery(graphql`
    query {
        logo:file(relativePath: {eq: "logo.svg"}){
          publicURL
        }
      }`);

console.log(logo);
  

  return ( 
      <Fragment>
          <header css={css`
              background-color:#0D283B;
              padding:1rem;
          `}>
              <div css={css`
                  max-width:120rem;
                  text-align:center;
                  margin:0;

                  @media(min-width:768px){
                      display:flex;
                      align-items:center;
                      justify-content:space-between;
                  }
          `}>
                  <Link to={'/'}>
                    <img src={logo.publicURL} alt="Bienes Raices Gatsby"/>
                  </Link>
              </div>
              <Nav></Nav>
          </header>
          

      </Fragment>

   );
}

export default Header;




