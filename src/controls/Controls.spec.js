// // Test away
import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Controls from './Controls.js';

afterEach(cleanup);
describe('<Controls />', () => {
    it('renders without crashing', () => {
        render(<Controls />);
    });

    it('open and unlocked', () => {
        const closeSpy = jest.fn();
        const lockSpy = jest.fn();

        const { getByText } = render(<Controls 
                                        locked={false} 
                                        closed={false} 
                                        toggleClosed={closeSpy}
                                        toggleLocked={lockSpy}
                                    />);
        const closeBtn = getByText(/close gate/i);
        const lockBtn = getByText(/lock gate/i);

        // checking button disabled status
        expect(closeBtn.disabled).toBeFalsy();
        expect(lockBtn.disabled).toBeTruthy();

        // checking button click events
        fireEvent.click(closeBtn);
        expect(closeSpy).toBeCalled();

        fireEvent.click(lockBtn);
        expect(lockSpy).not.toBeCalled();
    });

    it('closed and unlocked', () => {
        const closeSpy = jest.fn();
        const lockSpy = jest.fn();

        const { getByText } = render(<Controls 
                                        locked={false} 
                                        closed={true} 
                                        toggleClosed={closeSpy}
                                        toggleLocked={lockSpy}
                                    />);
        const closeBtn = getByText(/open gate/i);
        const lockBtn = getByText(/lock gate/i);

        // checking button disabled status
        expect(closeBtn.disabled).toBeFalsy();
        expect(lockBtn.disabled).toBeFalsy();

        // checking button click events
        fireEvent.click(closeBtn);
        expect(closeSpy).toBeCalled();

        fireEvent.click(lockBtn);
        expect(lockSpy).toBeCalled();
    });

    it('closed and locked', () => {
        const closeSpy = jest.fn();
        const lockSpy = jest.fn();

        const { getByText } = render(<Controls 
                                        locked={true} 
                                        closed={true} 
                                        toggleClosed={closeSpy}
                                        toggleLocked={lockSpy}
                                    />);
        const closeBtn = getByText(/open gate/i);
        const lockBtn = getByText(/unlock gate/i);

        // checking button disabled status
        expect(closeBtn.disabled).toBeTruthy();
        expect(lockBtn.disabled).toBeFalsy();

        // checking button click events
        fireEvent.click(closeBtn);
        expect(closeSpy).not.toBeCalled();

        fireEvent.click(lockBtn);
        expect(lockSpy).toBeCalled();
    });
});