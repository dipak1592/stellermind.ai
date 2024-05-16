// components/Dropdown/Dropdown.js

import React from 'react';
import EngDropDownItem from './EngDropDownItem';

const EngDropDown = () => {
  // Define the items for the main dropdown
  const services =[
    {
      "name": "Hire AI/ML Developer",
      "image" : "/mega-menu-icon/devmain.svg",
      "subServices": [
        {"name": "AI/ML Development", "image": "/mega-menu-icon/AIML-Development.svg"},
        {"name": "API Integration", "image": "/mega-menu-icon/API-Integration.svg"},
        {"name": "Custom Software Development", "image": "/mega-menu-icon/Custom-Software-Development.png"},
        {"name": "Mobile App Development", "image": "/mega-menu-icon/Mobile-Application-Development.svg"},
        {"name": "Software Product Development", "image": "/mega-menu-icon/Software-Product-Development.svg"},
        {"name": "White-Label Development ", "image": "/mega-menu-icon/White-Label-Development.svg"}
      ]
    },
    {
      "name": "Hire Mobile Developer",
      "image" : "/mega-menu-icon/devOpsmain.svg",
      "subServices": [
        {"name": "CI/CD Services", "image": "/mega-menu-icon/cicd.svg"},
        {"name": "Containerization & Orchestration", "image": "/mega-menu-icon/internet.svg"},
        {"name": "DevOps Consulting", "image": "/mega-menu-icon/devops.svg"},
        {"name": "Infrastructure Management Services", "image": "/mega-menu-icon/property.svg"},
        {"name": "Infrastructure as Code", "image": "/mega-menu-icon/Blockchain.svg"}
      ]
    },
    {
      "name": "Hire Web Developer",
      "image" : "/mega-menu-icon/trendtechmain.svg",
      "subServices": [
        {"name": "Artificial Intelligence", "image": "/mega-menu-icon/artificial-intelligence.svg"},
        {"name": "Blockchain", "image": "/mega-menu-icon/Blockchain.svg"},
        {"name": "Cloud computing", "image": "/mega-menu-icon/Cloud-Computing.svg"},
        {"name": "Cyber Security", "image": "/mega-menu-icon/cyber-security.svg"},
        {"name": "Edge Computing", "image": "/mega-menu-icon/adge-computing.svg"},
        {"name": "Internet of Things", "image": "/mega-menu-icon/iot.svg"},
        {"name": "AR/VR Development", "image": "/mega-menu-icon/Virtual-Augmented-Reality.svg"}
      ]
    },
    {
      "name": "Hire Devops Engineer",
      "image" : "/mega-menu-icon/cloudMain.svg",
      "subServices": [
        {"name": "Cloud Architecture Design", "image": "/mega-menu-icon/Cloud-Architecture.svg"},
        {"name": "Cloud Assessment & Cost Optimization", "image": "/mega-menu-icon/Cloud-Assessment-Cost-Optimization.svg"},
        {"name": "Cloud Consulting", "image": "/mega-menu-icon/cloud-Consulting.svg"},
        {"name": "cloud migration", "image": "/mega-menu-icon/migrating.svg"},
        {"name": "Data Analytics Consulting", "image": "/mega-menu-icon/analytics.svg"},
        {"name": "Kubernetes consulting", "image": "/mega-menu-icon/Kubernetes.svg"},
        {"name": "Micro-service Architecture", "image": "/mega-menu-icon/microservice.svg"},
        {"name": "Serverless App Development", "image": "/mega-menu-icon/devops.svg"}
      ]
    },
    {
      "name": "Hire Cloud Engineer",
      "image" : "/mega-menu-icon/cloudMain.svg",
      "subServices": [
        {"name": "Cloud Architecture Design", "image": "/mega-menu-icon/Cloud-Architecture.svg"},
        {"name": "Cloud Assessment & Cost Optimization", "image": "/mega-menu-icon/Cloud-Assessment-Cost-Optimization.svg"},
        {"name": "Cloud Consulting", "image": "/mega-menu-icon/cloud-Consulting.svg"},
        {"name": "cloud migration", "image": "/mega-menu-icon/migrating.svg"},
        {"name": "Data Analytics Consulting", "image": "/mega-menu-icon/analytics.svg"},
        {"name": "Kubernetes consulting", "image": "/mega-menu-icon/Kubernetes.svg"},
        {"name": "Micro-service Architecture", "image": "/mega-menu-icon/microservice.svg"},
        {"name": "Serverless App Development", "image": "/mega-menu-icon/devops.svg"}
      ]
    },
    {
      "name": "Hire AR/VR Developer",
      "image" : "/mega-menu-icon/cloudMain.svg",
      "subServices": [
        {"name": "Cloud Architecture Design", "image": "/mega-menu-icon/Cloud-Architecture.svg"},
        {"name": "Cloud Assessment & Cost Optimization", "image": "/mega-menu-icon/Cloud-Assessment-Cost-Optimization.svg"},
        {"name": "Cloud Consulting", "image": "/mega-menu-icon/cloud-Consulting.svg"},
        {"name": "cloud migration", "image": "/mega-menu-icon/migrating.svg"},
        {"name": "Data Analytics Consulting", "image": "/mega-menu-icon/analytics.svg"},
        {"name": "Kubernetes consulting", "image": "/mega-menu-icon/Kubernetes.svg"},
        {"name": "Micro-service Architecture", "image": "/mega-menu-icon/microservice.svg"},
        {"name": "Serverless App Development", "image": "/mega-menu-icon/devops.svg"}
      ]
    }
  ]
  

  return (
    <div className="md:absolute md:top-[50px] mt-1 w-50 rounded-md shadow-lg bg-gray-950 ring-1 ring-offset-blue-50 ring-opacity-5 md:z-50">
      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        {services.map((service, index) => (
          <EngDropDownItem key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default EngDropDown;
