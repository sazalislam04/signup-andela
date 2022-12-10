import React, { useState } from "react";
import sidebar from "../assets/img/sidebar.png";
import talentGuy1 from "../assets/img/talent-guy-1.png";
import talentGuy2 from "../assets/img/talent-guy-2.png";
import lady from "../assets/img/talent-lady-3.png";
import logo from "../assets/logo/andela-logo-white.png";
import Form from "./Form";
const Dashboard = () => {
  const [page, setPage] = useState(1);
  return (
    <>
      <div className="flex flex-no-wrap">
        <div
          className={`absolute sm:min-h-screen sm:relative ${
            page === 4
              ? "shadow-none pt-0"
              : "bg-[#173c40] shadow md:h-full flex-col pt-16 w-96 lg:w-[40%]"
          }  justify-between hidden sm:flex`}
        >
          {page === 4 && (
            <>
              <div className="max-h-screen">
                <img className="h-[100vh] w-72" src={sidebar} alt="" />
              </div>
            </>
          )}
          {page !== 4 && (
            <>
              <div className="px-2">
                <div className="w-44 lg:w-48 mx-auto flex items-center">
                  <img className="" src={logo} alt="" />
                </div>

                <div className="mt-14 lg:mt-10">
                  <div className="w-56 lg:w-[280px] mx-auto">
                    {page === 1 && <img src={talentGuy1} alt="" />}
                    {page === 2 && <img src={talentGuy2} alt="" />}
                    {page === 3 && <img src={lady} alt="" />}
                  </div>
                  <div className="pt-16 lg:py-[6%]">
                    {page === 1 && (
                      <>
                        <h2 className="text-3xl text-[#8bd3d3] text-medium text-center">
                          Reliable jobs
                        </h2>
                        <p className="mt-2 text-base text-gray-200 text-center">
                          We only work with trusted, vetted companies. Our team
                          works globally to eliminate fraud or illegal activity,
                          ensuring the jobs you apply for are safe and secure.
                        </p>
                      </>
                    )}
                    {page === 2 && (
                      <>
                        <h2 className="text-3xl text-[#8bd3d3] text-medium text-center">
                          Work from anywhere
                        </h2>
                        <p className="mt-2 text-base text-gray-200 text-center">
                          Fully remote, forever. With remote roles across
                          multiple time zones, you choose where and when you
                          work, creating a healthy, flexible work-life balance.
                        </p>
                      </>
                    )}
                    {page === 3 && (
                      <>
                        <h2 className="text-3xl text-[#8bd3d3] text-medium text-center">
                          Fully supported
                        </h2>
                        <p className="mt-2 text-base text-gray-200 text-center">
                          Wherever you are and whatever issues you may face,
                          we're here to help solve any challenges, fast!
                        </p>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex gap-4 justify-center items-center py-5">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      page === 1 ? "bg-yellow-500" : "bg-gray-300"
                    }`}
                  ></span>
                  <span
                    className={`w-2 h-2 rounded-full ${
                      page === 2 ? "bg-yellow-500" : "bg-gray-300"
                    }`}
                  ></span>
                  <span
                    className={`w-2 h-2 rounded-full ${
                      page === 3 ? "bg-yellow-500" : "bg-gray-300"
                    }`}
                  ></span>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="mx-auto w-full md:w-4/5 lg:w-11/12 px-4">
          <Form setPage={setPage} page={page} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
