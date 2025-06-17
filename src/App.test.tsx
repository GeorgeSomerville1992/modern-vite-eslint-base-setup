import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { App } from './App';
import { MemoryRouter } from 'react-router';

describe('App', () => {
  it('Renders hello world', () => {
    // ARRANGE
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    );
    // ACT
    // EXPECT
    expect(
      screen.getByRole('heading', {
        level: 1,
      }),
    ).toHaveTextContent('Hello World');
  });

  it('Renders not found if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/this-route-does-not-exist']}>
        <App />
      </MemoryRouter>,
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      }),
    ).toHaveTextContent('Not Found');
  });
});
