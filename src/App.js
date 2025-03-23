import React from "react";
import {FaGraduationCap,FaBell,FaBars,FaSearch,} from "react-icons/fa";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { AiFillCreditCard } from "react-icons/ai";
import { RiQuestionFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
const Dashboard = () => {
  const colleges = [
    { name: "College Name", status: "Pending", color: "yellow" },
    { name: "College Name", status: "", color: "blue" },
    { name: "College Name", status: "Pending", color: "yellow" },
  ];
  const feesData = [
    { no: 1, name: "Tuition Fee", amount: "30,000" },
    { no: 2, name: "Lab Fee", amount: "10,000" },
    { no: 3, name: "Sports Fee", amount: "10,000" },
  ];
  const semesters = [
    "Sem 1",
    "Sem 2",
    "Sem 3",
    "Sem 4",
    "Sem 5",
    "Sem 6",
    "Sem 7",
    "Sem 8",
  ];
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 space-y-6">
        <nav className="space-y-4 mt-6">
          <a
            href="#"
            className=" py-2 px-4 rounded text-[#898989] hover:bg-gray-200 flex items-center space-x-2"
          >
            <RiDashboardHorizontalFill className="w-[24px] h-[24px]" />
            <span className="text-[#898989] text-sm font-medium">
              Dashboard
            </span>
          </a>
          <a
            href="#"
            className=" py-2 px-4 rounded text-[#898989] hover:bg-gray-200 flex items-center space-x-2"
          >
            <BsFillInfoSquareFill className="w-[24px] h-[24px]" />
            <span className="text-[#898989] text-sm font-medium">BOS</span>
          </a>
          <a
            href="#"
            className=" py-2 px-4 rounded text-[#898989] hover:bg-gray-200 flex items-center space-x-2"
          >
            <FaGraduationCap className="w-[24px] h-[24px]" />
            <span className="text-[#898989] text-sm font-medium">Program</span>
          </a>
          <a
            href="#"
            className=" py-2 px-4 rounded-lg  bg-[#d3e5f0] text-[#0084CA] flex items-center space-x-2"
          >
            <AiFillCreditCard className="w-[24px] h-[24px]" />
            <span className="text-[#0084CA] text-sm font-medium">
              Fees Creation
            </span>
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button className="text-[#898989] text-2xl">
              <FaBars />
            </button>
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#898989] text-sm font-normal" />
              <input
                type="text"
                placeholder="Search..."
                className="p-2 pl-10 rounded-lg w-[814px] bg-[#F2F6F9] outline-none text-sm font-normal"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <RiQuestionFill className="text-[#898989] text-2xl" />
            <FaBell className="text-[#898989] text-xl" />
            <div className="flex items-center space-x-2">
              <FaUser className="text-[#898989]  text-xl" />
              {/* <img src="https://via.placeholder.com/40" alt="User Avatar" className="w-10 h-10 rounded-full" /> */}
              <div>
                <h2 className="text-[#202020] text-sm font-normal">
                  Aarohi Shah
                </h2>
                <p className="text-[#898989] text-[12px] font-medium">Admin</p>
              </div>
            </div>
          </div>
        </header>
        <main className=" bg-white shadow-lg rounded-lg mt-4 m-2 ">
          <h1 className="text-2xl font-bold text-[#0065A7] py-4  px-6 mt-4 ">
            Fees Creation
          </h1>
          <div className="border-t-2 border-dotted border-[#FFE09B] my-2"></div>

          <div className=" p-6">
            <label className="block text-base font-normal text-[#1662A6]">
              Name a Fees Creation
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded mt-2"
              placeholder="Type something"
            />

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-base font-normal text-[#1662A6]">
                  Program Level
                </label>
                <div className="relative mt-2">
                  <select className="w-full p-3 pr-10 border rounded-lg text-[#666666] text-xs appearance-none bg-white">
                    <option>Select</option>
                  </select>
                  <svg
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#666666] pointer-events-none"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
              <div>
                <label className="block text-base font-normal text-[#1662A6]">
                  Program Level
                </label>
                <div className="relative mt-2">
                  <select className="w-full p-3 pr-10 border rounded-lg text-[#666666] text-xs appearance-none bg-white">
                    <option>Select</option>
                  </select>
                  <svg
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#666666] pointer-events-none"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-[594px]">
              <label className="block text-base font-normal text-[#1662A6]">
                Program Level
              </label>
              <div className="relative mt-2">
                <select className="w-full p-3 pr-10 border rounded-lg text-[#666666] text-xs appearance-none bg-white">
                  <option>Select</option>
                </select>
                <svg
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#666666] pointer-events-none"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>
          </div>
          <section className="mt-6 px-6">
            <h2 className="font-medium text-[#1662A6] text-xl">
              Program Run in Colleges
            </h2>
            <div className="flex gap-10 mt-4">
              {colleges?.map((college, index) => (
                <div
                  key={index}
                  className="relative bg-white shadow-lg rounded-lg w-[270px] h-[120px] flex items-center px-6 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white to-[#eef4fc]"></div>
                  {college.status && (
                    <p className="absolute top-3 right-3 flex items-center justify-center w-[75px] h-[21px] text-[10px] rounded-sm text-[#FFB200] bg-[#FFEEC7] px-3 shadow border border-[#FFB200] font-medium">
                      {college.status}
                    </p>
                  )}
                  <div
                    className={`relative z-10 w-[70px] h-[70px] flex items-center justify-center rounded-full ${
                      college.color === "yellow"
                        ? "bg-yellow-200"
                        : "bg-blue-200"
                    }`}
                  >
                    <FaGraduationCap
                      className={`text-2xl ${
                        college.color === "yellow"
                          ? "text-yellow-600"
                          : "text-blue-600"
                      }`}
                    />
                  </div>

                  <div className="relative z-10 ml-4 text-left w-[111px] h-[45px]">
                    <p className="text-md font-semibold text-gray-800">
                      College
                    </p>
                    <p className="text-md font-semibold text-gray-800">Name</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <div className="p-6">
            <h2 className="text-2xl font-medium text-[#0065A7] mb-4">
              Fees Details
            </h2>
            <div className="w-full border-b pb-2 flex space-x-14">
              {semesters.map((sem, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-md font-bold text-2xl ${
                    index === 0 ? "bg-[#0084CA] text-white" : "text-[#8AB8D7]"
                  }`}
                >
                  {sem}
                </button>
              ))}
            </div>
            <div className="flex space-x-6 mt-4 items-start">
              <div className="w-[58%] h-[370px]">
                <label className="block text-base font-normal text-[#1662A6]">
                  Select Fees Payment Templates
                </label>
                <div className="relative mt-2">
                  <select className="w-full p-3 pr-10 border rounded-lg text-[#666666] text-xs appearance-none bg-white">
                    <option>Select</option>
                  </select>
                  <svg
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#666666] pointer-events-none"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <>
                      <div>
                        <label className="block text-base font-normal text-[#1662A6] mb-1">
                          Fees Name
                        </label>
                        <input
                          type="text"
                          className="border p-2 rounded-md w-full text-[#666666] text-xs"
                          placeholder="Default"
                          disabled
                        />
                      </div>
                      <div>
                        <label className="block text-base font-normal text-[#1662A6] mb-1">
                          Fees Amount
                        </label>
                        <input
                          type="text"
                          className="border p-2 rounded-md w-full text-[#666666] text-xs"
                          placeholder="NUM"
                        />
                      </div>
                    </>
                  ))}
                </div>
              </div>

              <div className="w-[1px] bg-[#FFB200] h-80 mt-6"></div>

              <div className="w-[39%] h-[370px]">
                <h3 className="mb-4 text-base font-normal text-[#1662A6]">
                  Total Fees Amount
                </h3>
                <div className="p-4 rounded-[1.5rem] bg-[#E6F0F6] shadow-md mt-2">
                  <table className="w-full  text-gray-600  ">
                    <thead>
                      <tr className="border-b border-gray-300 bg-white rounded-lg">
                        <th className="py-2 px-4 text-left text-[#868A9A] font-semibold text-sm">
                          No
                        </th>
                        <th className="py-2 px-4 text-left  text-[#868A9A] font-semibold text-smt">
                          Fees Name
                        </th>
                        <th className="py-2 px-4 text-left text-[#868A9A] font-semibold text-sm">
                          Fees Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {feesData?.map((item, index) => (
                        <tr key={index} className="border-b-0">
                          <td className="py-2 px-6  text-[#868A9A] font-semibold text-sm">
                            {item.no}
                          </td>
                          <td className="py-2 px-6  text-[#868A9A] font-semibold text-sm">
                            {item.name}
                          </td>
                          <td className="py-2 px-6  text-[#868A9A] font-semibold text-sm my-8">
                            {item.amount}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="flex justify-between items-center mt-4 border-t pt-4 mt-[56px]">
                    <span className="text-base font-normal text-[#1662A6]">
                      Total Fees Amount
                    </span>
                    <input
                      type="text"
                      className="border p-2 rounded-md text-center text-[#666666] text-xs"
                      placeholder="NUM Total"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t-2 border-dotted border-[#FFE09B] my-6"></div>
          <div className="flex justify-end space-x-4 my-6 mx-6">
            <button className="bg-[#0084CA] text-white px-6 py-2 rounded-md font-medium">
              Next / Apply
            </button>
            <button className="bg-[#F2F6F9] text-[#0084CA] px-6 py-2 rounded-md font-medium">
              Cancel
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};
export default Dashboard;
