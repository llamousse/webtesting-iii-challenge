// Test away!
import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, act } from '@testing-library/react';

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

    it('should use "red-led" class when "locked" or "closed"', () => {
        const locked = true;
        const closed = true;
        const { act } = renderer;



    });

    // it('should use "green-led" class when "unlocked" or "open"', () => {

    // });
});