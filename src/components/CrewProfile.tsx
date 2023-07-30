```tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Crew } from '../models/Crew';
import { fetchCrew } from '../utils/fetchCrew';
import '../styles/profile.css';

interface CrewProfileParams {
  id: string;
}

export const CrewProfile: React.FC = () => {
  const { id } = useParams<CrewProfileParams>();
  const [crew, setCrew] = useState<Crew | null>(null);

  useEffect(() => {
    fetchCrew(id).then(setCrew);
  }, [id]);

  if (!crew) {
    return <div>Loading...</div>;
  }

  return (
    <div className="crew-profile">
      <h2>{crew.name}</h2>
      <p>Position: {crew.position}</p>
      <p>Contract Duration: {crew.contractDuration}</p>
      <p>Vacation Time: {crew.vacationTime}</p>
      <p>Certificates: {crew.certificates.join(', ')}</p>
      <p>Previous Assignments: {crew.previousAssignments.join(', ')}</p>
      <p>Preferred Contract Length: {crew.preferredContractLength}</p>
    </div>
  );
};
```