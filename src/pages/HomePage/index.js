import React from "react";
import {Circle, Glass} from "./HomePage.styles";
import Dashboard from "../../components/Dashboard";
import Games from "../../components/Games";

const HomePage = () => {
    return (
        <>
            <Glass>
                <Dashboard/>
                <Games/>
            </Glass>
            <Circle pos={{top: "5%", right: "15%"}}/>
            <Circle pos={{bottom: "5%", left: "10%"}}/>
        </>
    );
};

export default HomePage;