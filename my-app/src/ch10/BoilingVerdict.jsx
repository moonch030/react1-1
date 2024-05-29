export default function BoilingVerdict(props){
    if(props.celsius >= 100){
        return <p>보글보글~~</p>
    }
    return <p>물이 안끓어유</p>
}

