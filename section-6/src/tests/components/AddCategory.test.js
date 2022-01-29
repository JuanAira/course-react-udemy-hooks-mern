import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';


describe('Test in <AddCategory />', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('should to match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('not must have the information with submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault() { } });

        expect(setCategories).not.toHaveBeenCalled();
    })

    test('sould call setCategories and clean input text', () => {
        const value = 'Hello';

        wrapper.find('input').simulate('change', { target: { value } });

        wrapper.find('form').simulate('submit', { preventDefault() { } });

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        expect(wrapper.find('input').prop('value')).toBe('');
    });
});
