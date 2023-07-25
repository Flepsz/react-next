import Contador from "@/components/contador/Contador";
import { ContadorProvider } from "@/data/contexts/ContadorContext";

export default function PaginaContador() {

    return (
        <div className="flex gap-5 flex-col justify-center items-center h-screen">
            <Contador />
        </div>
    )
}