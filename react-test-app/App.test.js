import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App.js';

describe('App component', () => {
  it('renders greeting', () => {
    render(React.createElement(App));
    expect(screen.getByText('Hello, React!')).toBeDefined();
  });
});
