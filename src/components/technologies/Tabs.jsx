"use client";
import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes if you use it for type checking
import DynamicHeading from '../DynamicHeading';
import Frontend from './Frontend';
import Backend from './Backend';
import ARVR from './ARVR';
import AI from './AI';
import CMS from './CMS';
import Mobile from './Mobile';

// Define the Tabs component
function Tabs({ tabs, activetab }) {
  const [activeTab, setActiveTab] = useState(activetab);

  // Define the content based on the active tab
  const TechContent = () => {
    switch (activeTab) {
      case 'AR':
        return <ARVR />;
      case 'Backend':
        return <Backend />;
      case 'Frontend':
        return <Frontend />;
      case 'CMS':
        return <CMS />;
      case 'Mobile':
        return <Mobile />;
      default:
        return <AI />;
    }
  };

  return (
    <>
      <DynamicHeading FirstContent={"Technologies"} FirstsubContent={"We Work With"} />
      <div className="text-white container">
        <main className="flex justify-center">
          <div className="inline-block text-center gap-4 mb-8 rounded-md border border-gray-600">
            {tabs.map((tab) => (
              <button
                key={tab.id} // Use tab.id as the key
                className={`px-4 py-2 font-medium text-[20px] rounded-[2px] ${activeTab === tab.id ? 'bg-[#3b83f631] border-b-[2px] border-blue-500 text-white' : 'text-white'}`}
                onClick={() => setActiveTab(tab.id)} // Use tab.id here
              >
                {tab.label} {/* Render the label */}
              </button>
            ))}
          </div>
        </main>
        <TechContent />
      </div>
    </>
  );
}

// Define prop types if needed
Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  activetab: PropTypes.string.isRequired
};

export default Tabs;
