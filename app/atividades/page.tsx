"use client";

import React, { useEffect, useState } from "react";
import {
	Table,
	TableHeader,
	TableBody,
	TableColumn,
	TableRow,
	TableCell,
	Code
} from "@nextui-org/react";
import * as xlsx from 'xlsx';



export default function Atividades() {

	const classNames = React.useMemo(
		() => ({
		  wrapper: [ "mt-6", "bg-transparent", "w-[100%]", "bg-bottom", "justify-center", "shadow-xl", "shadow-vermelho"],
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

	const formataData = (data: any) => {

		if(!data.toString().includes('/')){
			const dataParse = xlsx.SSF.parse_date_code(data);
			const dataFormatada = `${String(dataParse.d).padStart(2, '0')}/${String(dataParse.m).padStart(2, '0')}/${dataParse.y}`;
			data = dataFormatada;
		}
		return data;
	}
	
	useEffect(() => {
		const handler = async () => {
		
			try {
				
				const response = await fetch('/api');
			
				if (!response.ok) {
				  throw new Error('Erro na requisição');
				}
				else{
					const data = await response.json(); 
					
					data.dados.forEach((item: any) => {
						if(item.__EMPTY !== 'DATA' && !item.__EMPTY.toString().includes('/')){
							item.__EMPTY = formataData(item.__EMPTY);
						}
					});
					
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
			<section id="section-atividades" className="bg-cover center flex-col mix-blend-multiply w-screen ">
				
				<div className="text-center w-[90%]" >
					
				    <Code 
						className="w-full bg-marromVermelho font-bold text-white cursor-none" size="lg">
						Projetos | Oficinas | Apresentações
					</Code>
						
				</div>

				<div className="w-[80%]">
					
					<Table hideHeader isCompact aria-label="table" classNames={classNames} >
						<TableHeader>
							<TableColumn key={'data'} width={'30%'} allowsSorting>DATA</TableColumn>
							<TableColumn>ATV</TableColumn>
						</TableHeader>
						<TableBody>
							{atividades.map((atv: any, index: any) => {
								if (atv.__EMPTY !== 'DATA') {
									return (
										<TableRow key={index}>
											<TableCell>
												<Code 
													className="w-full bg-marromVermelho font-bold text-white cursor-none" size="lg">
													{atv.__EMPTY}
												</Code>
											</TableCell>
											<TableCell className="overflow-x-hidden w-fit">
												<Code 
													className="bg-pessego font-extrabold text-white cursor-none w-[90%] whitespace-pre-wrap" size="lg">
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
