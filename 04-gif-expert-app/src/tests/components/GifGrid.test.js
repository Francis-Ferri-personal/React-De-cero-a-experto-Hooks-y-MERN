import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
// Permite fingir las llamdas al archivo y estableer la ifrmacion devuelta
jest.mock("../../hooks/useFetchGifs")

describe('Pruebas para el componente <GifGrid />', () => {
    
    const category = "One Punch"
    
    test('debe mostrase correctamente', () => {
        // Esto hace que cuando se llame el useFetch en el componente devuelva el valor que se establece
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow( <GifGrid category={category}/>)
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {

        const gifs = [{
            id: "ABC",
            title: "Cualquier cosa",
            url: "https://localhost/cualquiercosa.jpg"
        },
        {
            id: "DEF",
            title: "Cualquier cosa",
            url: "https://localhost/cualquiercosa.jpg"
        }
    ];

        // Se debe utilizar un Mock el cual sirve para finguir algo
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow( <GifGrid category={category}/>);
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("p").exists()).toBe(false);

        expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
    })
    
    
})
