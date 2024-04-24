import React from "react";

const styles = {
    wrapper: {
        margin: 8,        // 요소 주위의 여백
        padding: 8,       // 요소 내부의 여백
        display: "flex",  // flexbox 레이아웃 사용
        flexDirection: "row", // 요소를 행 방향으로 배치
        border: "1px solid grey", // 요소 주위에 회색 테두리 설정
        borderRadius: 16, // 테두리의 모서리를 둥글게
    },
    messageText: {
        color: "black", // 텍스트 색상은 검은색
        fontSize: 16,   // 폰트 크기는 16px
    },
};

class Notification extends React.Component {
    constructor(props) {
        super(props);
        // 컴포넌트의 초기 상태 설정, 현재는 빈 객체로 설정
        this.state = {};
    }

    componentDidMount() {
        // 컴포넌트가 마운트될 때 콘솔에 로그를 출력
        console.log(`${this.props.id} componentDidMount() called.`);
    }

    componentDidUpdate() {
        // 컴포넌트가 업데이트될 때 콘솔에 로그를 출력
        console.log(`${this.props.id} componentDidUpdate() called.`);
    }

    componentWillUnmount() {
        // 컴포넌트가 언마운트될 때 콘솔에 로그를 출력
        console.log(`${this.props.id} componentWillUnmount() called.`);
    }

    render() {
        // 컴포넌트의 UI를 렌더링
        return (
            <div style={styles.wrapper}>
                {/* 전달된 message prop을 사용하여 메시지 텍스트 표시 */}
                <span style={styles.messageText}>{this.props.message}</span>
            </div>
        );
    }
}

export default Notification;
