import FancyBorder from "./FancyBorder";

export default function WelcomeDialog(){
    return(
        <FancyBorder color="blue">
            <h1 className="Dialog-title">어서오세유~~</h1>
            <p className="Dialog-message">우리 사이트 방문을 환영해유~~</p>
        </FancyBorder>
    )
}