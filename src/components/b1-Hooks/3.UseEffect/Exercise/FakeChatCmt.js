import React, { useEffect, useState } from "react";
const lessons = [
  {
    id: 1,
    name: "hxtien",
  },
  {
    id: 2,
    name: "tlchi",
  },
  {
    id: 3,
    name: "hoangbs",
  },
];
const FakeChatCmt = () => {
  const [lessonId, setLessonId] = useState(1);
  useEffect(() => {
    const handleComment = ({ detail }) => {
      console.log(detail);
    };
    window.addEventListener(`lesson-${lessonId}`, handleComment);
    return () => {
      window.removeEventListener(`lesson-${lessonId}`, handleComment);
    };
  }, [lessonId]);
  return (
    <div>
      <ul>
        {lessons.map((item) => (
          <li
            key={item.id}
            style={{ color: lessonId === item.id ? "red" : "#333" }}
            onClick={() => setLessonId(item.id)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FakeChatCmt;
