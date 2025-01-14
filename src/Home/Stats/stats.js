import React from "react";
import "../../App.css";

const Statistics = () => {
  const stats = {
    // revenebyTenants: 2500000000,
    revenebyTenants: 9047022.50,
    fundingRaisedbyEntites: 830000,
    knowledgeWorkers: 1500,
    IPsGeneratedAndIdentified: 100,
    startupsIncubated: 20,
    startupsGraduated: 10,
  };

   const convertNumber = (num) => {
    if (num > 999999999) {
      return (num / 1000000000).toFixed(1) + "B";
    } 
    else if (num > 999999) {
      return (num / 1000000).toFixed(1) + "M";
    } 
    else if (num > 999) {
      return (num / 1000).toFixed(1) + "K";
    } 
    else {
      return num;
    }
  };

  return (
    <div className="bg-black text-white p-6 lg:p-20 grid grid-cols-2 md:grid-cols-6 lg:grid-cols-6 gap-8 mb-0 lg:mb-36">
      <div className="">
        <h2 className="hollow-text">
          ${convertNumber(stats.revenebyTenants)}
        </h2>
        <p className="text-md font-bold text-side">Revenue by Tenants</p>
      </div>
      <div className="text-container">
        <h2 className="hollow-text">
          ${convertNumber(stats.fundingRaisedbyEntites)}
        </h2>
        <p className="text-md font-bold text-side">
          Funding Raised by Entities
        </p>
      </div>
      <div className="text-container">
        <h2 className="hollow-text">{convertNumber(stats.knowledgeWorkers)}</h2>
        <p className="text-md font-bold text-side">Knowledge Workers</p>
      </div>
      <div className="text-container">
        <h2 className="hollow-text">
          {convertNumber(stats.IPsGeneratedAndIdentified)}
        </h2>
        <p className="text-md font-bold text-side">
          IPs Generated and Identified
        </p>
      </div>
      <div className="text-container">
        <h2 className="hollow-text">
          {convertNumber(stats.startupsIncubated)}
        </h2>
        <p className="text-md font-bold text-side">Startups Incubated</p>
      </div>
      <div className="text-container">
        <h2 className="hollow-text">
          {convertNumber(stats.startupsGraduated)}
        </h2>
        <p className="text-md font-bold text-side">Startups Graduated</p>
      </div>
    </div>
  );
};

export default Statistics;
