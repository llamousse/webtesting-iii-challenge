// Test away
import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
    beforeEach(cleanup);
    it('should render without crashing', () => {
        render(<Dashboard />);
    });

    // INTEGRATION TEST - SNAPSHOT TESTING
    it('matches snapshot', () => {
        const dashboard = render(<Dashboard />);
        expect(dashboard).toMatchSnapshot();
    });
});

describe('<Dashboard /> state cycle testing', () => {

    const dashboard = render(<Dashboard />);

    it('should show the initial state unlocked and open', () => {
        dashboard.getByText(/^unlocked$/i);
        dashboard.getByText(/open/i);
        const lockBtn = dashboard.getByText(/lock gate/i);
        const closeBtn = dashboard.getByText(/close gate/i);

        expect(lockBtn.disabled).toBe(true);
        expect(closeBtn.disabled).toBe(false);
    });

    it('unlocked open to unlocked closed', () => {
        const lockBtn = dashboard.getByText(/^lock gate$/i);
        const closeBtn = dashboard.getByText(/^close gate$/i);
        fireEvent.click(closeBtn);
    
        dashboard.getByText(/^unlocked$/i);
        dashboard.getByText(/^closed$/i);
    
        const openBtn = dashboard.getByText(/^open gate$/i);
        expect(lockBtn.disabled).toBe(false);
        expect(openBtn.disabled).toBe(false);
      });

      it('unlocked closed to locked closed', () => {
        const lockBtn = dashboard.getByText(/^lock gate$/i);
        const openBtn = dashboard.getByText(/^open gate$/i);
        fireEvent.click(lockBtn);
    
        dashboard.getByText(/^locked$/i);
        dashboard.getByText(/^closed$/i);
    
        const unlockBtn = dashboard.getByText(/^unlock gate$/i);
        expect(unlockBtn.disabled).toBe(false);
        expect(openBtn.disabled).toBe(true);
      });

      it('locked closed to unlocked closed', () => {
        const unlockBtn = dashboard.getByText(/^unlock gate$/i);
        const openBtn = dashboard.getByText(/^open gate$/i);
        fireEvent.click(unlockBtn);
    
        dashboard.getByText(/^unlocked$/i);
        dashboard.getByText(/^closed$/i);
    
        const lockBtn = dashboard.getByText(/^lock gate$/i);
        expect(lockBtn.disabled).toBe(false);
        expect(openBtn.disabled).toBe(false);
      });

      it('unlocked closed to unlocked open', () => {
        const openBtn = dashboard.getByText(/^open gate$/i);
        fireEvent.click(openBtn);
    
        dashboard.getByText(/^unlocked$/i);
        dashboard.getByText(/^open$/i);
    
        const lockBtn = dashboard.getByText(/^lock gate$/i);
        const closeBtn = dashboard.getByText(/^close gate$/i);
        expect(lockBtn.disabled).toBe(true);
        expect(closeBtn.disabled).toBe(false);
      });
});