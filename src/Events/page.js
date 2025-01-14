import React, { useState, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { BiCalendar } from "react-icons/bi";
import nstp from "../Assets/nstp.jpg";

const eventsData = [
  {
    name: "Event 1",
    date: "2024-09-01",
    time: "10:00 AM - 12:00 PM",
    description:
      "This is the first event which comprises of software products being launched by the startups.",
  },
  {
    name: "Event 20",
    date: "2024-09-02",
    time: "10:00 AM - 12:00 PM",
    description:
      "This is the second event which comprises of hardware products being launched by the startups.",
  },
  {
    name: "Event 2",
    date: "2024-09-02",
    time: "10:00 AM - 12:00 PM",
    description:
      "This is the second event which comprises of hardware products being launched by the startups.",
  },
  {
    name: "Event 3",
    date: "2024-09-03",
    time: "10:00 AM - 12:00 PM",
    description:
      "This is the third event which comprises of services being launched by the startups.",
  },
  {
    name: "Event 4",
    date: "2024-09-04",
    time: "10:00 AM - 12:00 PM",
    description:
      "This is the fourth event which comprises of software products being launched by the startups.",
  },
  {
    name: "Event 5",
    date: "2024-09-05",
    time: "10:00 AM - 12:00 PM",
    description:
      "This is the fifth event which comprises of hardware products being launched by the startups.",
  },
  {
    name: "Event 6",
    date: "2024-09-06",
    time: "10:00 AM - 12:00 PM",
    description:
      "This is the sixth event which comprises of services being launched by the startups.",
  },
  {
    name: "Event 7",
    date: "2024-09-07",
    time: "10:00 AM - 12:00 PM",
    description:
      "This is the seventh event which comprises of software products being launched by the startups.",
  },
  {
    name: "Event 8",
    date: "2024-09-08",
    time: "10:00 AM - 12:00 PM",
    description:
      "This is the eighth event which comprises of hardware products being launched by the startups.",
  },
  {
    name: "Event 9",
    date: "2024-09-09",
    time: "10:00 AM - 12:00 PM",
    description:
      "This is the ninth event which comprises of services being launched by the startups.",
  },
  {
    name: "Event 10",
    date: "2024-09-10",
    time: "10:00 AM - 12:00 PM",
    description:
      "This is the tenth event which comprises of software products being launched by the startups.",
  },
  {
    name: "Event 11",
    date: "2024-09-11",
    time: "10:00 AM - 12:00 PM",
    description:
      "This is the eleventh event which comprises of hardware products being launched by the startups.",
  },
];

const Events = () => {
  const [sortedByDate, setSortedByDate] = useState([]);

  useEffect(() => {
    const sorted = eventsData.sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
    setSortedByDate(sorted);
  }, []);

  const [dates, setDates] = useState([]);

  useEffect(() => {
    const uniqueDates = eventsData.map((event) => event.date);
    const unique = [...new Set(uniqueDates)];
    setDates(unique);
  }, []);

  const convertDateToHumanReadable = (date) => {
    const newDate = new Date(date);
    const formattedDate = newDate.toDateString();
    //put comma after day
    const day = formattedDate.split(" ")[0];
    const dateNew = formattedDate.split(" ")[2];
    const month = formattedDate.split(" ")[1];
    const year = formattedDate.split(" ")[3];
    return `${day}, ${dateNew} ${month} ${year}`;
  };

  return (
    <div className="mt-24 p-6 lg:p-20 lg:pb-5">
      <h1 className="mb-5 lg:mb-10 flex flex-col lg:flex-row text-2xl lg:text-3xl font-extrabold leading-none tracking-tight text-gray-900 text-center flex items-start lg:items-center lg:justify-center lg:gap-2">
        <BiCalendar size={40} className="inline-block" />
        UPCOMING EVENTS AT{" "}
        <span className="text-primary text-left">
          NATIONAL SCIENCE & TECHNOLOGY PARK (NSTP)
        </span>{" "}
      </h1>
      <div
        className="flex flex-col gap-5 lg:gap-10 border-2 rounded-lg p-5 lg:p-10 hover:shadow-xl transition duration-500 overflow-y-auto"
        style={{
          height: "63vh",
          backgroundImage: `url(${nstp})`,
          backgroundSize: "cover",
        }}
      >
        {dates.map((date) => (
          <div key={date}>
            <h1 className="text-2xl font-bold mb-5 flex items-center text-white gap-2">
              <BiCalendar size={20} className="inline-block" />
              {convertDateToHumanReadable(date)}
            </h1>
            {sortedByDate.map((event) => {
              if (event.date === date) {
                return (
                  <div
                    key={event.name}
                    className="mb-5 border-b-2 p-5 rounded-xl shadow-xl bg-white flex-col flex lg:flex-row items-start justify-between"
                  >
                    <div className="mb-2 lg:mb-0">
                      <h1 className="text-xl font-bold">{event.name}</h1>
                      <p className="text-gray-700">
                        {event.description}
                      </p>
                      <p className="text-orange-400 font-semibold text-justify">
                        {event.time}
                      </p>
                    </div>
                    <button className="text-black py-2 px-4 rounded-2xl bg-primary flex items-center gap-1 hover:bg-green-600 hover:text-white transition duration-500">
                      Learn More <FaArrowRightLong size={14} />
                    </button>
                  </div>
                );
              }
              return null;
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
