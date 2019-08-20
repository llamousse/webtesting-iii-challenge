// Test away
import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';

import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";

import Controls from './Controls';
import Dashboard from '../dashboard/Dashboard';

describe('<Controls />', () => {
    // INTEGRATION TEST - SNAPSHOT TESTING
    it('matches snapshot', () => {
        const tree = renderer.create(<Controls />);
        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('should toggle close gate when clicked', () => {
        const { getByText } = render(<Controls />);
        const closeGate = getByText(/Close Gate/i);
        fireEvent.click(closeGate);
    });

    it('should toggle lock gate when clicked', () => {
        const { getByText } = render(<Controls />);
        const lockGate = getByText(/Lock Gate/i);
        fireEvent.click(lockGate);
    });

    it('should disable closed toggle if gate is locked', () => {
        const { getByText } = render(<Controls />);
        const closeGate = getByText(/Close Gate/i);
        fireEvent.click(closeGate);
        getByText(/Close Gate/i);
    })

    it('should disable locked toggle if gate is open', () => {
        const { getByText } = render(<Controls />);
        const lockGate = getByText(/Lock Gate/i);
        fireEvent.click(lockGate);
        getByText(/Lock Gate/i);
    });
});