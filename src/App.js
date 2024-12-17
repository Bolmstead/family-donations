import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import FamilyMemberPage from "./FamilyMemberPage";

const App = () => {
  return (
    <Router>
      <div
        style={{
          maxWidth: "100%",
          padding: "1rem",
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >
        <Routes>
          <Route
            path="/Brudda"
            element={<FamilyMemberPage memberName="Brudda" photoLink="Murph.png" />}
          />
          <Route
            path="/Dad" 
            element={<FamilyMemberPage memberName="Dad" photoLink="DadKatieJake.png" />}
          />
          <Route
            path="/Mom"
            element={<FamilyMemberPage memberName="Mom" photoLink="Mom.png" />}
          />
          <Route
            path="/Brett"
            element={<FamilyMemberPage memberName="Brett" photoLink="Brett.png" />}
          />
          <Route
            path="/Katie"
            element={<FamilyMemberPage memberName="Katie" photoLink="DadKatieJake.png" />}
          />
          <Route
            path="/Ashley"
            element={<FamilyMemberPage memberName="Ashley" photoLink="Ash.png" />}
          />
          <Route
            path="/Tanner"
            element={<FamilyMemberPage memberName="Tanner" photoLink="Tanner.png" />}
          />
          <Route
            path="/Kai"
            element={<FamilyMemberPage memberName="Kai" photoLink="Kai.png" />}
          />
          <Route
            path="/Emma"
            element={<FamilyMemberPage memberName="Emma" photoLink="Emma.png" />}
          />
          <Route
            path="/Sharon"
            element={<FamilyMemberPage memberName="Sharon" photoLink="Sharon.png" />}
          />
          <Route
            path="/Jacob"
            element={<FamilyMemberPage memberName="Jacob" photoLink="" />}
          />
          <Route
            path="/Amy"
            element={<FamilyMemberPage memberName="Amy" photoLink="" />}
          />
          <Route
            path="/Tyler"
            element={<FamilyMemberPage memberName="Tyler" photoLink="" />}
          />
          {/* Redirect to a default page if URL is invalid */}
          <Route path="*" element={<Navigate to={`/`} replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
