import UseLocalStorage from "../../../hooks/useLocalStorage";

const { createContext, useContext, useState } = require("react");

const GalleryContext = createContext();

const fakeData = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1667420114321-1dc9a7d4ac12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    isFavorite: false,
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1667405653753-5e4b4f69556b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
    isFavorite: false,
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1667331938917-fbd9981dfa4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
    isFavorite: false,
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1664574652984-5b5f769bef07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
    isFavorite: false,
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1661961110218-35af7210f803?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
    isFavorite: false,
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1657214059169-c01172e56be0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
    isFavorite: false,
  },
];

function GalleryProvider(props) {
  // 1 save get data
  const {storedValue, setValue} = UseLocalStorage("photos", fakeData); //save data
  const [photos, setPhotos] = useState(storedValue); // get data
 //2.save get giohang
  const {storedValue:storedCart, setValue:SetStoredCart} = UseLocalStorage("cartItems", []);//save data
  const [cartItems, setCartItems] = useState(storedCart); //giohang
 //3.like unlike
  const [favoriteList, setFavoriteList] = useState([]);
  //hàm like unlike
  function tonggleFavorite(photoId) {
    const updateArray = photos.map((photo) => {
      if (photo.id === photoId) {
        return { ...photo, isFavorite: !photo.isFavorite }; //tra lai trong ham map
      }
      return photo;
    });
    setPhotos(updateArray);
    setValue(updateArray)
  }
  //1.viết function addtocart
  //2.funtion addtocart truyền params là photo
  //3.cập nhật lại state giỏ hàng(cartItem)
  function addToCart(newItem) {
    setCartItems((prevItems)=>{
        const isExisted = prevItems.some((item)=> item.id === newItem.id)//tifm thấy trả về true
        console.log("isexisted", isExisted);
        if(isExisted){
          SetStoredCart([...prevItems])
         return [...prevItems] //nếu true trả về mảng cũ
        }
        SetStoredCart([...prevItems, newItem])
       return [...prevItems, newItem] //flase trả về mảng mới
    })
  }
  function removeFromCart(photoId){
    // const newcard = cartItems.filter((item)=>
    //   item.id !==photoId
    // )
    // SetStoredCart(newcard)
    // setCartItems(newcard)
    setCartItems((prevItems)=>{
     const newcard = prevItems.filter((item)=>item.id !== photoId)
     SetStoredCart(newcard)
     return newcard
    });
  }

  const value = {
    photos,
    cartItems,
    favoriteList,
    setCartItems,
    setFavoriteList,
    setPhotos,
    tonggleFavorite,
    addToCart,
    removeFromCart
  };
  return (
    <GalleryContext.Provider value={value} {...props}></GalleryContext.Provider>
  );
}

function useGallery() {
  const context = useContext(GalleryContext);
  if (typeof context === "undefined")
    throw new Error("useGallery must be used within a AuthProvider");
  return context;
}
export { useGallery, GalleryProvider };
