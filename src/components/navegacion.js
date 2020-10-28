import React, { Fragment } from 'react';
import { Link } from "gatsby"; 
import  styled  from '@emotion/styled';

const Nav = styled.nav`
    display:flex;
    flex-direction:column;
    padding-bottom:3rem;

    @media (min-width:768px){
        padding:0;
        flex-direction:row-reverse; 
    }
`;

const NavLink = styled(Link)`
    color:#FFF;
    font-size:700;
    font-family:'PT Sans', sans-serif; 
    text-decoration:none;
    padding: .5rem;
    margin-right:1rem;
    &:last-of-type{
       margin-right:0; 
    }
    &.pagina-actual{
        border-bottom:2px solid #FFF;
    }


`;

const Navegacion = () => {


    return ( 
            <Fragment>
                <Nav>
                    <NavLink to={'/nosotros'} activeClassName ="pagina-actual" >Nosotros</NavLink>
                    <NavLink to={'/propiedades'} activeClassName ="pagina-actual">Propiedades</NavLink>
                    <NavLink to={'/'} activeClassName ="pagina-actual">Inicio</NavLink>
                </Nav>   
            </Fragment>

     );
}
 
export default Navegacion;
