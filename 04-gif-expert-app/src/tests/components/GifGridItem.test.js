import React from 'react';
import GifGridItem from "../../components/GifGridItem"
import {shallow} from 'enzyme'

describe('Pruebas del componenete GifGridItem', () => {

    const title = "Un titulo";
    const url = "https://localhost/algo.jpg";
    const wrapper = shallow( <GifGridItem title={title} url={url}/>);
    
    test('debe de mostarr el componente correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de tener un parrafo con el titulo', () => {
        const p= wrapper.find("p");
        expect(p.text().trim()).toBe(title);
    });

    test('deebe de tener la imagen igial al url y alt de los props ', () => {
        const img = wrapper.find("img");
        // console.log(img.props().src)
        // console.log(img.prop('src'))
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });
    
    test('debe de tener animate__fadeIn', () => {
        const target = "animate__fadeIn";

        const div = wrapper.find("div");
        let className = div.prop("className");

        expect(className.includes(target)).toBe(true);
        // expect(className.includes(target)).not.toBe(true);
    })
    
    
})
