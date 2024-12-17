import React, { useState } from "react";
import charities from "./Charities";

const CharityForm = ({ onSubmit }) => {
  const [selectedCharity, setSelectedCharity] = useState("");
  const [customCharity, setCustomCharity] = useState({ name: "", link: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCharity) {
      onSubmit(selectedCharity);
    } else if (customCharity.name && customCharity.link) {
      onSubmit(JSON.stringify(customCharity));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Select or Provide a Charity</h2>
      <div>
        <label>Choose a charity:</label>
        <select
          onChange={(e) => setSelectedCharity(e.target.value)}
          value={selectedCharity}
        >
          <option value="">-- Select Charity --</option>
          {charities.map((charity, index) => (
            <option key={index} value={JSON.stringify(charity)}>
              {charity.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <h3>Or Add a Custom Charity</h3>
        <input
          type="text"
          placeholder="Charity Name"
          value={customCharity.name}
          onChange={(e) =>
            setCustomCharity({ ...customCharity, name: e.target.value })
          }
        />
        <input
          type="url"
          placeholder="Charity Link"
          value={customCharity.link}
          onChange={(e) =>
            setCustomCharity({ ...customCharity, link: e.target.value })
          }
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CharityForm;
