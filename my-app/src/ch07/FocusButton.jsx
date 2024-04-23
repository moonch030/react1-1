// 이 줄은 React와 useRef 훅을 가져옵니다.
import React, { useRef } from "react"

// 이 컴포넌트는 입력란과 버튼을 렌더링하는 함수 컴포넌트입니다.
export default function FocusButton(props){
    // useRef 훅을 사용하여 입력 요소에 대한 참조를 만듭니다.
    const inputElem = useRef(null)

    // 버튼을 클릭할 때 호출되는 함수입니다.
    const onButtonClick = () => {
        // 입력 요소에 포커스를 설정합니다.
        inputElem.current.focus()
    }

    // 컴포넌트를 렌더링합니다.
    return(
        <>
            {/* 입력 요소 */}
            <input ref={inputElem} type="text"/>

            {/* 포커스를 설정하는 버튼 */}
            <button onClick={onButtonClick}>
                Focus the input
            </button>
        </>
    )
}
