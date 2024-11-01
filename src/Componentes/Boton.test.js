
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // para métodos como toBeInTheDocument
import Boton from './Boton';

test('verifica que el botón cambie el texto al hacer clic', () => {
  
  const { getByText } = render(<Boton />);

  
  const button = getByText("Hacer clic aquí");
  expect(button).toBeInTheDocument();

 
  fireEvent.click(button);

  
  expect(getByText("¡Gracias por hacer clic!")).toBeInTheDocument();
});






// import {render, screen, fireEvent} from '@testing-library/react';
// import Button from './Button';

// test("Verificar que el boton funcione correctamente", () => {
//     const handleClick = jest.fn();
//     render(<Button onClick={handleClick} label="¡Haz clic aquí!" />);
//     const ButtonElement = screen.getByText("¡Haz clic aquí!");
//     fireEvent.click(ButtonElement);
// //     expect(handleClick).toHaveBeenCalledTimes(1);
//  });

