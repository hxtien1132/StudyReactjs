import React, { useState } from "react";
import { Dropdown } from "./";
import DropdownV1 from "./DropdownV1";


const options = [
  {
    title: "Frontend Developer",
  },
  {
    title: "Backend Developer",
  },
  {
    title: "Fullstack Developer",
  },
];
const MainInversionOfControl = () => {
  const [job, setJob] = useState("");
  const [filter, setFilter] = useState("");
  console.log("App ~ filter", filter);
  const handleSelectJob = (newJob) => {
    setJob(newJob);
  };
  return (
    <div>
      {/* <DropdownV1
        options={options}
        placeholder="Please select your job"
        inputPlaceholder={"Search your jobs..."}
        visibleIconCheck
        visibleSearch
      ></DropdownV1> */}
      <Dropdown
        placeholder={`${job || "Select your job"}`}
        onClick={handleSelectJob}
        onChange={(e) => setFilter(e.target.value)}
      >
        <div className="options border border-gray-300 rounded">
          <Dropdown.Search placeholder="Search your jobs..."></Dropdown.Search>
          {options.map((option) => (
            <Dropdown.Option key={option.title}>
              <span>{option.title}</span>
              <Dropdown.IconCheck></Dropdown.IconCheck>
            </Dropdown.Option>
          ))}
        </div>
      </Dropdown>
    </div>
  );
};

export default MainInversionOfControl;
