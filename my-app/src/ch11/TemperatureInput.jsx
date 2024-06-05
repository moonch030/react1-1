import { useState } from "react"

const scaleName = {
    c: '섭씨',
    F: '화씨'
}
export default function TemperatureInput(props){
    const [temperature, setTemperature] = useState()
    const handleChange  = (e) => {
        setTemperature(e.target.value)
    }
    
    return(
        <fieldset>
            <legend>섭씨 온도를 입력해유~(단위: {scaleName[props.scale]})</legend>
            <input value={temperature}
            onChange={handleChange}/>
        </fieldset>
    )
}

function toCelsius(fahrenheit){
    return(
        (fahrenheit - 32) * 5/9
    )
}

function tofahrenheit(Celsius){
    return(
        (Celsius * 5/9) + 32
    )
}