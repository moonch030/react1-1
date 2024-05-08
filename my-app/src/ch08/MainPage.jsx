import React, { useState } from 'react';
import WarningBanner from './WarningBanner';  // WarningBanner 컴포넌트를 가져옵니다

// MainPage 컴포넌트 정의
export default function MainPage() {
    const [showWarning, setShowWarning] = useState(false);  // showWarning 상태 초기값 설정

    // 버튼 클릭 이벤트 핸들러
    const handleToggleClick = () => {
        setShowWarning(prevShowWarning => !prevShowWarning);  // 현재 상태를 반전시킴
    }

    return (
        <div>
            <WarningBanner warning={showWarning} />
            <button onClick={handleToggleClick}>
                {showWarning ? '감추기' : '보이기'}
            </button>
        </div>
    );
}
