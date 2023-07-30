```tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Crew } from '../models/Crew';

interface CrewDetailProps {
  id: string;
}

const CrewDetail: React.FC<CrewDetailProps> = () => {
  const { id } = useParams<CrewDetailProps>();
  const [crew, setCrew] = useState<Crew | null>(null);

  useEffect(() => {
    fetch(`/api/crew/${id}`)
      .then(response => response.json())
      .then(data => setCrew(data))
      .catch(error => console.error('Error:', error));
  }, [id]);

  if (!crew) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{crew.name}</h2>
      <p>Position: {crew.position}</p>
      <p>Contract Duration: {crew.contractDuration}</p>
      <p>Vacation Time: {crew.vacationTime}</p>
      <p>Certificates: {crew.certificates.join(', ')}</p>
    </div>
  );
};

export default CrewDetail;
```