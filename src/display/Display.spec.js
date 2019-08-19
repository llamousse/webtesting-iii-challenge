// Test away!
import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import Display from './Display';

describe('<Display />', () => {
    // INTEGRATION TEST - SNAPSHOT TESTING
    it('matches snapshot', () => {
        const tree = renderer.create(<Display />);
        expect(tree.toJSON()).toMatchSnapshot();
    });
});