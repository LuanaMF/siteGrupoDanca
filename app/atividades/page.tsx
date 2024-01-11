"use client";

import React from "react";
import {
	Table,
	TableHeader,
	TableBody,
	TableColumn,
	TableRow,
	TableCell,
	Code,
	Divider
} from "@nextui-org/react";

export default function Atividades() {

	const classNames = React.useMemo(
		() => ({
		  wrapper: [ "mt-6", "bg-[url('/imgs/fire-des.gif')]", "w-[100%]", "bg-bottom", "justify-center"],
		  th: ["bg-laranjao", "text-[#FFFFFF]", "font-extrabold", "tracking-wide"],
		  td: [
			"bg-pessego2",
			"text-marrom",
			"font-bold",
			"text-base",
			"font-mono",

		  ],
		}),
		[],
	);

	return (
		<>
			<section id="section-atividades" className="flex flex-col items-center justify-center gap-4">
			
				<div>
					<Code 
						className="flex justify-center mt-[150px] bg-pessego font-bold text-white" size="lg">
						Projetos | Oficinas | Apresentações
					</Code>
				</div>
				<div className="flex mt-[30px] w-[90%] justify-center">
				<Table aria-label="table" classNames={classNames} >
					<TableHeader>
						<TableColumn width={'30%'} >DATA</TableColumn>
						<TableColumn>ATIVIDADE</TableColumn>
					</TableHeader>
			
					<TableBody>
						<TableRow key="1">
							<TableCell>08/06 a 30/06 de 2021</TableCell>
							<TableCell>Projeto "Junho Urbano InFlame" - 6 vídeos</TableCell>
						</TableRow>
						<TableRow key="2">
							<TableCell>08/06 a 30/06 de 2021</TableCell>
							<TableCell>Projeto "Junho Urbano InFlame" - 6 vídeos</TableCell>
						</TableRow>
						<TableRow key="3">
							<TableCell>08/06 a 30/06 de 2021</TableCell>
							<TableCell>Projeto "Junho Urbano InFlame" - 6 vídeos</TableCell>
						</TableRow>
						<TableRow key="4">
							<TableCell >08/06 a 30/06 de 2021</TableCell>
							<TableCell>Projeto "Junho Urbano InFlame" - 6 vídeos</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</div>
		
			</section>
			
		</>
	);
}
