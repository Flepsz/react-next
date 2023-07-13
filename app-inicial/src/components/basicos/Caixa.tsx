export default function Caixa(props: any) {
    return (
        <div className={`
            flex justify-center items-center
            bg-purple-500 rounded-md p-2
            w-64 h-64 text-6xl font-thin 
        `}>
            {props.children}
        </div>
    )
}