import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifApp";
import { useFetchGifs } from "../../src/hooks/SearchGif/useFetchGifs";

jest.mock('../../src/hooks/SearchGif/useFetchGifs');

describe('Pruebas en <GifGrid/> ', () => {

    const category = 'One Punch';

    test('Debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        render(<GifGrid category={category} />);
        //screen.debug();
        expect(screen.getByText('Cargando'));
        expect(screen.getByText(category));

    });

    test('Deebe de mostrar items cuando se cargarn las imagenes mediantee useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: 'DEF',
                title: 'Brolly',
                url: 'https://localhost/brolly.jpg'
            }]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        })
        render(<GifGrid category={category} />);
        //screen.debug();

        expect( screen.getAllByRole( 'img' ).length ).toBe(2);

    });


})