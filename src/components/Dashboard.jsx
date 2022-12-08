import React from "react";
import talentGuy1 from "../assets/img/talent-guy-1.png";
import logo from "../assets/logo/andela-logo-white.png";

const Dashboard = () => {
  return (
    <>
      <div className="min-h-screen">
        <div className="p-4 w-96 bg-[#173c40]">
          <div className="max-w-sm mx-auto">
            <div className="w-48 mx-auto mt-16">
              <img className="" src={logo} alt="" />
            </div>
            <div className="max-w-xs mt-8">
              <img
                className="w-72 mx-auto object-cover"
                src={talentGuy1}
                alt=""
              />
            </div>
          </div>
          <div className="w-[340px] mt-7 mx-auto">
            <h2 className="text-3xl text-[#9fdfdf] text-center capitalize">
              Reliable jobs
            </h2>
            <p className="text-md w-full text-center text-white mt-2">
              We only work with trusted, vetted companies. Our team works
              globally to eliminate fraud or illegal activity, ensuring the jobs
              you apply for are safe and secure.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
