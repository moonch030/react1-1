import React from "react";

const styles = {
    // 각 요소별 스타일을 정의합니다.
    wrapper: {
        margin: 8, // 외부 여백
        padding: 8, // 내부 여백
        display: "flex", // 플렉스박스 모델 사용
        flexDirection: "row", // 플렉스 아이템들을 행으로 배치
        border: "1px solid grey", // 테두리 스타일
        borderRadius: 16, // 테두리 둥글게 처리
    },
    imageContainer: {}, // 이미지 컨테이너, 추가 스타일 없음
    image: {
        width: 50, // 이미지 너비
        height: 50, // 이미지 높이
        borderRadius: 25, // 이미지 모서리를 둥글게 처리 (원형)
    },
    contentContainer: {
        marginLeft: 8, // 왼쪽 여백
        display: "flex", // 플렉스박스 모델 사용
        flexDirection: "column", // 플렉스 아이템들을 열로 배치
        justifyContent: "center", // 아이템들을 세로선 상 중앙에 위치
        alignItems: 'flex-start', // 아이템들을 가로선 상 왼쪽에 위치
    },
    nameText: {
        color: "black", // 텍스트 색상
        fontSize: 16, // 폰트 크기
        fontWeight: "bold", // 폰트 두께
    },
    commentText: {
        color: "black", // 텍스트 색상
        fontSize: 16, // 폰트 크기
    },
};

export default function Comment(props) {
    return (
        <div style={styles.wrapper}>
            {/* 이미지 컨테이너를 포함하는 상위 컨테이너 */}
            <div style={styles.imageContainer}>
                {/* 이미지 요소: 외부 URL에서 이미지를 가져와서 사용 */}
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                    style={styles.image}
                />
            </div>

            {/* 텍스트를 포함하는 컨텐츠 컨테이너 */}
            <div style={styles.contentContainer}>
                {/* 사용자 이름을 표시하는 텍스트 요소 */}
                <span style={styles.nameText}>{props.name}</span>
                {/* 댓글 내용을 표시하는 텍스트 요소 */}
                <span style={styles.commentText}>{props.comment}</span>
            </div>
        </div>
    );
}
