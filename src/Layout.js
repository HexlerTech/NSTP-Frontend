import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/navbar";
import Home from "./Home/page";
import {TenancyForm} from "./TenancyForm/page";
import About from "./AboutNSTP/page";
import Contact from "./Contact/page";
import Innovate from "./Innovate/innovate";
import Partnerships from "./Partnerships/partnerships";
import Events from "./Events/page";
import Sectors from "./Sectors/page";
import Mentors from "./Mentors/page";
import Team from "./Team/page";
import Tenants from "./Tenants/tenants";
import Newsroom from "./Newsroom/page";
import Blog from "./Newsroom/blog";
import ExploreNSTP from "./Explore/page";
import CompanyInfoPage from "./Explore/programmes/company";
import Hatch from "./Explore/programmes/hatch8";
import Internship from "./Explore/programmes/internship";
import VisitNSTP from "./Explore/programmes/visitNSTP";
import Oppurtunities from "./Oppurtunities/page";
import Cube8 from "./Explore/programmes/cube8";
const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-center">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tenancy" element={<TenancyForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/innovate" element={<Innovate />} />
        <Route path="/partnerships" element={<Partnerships />} />
        <Route path="/events" element={<Events />} />
        <Route path="/sectors" element={<Sectors />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/team" element={<Team />} />
        <Route path="/tenants" element={<Tenants />} />
        <Route path="/newsroom" element={<Newsroom />} />
        <Route path="/newsroom/:id" element={<Blog />} />
        <Route path="/explore" element={<ExploreNSTP />} />
        <Route path="/explore/company" element={<CompanyInfoPage />} />
        <Route path="/explore/hatch" element={<Hatch />} />
        <Route path="/explore/internship" element={<Internship />} />
        <Route path="/explore/visit" element={<VisitNSTP />} />
        <Route path="/explore/cube" element={<Cube8 />} />
        <Route path="/oppurtunities" element={<Oppurtunities />} />
      </Routes>
    </div>
  );
};

export default Layout;
