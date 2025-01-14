import React from "react";
import aspalogo from "../Assets/logos/aspalogo.jpg";
import iasplogo from "../Assets/logos/iasplogo.png";
import iAcceleratelogo from "../Assets/logos/iAccelerateLogo.png";
import ibichinalogo from "../Assets/logos/ibi-chinalogo.png";
import INSTPlogo from "../Assets/logos/INSTPlogo.png";
import WTAlogo from "../Assets/logos/WTAlogo.jpg";
import Footer from "../Components/footer";

const data = [
  {
    name: "International Association of Science Parks (IASP)",
    logo: iasplogo,
    description:
      "IASP is a worldwide network of Science & Technology Parks having 347 members from 77 countries. NSTP is the only full member of IASP from Pakistan.",
  },
  {
    name: "World Technopolis Association (WTA)",
    logo: WTAlogo,
    description:
      "WTA is a multilateral international organisation created with the purpose to connect the advancement of science and technology with local development. NSTP is the only associate member of WTA from Pakistan.",
  },
  {
    name: "Asia Science Park Association (ASPA)",
    logo: aspalogo,
    description:
      " ASPA is an international nongovernmental organization established in Japan in 1997 for the purpose of accomplishing the joint development in the fields of scientific technology, industry and economy in the Asian region.",
  },
  {
    name: "Inter-Islamic Network on Science & Technology Parks (INSTP)",
    logo: INSTPlogo,
    description:
      "INSTP is a platform for technological development among Muslim countries. NSTP is member for INSTP as well as the only Pakistani member of its Executive Council.",
  },
  {
    name: "International Business Incubator (IBI) Beijing, China",
    logo: ibichinalogo,
    description:
      "International Business Incubator (IBI) Beijing, China also known as Zhongguancun Science and Technology Park.  It is the most intensive scientific, education and talent resource base in China.",
  },
  {
    name: "iAccelerate, Wollongong, Australia",
    logo: iAcceleratelogo,
    description:
      "iAccelerate one of the leading and unique business accelerator and incubator program run by the University of Wollongong (UOW)). It’s a thriving community of like-minded entrepreneurs with vision, purpose and passion, offering a unique eco-system with exceptional education, mentoring and support.",
  },
];

const Partnerships = () => {
  return (
    <div>
      <div className="mt-28 p-6 md:p-14 lg:p-20">
        <h1 className="text-2xl lg:text-4xl mb-5">
          Associations & Partnerships
        </h1>
        <p className="text-gray-700 text-justify mb-10">
          NSTP is member and in strategic Alliance with the following
          International organizations
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {data.map((item) => (
            <div className="p-5 lg:p-10 rounded-lg border-2">
              <div className="h-36 flex justify-center lg:justify-start items-center">
                <img src={item.logo} alt={item.name} className="h-20" />
              </div>
              <h1 className="text-2xl font-bold">{item.name}</h1>
              <p className="text-gray-700 text-justify mt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Partnerships;
