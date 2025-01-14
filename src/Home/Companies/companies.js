import React from "react";
import avionicsSolution from "../../Assets/companieslogos/avionics solutions.png";
import craft from "../../Assets/companieslogos/craft.png";
import databi from "../../Assets/companieslogos/databi.png";
import GISPLUS from "../../Assets/companieslogos/GISPLUS.png";
import hato from "../../Assets/companieslogos/hato.webp";
import HEXLER from "../../Assets/companieslogos/HEXLER.png";
import ilm from '../../Assets/companieslogos/ilm.png';
import zambeel from '../../Assets/companieslogos/zambeel.png';
import truid from '../../Assets/companieslogos/truid_logo_main.png';
import zytrics from '../../Assets/companieslogos/zytrics.png';


const companyNames = [

  {
    name: "Avionics Solution",
    logo: avionicsSolution,
  },
  {
    name: "Craft",
    logo: craft,
  },
  {
    name: "Databi",
    logo: databi,
  },
  {
    name: "GISPLUS",
    logo: GISPLUS,
  },
  {
    name: "Hato",
    logo: hato,
  },
  {
    name: "HEXLER",
    logo: HEXLER,
  },
  {
    name: "ILM",
    logo: ilm,
  },
  {
    name: "Zambeel",
    logo: zambeel,
  },
  {
    name: "Truid",
    logo: truid,
  },
  {
    name: "Zaytrics",
    logo: zytrics,
  },
];

const Companies = () => {
  return (
    <div className="lg:p-20 p-5">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-10 p-10 bg-gray-200 items-center rounded-md">
        {companyNames.map((company, index) => (
          <div key={index} className="bg-white h-36 flex items-center w-full justify-center ">
            <img
              className="h-auto w-40 rounded-lg"
              src={company.logo}
              alt={company.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
