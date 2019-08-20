// Test away
import React from 'react';
import { render, fireEvent, act } from 'react-testing-library';
import "react-testing-library/cleanup-after-each";

import Controls from './Controls';

describe('<Controls />', () => {
    it('renders without crashing', () => {
        render(<Controls />);
    });

    it('unlocked and open', () => {
        const closeSpy = jest.fn();
        const { getByText } = render(<Controls locked={false} closed={false} toggleClosed={closeSpy} />);
        const lockBtn = getByText(/lock gate/i);
        const closeBtn = getByText(/close gate/i);
        expect(lockBtn.disabled).toBe(true);
        expect(closeBtn.disabled).toBe(false);

        act(() => {
            fireEvent.click(closeBtn);
        });
        expect(closeSpy).toBeCalled();
    });

    it('unlocked and closed', () => {
        const openSpy = jest.fn();
        const lockSpy = jest.fn();
        const { getByText } = render(<Controls locked={false} closed={true} toggleClosed={openSpy} toggleLocked={lockSpy} />);
        const lockBtn = getByText(/lock gate/i);
        const openBtn = getByText(/open gate/i);
        expect(lockBtn.disabled).toBe(false);
        expect(openBtn.disabled).toBe(false);

        fireEvent.click(openBtn);
        expect(openSpy).toBeCalled();

        fireEvent.click(lockBtn);
        expect(lockSpy).toBeCalled();
    });

    it('locked and closed', () => {
        const unlockSpy = jest.fn();
        const { getByText } = render(<Controls locked={true} closed={true} toggleLocked={unlockSpy} />);
        const unlockBtn = getByText(/unlock gate/i);
        const openBtn = getByText(/open gate/i);
        expect(unlockBtn.disabled).toBe(false);
        expect(openBtn.disabled).toBe(true);

        fireEvent.click(unlockBtn);
        expect(unlockSpy).toBeCalled();
    });
});