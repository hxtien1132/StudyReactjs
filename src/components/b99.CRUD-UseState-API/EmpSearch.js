// import React, { useEffect, useState } from "react";
// import useDebounce from "../../hooks/useDebounce";

// const EmpSearch = () => {
//     const { debounceValue, setDebounceValue } = useDebounce();
//   const URL = "http://localhost:8000/employee/";
  
//   const [empdata, setEmpdata] = useState([]);
//   // const navigate = useNavigate();
//   useEffect(() => {
//     async function handleApi() {
//       try {
//         const response = await fetch(URL).then((res) => res.json());
//         console.log(response);
//         setEmpdata(response);
//       } catch (error) {
//         console.log("api err");
//       }
//     }
//     handleApi();
//   }, []);
//   return (
//     <div className="input-group input-group-lg my-3">
//       <div className="input-group-prepend">
//         <span className="input-group-text" id="inputGroup-sizing-lg">
//           Large
//         </span>
//       </div>
//       <input
//         type="text"
//         className="form-control"
//         aria-describedby="inputGroup-sizing-sm"
//         value={debounceValue}
//         onChange={(e) => setDebounceValue(e.target.value)}
//       />
//     </div>
//   );
// };

// export default EmpSearch;
