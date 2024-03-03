import React from "react";

export const TaskContext = React.createContext();

export function TaskContextProvider(props) {
  return (
    <>
      <TaskContext.Provider value="">
        {props.children}
      </TaskContext.Provider>
    </>
  );
}
