// components/Dropdown/Dropdown.js

import React from 'react';
import DropdownItem from './DropdownItem';

const Dropdown = ({ handleSubClick }) => {
  // Define the items for the main dropdown
  const services =[
    {
      "name": "Trending Technology",
      "image" : "/mega-menu-icon/trendtechmain.svg",  
      "subServices": [
        {"name": "Artificial Intelligence", "image": "/mega-menu-icon/artificial-intelligence.svg" , "path":"/services/artificial-intelligence"},
        {"name": "Internet of Things", "image": "/mega-menu-icon/iot.svg", "path":"/services/internet-of-things"},
        {"name": "Unity Development", "image": "/mega-menu-icon/unity.svg", "path":"/services/unity-ai"},
        {"name" : "Augmented Reality" , "image":"/mega-menu-icon/Virtual-Augmented-Reality.svg", "path":"/services/augmented-reality"}
      ]
    },
    {
      "name": "Software Development",
      "image" : "/mega-menu-icon/devmain.svg",
      "subServices": [
        {"name": "Mobile App Development", "image": "/mega-menu-icon/Mobile-Application-Development.svg", "path":"/services/mobile-app-development"},
        {"name": "Web Development", "image": "/mega-menu-icon/internet.svg", "path":"/services/web-development"},
        {"name": "Custom Software Development", "image": "/mega-menu-icon/Custom-Software-Development.png", "path":"/services/custom-software-development"}
      ]
    },
    {
      "name": "DevOps Services",
      "image" : "/mega-menu-icon/devOpsmain.svg",
      "subServices": [
        {"name": "DevOps Consulting", "image": "/mega-menu-icon/devops.svg", "path":"/services/devops-consulting"},
        {"name": "CI/CD Services", "image": "/mega-menu-icon/cicd.svg", "path":"/services/ci-cd-development"},
        {"name": "Containerization & Orchestration", "image": "/mega-menu-icon/internet.svg", "path":"/services/containerization-orchestration"},
        {"name": "Infrastructure Management Services", "image": "/mega-menu-icon/property.svg", "path":"/services/infrastructure-management"},
        {"name": "Infrastructure as Code", "image": "/mega-menu-icon/Blockchain.svg", "path":"/services/infrastructure-as-code"}
      ]
    }
  ]
  return (
    <div className="md:absolute md:top-[50px] mt-1 w-50 rounded-md shadow-lg bg-gray-950 ring-1 ring-offset-blue-50 ring-opacity-5 md:z-50">
      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        {services.map((service, index) => (
          <DropdownItem key={index} service={service} handleSubClick={handleSubClick}/>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
