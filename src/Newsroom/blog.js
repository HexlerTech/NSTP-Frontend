import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBlogs } from "../Services/BlogServices"; // Assuming you have a function to fetch a blog by ID
import { useNavigate } from "react-router-dom";
const Blog = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [slicedBlogs, setSlicedBlogs] = useState([]);
  const [blog, setBlog] = useState(null);

  const fetchBlogs = async () => {
    console.log("fetching blogs");
    const blogs = await getBlogs();
    setBlogs(blogs);

    // Slice the blogs to show only 3 blogs
    const slicedBlogs = blogs.slice(0, 4);

    // Find the blog with the ID from the URL
    const blog = blogs.find((blog) => blog._id === id);
    setBlog(blog);
    //check if the main blog is in the sliced blogs
    if (slicedBlogs.includes(blog)) {
      //remove the main blog from the sliced blogs
      const index = slicedBlogs.indexOf(blog);
      slicedBlogs.splice(index, 1);
    }
    setSlicedBlogs(slicedBlogs);
  };
  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleClick = (id) => {
    navigate(`/newsroom/${id}`);
    //refresh the page to show the new blog

    window.location.reload();
  };

  if (!blog) return <div>Loading...</div>;

  return (
    <div className="bg-gray-50 rounded-lg mt-20 p-20 flex gap-5 justify-between max-sm:flex-col max-sm:p-4">
      <div className="w-2/3 max-sm:w-full">
        <h1 className="text-left font-semibold text-4xl mb-3 max-sm:text-2xl">
          {blog.title}
        </h1>
        <div className="flex items-center justify-between">
          <p className="text-left text-sm text-gray-500">
            {new Date(blog.date_published).toLocaleDateString()}
            <span> </span>
            {new Date(blog.date_published)
              .toLocaleTimeString()
              .replace(/:\d+ /, " ")}
          </p>
        </div>
        {blog.paragraphs.map((paragraph, index) => (
          <React.Fragment key={index}>
            <p className="text-left text-lg mt-4">{paragraph}</p>
            {index == blog.image_index && (
              <div className="flex flex-col items-center justify-center">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-1/2 object-fit rounded-lg mb-4 mt-4 max-sm:w-full"
                  style={{ objectPosition: "top", aspectRatio: "3/2" }}
                />
                <p className="text-left text-lg mt-4">{blog.caption}</p>
              </div>
            )}
          </React.Fragment>
        ))}
        {blog.image_index === blog.paragraphs.length && (
          <div className="flex flex-col items-center justify-center">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-1/2 object-fit rounded-lg mb-4 mt-4 max-sm:w-full"
              style={{ objectPosition: "top", aspectRatio: "3/2" }}
            />
            <p className="text-left text-lg mt-4">{blog.caption}</p>
          </div>
        )}
      </div>
      <div className="w-1/3 max-sm:w-full">
        <div className="flex flex-col gap-4">
          <h1 className="text-left font-semibold text-2xl">More Blogs</h1>
          {slicedBlogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-gray-200 p-4 rounded-lg cursor-pointer hover:bg-transparent hover:border hover:border-black hover:bg-gray-200"
              onClick={() => handleClick(blog._id)}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
                style={{ objectPosition: "top", aspectRatio: "3/2" }}
              />
              <h1 className="text-left font-semibold">{blog.title}</h1>
              <div className="flex items-center justify-between">
                <p className="text-left text-sm text-gray-500">
                  {new Date(blog.date_published).toLocaleDateString()}
                </p>
                <p className="text-left text-sm text-gray-500">
                  {new Date(blog.date_published).toLocaleTimeString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
