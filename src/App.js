// import { Component, Fragment, useRef, useState } from "react";
// import { Routes, Route } from "react-router-dom";

import { MyForm } from "./components/b8-form/b4-Hook-Form/RadioCheckbox";
import SignUpFormFinal from "./components/b8-form/b4-Hook-Form/SignupFormCustom";
import "./index.scss";
// import { GlobalStyles } from './GlobalStyles';
// import { ThemeProvider } from 'styled-components';
// import { ErrorBoundary } from "react-error-boundary";
// import FirebaseAuth from "./firebase/FirebaseAuth";
// function ErrorFallback({ error, resetErrorBoundary }) {
//   return (
//     <div role="alert">
//       <p>Something went wrong:</p>
//       <pre>{error.message}</pre>
//       <button onClick={resetErrorBoundary}>Try again</button>
//     </div>
//   );
// }
function App() {
  // const { show, setShow, nodeRef } = UseClickOutSide();
  // const [openModalBase, setOpenModalBase] = useState(false); 
  // const [openModal, setOpenModal] = useState(false);
  // const nodeRef = useRef(null);
  return (
    <div>
      {/* <ThemeProvider theme={theme}> </ThemeProvider> */}
      {/* <GlobalStyles></GlobalStyles> */}
      <MyForm></MyForm>
    </div>
  );
}

// props :properties

export default App;
