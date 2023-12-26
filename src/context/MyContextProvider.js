import React, {createContext, useState} from 'react';

const MyContext = createContext();

const MyContextProvider = ({children}) => {
  const [data, SetData] = useState([]);
  const [selectedJob, SetSelectedJob] = useState({});
  const updateSelectedJob = newValue => {
    SetSelectedJob(newValue);
  };

  const updateData = newData => {
    SetData(newData);
  };
  // console.warn("context",data);

  return (
    <MyContext.Provider
      value={{data, selectedJob, updateSelectedJob, updateData}}>
      {children}
    </MyContext.Provider>
  );
};

export {MyContext as default, MyContextProvider};
