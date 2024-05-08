export default function Greeting(props){
    if(props.isLoggedIn){
        return <p>환영합니다.</p>
    }else{
        return <p>로그인해주세요...</p>
    }
}