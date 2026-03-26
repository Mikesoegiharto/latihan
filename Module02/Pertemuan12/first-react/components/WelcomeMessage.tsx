interface Iberak {
    berak: string,
}

export default function WelcomeMessage (props: Iberak){
    return(
        <h2>Hello, {props.berak}</h2>
    )
}