import React, { useState } from "react";
import CharityForm from "./CharityForm";
const FamilyMemberPage = ({ memberName }) => {
  const [selectedCharity, setSelectedCharity] = useState(null);

  const handleCharitySubmit = (charity) => {
    setSelectedCharity(JSON.parse(charity));
  };

  return (
    <div>
      <h1>{memberName}'s Charity Page</h1>
      {!selectedCharity ? (
        <CharityForm onSubmit={handleCharitySubmit} />
      ) : (
        <div>
          <h2>Selected Charity</h2>
          <p>
            <strong>Name:</strong> {selectedCharity.name} <br />
            <strong>Link:</strong>{" "}
            <a href={selectedCharity.link} target="_blank" rel="noreferrer">
              {selectedCharity.link}
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default FamilyMemberPage;
