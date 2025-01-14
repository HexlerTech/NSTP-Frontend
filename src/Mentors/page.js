import React, { useState } from "react";
import pfp2 from "../Assets/pfp2.jpeg";
import Footer from "../Components/footer";

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
    department: "Computer Science",
  },
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
    department: "Software Engineering",
  },
  {
    image: pfp2,
    name: "Dr Seemab Latif",
    position: "Founder - Aawaz",
    department: "Software Engineering",
  },
  {
    image: pfp2,
    name: "Dr. Rafia Mumtaz",
    position: "Assistant Professor - NUST University",
    department: "Software Engineering",
  },
  {
    image: pfp2,
    name: "Fahad Tiwana",
    position: "CEO - Tech Valley",
    department: "Software Engineering",
  },
  {
    image: pfp2,
    name: "Ahmed Haq",
    position: "Client Services Professional - Rogers Communication",
    department: "Software Engineering",
  },
  {
    image: pfp2,
    name: "Ansir Junaid",
    position: "Chairman - SupplySide Group",
    department: "Software Engineering",
  },
  {
    image: pfp2,
    name: "Dr Seemab Latif",
    position: "Founder - Aawaz",
    department: "Software Engineering",
  },
  {
    image: pfp2,
    name: "Dr. Rafia Mumtaz",
    position: "Assistant Professor - NUST University",
    department: "Software Engineering",
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
        <h1 className="mb-5 lg:mb-10 text-2xl lg:text-3xl font-extrabold leading-none tracking-tight text-gray-900 text-center flex gap-2">
          MEET OUR <span className="text-primary">MENTORS</span>{" "}
        </h1>
        <button
          className={`bg-black text-white p-2 px-3 lg:px-10 rounded-lg mr-1 lg:mr-5 ${
            selectedDepartment === "All" ? "bg-primary" : "hover:bg-green-500"
          }`}
          onClick={() => setSelectedDepartment("All")}
        >
          All
        </button>
        {departments.map((department) => (
          <button
            className={`bg-black text-white p-2 px-3 mt-1 lg:px-10 rounded-lg mr-1 lg:mr-5 ${
              selectedDepartment === department
                ? "bg-primary"
                : "hover:bg-green-500"
            }`}
            onClick={() => setSelectedDepartment(department)}
          >
            {department}
          </button>
        ))}
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-2 lg:gap-5 items-center mt-10">
          {data.map(
            (mentor) =>
              (selectedDepartment === "All" ||
                mentor.department === selectedDepartment) && (
                <div className="flex items-center gap-4 p-4 rounded-xl lg:rounded-2xl border shadow-xl">
                  <img
                    src={mentor.image}
                    alt="mentor"
                    className="w-16 h-16 lg:w-20 lg:h-20 rounded-full"
                  />
                  <div className="w-2/3 lg:w-4/5">
                    <h1 className="text-lg lg:text-2xl font-bold">
                      {mentor.name}
                    </h1>
                    <p>{mentor.position}</p>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mentors;
