import React, {useState, useEffect} from "react"; // React와 useState, useEffect 훅을 임포트합니다.
import useCounter from "./useCounter"; // useCounter라는 커스텀 훅을 임포트합니다.

const MAX_CAPACITY = 10; // 최대 수용 인원을 10으로 설정합니다.

function Accommodate(props){ // Accommodate 함수형 컴포넌트를 정의합니다.
    const [isFull, setIsFull] = useState(false); // isFull 상태를 false로 초기화합니다.
    const [count, increaseCount, decreaseCount] = useCounter(0); // useCounter 훅을 사용해 count 상태를 관리합니다.

    useEffect(() => { // 첫 번째 useEffect 훅입니다.
        console.log("==========================");
        console.log("useEffect() is called.");
        console.log(`isFull: ${isFull}`); // 현재 isFull 값이 콘솔에 로그로 찍힙니다.
    });

    useEffect(() => { // 두 번째 useEffect 훅입니다.
        setIsFull(count >= MAX_CAPACITY); // count가 MAX_CAPACITY 이상이면 isFull을 true로 설정합니다.
        console.log(`Current count value: ${count}`); // 현재 count 값이 콘솔에 로그로 찍힙니다.
    }, [count]); // count 값이 변할 때마다 이 훅을 실행합니다.

    return( // JSX를 리턴합니다.
        <div style={{padding: 16}}>
            <p>{`총 ${count}명 수용 했습니다.`}</p>
            <button onClick={increaseCount} disabled={isFull}>
                입장
            </button>
            <button onClick={decreaseCount}>퇴장</button>

            {isFull && <p style={{color:"red"}}>정원이 가득 찼습니다.</p>}
        </div>
    );
}

export default Accommodate; // Accommodate 컴포넌트를 export합니다
