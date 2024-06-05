import TemperatureInput from "./TemperatureInput"

export default function Calculator(){
    return (
        <>
            <TemperatureInput scale='C'/>
            <TemperatureInput scale='F'/>
        </>
    )
}