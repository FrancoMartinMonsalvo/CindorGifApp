import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/SearchGif/useFetchGifs";

// TODO LOS HOOKS SON IGUALES, EVALUAMOS EL COMPORTAMIENTO DEL HOOK EN BASE A LOS RETORNOS QUE TENGA (EN NUESTRO CASO UNA IMAGEN Y EL ISLOADING)

describe('Pruebas en useFetchGifs ', () => {


    test('debe de regresar el estado inicial', () => {

        const { result } = renderHook(() => useFetchGifs('Wukong'));
        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();

    });
    test('debe de retornar un arreglo de imagenes y isLoading en false', async () => {

        const { result } = renderHook(() => useFetchGifs('Wukong'));
        
        await waitFor( //traduccion de esto: esperate a que el resultado suceda 
            ()=> expect( result.current.images.length ).toBeGreaterThan(0), // espera que cuando se cargen las imagenes sean mayor que 0
            
        );

        const {images, isLoading} = result.current;
        expect( images.length ).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
    


})