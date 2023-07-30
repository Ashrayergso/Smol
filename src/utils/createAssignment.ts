import axios from 'axios';

interface AssignmentData {
  crewId: string;
  shipId: string;
  startDate: string;
  endDate: string;
}

export const createAssignment = async (assignmentData: AssignmentData) => {
  try {
    const response = await axios.post('/api/assignments', assignmentData);
    if (response.status === 200) {
      return { status: 'ASSIGNMENT_SUCCESS', data: response.data };
    } else {
      return { status: 'ASSIGNMENT_FAILURE', data: response.data };
    }
  } catch (error) {
    return { status: 'ASSIGNMENT_FAILURE', data: error.message };
  }
};