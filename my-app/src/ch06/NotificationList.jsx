import React from "react";
import Notification from "./Notification";

// 사전 정의된 알림 목록
const reservedNotifications = [
    {
        id: 1,
        message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        id: 2,
        message: "점심식사 시간입니다.",
    },
    {
        id: 3,
        message: "이제 곧 미팅이 시작됩니다.",
    },
];

var timer; // 타이머를 위한 변수

class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notifications: [], // 초기 상태로 알림 배열을 비워둠
        };
    }

    componentDidMount() {
        // 컴포넌트 마운트 후, 주기적으로 알림을 추가
        const { notifications } = this.state;
        timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: notifications,
                });
            } else { 
                // 주석 처리된 코드: 모든 알림이 표시된 후 초기화 및 타이머 중지
                // this.setState({
                //     notifications: [],
                // });
                // clearInterval(timer);
            }
        }, 1000);
    }

    componentWillUnmount() {
        // 컴포넌트가 언마운트될 때 타이머를 정리
        if (timer) {
            clearInterval(timer);
        }
    }

    render() {
        // notifications 배열을 매핑하여 각 Notification 컴포넌트를 렌더링
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return (
                        <Notification
                            key={notification.id}
                            id={notification.id}
                            message={notification.message}
                        />
                    );
                })}
            </div>
        );
    }
}

export default NotificationList;
