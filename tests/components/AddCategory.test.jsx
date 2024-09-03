import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from "../../src/components/GifApp/AddCategory";


describe('Pruebas en AddCategory', () => { 

    
    test('Debe de cambiar el valor de la caja de texto', () => {
        
        //Siempre debemos de preparar nuestro sujeto de pruebas, que en nuestro caso se trata de AddCategory que recibe una property
        render( <AddCategory onNewCategory={()=>{}} /> );
        
        const input = screen.getByRole('textbox'); // extraemos su input el cual tiene una relacion directa con el screen getByRole

        fireEvent.input( input, {target: {value:'Wukong'}} ); // Acá disparamos el evento que referencia a lo que escribimos en el value del target, poniendole 'Wukong'
        
        expect(input.value).toBe('Wukong'); // acá podemos hacer la asercion de lo que se espera que suceda en el evento
        //screen.debug();
    });
    
    test('Debe de llamar onNewCategory si el input tiene un valor', () => {
        
        const inputValue = 'Wukong';
        const onNewCategory = jest.fn(); //cuando le decimos fn nos referimos a que vamos a simular una funcion, es un MOCK (algo asi como una imitacion de una funcion)
        
        render( <AddCategory onNewCategory={onNewCategory} /> ); // le pasamos la constante que definimos como funcion
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(  input, {target : {value: inputValue}}); //disparamos el evento input, pasandole el valor de la constante 'Wukong'
        fireEvent.submit( form ); // enviamos el formulario

        expect( input.value ).toBe(''); //se espera que despues de enviarlo el value del input esté vacio

        expect( onNewCategory ).toHaveBeenCalled(); // esperamos que se haya llamado a la funcion
        expect( onNewCategory ).toHaveBeenCalledTimes(1); // lo mismo, pero 1 vez
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue ); //esperamos que la funcion que se llamó tiene el valor del inputValue



    });
    test('No debe de llamar a  onNewCategory si el input está vacio', () => {
        
        const  onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={onNewCategory} /> );
        
        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();


    });
    
    

 })