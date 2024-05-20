import React, { createContext } from "react";
import eventDetails from "../EventData/EventsDetails";

export const EventContext = createContext();
const ContextProvider = ({ children }) => {
  const EventValues = { eventDetails };
  return (
    <EventContext.Provider value={EventValues}>
      {children}
    </EventContext.Provider>
  );
};

export default ContextProvider;
