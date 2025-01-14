import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HiArrowSmRight } from "react-icons/hi";
import { FaUserTie } from "react-icons/fa";
const Oppurtunities = () => {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Software Developer",
      company: "Google",
      location: "NSTP Islamabad",
      salary: "100k",
      description:
        "We are looking for a software developer with 5 years of experience",
    },
    {
      id: 2,
      title: "Data Scientist",
      company: "Amazon",
      location: "NSTP Islamabad",
      salary: "100k",
      description:
        "We are looking for a data scientist with 5 years of experience",
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "Microsoft",
      location: "NSTP Islamabad",
      salary: "100k",
      description:
        "We are looking for a frontend developer with 5 years of experience",
    },
    {
      id: 4,
      title: "Backend Developer",
      company: "Facebook",
      location: "NSTP Islamabad",
      salary: "100k",
      description:
        "We are looking for a backend developer with 5 years of experience",
    },
  ]);

  const navigate = useNavigate();

  return (
    <div>
      <div className="mt-28 lg:p-48 lg:pt-10">
        <div>
          <p className="text-primary flex items-center gap-2">
            <span
              className="underline cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
            </span>{" "}
            <HiArrowSmRight /> Oppurtunities
          </p>
          <h1 className="font-bold text-4xl mt-4">Oppurtunities</h1>
          <p className="text-gray-600 mt-5 text-sm">
            We have the following job oppurtunities for you
          </p>
        </div>
        <div className="mt-10 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white p-5 rounded-lg shadow-lg mt-5 text-center flex flex-col items-center gap-1 hover:shadow-xl transition-shadow duration-500 hover:scale-105"
              >
                <FaUserTie className="text-2xl" />
                <h2 className="text-xl font-bold">{job.title}</h2>
                <p className="text-gray-600 mt-2">{job.company}</p>
                <p className="text-gray-600 mt-2">{job.location}</p>
                <p className="text-gray-600 mt-2 font-bold">
                  Rs {job.salary}/month
                </p>
                <button className="btn bg-primary text-white px-5 py-2 rounded-lg mt-2">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Oppurtunities;
