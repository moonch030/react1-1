export default function NumberList(props){
    const numbers = [1,2,3,4,5]

    const listItems = numbers.map((number,index)=> 
        <li key={index}>{number}</li>
    )
    
    return(
        <ul>{listItems}</ul>
    )
}
//다 못따라침;