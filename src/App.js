import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import FamilyMemberPage from "./FamilyMemberPage";

const familyMembers = [
  { name: "Brudda", photo: "Murph.png" },
  { name: "Dad", photo: "DadKatieJake.png" },
  { name: "Mom", photo: "Mom.png" },
  { name: "Brett", photo: "Brett.png" },
  { name: "Katie", photo: "DadKatieJake.png" },
  { name: "Ashley", photo: "Ash.png" },
  { name: "Tanner", photo: "Tanner.png" },
  { name: "Kai", photo: "Kai.png" },
  { name: "Emma", photo: "Emma.png" },
  { name: "Jacob", photo: "" },
  { name: "Amy", photo: "" },
  { name: "Tyler", photo: "" },
];

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
          {familyMembers.map((item) => (
            <Route
              key={item.name}
              path={`/${item.name}`}
              element={
                <FamilyMemberPage
                  memberName={
                    item.name.charAt(0).toUpperCase() + item.name.slice(1)
                  }
                  photoLink={item.photo}
                />
              }
            />
          ))}
          {/* Redirect to a default page if URL is invalid */}
          <Route
            path="*"
            element={<Navigate to={`/${familyMembers[0].name}`} replace />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
