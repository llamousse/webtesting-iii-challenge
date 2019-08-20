// Test away!
import React from 'react';
import { render } from 'react-testing-library';
import "react-testing-library/cleanup-after-each";

import Display from './Display';

describe('<Display />', () => {
    it('renders without crashing', () => {
        const display = render(<Display />);
    });

    it('unlocked and open', () => {
        const { getByText } = render(<Display locked={false} closed={false}/>);
        const unlocked = getByText(/unlocked/i);
        const open = getByText(/open/i);
        expect(unlocked.className).toMatch(/\bgreen-led\b/);
        expect(open.className).toMatch(/\bgreen-led\b/);
      });
      
      it('unlocked and closed', () => {
        const { getByText } = render(<Display locked={false} closed={true}/>);
        const unlocked = getByText(/unlocked/i);
        const closed = getByText(/closed/i);
        expect(unlocked.className).toMatch(/\bgreen-led\b/);
        expect(closed.className).toMatch(/\bred-led\b/);
      });

      it('locked and closed', () => {
        const { getByText } = render(<Display locked={true} closed={true}/>);
        const locked = getByText(/locked/i);
        const closed = getByText(/closed/i);
        expect(locked.className).toMatch(/\bred-led\b/);
        expect(closed.className).toMatch(/\bred-led\b/);
      });
});