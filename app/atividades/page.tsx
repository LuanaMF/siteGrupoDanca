"use client";

import React from "react";
import {
	Table,
	TableHeader,
	TableBody,
	TableColumn,
	TableRow,
	TableCell
} from "@nextui-org/react";

export default function PricingPage() {

	const classNames = React.useMemo(
		() => ({
		  wrapper: ["w-[80%]"],
		  th: ["bg-laranjao", "text-[#FFFFFF]"],
		  td: [
			"bg-pessego2"
		  ],
		}),
		[],
	);

	return (
		<>
			<div>
				<h1 className={'font-semibold text-[1.5rem] lg:text-5xl leading-9 text-marrom'}>Relatório de atividades</h1>
			</div>
			<div className="flex mt-[30px] w-[100%] justify-center">
				<Table removeWrapper aria-label="table" classNames={classNames} >
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
						<TableCell>Zoey Lang</TableCell>
						<TableCell>Technical Lead</TableCell>
					</TableRow>
						<TableRow key="3">
						<TableCell>Jane Fisher</TableCell>
						<TableCell>Senior Developer</TableCell>
					</TableRow>
						<TableRow key="4">
						<TableCell>William Howard</TableCell>
						<TableCell>Community Manager</TableCell>
					</TableRow>
				</TableBody>
				</Table>
			</div>
		</>
	);
}
