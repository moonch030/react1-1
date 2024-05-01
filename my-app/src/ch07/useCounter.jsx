import React, { useState } from "react"; // React와 useState 훅을 임포트합니다.

// useCounter 함수는 카운터의 초기값을 인자로 받습니다.
function useCounter(initialValue) {
    const [count, setCount] = useState(initialValue); // 카운터의 현재 값을 상태로 저장하고, 이 값을 업데이트할 수 있는 함수를 제공합니다.

    // increaseCount 함수는 카운트 값을 1 증가시킵니다.
    const increaseCount = () => setCount((count) => count + 1);
    // decreaseCount 함수는 카운트 값을 1 감소시킵니다. 단, 카운트 값은 0 이하로 내려가지 않습니다.
    const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));

    // useCounter 훅은 카운트 값과 이를 조작하는 두 함수를 배열로 반환합니다.
    return [count, increaseCount, decreaseCount];
}

export default useCounter; // useCounter 훅을 다른 파일에서 임포트하여 사용할 수 있도록 export 합니다.
