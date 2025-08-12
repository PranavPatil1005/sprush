import React from "react";
import {
  faWandMagicSparkles,
  faBookOpen,
  faScrewdriverWrench,
  faFileLines,

} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Aboutus = () => {
  
  return (
    <div className="bg-white text-[#1e1e1e] font-inter">
      {/* MAIN CONTENT */}
      <main className="px-6 md:px-12 py-10 text-center">
        <h1 className="text-3xl md:text-6xl font-bold mb-2">About Sprush</h1>
        <p className="text-sm text-gray-600 mb-10 max-w-xl mx-auto">
          Empowering job seekers with AI-driven insights to create impactful resumes
          that stand out in today’s competitive job market.
        </p>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl mx-auto text-left">
          <div className="bg-white p-6 rounded-xl shadow-md hover:-translate-y-2 transition-transform">
            <h3 className="text-base font-semibold flex items-center gap-2">
              <FontAwesomeIcon icon={faWandMagicSparkles} />
              AI-Powered Resume Analysis
            </h3>
            <p className="text-sm text-gray-700 mt-1">
              Our AI reviews your resume against top examples to deliver precise
              improvement suggestions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:-translate-y-2 transition-transform">
            <h3 className="text-base font-semibold flex items-center gap-2">
              <FontAwesomeIcon icon={faBookOpen} />
              Role-Specific Recommendations
            </h3>
            <p className="text-sm text-gray-700 mt-1">
              Receive tailored advice based on your industry, target role, and
              career goals.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:-translate-y-2 transition-transform">
            <h3 className="text-base font-semibold flex items-center gap-2">
              <FontAwesomeIcon icon={faScrewdriverWrench} />
              Professional Enhancements
            </h3>
            <p className="text-sm text-gray-700 mt-1">
              Refine your resume’s language, format, and content to meet
              professional standards.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:-translate-y-2 transition-transform">
            <h3 className="text-base font-semibold flex items-center gap-2">
              <FontAwesomeIcon icon={faFileLines} />
              Boost Your Interview Prospects
            </h3>
            <p className="text-sm text-gray-700 mt-1">
              Stand out with a polished resume that highlights your strengths and
              grabs attention.
            </p>
          </div>
        </div>

        {/* OUR VISION */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-3">Our Vision</h2>
          <p className="text-sm text-gray-600 max-w-xl mx-auto leading-relaxed">
            We envision a future where every job seeker has access to
            professional-grade tools that help them present their best selves to
            potential employers. Through innovation and technology, we're making
            that vision a reality.
          </p>
        </div>
      </main>

      
 
    </div>
  );
};

export default Aboutus;
