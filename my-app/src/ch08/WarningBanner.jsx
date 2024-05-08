import React from 'react';

// WarningBanner 컴포넌트 정의
export default function WarningBanner(props) {
    if (!props.warning) {
        return null;  // warning prop이 false일 경우, 렌더링하지 않음
    }
    return (
        <div>경고!!</div>  // warning prop이 true일 경우, 경고 메시지 표시
    );
}
