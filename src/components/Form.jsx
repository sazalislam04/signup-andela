import React, { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import SignUpInfo from "./SignUpInfo";
import SubmitForm from "./SubmitForm";

const Form = ({ page, setPage }) => {
  // save data
  const [formData, setFormData] = useState({});

  return (
    <div className="w-full lg:w-[82%] px-3 mx-auto py-8">
      <div className="grid grid-cols-4 gap-4">
        <span
          className={`${page && "bg-[#56c870]"} w-full h-1.5 rounded-md`}
        ></span>
        <span
          className={`${
            page !== 1 || page === 2 ? "bg-[#56c870]" : "bg-gray-200"
          } w-full h-1.5 rounded-md`}
        ></span>
        <span
          className={`${
            page !== 2 && page === 3 ? "bg-[#56c870]" : "bg-gray-200"
          } w-full h-1.5 rounded-md`}
        ></span>
        <span
          className={`${
            page === 4 ? "bg-[#56c870]" : "bg-gray-200"
          } w-full h-1.5 rounded-md`}
        ></span>
      </div>

      {page === 1 && <SignUpInfo setFormData={setFormData} setPage={setPage} />}
      {page === 2 && (
        <PersonalInfo
          setPage={setPage}
          setFormData={setFormData}
          formData={formData}
        />
      )}
      {page === 3 && (
        <SubmitForm
          setPage={setPage}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {page === 4 && ""}
    </div>
  );
};

export default Form;
