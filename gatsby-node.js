const urlSlug = require('url-slug');

exports.createPages = async ({actions, graphql, reporter}) => {
    const resultado = await graphql(`
            query {
                allStrapiPropiedades {
                    nodes {
                        id
                        nombre
                    }
                }


                allStrapiPaginas {
                    nodes {
                    id
                    nombre
                    }
                }                
            }
    `);

   // console.log(JSON.stringify(resultado));
   if (resultado.errors){
       reporter.panic('No hubo resultados', resultado.errors);
   }

   //si  hay resultados generar los archivos estaticos
   const paginas = resultado.data.allStrapiPaginas.nodes; 
   
   const propiedades = resultado.data.allStrapiPropiedades.nodes; 
   
   console.log(propiedades);

    //Crear los templates para las paginas 
    paginas.forEach(element => {
        actions.createPage({
             path: urlSlug(element.nombre),
             component:require.resolve('./src/components/paginas.js'), 
             context:{
                 id:element.id
             }
 
        })
        
    });


   //Crear los templates  de las propiedades 
   propiedades.forEach(element => {
     
       console.log( urlSlug(element.nombre) );
       actions.createPage({
            path: urlSlug(element.nombre),
            component:require.resolve('./src/components/propiedades.js'), 
            context:{
                id:element.id
            }

       })
       
   });
}