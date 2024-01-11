import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { title, subtitle } from "@/components/primitives";

export default function SobreNos() {
	return (
		<section id="section-sobreNos" className="flex flex-col items-center justify-center h-screen overflow-hidden">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1>SOBRE NOIS</h1>
			</div>

			<div className="mt-8">
				<Snippet hideSymbol hideCopyButton variant="flat">
					
				</Snippet>
			</div>
		</section>
	);
}
