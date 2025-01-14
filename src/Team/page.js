import React from 'react';
import pfp2 from "../Assets/pfp2.jpeg";
import Footer from "../Components/footer";
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';

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
          <h1 className="mb-4 lg:mb-8 text-2xl lg:text-3xl font-extrabold leading-none tracking-tight text-gray-900 text-center">
            MEET OUR <span className="text-primary">TEAM</span>
          </h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
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
        </div>
        <Footer />
        </>
    );
};

export default Team;