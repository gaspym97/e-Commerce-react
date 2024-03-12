import React from "react";

export const UseContext = React.createContext();

export function UseContextProvider(props) {
  return (
    <>
      <UseContext.Provider value="">
        {props.children}
      </UseContext.Provider>
    </>
  );
}
