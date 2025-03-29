import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Landing from '../src/pages/index';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Landing Page', () => {
  const pushMock = jest.fn();

  beforeEach(() => {
    useRouter.mockReturnValue({
      push: pushMock,
    });
    pushMock.mockClear();
    localStorage.clear();
  });

  test('renderiza el título y el botón', () => {
    render(<Landing />);
    expect(screen.getByText('SimplySwap: Compra i ven sense complicacions')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /comença ara/i })).toBeInTheDocument();
  });

  test('redirecciona a /register si no existe "usuario" en localStorage', () => {
    render(<Landing />);
    const button = screen.getByRole('button', { name: /comença ara/i });
    fireEvent.click(button);
    expect(pushMock).toHaveBeenCalledWith('/register');
  });

  test('redirecciona a /tecnologia/crear si existe "usuario" en localStorage', () => {
    localStorage.setItem('usuario', 'test');
    render(<Landing />);
    const button = screen.getByRole('button', { name: /comença ara/i });
    fireEvent.click(button);
    expect(pushMock).toHaveBeenCalledWith('/tecnologia/crear');
  });
});
