import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';


describe('Test in <GifGridItem />', () => {
    const title = 'A title';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('should to macht snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should get a text with title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })

    test('should have idem url and alt props', () => {
        const img = wrapper.find('img');

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });


    test('should have animate__fadeIn', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');

        expect(className.includes('animate__fadeIn')).toBe(true);
    })
})
