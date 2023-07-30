import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Ship } from '../models/Ship';

interface ShipDetailProps {
  id: string;
}

const ShipDetail: React.FC<ShipDetailProps> = () => {
  const { id } = useParams<ShipDetailProps>();
  const [ship, setShip] = useState<Ship | null>(null);

  useEffect(() => {
    fetch(`/api/ships/${id}`)
      .then(response => response.json())
      .then(data => setShip(data))
      .catch(error => console.error('Error:', error));
  }, [id]);

  if (!ship) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{ship.name}</h2>
      <p>{ship.description}</p>
      <p>Capacity: {ship.capacity}</p>
      <p>Operating Range: {ship.operatingRange}</p>
      <p>Home Port: {ship.homePort}</p>
    </div>
  );
};

export default ShipDetail;