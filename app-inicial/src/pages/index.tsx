import Link from "next/link";

export default function Home() {
	return (
		<div>
			<h1 className="text-6xl font-black">Principal</h1>
			<div className="flex flex-col mt-12 text-4xl gap-3">
				<Link href="/context/contador">
					<span>Contador</span>
				</Link>
				<Link href="/listas/produtos">
					<span>Produtos</span>
				</Link>
			</div>
		</div>
	);
}
