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
	return (
		<>
			<div>
				<h1 className={'font-semibold text-[1.5rem] lg:text-5xl leading-9 text-marrom'}>Relatório de atividades</h1>
			</div>
			<div>
				<Table aria-label="Example static collection table">
					<TableHeader>
						<TableColumn>NAME</TableColumn>
						<TableColumn>ROLE</TableColumn>
						<TableColumn>STATUS</TableColumn>
					</TableHeader>
				<TableBody>
					<TableRow key="1">
						<TableCell>Tony Reichert</TableCell>
						<TableCell>CEO</TableCell>
						<TableCell>Active</TableCell>
					</TableRow>
						<TableRow key="2">
						<TableCell>Zoey Lang</TableCell>
						<TableCell>Technical Lead</TableCell>
						<TableCell>Paused</TableCell>
					</TableRow>
						<TableRow key="3">
						<TableCell>Jane Fisher</TableCell>
						<TableCell>Senior Developer</TableCell>
						<TableCell>Active</TableCell>
					</TableRow>
						<TableRow key="4">
						<TableCell>William Howard</TableCell>
						<TableCell>Community Manager</TableCell>
						<TableCell>Vacation</TableCell>
					</TableRow>
				</TableBody>
				</Table>
			</div>
		</>
	);
}
