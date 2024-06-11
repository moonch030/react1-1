export default function FancyBorder(props){
    return(
        <div className={'color:'+props.color}>
            {props.children}
        </div>
    )
}