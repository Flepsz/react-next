interface Displayprops {
    valor: number
}

export default function Display(props: Displayprops) {
    return (
        <div className={`
            flex justify-center items-center flex-1
            bg-zinc-800 p-5 text-5xl font-black rounded-md`}>
            {props.valor}
        </div>
    )
}