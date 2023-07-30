import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

interface CrewProfileEditProps {
  id: string;
}

const CrewProfileEdit: React.FC<CrewProfileEditProps> = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const [crewMember, setCrewMember] = useState({
    name: '',
    position: '',
    contractLength: '',
    vacationTime: '',
    certificates: [],
  });

  useEffect(() => {
    axios.get(`/api/crew/${id}`)
      .then(response => {
        setCrewMember(response.data);
      })
      .catch(error => {
        console.error('Error fetching crew member data: ', error);
      });
  }, [id]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCrewMember({
      ...crewMember,
      [event.target.name]: event.target.value
    });
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    axios.put(`/api/crew/${id}`, crewMember)
      .then(response => {
        history.push(`/crew/${id}`);
      })
      .catch(error => {
        console.error('Error updating crew member data: ', error);
      });
  };

  return (
    <div>
      <h2>Edit Crew Member Profile</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={crewMember.name} onChange={handleInputChange} />
        </label>
        <label>
          Position:
          <input type="text" name="position" value={crewMember.position} onChange={handleInputChange} />
        </label>
        <label>
          Contract Length:
          <input type="text" name="contractLength" value={crewMember.contractLength} onChange={handleInputChange} />
        </label>
        <label>
          Vacation Time:
          <input type="text" name="vacationTime" value={crewMember.vacationTime} onChange={handleInputChange} />
        </label>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default CrewProfileEdit;