import React, { Fragment } from 'react';
import {css} from '@emotion/core'
import Navegacion from './navegacion';
import styled from '@emotion/styled'; 
import { Link } from 'gatsby';
import heroCss from '../css/hero.module.css'; 

const EnlaceHome = styled(Link)`
    color: #FFF;
    text-align: center;
    text-decoration: none;
`;

const Footer = ({titulo}) => {

    const anio = new Date().getFullYear();
    return ( 
        <Fragment>
              <footer className={heroCss.contFooter}    >
            <div
                css={css`
                    max-width: 1200px;
                    margin: 0 auto;
                    @media (min-width: 768px) {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                `}
                    >
                    <Navegacion />
                    <EnlaceHome to='/'> <h1>{titulo}</h1>   </EnlaceHome>
                    
                    </div> 
               </footer>
               <p className={heroCss.parrafoFooter}>{titulo} Todos los Derechos Reservados &copy; {anio}</p>
        </Fragment>
     );
}
 
export default Footer;