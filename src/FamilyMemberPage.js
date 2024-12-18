import React, { useState, useEffect } from "react";
import CharityForm from "./CharityForm";
import axios from "axios";

const sendTelegramMessage = async (msg, memberName) => {
  console.log("🚀 ~ sendTelegramMessage ~ msg:", msg);
  try {
    const response = await axios.post(
      `https://ai-backend-broccoli-534e6f526bc7.herokuapp.com/family_presents`,
      {
        memberName,
        msg,
      }
    );
    console.log("Message sent:", response.data);
  } catch (error) {
    console.error("Error sending message:", error);
  }
};

const FamilyMemberPage = ({ memberName, photoLink }) => {
  const [selectedCharity, setSelectedCharity] = useState(null);
  const savedDonation = localStorage.getItem(`donation_${memberName}`);
  const parsedDonation = savedDonation ? JSON.parse(savedDonation) : null;

  const handleCharitySubmit = async (charity, link) => {
    console.log("🚀 ~ handleCharitySubmit ~ charity:", charity);
    // Remove undefined parsedCharity log
    // Save to local storage
    await sendTelegramMessage(
      `${memberName} would like to donate to ${charity}!
${link}`,
      memberName
    );
    localStorage.setItem(`donation_${memberName}`, JSON.stringify(charity));
    setSelectedCharity({ name: charity }); // Add this to update state
  };

  const pageStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "clamp(1rem, 4vw, 2rem)",
    maxWidth: "800px",
    margin: "0 auto",
    minHeight: "100vh",
    backgroundColor: "#ffffff",
  };

  const headerStyles = {
    color: "#2c3e50",
    fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
    marginBottom: "2rem",
    textAlign: "center",
    fontWeight: "600",
    width: "100%",
  };

  const charityDisplayStyles = {
    backgroundColor: "#f8f9fa",
    padding: "clamp(1rem, 4vw, 2rem)",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "600px",
  };

  const charityTitleStyles = {
    color: "#2c3e50",
    fontSize: "clamp(1rem, 4vw, 1.8rem)",
    marginBottom: "1.5rem",
  };

  const charityInfoStyles = {
    fontSize: "clamp(0.9rem, 3vw, 1.1rem)",
    lineHeight: "1.6",
    color: "#34495e",
  };

  const linkStyles = {
    color: "#3498db",
    textDecoration: "none",
    transition: "color 0.2s ease",
    ":hover": {
      color: "#2980b9",
    },
  };

  const imageStyles = {
    width: "100%",
    maxWidth: "400px",
    borderRadius: "8px",
    marginBottom: "2rem",
  };

  return (
    <div style={pageStyles}>
      <h1 style={headerStyles}>
        🎄 Merry Christmas 🎄
        <br />
        {memberName}!
      </h1>
      {photoLink && (
        <img src={`/${photoLink}`} alt={memberName} style={imageStyles} />
      )}
      {!parsedDonation ? (
        <CharityForm onSubmit={handleCharitySubmit} />
      ) : (
        <div style={charityDisplayStyles}>
          <h2 style={charityTitleStyles}>Thanks!</h2>
          <div style={charityInfoStyles}>
            <p>
              I'm going to send your donation to{" "}
              <strong>{parsedDonation}</strong>. <br />
              <br />
              <strong>Merry Christmas 🎄 </strong>- Berkley
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FamilyMemberPage;
