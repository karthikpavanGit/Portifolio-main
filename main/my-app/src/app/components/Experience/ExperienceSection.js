import React from "react";
import "../Experience/page.css";

// Import logos
import SACLogo from "../../assets/SAC.png"; // Path to KLU SAC logo
 // Path to ZeroOne Code Club logo

// Experience data with logo paths
const experienceData = [
  {
    organization: "KLU SAC",
    logo: SACLogo, // Add logo reference here
    role: "Chairman - DOSE Council",
    duration: "Nov 2023 - Present · 1 yr 1 mo",
    location: "Vijayawada, Andhra Pradesh, India · On-site",
    description:
      "As Chairman of DOSE, I lead the strategic planning and execution of initiatives to enhance student engagement within our department. My role involves orchestrating key operations, collaborating with stakeholders, and ensuring the delivery of exceptional experiences for students during events and activities.",
    skills: ["Organization Skills"],
  },
  {
    organization: "KLU SAC",
    logo: SACLogo,
    role: "Core Member",
    duration: "Jul 2022 - Nov 2023 · 1 yr 5 mos",
    location: "Vijayawada, Andhra Pradesh, India · On-site",
    skills: ["Organization Skills", "Team Leadership", "+3 skills"],
  },
  {
    organization: "ZeroOne Code Club",
    logo: SACLogo,
    role: "President",
    duration: "Jun 2024 - Nov 2024 · 6 mos",
    location: "Vijayawada, Andhra Pradesh, India · On-site",
    skills: ["Team Leadership", "Organization Skills", "+4 skills"],
  },
  {
    organization: "ZeroOne Code Club",
    logo: SACLogo,
    role: "Secretary",
    duration: "Jun 2023 - Jun 2024 · 1 yr 1 mo",
    location: "Vijayawada, Andhra Pradesh, India · On-site",
    description:
      "As the Secretary of ZeroOne Code Club, my role involves organizing club events, meetings, and workshops to facilitate learning and collaboration. I collaborate with members, volunteers, and external partners to expand our reach and impact.",
    skills: ["Organization Skills", "Event Management", "+3 skills"],
  },
];

const ExperienceSection = () => {
  return (
    <div className="experience-section">
      <h2 className="section-title">Experience</h2>
      <ul className="experience-list">
        {experienceData.map((item, index) => (
          <li key={index} className="experience-item">
            {/* Logo and organization */}
            <div className="item-header">
              <img
                src={item.logo}
                alt={`${item.organization} logo`}
                className="organization-logo"
              />
              <div>
                <h3 className="organization">{item.organization}</h3>
                <span className="duration">{item.duration}</span>
              </div>
            </div>
            <p className="location">{item.location}</p>
            <h4 className="role">{item.role}</h4>
            {item.description && (
              <p className="description">{item.description}</p>
            )}
            <p className="skills">
              <strong>Skills:</strong> {item.skills.join(", ")}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceSection;
