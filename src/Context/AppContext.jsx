import React, { createContext, useContext, useReducer } from "react";

const AppContext = createContext();

const useAppContext = () => {
    return useContext(AppContext);
};

const initialState = {
    darkMode: true,
};

function AppProvider({ children }) {
    const [state, dispatch] = useReducer(appStateReducer, initialState);
    return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
}
const action = {
    toggleDarkTheme: () => ({ type: "TOGGLE_DARK_MODE" }),
};

function appStateReducer(state = initialState, action) {
    switch (action.type) {
        case "TOGGLE_DARK_MODE":
            return {
                ...state,
                darkMode: !state.darkMode,
            };
        default:
            return state;
    }
}

export default useAppContext;
export { AppProvider, action };
