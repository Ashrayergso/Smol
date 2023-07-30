import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AnalyticsDashboard: React.FC = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/analytics');
      setData(result.data);
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="analytics-dashboard">
      <h2>Analytics Dashboard</h2>
      <div className="analytics-section">
        <h3>Number of Assignments per Ship</h3>
        <p>{data.assignmentsPerShip}</p>
      </div>
      <div className="analytics-section">
        <h3>Average Contract Durations</h3>
        <p>{data.averageContractDurations}</p>
      </div>
      <div className="analytics-section">
        <h3>Number of Crew Members per Position</h3>
        <p>{data.crewMembersPerPosition}</p>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;