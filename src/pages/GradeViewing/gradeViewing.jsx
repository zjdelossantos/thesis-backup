import React, { useState } from "react";
import Sidebar from "../component/sidebar";
import { ArrowLeft } from "lucide-react";

const GradeViewing = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="flex font-grotesque min-h-screen bg-[#161A20] text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-10">
        {/* Conditional View */}
        {!showDetails ? (
          <>
            <h1 className="text-3xl font-bold mb-10 text-center">Grades Viewing</h1>

            <div className="overflow-x-auto bg-[#1F232B] rounded-2xl p-6 shadow-lg">
              <table className="min-w-full text-left border-separate border-spacing-y-2">
                <thead>
                  <tr className="text-gray-400">
                    <th className="py-2 px-4">Grade</th>
                    <th className="py-2 px-4">Subject Name</th>
                    <th className="py-2 px-4">Subject Teacher</th>
                    <th className="py-2 px-4">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-[#2A2F38] rounded-xl">
                    <td className="py-3 px-4 font-bold text-white">80</td>
                    <td className="py-3 px-4">Thesis and Research</td>
                    <td className="py-3 px-4">Jober Reyes</td>
                    <td
                      className="py-3 px-4 text-blue-400 hover:underline cursor-pointer"
                      onClick={() => setShowDetails(true)}
                    >
                      See More
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <>
            {/* Back Button */}
            <div className="flex items-center mb-6 cursor-pointer" onClick={() => setShowDetails(false)}>
              <ArrowLeft className="mr-2 text-gray-300 hover:text-white" />
              <span className="text-gray-300 hover:text-white">Back</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold mb-8 text-center">Grades Viewing</h1>

            {/* Subject Details */}
            <div className="bg-[#1F232B] rounded-2xl p-6 shadow-lg">
              <p className="text-lg mb-2">
                <span className="font-semibold text-blue-400">Subject:</span> Thesis
              </p>
              <p className="text-lg mb-4">
                <span className="font-semibold text-blue-400">Subject Teacher:</span> Jober Reyes
              </p>

              {/* Grade Table */}
              <table className="min-w-full text-left border-collapse mb-4">
                <thead>
                  <tr className="bg-[#2A2F38] text-gray-300">
                    <th className="py-3 px-4 border border-[#3B3F46]">Grade</th>
                    <th className="py-3 px-4 border border-[#3B3F46]">Prelim</th>
                    <th className="py-3 px-4 border border-[#3B3F46]">Midterm</th>
                    <th className="py-3 px-4 border border-[#3B3F46]">Semi-Finals</th>
                    <th className="py-3 px-4 border border-[#3B3F46]">Finals</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center">
                    <td className="py-3 px-4 border border-[#3B3F46]">Grade</td>
                    <td className="py-3 px-4 border border-[#3B3F46] font-bold">80</td>
                    <td className="py-3 px-4 border border-[#3B3F46] text-gray-400">N/A</td>
                    <td className="py-3 px-4 border border-[#3B3F46] text-gray-400">N/A</td>
                    <td className="py-3 px-4 border border-[#3B3F46] text-gray-400">N/A</td>
                  </tr>
                </tbody>
              </table>

              {/* Required Grade */}
              <p className="text-gray-400 text-right">
                Required Grade: <span className="text-white font-bold">80</span>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default GradeViewing;
