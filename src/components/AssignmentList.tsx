import React, { useEffect, useState } from 'react';
import { fetchAssignments } from '../utils/fetchAssignments';

interface Assignment {
  id: number;
  crewId: number;
  shipId: number;
  startDate: string;
  endDate: string;
}

const AssignmentList: React.FC = () => {
  const [assignments, setAssignments] = useState<Assignment[]>([]);

  useEffect(() => {
    fetchAssignments().then(setAssignments);
  }, []);

  return (
    <div className="assignment-list">
      <h2>Assignments</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Crew ID</th>
            <th>Ship ID</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((assignment) => (
            <tr key={assignment.id}>
              <td>{assignment.id}</td>
              <td>{assignment.crewId}</td>
              <td>{assignment.shipId}</td>
              <td>{assignment.startDate}</td>
              <td>{assignment.endDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssignmentList;