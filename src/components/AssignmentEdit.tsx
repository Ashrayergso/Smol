import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Assignment } from '../models/Assignment';
import { Crew } from '../models/Crew';
import { Ship } from '../models/Ship';
import { fetchCrew, fetchShips } from '../utils/fetchData';
import { editAssignment } from '../utils/editData';

interface RouteParams {
  id: string;
}

const AssignmentEdit: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const history = useHistory();
  const [assignment, setAssignment] = useState<Assignment | null>(null);
  const [crew, setCrew] = useState<Crew[]>([]);
  const [ships, setShips] = useState<Ship[]>([]);

  useEffect(() => {
    fetchCrew().then(setCrew);
    fetchShips().then(setShips);
    // Fetch the assignment to be edited
    // This is a placeholder, replace with actual fetch function
    fetchAssignment(id).then(setAssignment);
  }, [id]);

  const handleEdit = (updatedAssignment: Assignment) => {
    editAssignment(updatedAssignment).then(() => {
      history.push('/assignments');
    });
  };

  if (!assignment) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Edit Assignment</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleEdit(assignment);
      }}>
        <label>
          Crew:
          <select value={assignment.crewId} onChange={(e) => setAssignment({ ...assignment, crewId: e.target.value })}>
            {crew.map((crewMember) => (
              <option key={crewMember.id} value={crewMember.id}>{crewMember.name}</option>
            ))}
          </select>
        </label>
        <label>
          Ship:
          <select value={assignment.shipId} onChange={(e) => setAssignment({ ...assignment, shipId: e.target.value })}>
            {ships.map((ship) => (
              <option key={ship.id} value={ship.id}>{ship.name}</option>
            ))}
          </select>
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AssignmentEdit;