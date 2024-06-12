function App(){
    return <Toolbar theme = "dark"/>
}

function Toolbar(props){
    return(
        <div>
            <ThemeButton theme={props.theme}/>
        </div>
    )
}

function ThemeButton(props){
    return(
        <Button theme = {props.theme}/>
    )
}