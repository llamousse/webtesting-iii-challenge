// Test away!
import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";

import Display from './Display';
import Controls from '../controls/Controls';

describe('<Display />', () => {
    // INTEGRATION TEST - SNAPSHOT TESTING
    it('matches snapshot', () => {
        const tree = renderer.create(<Display />);
        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('should display "Closed" if closed prop is true, else display "Open"', () => {
        const closed = true;
        const { act } = renderer;

        act(() => {
            const { findByText } = render(
                <Controls closed={closed} />
            );
            closed ? findByText(/Closed/i) : findByText(/Open/i);
        })
    });

    it('should display "Locked" if locked prop is true, else display "Unlocked"', () => {
        const locked = true;
        const { act } = renderer;

        act(() => {
            const { findByText } = render(
                <Controls locked={locked} />
            );
            locked ? findByText(/Locked/i) : findByText(/Unlocked/i);
        })
    });

    it('should have class "green-led" for open or unlocked', () => {
        const { getByText } = render(<Display />);
        const open = getByText(/Open/i);
        const unlocked = getByText(/Unlocked/i);
        
        expect(open).toHaveClass("green-led");
        expect(unlocked).toHaveClass("green-led");
    });
});