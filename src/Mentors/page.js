import React, { useState } from "react";
import pfp2 from "../Assets/pfp2.jpeg";
import Footer from "../Components/footer";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import Animation from "../Animation";

const data = [
  {
    image: pfp2,
    name: "Ahmed Haq",
    position: "Client Services Professional - Rogers Communication",
    department: "Computer Science",
  },
  {
    image: pfp2,
    name: "Ansir Junaid",
    position: "Chairman - SupplySide Group",
    department: "Computer Science",
  },
  {
    image: pfp2,
    name: "Dr Seemab Latif",
    position: "Founder - Aawaz",
    department: "Computer Science",
  },
  {
    image: pfp2,
    name: "Dr. Rafia Mumtaz",
    position: "Assistant Professor - NUST University",
    department: "Computer Science",
  },
  {
    image: pfp2,
    name: "Fahad Tiwana",
    position: "CEO - Tech Valley",
    department: "Software Engineering",
  },
];

const Mentors = () => {
  const [departments, setDepartments] = useState([
    "Computer Science",
    "Software Engineering",
  ]);
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  return (
    <div>
      <div className="p-6 lg:p-20 mt-28">
        <Animation>
        <h1 className="text-xl lg:text-3xl mb-8 flex flex-col md:flex-row items-center justify-center md:gap-2 font-extrabold leading-none tracking-tight">
          <span
            className="text-transparent text-3xl md:text-4xl lg:text-5xl xl:text-4xl block"
            style={{
              WebkitTextStroke: "1px #000000",
              textStroke: "1px #000000",
            }}
          >
            MEET OUR
          </span>{" "}
          <span className="text-black text-3xl md:text-4xl lg:text-5xl xl:text-4xl block">
            MENTORS
            <span className="text-3xl md:text-4xl lg:text-5xl xl:text-4xl inline-block w-2 h-2 md:w-3 md:h-3 bg-primary ml-1 rounded-full align-baseline"></span>
          </span>
        </h1>
        </Animation>
        <Animation>

        <div className="text-center mb-6">
          <button
            className={`bg-black text-white p-2 px-3 lg:px-10 rounded-full mr-1 lg:mr-5 ${
              selectedDepartment === "All" ? "bg-primary hover:scale-105 transition-transform duration-300" : "hover:bg-primary  hover:scale-105 transition-transform duration-300"
            }`}
            onClick={() => setSelectedDepartment("All")}
          >
            All
          </button>
          {departments.map((department) => (
            <button
              key={department}
              className={`bg-black text-white p-2 px-3 mt-1 lg:px-10 rounded-full mr-1 lg:mr-5 ${
                selectedDepartment === department
                  ? "bg-primary  hover:scale-105 transition-transform duration-300"
                  : "hover:bg-primary  hover:scale-105 transition-transform duration-300"
              }`}
              onClick={() => setSelectedDepartment(department)}
            >
              {department}
            </button>
          ))}
        </div>
        </Animation>
        <Animation>
          <div className="flex flex-wrap items-center justify-center gap-6 ">
            {data.map(
              (mentor) =>
                (selectedDepartment === "All" ||
                  mentor.department === selectedDepartment) && (
                  <div
                    key={mentor.name}
                    className="flex flex-col items-center bg-gray-50 w-[31rem] min-h-64 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                  >
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-24 h-24 lg:w-32 lg:h-32 rounded-full mt-6"
                    />
                    <div className="text-center px-4 mt-4">
                      <h1 className="text-lg lg:text-xl font-bold">
                        {mentor.name}
                      </h1>
                      <p className="text-sm lg:text-base text-primary font-medium">
                        {mentor.position}
                      </p>
                    </div>
                    <div className="flex gap-2 justify-center mt-4 pb-6">
                      <button className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition duration-300">
                        <BsTwitter size={18} className="text-primary" />
                      </button>
                      <button className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition duration-300">
                        <BsLinkedin size={18} className="text-primary" />
                      </button>
                      <button className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition duration-300">
                        <BsGithub size={18} className="text-primary" />
                      </button>
                    </div>
                  </div>
                )
            )}
          </div>
        </Animation>
      </div>
      <Footer />
    </div>
  );
};

export default Mentors;
