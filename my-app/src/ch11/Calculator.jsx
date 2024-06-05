import { useState } from "react"
import TemperatureInput from "./TemperatureInput"

export default function Calculator(props){
    const [temperature,setTemperature] = useState()
    const [scale, setScale] = useState('C')

    const handleVelsiusChange = (temperature) =>{
        setTemperature(temperature)
        setScale('C')
    }

    const handleFahrenheitChange = (temperature) =>{
        setTemperature(temperature)
        setScale('F')
    }

    const celsius = scale === 'F' ? tryConvert(temperature, toCelsius):temperature
    const fahrenheit = scale === 'C' ? tryConvert(temperature,toFahrenheit):temperature

    return (
        <>
            <TemperatureInput 
            scale='C'
            temperature={celsius}
            onTemperatureChange={handleVelsiusChange}/>
            
            <TemperatureInput 
            scale='F'
            temperature={fahrenheit}
            onTemperatureChange={handleFahrenheitChange}/>
        </>
    )
}

function toCelsius(fahrenheit){
    return(
        (fahrenheit - 32) * 5/9
    )
}

function toFahrenheit(Celsius){
    return(
        (Celsius * 5/9) + 32
    )
}

function tryConvert(temperature,convert){
    const input = parseFloat(temperature)
    if(Number.isNaN(input)){
        return('')
    }
    const output = convert(input)
    const rounded = Math.round(output * 1000)/1000
    return (
        rounded.toString()
    )
}