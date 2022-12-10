import React from "react";
import email from "../assets/img/email.png";
import logo from "../assets/logo/andela.jpg";

const ConfirmMessage = () => {
  return (
    <>
      <div className="w-full lg:w-1/2 mx-auto">
        <img
          className="w-32 lg:left-1/2 lg:-translate-x-2 mt-5 mx-auto mb-10"
          src={logo}
          alt=""
        />
        <img
          className="h-48 w-48 lg:left-1/2 lg:-translate-x-2 mx-auto object-cover"
          src={email}
          alt=""
        />
      </div>
      <div className="w-full lg:w-9/12 lg:left-1/2 lg:-translate-x-2 mx-auto text-center mt-8">
        <h2 className="text-xl">
          You're one step closer to jumpstarting your career.
        </h2>
        <p className="mt-2">
          Thanks applying to Andela's talent network - someone will be in touch
          shortly with next steps.
        </p>
      </div>
    </>
  );
};

export default ConfirmMessage;
