import React from "react";
import Form from "./Form";

const Signup = () => {
  return (
    <div className="w-full lg:w-10/12 px-3 mx-auto py-10">
      <div className="grid grid-cols-4 gap-4">
        <span className="bg-[#56c870] w-full h-1.5 rounded-md"></span>
        <span className="bg-[#56c870] w-full h-1.5 rounded-md"></span>
        <span className="bg-[#56c870] w-full h-1.5 rounded-md"></span>
        <span className="bg-[#56c870] w-full h-1.5 rounded-md"></span>
      </div>
      <Form />
    </div>
  );
};

export default Signup;
