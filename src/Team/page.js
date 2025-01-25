import React from 'react';
import pfp2 from "../Assets/pfp2.jpeg";
import Footer from "../Components/footer";
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import Animation from '../Animation';

const Team = () => {
    const teamMembers = [
        {
          name: "John Smith",
          position: "Chief Executive Officer",
          image: pfp2,
          description: "10+ years of experience in technology leadership"
        },
        {
          name: "Sarah Johnson",
          position: "Lead Developer",
          image: pfp2,
          description: "Full-stack expert specialized in React and Node.js"
        },
        {
          name: "Michael Chen",
          position: "UX Designer",
          image: pfp2,
          description: "Creating intuitive user experiences for 5+ years"
        },
        {
          name: "Emily Brown",
          position: "Product Manager",
          image: pfp2,
          description: "Driving product strategy and innovation"
        }
    ];
    
    return (
        <>
        <div className="p-4 lg:p-16 mt-24">
          <Animation>
        <h1 className="text-xl lg:text-3xl mb-8 md:mb-14 flex flex-col md:flex-row items-center justify-center md:gap-2 font-extrabold leading-none tracking-tight">
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
            TEAM
            <span className="text-3xl md:text-4xl lg:text-5xl xl:text-4xl inline-block w-2 h-2 md:w-3 md:h-3 bg-primary ml-1 rounded-full align-baseline"></span>
          </span>
        </h1>
        </Animation>

        <Animation>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-lg w-[31rem] min-h-64 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <div className="flex flex-col items-center pt-6 px-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mb-4"
                  />
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-primary text-sm font-medium">
                      {member.position}
                    </p>
                  </div>
                </div>
                
                <div className="px-4 py-4 text-center">
                  <p className="text-gray-600 text-sm">
                    {member.description}
                  </p>
                </div>
    
                <div className="px-4 pb-6 flex justify-center gap-2">
                  <button className="p-1.5 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-300">
                    <BsTwitter size={16} className="text-primary" />
                  </button>
                  <button className="p-1.5 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-300">
                    <BsLinkedin size={16} className="text-primary" />
                  </button>
                  <button className="p-1.5 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-300">
                    <BsGithub size={16} className="text-primary" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          </Animation>
        </div>
        <Footer />
        </>
    );
};

export default Team;