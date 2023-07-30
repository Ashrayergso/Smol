```tsx
import React, { useEffect, useState } from 'react';
import { fetchCrew } from '../utils/fetchCrew';
import './CrewList.css';

interface Crew {
  id: number;
  name: string;
  position: string;
  contractDuration: number;
  vacationTime: number;
}

const CrewList: React.FC = () => {
  const [crewList, setCrewList] = useState<Crew[]>([]);

  useEffect(() => {
    fetchCrew().then(setCrewList);
  }, []);

  return (
    <div className="crew-list">
      <h2>Crew List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Contract Duration</th>
            <th>Vacation Time</th>
          </tr>
        </thead>
        <tbody>
          {crewList.map(crew => (
            <tr key={crew.id}>
              <td>{crew.id}</td>
              <td>{crew.name}</td>
              <td>{crew.position}</td>
              <td>{crew.contractDuration}</td>
              <td>{crew.vacationTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CrewList;
```