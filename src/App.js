// import { Component, Fragment, useRef, useState } from "react";
// import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainUseEffect from "./components/1c-UseEffect/UseEffect/MainUseEffect";

// import { GlobalStyles } from './GlobalStyles';
// import { ThemeProvider } from 'styled-components';
import "./index.scss";
// import { ErrorBoundary } from "react-error-boundary";
// import Nav from "./components/b10-Context-Router/b2-router/Nav";
// import BlogPage from "./components/b10-Context-Router/b2-router/BlogPage";
// import BlogPageDetails from "./components/b10-Context-Router/b2-router/BlogPageDetails";
// import ProfilePage from "./components/b10-Context-Router/b2-router/ProfilePage";
// import WithLoading from "./components/b11-advanced/b1-HigherOrderComponent/WithLoading";
// import Fetchingdata from "./components/b11-advanced/b1-HigherOrderComponent/Fetchingdata";
// import Main from "./components/b11-advanced/b2-render-props/MainRenderProps";
// import MainComposition from "./components/b11-advanced/b3-react-composition/MainComposition";
// import Toggle from "./components/b2-toggle/Toggle";
// import MainStateReducer from "./components/b11-advanced/b6-state-reducer/MainStateReducer";
// import MainInversionOfControl from "./components/b11-advanced/b7-inversion-of-control/MainInversionOfControl";
// import MainControlProps from "./components/b11-advanced/b5-control-props-patern/MainControlProps";
// import Perpormance from "./components/b11-advanced-react/Performance/Count";
// import Mainperformance from "./components/b11-advanced-react/Performance/Mainperformance";
// import FirebaseApp from "./firebase/FirebaseApp";
// import FirebaseAuth from "./firebase/FirebaseAuth";
// import MainYoutube from "./components/b0-renderList/b1-youtube/MainYoutube";
// import Increase from "./components/b1-UseState/b1-increase/Increase";
// import BoxColor from "./components/b1-UseState/b4-setColor/BoxColor";
// import MainComposition from "./components/b11-advanced/react-composition-compound-component/MainComposition";

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
      {/* <div >
          <button onClick={()=>setShow(!show)}>button toggle</button>
          {show && <HackerNews></HackerNews>}
        </div> */}
      {/* <button onClick={() => setShow(true)}
        className="inline-block m-3 p-3 rounded-lg text-white bg-green-400"  >   
        show menu
      </button>
      <SideBar show={show} ref={nodeRef}></SideBar> */}
      {/* <WithLoading></WithLoading> */}
      {/* <Fetchingdata></Fetchingdata> */}
      {/* <MainComposition></MainComposition> */}
      {/* <MainCollection></MainCollection> */}
      {/* <MainControlProps></MainControlProps> */}
      {/* <MainStateReducer></MainStateReducer> */}
      {/* <MainInversionOfControl></MainInversionOfControl> */}
      {/* <Mainperformance></Mainperformance> */}
      {/* <FirebaseApp></FirebaseApp> */}
      {/* <FirebaseAuth></FirebaseAuth> */}
      <MainUseEffect></MainUseEffect>
      
     
    </div>
  );
}

// props :properties

export default App;
