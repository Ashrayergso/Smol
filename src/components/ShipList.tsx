import React, { useEffect, useState } from 'react';
import { fetchShips } from '../utils/fetchShips';

interface Ship {
  id: number;
  name: string;
  capacity: number;
  // Add other ship properties as needed
}

const ShipList: React.FC = () => {
  const [ships, setShips] = useState<Ship[]>([]);

  useEffect(() => {
    fetchShips().then(setShips);
  }, []);

  return (
    <div className="ship-list">
      <h2>Ship List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Capacity</th>
            {/* Add other ship properties as needed */}
          </tr>
        </thead>
        <tbody>
          {ships.map((ship) => (
            <tr key={ship.id}>
              <td>{ship.id}</td>
              <td>{ship.name}</td>
              <td>{ship.capacity}</td>
              {/* Add other ship properties as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShipList;