import React, { useState } from 'react';
import { createAssignment } from '../utils/createAssignment';

const AssignmentCreate: React.FC = () => {
  const [crewId, setCrewId] = useState('');
  const [shipId, setShipId] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [position, setPosition] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const assignment = {
      crewId,
      shipId,
      startDate,
      endDate,
      position,
    };
    const response = await createAssignment(assignment);
    if (response.status === 200) {
      alert('Assignment created successfully');
    } else {
      alert('Failed to create assignment');
    }
  };

  return (
    <div>
      <h2>Create Assignment</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Crew ID:
          <input type="text" value={crewId} onChange={(e) => setCrewId(e.target.value)} required />
        </label>
        <label>
          Ship ID:
          <input type="text" value={shipId} onChange={(e) => setShipId(e.target.value)} required />
        </label>
        <label>
          Start Date:
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
        </label>
        <label>
          End Date:
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
        </label>
        <label>
          Position:
          <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} required />
        </label>
        <button type="submit">Create Assignment</button>
      </form>
    </div>
  );
};

export default AssignmentCreate;