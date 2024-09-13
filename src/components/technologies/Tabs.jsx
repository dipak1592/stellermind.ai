"use client";

import React, { useState } from "react";
import PropTypes from "prop-types";
import DynamicHeading from "../DynamicHeading";
import Frontend from "./Frontend";
import Backend from "./Backend";
import ARVR from "./ARVR";
import AI from "./AI";
import CMS from "./CMS";
import Mobile from "./Mobile";

// Define the Tabs component
function Tabs({ tabs, activetab }) {
  const [activeTab, setActiveTab] = useState(activetab);

  // Define the content based on the active tab
  const TechContent = () => {
    switch (activeTab) {
      case "AR":
        return <ARVR />;
      case "Backend":
        return <Backend />;
      case "Frontend":
        return <Frontend />;
      case "CMS":
        return <CMS />;
      case "Mobile":
        return <Mobile />;
      default:
        return <AI />; // Default to AI if no match
    }
  };

  return (
    <>
      <DynamicHeading
        FirstContent="Technologies"
        FirstsubContent="We Work With"
      />
      <div className="text-white container">
        <main className="flex justify-center">
        <div className="flex flex-wrap justify-center gap-4 mb-8 border border-gray-600 ">
  {tabs.map((tab, index) => (
    <button
      key={tab.id} // Use tab.id for unique identification
      className={`px-4 py-2 text-[20px] font-medium rounded-[2px] transition-colors duration-300 w-full sm:w-auto ${
        activeTab === tab.id
          ? "bg-[#3b83f631] border-b-[2px] border-blue-500 text-white"
          : "text-white hover:bg-gray-700 hover:border-gray-500"
      }`}
      onClick={() => setActiveTab(tab.id)} // Set active tab by id
    >
      {tab.label} {/* Render tab label */}
    </button>
  ))}
</div>

        </main>
        <TechContent /> {/* Render the content for the active tab */}
      </div>
    </>
  );
}

// Define prop types for Tabs component
Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, // id for each tab
      label: PropTypes.string.isRequired, // label for each tab
    })
  ).isRequired,
  activetab: PropTypes.string.isRequired, // Initial active tab
};

export default Tabs;
