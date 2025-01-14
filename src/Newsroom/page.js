import React, { useState, useEffect } from "react";
import { getBlogs } from "../Services/BlogServices";
import { BiNews } from "react-icons/bi";
import { BiSort } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Newsroom = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogs = await getBlogs();
      setBlogs(blogs);
    };
    fetchBlogs();
  }, []);

  const sortAccordingToDate = (a, b) => {
    return new Date(b.date_published) - new Date(a.date_published);
  };

  const onCLickSortByDate = () => {
    const sortedBlogs = [...blogs].sort(sortAccordingToDate);
    setBlogs(sortedBlogs);
  };

  const handleClick = (id) => {
    navigate(`/newsroom/${id}`);
  };

  const toDateString = (date) => {
    //write the code to convert date to string such as Oct 12, 2021
    //input = 2021-10-12
    //output = Oct 12, 2021

    const dateObj = new Date(date);
    const month = dateObj.toLocaleString("default", { month: "short" });
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();

    return `${month} ${day}, ${year}`;
  };

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginateNext = () => {
    if (currentPage < Math.ceil(blogs.length / blogsPerPage)) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const paginatePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className=" p-20 mt-10 max-sm:p-4 max-sm:mt-20 mx-auto w-3/4">
      {/* <BiNews className="absolute w-96 h-96 text-primary opacity-30 bottom-3 right-3 max-sm:w-10 max-sm:h-10 z-1" /> */}

      <div className="flex w-full justify-between max-sm:flex-col z-10">
        <div className="text-left gap-4">
          <h1 className="font-extrabold uppercase text-4xl ">Newsroom</h1>
          <p className="text-gray-500">
            Stay updated with the latest news and events happening at NSTP
          </p>
        </div>
        <button
          onClick={onCLickSortByDate}
          className="bg-primary text-white p-2 rounded-lg flex items-center gap-2"
        >
          <BiSort className="inline-block" />
          Sort by Date
        </button>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-10 max-md:grid-cols-1">
        {currentBlogs.map((blog) => (
          <div
            key={blog._id}
            className="flex justify-between p-4 pt-10  cursor-pointer border-t-2 border-gray-700"
            onClick={() => handleClick(blog._id)}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-1/4 h-48 object-cover mb-4"
              style={{ objectPosition: "top", aspectRatio: "3/2" }}
            />
            <div className="p-10 pt-0 w-3/4">
              <p className="text-left text-md text-gray-800 font-semibold">
                {toDateString(blog.date_published)}
              </p>
              <h1 className="text-left font-semibold text-3xl">{blog.title}</h1>
              <p className="text-left text-gray-500 mt-3">
                {blog.paragraphs[0].substring(0, 200)}...
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full border-t-2 border-gray-700 mt-10"></div>
      <div className="flex justify-center items-center mt-10 gap-4">
        <button
          onClick={paginatePrevious}
          disabled={currentPage === 1}
          className={`p-2 px-4 rounded-lg ${
            currentPage === 1 ? "bg-gray-300" : "bg-primary text-white"
          }`}
        >
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button
          onClick={paginateNext}
          disabled={currentPage === Math.ceil(blogs.length / blogsPerPage)}
          className={`p-2 px-4 rounded-lg ${
            currentPage === Math.ceil(blogs.length / blogsPerPage)
              ? "bg-gray-300"
              : "bg-primary text-white"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Newsroom;
