import React, { useEffect, useState } from "react";

const UseEffectPreviewAvatar = () => {
  const [avatar, setAvartar] = useState();
  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvartar(file);
    e.target.value = null //để chọn 1 ảnh mà 2 lần trở lên vẫn set
    console.log('123');
    };
    useEffect(() => {
        return () => {
         avatar && URL.revokeObjectURL(avatar.preview)
        }
    })
  return (
    <div>
      <input type="file" onChange={handlePreviewAvatar} />
      {avatar && <img src={avatar.preview} width="80%"></img>}
    </div>
  );
};

export default UseEffectPreviewAvatar;
