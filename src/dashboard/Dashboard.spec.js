import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react/pure';
import Dashboard from './Dashboard.js';

describe('<Dashboard />', () => {
  beforeEach(cleanup);
  it('renders without crashing', () => {
    render(<Dashboard /> );
  });
});

describe('<DashBoard /> state transitions', () => {
  const { getByText } = render(<Dashboard />);

  it('default state open and unlocked', () => {
    //verify open and unlocked
    getByText(/open/i);
    getByText(/^unlocked$/i);

    //getting 'lock' gate and not 'unlocked' gate
    // ^ $ makes sure it's from the beginning of ^ and ends at &
    getByText(/^lock gate$/i);
    getByText(/^close gate$/i);
  });

  it('open and unlocked to closed and unlocked', () => {
    const closeBtn = getByText(/close gate/i);
    fireEvent.click(closeBtn);

    // check display text
    getByText(/closed/i);
    getByText(/^unlocked$/i);

    // check button test
    getByText(/^lock gate$/i);
    getByText(/open gate/i);
  });

  it('closed and unlocked to closed and locked', () => {
    const lockBtn = getByText(/lock gate/i);
    fireEvent.click(lockBtn);

    // check display text
    getByText(/closed/i);
    getByText(/^locked$/i);

    // check button test
    getByText(/unlock gate/i);
    getByText(/open gate/i);
  });

  it('closed and locked to closed and unlocked', () => {
    const lockBtn = getByText(/unlock gate/i);
    fireEvent.click(lockBtn);

    // check display text
    getByText(/closed/i);
    getByText(/^unlocked$/i);

    // check button test
    getByText(/^lock gate$/i);
    getByText(/open gate/i);
  });

  it('closed and unlocked to open and unlocked', () => {
    const openBtn = getByText(/open gate/i);
    fireEvent.click(openBtn);

    // check display text
    getByText(/open/i);
    getByText(/^unlocked$/i);

    // check button test
    getByText(/^lock gate$/i);
    getByText(/close gate/i);
  });
});