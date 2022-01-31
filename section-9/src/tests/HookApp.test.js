import React from 'react';
import { shallow } from 'enzyme';
import { HookApp } from '../HookApp';

describe('Test in <HookApp />', () => {
    test('should to match snapshot', () => {
        const wrapper = shallow(<HookApp />);
        expect(wrapper).toMatchSnapshot();
    });
});
