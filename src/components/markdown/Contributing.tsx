import React, { FunctionComponent } from "react";
import HacktoberfestIssues from "./HacktoberfestIssues";
import HelpWanted from "./HelpWanted";

const Contributing: FunctionComponent = ({ children }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl text-black-500 font-bold mb-4">Contributing</h2>
      {children}
      <div className="md:flex md:space-x-4">
        <HelpWanted />
        <HacktoberfestIssues />
      </div>
    </div>
  );
};

export default Contributing;