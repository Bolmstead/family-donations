import React, { useState, useEffect } from "react";
import CharityForm from "./CharityForm";
import axios from "axios";

const shitcoinTrackerBotToken =
  process.env.REACT_APP_SHITCOIN_TRACKER_TELEGRAM_BOT_TOKEN;

const botsChatId = process.env.REACT_APP_BOTS_TELEGRAM_CHAT_ID;

const sendTelegramMessage = async (msg) => {
  console.log("🚀 ~ sendTelegramMessage ~ msg:", msg);
  try {
    const response = await axios.post(
      `https://api.telegram.org/bot${shitcoinTrackerBotToken}/sendMessage`,
      {
        chat_id: botsChatId,
        text: msg,
      }
    );
    console.log("Message sent:", response.data);
  } catch (error) {
    console.error("Error sending message:", error);
  }
};

const FamilyMemberPage = ({ memberName, photoLink }) => {
  const [selectedCharity, setSelectedCharity] = useState(null);

  useEffect(() => {
    // Check local storage for existing donation
    const savedDonation = localStorage.getItem(`donation_${memberName}`);
    if (savedDonation) {
      setSelectedCharity(JSON.parse(savedDonation));
    }
  }, [memberName]);

  const handleCharitySubmit = async (charity, link) => {
    console.log("🚀 ~ handleCharitySubmit ~ charity:", charity);
    // Remove undefined parsedCharity log
    // Save to local storage
    await sendTelegramMessage(
      `${memberName} would like to donate to ${charity}!
${link}`
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
    whiteSpace: "nowrap",
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
    fontSize: "clamp(1.2rem, 4vw, 1.8rem)",
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
      <h1 style={headerStyles}>🎄 Merry Christmas, {memberName}! 🎄</h1>
      {photoLink && (
        <img src={`/${photoLink}`} alt={memberName} style={imageStyles} />
      )}
      {!selectedCharity ? (
        <CharityForm onSubmit={handleCharitySubmit} />
      ) : (
        <div style={charityDisplayStyles}>
          <h2 style={charityTitleStyles}>Thanks {memberName}!</h2>
          <div style={charityInfoStyles}>
            <p>
              I'm going to send the donation to{" "}
              <strong>{selectedCharity.name}</strong>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FamilyMemberPage;
