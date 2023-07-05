import React, { createContext } from "react";

// const GparentContext = React.createContext()
const GparentContext = createContext();
export const GparentContextProvider = GparentContext.Provider;
export const GparentContextConsumer = GparentContext.Consumer;

export default GparentContext;
