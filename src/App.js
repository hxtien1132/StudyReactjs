// import { Component, Fragment, useRef, useState } from "react";
// import { Routes, Route } from "react-router-dom";
import MainApp from "./components/b1-Hooks/99.TodoApp-ContextApi-localStorage/MainApp";
import { TodoWrapper } from "./components/b1-Hooks/99.TodoApp-UseReducer/TodoWrapper";
import MainCrud from "./components/b99.CRUD-UseState-ContextAPI/MainCrud";
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
      <MainCrud></MainCrud>
    </div>
  );
}

// props :properties

export default App;
