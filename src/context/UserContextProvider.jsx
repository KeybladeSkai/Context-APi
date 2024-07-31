import { useState } from "react";

import userContext from "./userContext";
// creating the userContext to store the data and information
const UserContextProvider = ({children}) => {
  const [user, setUser] = useState(null);
  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
