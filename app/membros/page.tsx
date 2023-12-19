import { title } from "@/components/primitives";
import {
	Code,
	Card,
	CardBody,
	Image,
	CardFooter,
	CardHeader
} from "@nextui-org/react";

export default function DocsPage() {

	const list = [
		{
		  nome: "Drika",
		  idade: "20",
		  grupo: "Dançarina",
		  img: "/imgs/fotoPessoa.png",
		},
		{
			nome: "Anderson",
			idade: "22",
			grupo: "Fase teste",
			img: "/imgs/membro.png",
		},
		{
			nome: "Juliana",
			idade: "25",
			grupo: "Orange",
			img: "/imgs/membro.png",
		},
		{
			nome: "Shikuro",
			idade: "22",
			grupo: "Orange",
			img: "/imgs/membro.png",
		},
		{
			nome: "Orange",
			idade: "21",
			grupo: "Orange",
			img: "/imgs/membro.png",
		},
	  ];
	

	return (
		<>
			<div className="gap-4 grid grid-cols-3 sm:grid-cols-6 mt-[200px]">
				{list.map((item, index) => (
					<Card shadow="sm" isHoverable key={index} className="bg-[url('/imgs/fogo-foto.png')] bg-cover bg-bottom min-w-[150px]">
						<CardHeader className="text-small justify-between">
							<Code className="flex justify-center w-[100%] bg-laranjao font-bold text-white">{item.grupo}</Code>
						</CardHeader>
						<CardBody className=" p-0">
							<Image 
							width="100%"
							alt={item.nome}
							className="w-full object-cover h-[140px]"
							src={item.img}
							/>
						</CardBody>
						<CardFooter className="justify-between mr-[10px] bg-pessego">
							<b className="text-white">{item.nome + ', ' +item.idade}</b>
						</CardFooter>
					</Card>
				))}
			</div>
		</>
	);
}
