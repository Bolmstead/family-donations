import React, { useState } from "react";
import charities from "./Charities";

const CharityForm = ({ onSubmit }) => {
  const [selectedCharity, setSelectedCharity] = useState({
    name: "",
    link: "",
  });
  const [customCharity, setCustomCharity] = useState({ name: "", link: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCharity.name) {
      onSubmit(selectedCharity.name, selectedCharity.link);
    } else if (customCharity.name && customCharity.link) {
      onSubmit(customCharity.name, customCharity.link);
    }
  };

  const cardStyles = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "1rem",
    margin: "0.5rem",
    cursor: "pointer",
    transition: "all 0.2s ease",
    backgroundColor: "#fff",
  };

  const selectedCardStyles = {
    ...cardStyles,
    borderColor: "#3498db",
    backgroundColor: "#ebf5fb",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  };

  const sectionStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "clamp(1rem, 4vw, 2rem)",
    margin: "2rem auto",
    maxWidth: "900px",
    backgroundColor: "#f8f9fa",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  };

  const cardsContainerStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1rem",
    marginTop: "1.5rem",
    width: "100%",
  };

  const inputStyles = {
    width: "100%",
    padding: "0.8rem",
    margin: "0.5rem 0",
    borderRadius: "6px",
    border: "1px solid #ddd",
    fontSize: "1rem",
    transition: "border-color 0.2s ease",
    outline: "none",
    "&:focus": {
      borderColor: "#3498db",
    },
  };

  const submitButtonStyles = {
    backgroundColor: "#3498db",
    color: "white",
    padding: "0.8rem 2rem",
    border: "none",
    borderRadius: "6px",
    fontSize: "1.1rem",
    cursor: "pointer",
    marginTop: "1.5rem",
    transition: "background-color 0.2s ease",
    "&:hover": {
      backgroundColor: "#2980b9",
    },
    display: "block",
    margin: "1.5rem auto",
  };

  const headingStyles = {
    color: "#2c3e50",
    marginBottom: "1.5rem",
    textAlign: "center",
    fontSize: "clamp(1.2rem, 4vw, 1.4rem)",
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 style={headingStyles}>
        I'm giving you $50 to donate to any Charity you would like. <br />{" "}
        Choose one to donate to and click submit at the bottom of the screen
      </h3>

      <div style={sectionStyles}>
        <div style={cardsContainerStyles}>
          {charities.map((charity, index) => (
            <div
              key={index}
              style={
                selectedCharity.name === charity.name
                  ? selectedCardStyles
                  : cardStyles
              }
              onClick={() => {
                setSelectedCharity(charity);
                setCustomCharity({ name: "", link: "" });
              }}
            >
              <h3 style={{ margin: "0 0 0.5rem 0" }}>{charity.name}</h3>
              <a
                href={charity.link}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{ color: "#3498db" }}
              >
                Visit Website
              </a>
            </div>
          ))}
        </div>
      </div>

      <div style={sectionStyles}>
        <h3 style={headingStyles}>Or pick your own! </h3>{" "}
        <span>
          <a
            href="https://www.charitywatch.org/top-rated-charities"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#3498db", textDecoration: "none" }}
          >
            (Ideas)
          </a>
        </span>
        <input
          type="text"
          placeholder="Charity Name"
          value={customCharity.name}
          onChange={(e) => {
            setSelectedCharity({ name: "", link: "" });
            setCustomCharity({ ...customCharity, name: e.target.value });
          }}
          style={inputStyles}
        />
        <input
          type="url"
          placeholder="Charity's Site"
          value={customCharity.link}
          onChange={(e) => {
            setSelectedCharity({ name: "", link: "" });
            setCustomCharity({ ...customCharity, link: e.target.value });
          }}
          style={inputStyles}
        />
      </div>
      <button type="submit" style={submitButtonStyles}>
        Submit
      </button>
    </form>
  );
};

export default CharityForm;
