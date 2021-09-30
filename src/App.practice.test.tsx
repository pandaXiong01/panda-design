import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('test App all component', () => {
  it('test buttton use', () => {
    const { getByText } = render(<App />);
    const btnElement = getByText('Add');
    expect(btnElement).toBeInTheDocument();
  
    const countElement = getByText('0')
    fireEvent.click(btnElement);
    expect(countElement.textContent).toEqual("1");

    fireEvent.click(btnElement);
    expect(countElement.textContent).toEqual("2");
  })
  
});
