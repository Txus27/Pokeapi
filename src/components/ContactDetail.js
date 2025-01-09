import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ContactDetail = () => {
  const { name } = useParams();  // Obtenemos el parámetro de la URL (juan-luis o pedro)
  const [avatars, setAvatars] = useState({
    juanLuis: '',
    pedro: ''
  });

  // Función para obtener avatares aleatorios
  const fetchAvatars = () => {
    setAvatars({
      juanLuis: `https://i.pravatar.cc/150?gender=male&random=${Math.floor(Math.random() * 1000)}`, // Avatar aleatorio para Juan Luis
      pedro: `https://i.pravatar.cc/150?gender=male&random=${Math.floor(Math.random() * 1000)}`, // Avatar aleatorio para Pedro
    });
  };

  useEffect(() => {
    fetchAvatars(); // Llamamos a la función para cargar los avatares al iniciar
  }, []);  // Solo se ejecuta una vez cuando el componente se monta

  return (
    <div className="container mt-4">
      <h2>Detalles de Contacto</h2>

      {/* Mostrar los detalles según el nombre de la URL */}
      {name === 'juan-luis' && (
        <div>
          <h3>Juan Luis</h3>
          <img src={avatars.juanLuis} alt="Juan Luis Avatar" className="img-fluid rounded-circle" />
          <p>Email: juan.luis@iescuravalera.com</p>
          <p>Teléfono: 950-654-320</p>
        </div>
      )}
      {name === 'pedro' && (
        <div>
          <h3>Pedro</h3>
          <img src={avatars.pedro} alt="Pedro Avatar" className="img-fluid rounded-circle" />
          <p>Email: pedro@iescuravalera.com</p>
          <p>Teléfono: 950-654-321</p>
        </div>
      )}
    </div>
  );
};

export default ContactDetail;
