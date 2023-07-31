import { Crew } from '../models/Crew';
import { Ship } from '../models/Ship';
import { Assignment } from '../models/Assignment';

export function assignCrewToShips(crews: Crew[], ships: Ship[]): Assignment[] {
  let assignments: Assignment[] = [];

  // Sort crews by their contract duration in descending order
  crews.sort((a, b) => b.contractDuration - a.contractDuration);

  // Iterate over each ship
  for (let ship of ships) {
    // Iterate over each crew
    for (let i = 0; i < crews.length; i++) {
      let crew = crews[i];

      // Check if the crew's position matches with the ship's requirement
      // and the crew is not already assigned
      if (ship.requiredPositions.includes(crew.position) && !crew.isAssigned) {
        // Create a new assignment
        let assignment = new Assignment(ship, crew);

        // Add the assignment to the assignments list
        assignments.push(assignment);

        // Mark the crew as assigned
        crew.isAssigned = true;

        // Break the loop as the crew is assigned to a ship
        break;
      }
    }
  }

  return assignments;
}
```