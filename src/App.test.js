import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Para usar toBeInTheDocument
import App from './App';

test('verifica que el Boton se renderiza en App con el texto inicial', () => {

  const { getByText } = render(<App />);
  expect(getByText("Hacer clic aquí")).toBeInTheDocument();
});

