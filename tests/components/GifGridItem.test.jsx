import { render, screen } from "@testing-library/react";
import { GifGridItem } from "../../src/components/GifApp";

describe('Pruebas en GifGridItem', () => { 

    const title = 'Baki';
    const url = 'http://localhost/https//uBaki.com/baki.jpg';

    test('Debe de hacer match con el snapshot', ()=> {

        

        const { container } = render( <GifGridItem title={title} url={url} /> );
        expect( container ).toMatchSnapshot();
    
        
    });

    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {
        
        render( <GifGridItem title={title} url={url} /> );
        //screen.debug();
        //expect( screen.getByRole('img').src).toStrictEqual(url);
        //expect( screen.getByRole('img').alt).toStrictEqual(title);
        const {src,alt} = screen.getByRole('img'); //Es una manera mas elegante de hacer lo de arriba, desestructurando 
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });
    test('debe de mostrar el titulo en el componente', () => {
        
        render( <GifGridItem title={title} url={url} /> );
        expect(screen.getByText(title)).toBeTruthy();


    });
    
    
    
    

});
 