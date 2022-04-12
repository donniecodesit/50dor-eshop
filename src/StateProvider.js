import React, {createContext, useContext, useReducer} from "react";

// Prepare the Context/Data Layer
export const StateContext = createContext();

// Wrap the application and provide it the Context/Data Layer
export const StateProvider = ({ reducer, initialState, children}) => {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    )
}

// Retrieve information from the Context/Data Layer
export const useStateValue = () => useContext(StateContext);