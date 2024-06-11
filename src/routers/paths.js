import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import LoginPage from "../modules/loginPage";

const Paths = () => {
  return (
    <Provider store={store}>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
};

export default Paths;
