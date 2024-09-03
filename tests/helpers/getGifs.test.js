import { getGif } from "../../src/helpers/getGifs";

describe('Pruebas en getGifs', () => { 

    
    test('Debe de retornar un arreglo de gifs', async () => {
        
        const gifs = await getGif('Wukong');
        //console.log(gifs);
        expect( gifs.length ).toBeGreaterThan( 0 ); //esto es para asegurarnos que nuestros gifs arrojeen por lo menos 1 resultado
        expect( gifs[0] ).toEqual( {
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
          } );  // queremos asegurarnos que en la posocion 0 de nuestro retorno de arreglo de gifs, haya un cuerpo como el de arriba
                // que contenga un id, title y url que esperan cualquier string  

    });
    


 })