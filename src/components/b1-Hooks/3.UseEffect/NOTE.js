import React, { useEffect } from "react";

/* 
useEffect(()=>{
    side effect
     return function cleanup() {
    }
},[desp]) ;
+ UseEffect
1. cập nhật lại state
2. cập nhật dom(mutated)
3. render lại Ui
4. gọi cleanup nếu deps thay đổi
5. gọi useEffect callback
* Life CyCle*
MOUTING:
 -- rendering
 => run useEffect
UPDATING:
 -- rendering
 => run `useEffect cleanup` nếu desp thay đổi
 => run `useEffect ` nếu desp thay đổi
UNMOUTING
 => run `useEffect cleanup`
* side effect chia làm 2 loại *
-- effect k cần clean up :gọi API, tương tác vs DOM
-- effect cần clean up : setTimeOut,SetInterval,subscriptions
 * luôn được chạy lần đầu tiên khi component mouted  *
 * cleanup function luôn được gọi trước khi component unmouted *
-- 3 trường hợp --
1.useEffect(callback)
--callback luôn được gọi mỗi khi component re-render
2.useEffect(callback,[])
--callback chạy 1 lần sau khi component mouted 
3.useEffect(callback,[deps])
--callback chạy khi deps đúng
*/
const Note = () => {
  useEffect(() => {});
  return <div></div>;
};

export default Note;
