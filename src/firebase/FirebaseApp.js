import { async } from "@firebase/util";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
  snapshotEqual,
  serverTimestamp,
  updateDoc,
  getDoc,
  where,
  orderBy,
  limit,
  query,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Await } from "react-router-dom";
import { db } from "./firebaseCongif";

const FirebaseApp = () => {
  const colRef = collection(db, "posts");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [postId, setPostId] = useState("");
  const [posts, setPosts] = useState([]);
  const [singlePost,setSinglePost] = useState("");
  //   console.log("firebase", colRef);
  useEffect(() => {
    //1.get collection data(props)
    // getDocs(colRef)
    //   .then((snapshot) => {
    //     // console.log("snapshot", snapshot);
    //     let posts = [];
    //     snapshot.docs.forEach((doc) => {
    //       //   console.log("doc", doc.data());
    //       posts.push({
    //         id: doc.id,
    //         ...doc.data(),
    //       });
    //     });
    //     // console.log("posts", posts);
    //     setPosts(posts)
    //   })
    //   .catch((error) => {
    //     throw new Error("err");
    //   }, []);
//   2. GET doccument realtime
    onSnapshot(colRef, (snapshot) => {
      let posts = [];
      snapshot.docs.forEach((doc) => {
        //   console.log("doc", doc.data());
        posts.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      // console.log("posts", posts);
      setPosts(posts);
    });
    //feching single document
   const docRefSingle = doc(db,'posts','zB9l7ynkvkNdeBh4BTny')
   //reload
  //  getDoc(docRefSingle).then((doc)=>{
  //   console.log(doc.id,doc.data());
  //  })
  //realtime
   onSnapshot(docRefSingle,(doc)=>{
    console.log(doc.id,doc.data());

   })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleAddpost = (Event) => {
    // console.log("submit");
    Event.preventDefault();
    addDoc(colRef, {
      title,
      author,
      createAt:serverTimestamp(),
    })
      .then(() => {
        console.log("success");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleRemovePost = async (Event) => {
    Event.preventDefault();
    const colRefDelete = doc(db, "posts", postId);
    // console.log(colRefDelete);
    await deleteDoc(colRefDelete);
    console.log("succsess");
  };
  const handleUpdatePost = async (e)=>{
    e.preventDefault();
    const colRefUpdate = doc(db,"posts",postId)
    await updateDoc(colRefUpdate,
        {
            title:"this is hxt"
        })
        console.log("success");
  }
  useEffect(()=>{
      const q = query(colRef,where("title","==","123alo"),limit(1));
      onSnapshot(q,(snapshot)=>{
        let posts = []
        snapshot.docs.forEach((doc)=>{
          posts.push({
            id:doc.id,
            ...doc.data(),
          })
        })
        console.log(posts);
      })
  },[])
  return (
    <div className="p-10">
      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10">
        <form action="" onSubmit={handleAddpost}>
          <input
            type="text"
            className="p-3 rounded border  border-gray-500 w-full mb-5 outline-none
                        focus:border-blue-500 "
            placeholder="enter your title"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className="p-3 rounded border  border-gray-500 w-full mb-5 outline-none
                        focus:border-blue-500 "
            placeholder="enter your author"
            name="author"
            onChange={(e) => setAuthor(e.target.value)}
          />
          <button
            type="submit"
            className="p-3 bg-blue-500 text-white test-sm w-full font-semibold rounded-lg"
          >
            Add
          </button>
        </form>
      </div>
      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10">
        <form action="" onSubmit={handleRemovePost}>
          <input
            type="text"
            className="p-3 rounded border  border-gray-500 w-full mb-5 outline-none
                        focus:border-blue-500 "
            placeholder="enter your id"
            name="postId"
            onChange={(e) => setPostId(e.target.value)
             }
          />

          <button
            type="submit"
            className="p-3 bg-red-500 text-white test-sm w-full font-semibold rounded-lg"
          >
            deleteId
          </button>
        </form>
      </div>
      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10">
        {posts.length > 0 &&
          posts.map((item) => (
            <div key={item.title}>
              <div>
                {item.title}-{item.author}
              </div>
            </div>
          ))}
      </div>
      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10">
        <form action="" onSubmit={handleUpdatePost}>
          <input
            type="text"
            className="p-3 rounded border  border-gray-500 w-full mb-5 outline-none
                        focus:border-blue-500 "
            placeholder="enter your title"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className="p-3 rounded border  border-gray-500 w-full mb-5 outline-none
                        focus:border-blue-500 "
            placeholder="enter your author"
            name="author"
            onChange={(e) => setAuthor(e.target.value)}
          />
          <button
            type="submit"
            className="p-3 bg-blue-500 text-white test-sm w-full font-semibold rounded-lg"
          >
          update
          </button>
        </form>
      </div>
    </div>
  );
};

export default FirebaseApp;
