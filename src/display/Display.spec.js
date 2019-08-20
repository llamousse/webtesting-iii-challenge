// Test away!
import React from 'react';
import Display from './Display';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup);
describe('<Display />', () => {
    it('renders without crashing', () => {
        render(<Display />);
    });

    it('open and unlocked', () => {
      const { getByText, queryByText } = render(<Display closed={false} locked={false} />);
      // check for correct text
      const unlock = getByText(/unlocked/i);
      const open = getByText(/open/i);
      // expect(queryByText(/open/i)).toBeTruthy();
      // expect(queryByText(/closed/i)).toBe(null);
      expect(unlock).toHaveClass('green-led');
      // check that incorrect text does not show up in document
      expect(queryByText(/closed/i)).toBe(null);
    });

    it('closed and unlocked', () => {
      const { getByText } = render(<Display closed={true} locked={false} /> );
      // check for correct text
      getByText(/unlocked/i);
      getByText(/closed/i);
    });

    it('closed and locked', () => {
      const { getByText } = render(<Display closed={true} locked={true} /> );
      // check for correct text
      getByText(/locked/i);
      getByText(/closed/i);
    });
});