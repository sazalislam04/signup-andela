import React from "react";
import PersonalInfo from "./PersonalInfo";
import SignUpInfo from "./SignUpInfo";
import SubmitForm from "./SubmitForm";

const Form = ({ page, setPage }) => {
  return (
    <div className="w-full lg:w-[82%] px-3 mx-auto py-8">
      <div className="grid grid-cols-4 gap-4">
        <span
          className={`${
            page === 1 ? "bg-[#56c870]" : "bg-gray-200"
          } w-full h-1.5 rounded-md`}
        ></span>
        <span
          className={`${
            page === 2 ? "bg-[#56c870]" : "bg-gray-200"
          } w-full h-1.5 rounded-md`}
        ></span>
        <span
          className={`${
            page === 3 ? "bg-[#56c870]" : "bg-gray-200"
          } w-full h-1.5 rounded-md`}
        ></span>
        <span
          className={`${
            page === 4 ? "bg-[#56c870]" : "bg-gray-200"
          } w-full h-1.5 rounded-md`}
        ></span>
      </div>

      {page === 1 && <SignUpInfo setPage={setPage} />}
      {page === 2 && <PersonalInfo setPage={setPage} />}
      {page === 3 && <SubmitForm setPage={setPage} />}
      {page === 4 && ""}
    </div>
  );
};

export default Form;
