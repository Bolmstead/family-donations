import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import FamilyMemberPage from "./FamilyMemberPage";

const familyMembers = [
  "murphy",
  "dad",
  "mom",
  "brett",
  "katie",
  "ashley",
  "tanner",
  "kai",
  "emma",
  "jacob",
  "amy",
  "tyler",
];

const App = () => {
  return (
    <Router>
      <Routes>
        {familyMembers.map((name) => (
          <Route
            key={name}
            path={`/${name}`}
            element={
              <FamilyMemberPage
                memberName={name.charAt(0).toUpperCase() + name.slice(1)}
              />
            }
          />
        ))}
        {/* Redirect to a default page if URL is invalid */}
        <Route
          path="*"
          element={<Navigate to={`/${familyMembers[0]}`} replace />}
        />
      </Routes>
    </Router>
  );
};

export default App;
