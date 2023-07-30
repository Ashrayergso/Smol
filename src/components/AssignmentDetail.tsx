import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface Assignment {
  id: number;
  crewId: number;
  shipId: number;
  startDate: string;
  endDate: string;
}

const AssignmentDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [assignment, setAssignment] = useState<Assignment | null>(null);

  useEffect(() => {
    const fetchAssignment = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/assignments/${id}`);
        setAssignment(response.data);
      } catch (error) {
        console.error('Error fetching assignment:', error);
      }
    };

    fetchAssignment();
  }, [id]);

  if (!assignment) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Assignment Detail</h2>
      <p><strong>Crew ID:</strong> {assignment.crewId}</p>
      <p><strong>Ship ID:</strong> {assignment.shipId}</p>
      <p><strong>Start Date:</strong> {new Date(assignment.startDate).toLocaleDateString()}</p>
      <p><strong>End Date:</strong> {new Date(assignment.endDate).toLocaleDateString()}</p>
    </div>
  );
};

export default AssignmentDetail;