import React, { useState } from 'react';

const Midterm = () => {
  const [text, setText] = useState("");

  const handleButtonClick = (fruit) => {
    setText(fruit);
  };

  return (
    <div>
      <h1>당신은 어떤 과일을 좋아하나요?  {text} </h1>
      <button onClick={() => handleButtonClick("사과")}>사과</button>
      <button onClick={() => handleButtonClick("오렌지")}>오렌지</button>
      <button onClick={() => handleButtonClick("바나나")}>바나나</button>
    </div>
  );
};

export default Midterm;
