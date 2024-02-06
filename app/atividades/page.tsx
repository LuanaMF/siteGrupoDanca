"use client";

import React, { useEffect, useState } from "react";
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
		  wrapper: [ "mt-6", "bg-pessego", "w-[100%]", "bg-bottom", "justify-center"],
		  th: ["bg-laranjao", "text-[#FFFFFF]", "font-extrabold", "tracking-wide", ],
		  td: [
			
			"font-extrabold",
			"text-base",
			"font-mono",

		  ],
		}),
		[],
	);

	const [atividades, setAtividades] : any = useState([]);
	
	useEffect(() => {
		const handler = async () => {
		
			try {
				const response = await fetch('/api');
			
				if (!response.ok) {
				  throw new Error('Erro na requisição');
				}
				else{
					const data = await response.json(); 
					
					setAtividades(data.dados);
					
				}
				
			} catch (error) {
				console.error('Erro:', error);
			}
			
		};
		if(atividades.length === 0){
			handler();
		}
		
	},[atividades]);

	return (
		<>
			<section id="section-atividades" className="flex flex-col items-center justify-center">
				
				<div >
					
				    <Code 
						className="w-full bg-marrom font-bold text-white cursor-none" size="lg">
						Projetos | Oficinas | Apresentações
					</Code>
						
				</div>

				<div className="flex w-[90%]">
					
					<Table hideHeader aria-label="table" classNames={classNames} >
						<TableHeader>
							<TableColumn width={'30%'}>DATA</TableColumn>
							<TableColumn>ATV</TableColumn>
						</TableHeader>
						<TableBody>
							{atividades.map((atv: any, index: any) => {
								if (atv.__EMPTY !== 'DATA') {
									return (
										<TableRow key={index}>
											<TableCell>
												<Code 
													className="w-full bg-marrom font-bold text-white cursor-none" size="lg">
													{atv.__EMPTY}
												</Code>
											</TableCell>
											<TableCell>
												<Code 
													className="bg-laranjao font-extrabold text-white cursor-none w-[90%] overflow-hidden" size="lg">
													{atv.__EMPTY_1}
												</Code>
											
											</TableCell>
										</TableRow>
									);
								}
								return null;
							})}
						</TableBody>
					</Table>
			</div>
		
			</section>
			
		</>
	);
}
