// Test away
import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
    // INTEGRATION TEST - SNAPSHOT TESTING
    it('matches snapshot', () => {
        const tree = renderer.create(<Dashboard />);
        expect(tree.toJSON()).toMatchSnapshot();
    });
});

// describe('asyncDashboardFunc', () => {
//     // UNIT TEST
//     it('eventually resolves to success', () => {
//         const resolvedValue = null;
//         const expected = 'Success!';
//         asyncDashboardFunc().then(res => {
//             resolvedValue = res;
//             expect(resolvedValue).toEqual(expected);
//         });
//     });
// });