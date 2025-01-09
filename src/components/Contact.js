import React from 'react';
import { Outlet } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      <h2>Selecciona un contacto para ver sus detalles</h2>
      <Outlet /> {/* Aquí se renderizarán los detalles del contacto seleccionados */}
    </div>
  );
};

export default Contact;
