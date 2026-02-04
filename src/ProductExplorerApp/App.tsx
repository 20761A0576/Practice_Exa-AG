import React from "react";
import AppRoutes from "./Components/AppRoutes/AppRoutes";
import { Provider } from "react-redux";
import { Store } from "./Store";
import { ToastContainer } from "react-toastify";

const App = () => {
    return (
        <Provider store={Store}>
            <AppRoutes />
            <ToastContainer />
        </Provider>
    )
}

export default App;