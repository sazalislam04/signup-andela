import React, { createContext, useState } from "react";

export const FormContext = createContext();
const MultiFormProvider = ({ children }) => {
  const [page, setPage] = useState(0);

  return (
    <FormContext.Provider value={{ page, setPage }}>
      {children}
    </FormContext.Provider>
  );
};

export default MultiFormProvider;
