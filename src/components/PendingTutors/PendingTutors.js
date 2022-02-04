import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ActiveTutorsTable from "../ActiveTutorsTable/ActiveTutorsTable";

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name PendingTutorsPage with the name for the new component.
function PendingTutors(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'


  const [heading, setHeading] = useState("Functional Component");
  const activeTutors = useSelector((store) => store.activeTutors);



  return (
    <div>
      <h1>Tutors Pending Matches</h1>
      {/* number will be replaced with an actual count from the db */}
      <p>{activeTutors.length} pending tutor(s)</p>
      <ActiveTutorsTable />
    </div>
  );
}

export default PendingTutors;
