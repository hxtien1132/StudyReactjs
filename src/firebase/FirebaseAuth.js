import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged, //trang thai login logout
  updateProfile,
} from "firebase/auth";
import { auth, db } from "./firebaseCongif";
import { addDoc, collection } from "firebase/firestore";
import { async } from "@firebase/util";

const FirebaseAuth = () => {
  const [userInfo, setUserInfo] = useState("");
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  // onAuthStateChanged(auth, (currentUser) => {
  //   setUserInfo(currentUser);
  // });
  useEffect(() => {
    // signout
    onAuthStateChanged(auth, (currentUser) => {
      console.log("currentvalue", currentUser);
      if (currentUser) {
        setUserInfo(currentUser);
      } else {
        setUserInfo("");
      }
    });
  }, [userInfo]);
  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleCreateUser = async (e) => {
    //create
    e.preventDefault();
    try {
      //credentials
      const cred = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      // if(user) setUserInfo(user)
      // console.log(user);
      // hien thi name thay cho (vd email)
      await updateProfile(auth.currentUser, {
        displayName: "ha xuan tien",
      });
      setUserInfo(cred);
      console.log("success");
      const userRef = collection(db, "users");
      await addDoc(userRef, {
        email: values.email,
        password: values.password,
        id: cred.user.uid,
      });
    } catch (error) {
      console.log(error);
    }
  };
  //signout
  const handleSignOut = () => {
    signOut(auth);
  };
  const handleLogin = async (e)=>{
    e.preventDefault();
    const cred = await signInWithEmailAndPassword(
      auth,
      values.email,
      values.password
    )
     setUserInfo(cred)
     console.log("success");
  }
  return (
   <>
     <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10">
      <form onSubmit={handleLogin}>
        <input
          type="email"
          className="p-3 rounded border  border-gray-500 w-full mb-5 outline-none
                        focus:border-blue-500 "
          placeholder="enter your email"
          name="email"
          onChange={handleInputChange}
        />

        <input
          type="text"
          className="p-3 rounded border  border-gray-500 w-full mb-5 outline-none
                        focus:border-blue-500 "
          placeholder="enter your password"
          name="password"
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="p-3 bg-pink-500 text-white test-sm w-full font-semibold rounded-lg"
        >
          login
        </button>
      </form>
      {/* <div className="mt-10 flex items-center gap-x-5">
        <span>{userInfo?.displayName}</span>
        <button
          className="p-3 bg-pink-500 text-white test-sm font-semibold rounded-lg"
          onClick={handleSignOut}
        >
          signOut
        </button>
      </div> */}
    </div>
    <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10">
      <form onSubmit={handleCreateUser}>
        <input
          type="email"
          className="p-3 rounded border  border-gray-500 w-full mb-5 outline-none
                        focus:border-blue-500 "
          placeholder="enter your email"
          name="email"
          onChange={handleInputChange}
        />

        <input
          type="text"
          className="p-3 rounded border  border-gray-500 w-full mb-5 outline-none
                        focus:border-blue-500 "
          placeholder="enter your password"
          name="password"
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="p-3 bg-blue-500 text-white test-sm w-full font-semibold rounded-lg"
        >
          signup
        </button>
      </form>
      <div className="mt-10 flex items-center gap-x-5">
        <span>{userInfo?.displayName}</span>
        <button
          className="p-3 bg-purple-500 text-white test-sm font-semibold rounded-lg"
          onClick={handleSignOut}
        >
          signOut
        </button>
      </div>
    </div>
   </>
  );
};

export default FirebaseAuth;
