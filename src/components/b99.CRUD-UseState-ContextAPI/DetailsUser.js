import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const UserDetails = () => {
  const URL = "http://localhost:8000/employee/";
  const { empid } = useParams();
  const [empdata, setEmpdata] = useState({});
  useEffect(() => {
    fetch(URL + empid)
      .then((resp) => resp.json())
      .then((data) => {
        setEmpdata(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="container">
      <div className="card">
        <div className="card-title">Employee Details</div>
        <div className="card-body">
          {empdata && (
            <div>
              <h2>
                The employee is : {empdata.name} - {empdata.id}{" "}
              </h2>
              <h3>Contact details</h3>
              <h5>Email is : {empdata.email}</h5>
              <h5>Phone is: {empdata.phone}</h5>
              <Link className="btn btn-danger" to="/">
                Back to listing
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
