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
		{
			nome: "Orange",
			idade: "21",
			grupo: "Orange",
			img: "/imgs/membro.png",
		},
		{
			nome: "Orange",
			idade: "21",
			grupo: "Orange",
			img: "/imgs/membro.png",
		},
		{
			nome: "Orange",
			idade: "21",
			grupo: "Orange",
			img: "/imgs/membro.png",
		},
		{
			nome: "Orange",
			idade: "21",
			grupo: "Orange",
			img: "/imgs/membro.png",
		},
		{
			nome: "Orange",
			idade: "21",
			grupo: "Orange",
			img: "/imgs/membro.png",
		},
		{
			nome: "Orange",
			idade: "21",
			grupo: "Orange",
			img: "/imgs/membro.png",
		},
		{
			nome: "Orange",
			idade: "21",
			grupo: "Orange",
			img: "/imgs/membro.png",
		},
		{
			nome: "Orange",
			idade: "21",
			grupo: "Orange",
			img: "/imgs/membro.png",
		},
		{
			nome: "Orange",
			idade: "21",
			grupo: "Orange",
			img: "/imgs/membro.png",
		},
		{
			nome: "Orange",
			idade: "21",
			grupo: "Orange",
			img: "/imgs/membro.png",
		},
		{
			nome: "Orange",
			idade: "21",
			grupo: "Orange",
			img: "/imgs/membro.png",
		},
		{
			nome: "Orange",
			idade: "21",
			grupo: "Orange",
			img: "/imgs/membro.png",
		},
		{
			nome: "Orange",
			idade: "21",
			grupo: "Orange",
			img: "/imgs/membro.png",
		},
		{
			nome: "Orange",
			idade: "21",
			grupo: "Orange",
			img: "/imgs/membro.png",
		},
		{
			nome: "Orange",
			idade: "21",
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
			<div className=" justify-center gap-8 grid grid-cols-3 sm:grid-cols-7 mt-[175px] mb-[200px]">
				{list.map((item, index) => (
					<Card isHoverable isBlurred key={index} className="bg-cover bg-bottom min-w-[150px] shadow-lg shadow-marromVermelho">
						<CardHeader className="text-small justify-between">
							<Code className="flex justify-center w-[100%] bg-laranjao font-bold text-white">{item.grupo}</Code>
						</CardHeader>
						<CardBody className=" p-0">
							<Image 
							width="100%"
							alt={item.nome}
							className="w-full object-cover h-[140px]"
							src="/imgs/fotoPessoa.png"
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
