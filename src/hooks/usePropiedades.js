import {graphql, useStaticQuery} from 'gatsby';

const usePropiedades = () =>{

    const datos = useStaticQuery(graphql`{
        allStrapiPropiedades {
          nodes {
            nombre
            descripcion
            banio
            id
            precio
            estacionamineto
            habitaciones
            categoria {
              nombre
            }
            imagen {
                sharp:childImageSharp{
                    fluid(maxWidth:600 duotone:{
                      highlight:"#222222", shadow:"#192550", opacity:30 

                    }){
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
      
          }
        }
      }
      
    `); 

    console.log(datos);

    return datos.allStrapiPropiedades.nodes.map(propiedades =>({
        id:propiedades.id,
        nombre:propiedades.nombre,
        descripcion:propiedades.descripcion,
        precio:propiedades.precio,
        banio:propiedades.banio,
        estacionamineto:propiedades.estacionamineto,
        habitaciones:propiedades.habitaciones,
        categoria:propiedades.categoria,
        imagen:propiedades.imagen,
       
      }) )

}

export default usePropiedades;