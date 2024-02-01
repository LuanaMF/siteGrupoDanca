"use client";

import { title } from "@/components/primitives";
import {Input, Card, CardBody, CardFooter, CardHeader, Divider, Textarea, Link, Button} from "@nextui-org/react";
import { LogoBlack } from "@/components/icons";
import InstagramIcon from "@mui/icons-material/Instagram"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined';
import { useState } from "react";
import SendIcon from "@mui/icons-material/Send"
import React from "react";

export default function Contato() {

	const [email, setEmail] = useState({
		nome: '',
		telefone: '',
		mensagem: ''
	});

	const verificacao = () => {
		if (email.nome === '' || email.telefone === '' || email.mensagem === ''){
			return false;
		} 
		else{
			return true
		} 
	 
	};

	const handler = async () => {
		if(verificacao()){
			try {
				const response = await fetch('/api', {
				  method: 'POST',
				  headers: {
					'Content-Type': 'application/json',
				  },
				  body: JSON.stringify(email),
				});
		  
				if (!response.ok) {
				  throw new Error('Erro na requisição');
				}
				
			  } catch (error) {
				console.error('Erro:', error);
			  }
		}else{
			console.log('nah ah');
		}
			
	};
	return (
		<>
		<section id="section-contato" className="flex items-center justify-center h-[95%] overflow-hidden">
			<div id="principal" className="flex justify-center w-full h-[600px] relative mt-[80px] px-60">
				<div id="r" className=" w-1/2 bg-cover relative text-center">
					{/* Título Sobreposto */}	
					<div id="titulo" className="text-center">
						<h1 className={title()}>Contato</h1>
					</div>
					<ForwardToInboxOutlinedIcon className="mt-36 cursor-none" 
					sx={{ fontSize: 200, color: "white" }}></ForwardToInboxOutlinedIcon>
				</div>

				{/* Div à Esquerda com Cor Pêssego */}
				<div id="corPessegp" className="rounded-md w-1/2 p-5 -mt-16">

					<Card className='w-full h-full bg- shadow-xl shadow-marrom' >

						<CardHeader className="justify-center min-h-40">
							<LogoBlack width={'50%'}></LogoBlack>
						</CardHeader>

						<Divider/>

						<CardBody >

							<form className="grid w-full h-full space-y-4 justify-content-center">

								<Input
									isRequired
									id="teste"
									label="Nome"
									color="primary"
									variant="underlined"
									size="lg"
									classNames={{
										label: 'font-semibold group-data-[filled-within=true]:text-primary ',
										input: ['text-primary']
									}}
									onValueChange={(e) => email.nome = e }
								/>

								<Input
									isRequired
									color="primary"
									label="Telefone"
									maxLength={14}
									variant="underlined"
									size="lg"
									classNames={{
										label: 'font-semibold group-data-[filled-within=true]:text-primary ',
										input: ['text-primary']
									}}
									onValueChange={(e) => email.telefone = e}
								/>

								<Textarea
									isRequired
									color="primary"
									label="Mensagem"
									variant="underlined"
									size="lg"
									classNames={{
										label: 'font-semibold group-data-[filled-within=true]:text-primary ',
										input: ['text-primary']
									}}
									onValueChange={(e) => email.mensagem = e}
								/>
	
								<Button  className="justify-self-center text-white bg-vermelho tracking-widest" endContent={<SendIcon/>}
									onPress={handler}
								>
									Enviar email
								</Button> 

							</form>
						</CardBody>
						<Divider  />
						<CardFooter className="flex flex-col items-center md:flex-row justify-center md:items-center">
							<h1 className="mb-4 md:mb-0 md:mr-4">Ou, se preferir, contate-nos via:</h1>
							<div className="flex space-x-2">
								<Button
									href="https://www.instagram.com/cia.inflame/"
									as={Link}
									isIconOnly 
									radius="full"
								>
									<InstagramIcon sx={{ color: "#E4405F" }}/>
								</Button>
								<Button
									href="https://www.whatsapp.com/"
									as={Link}
									isIconOnly 
									radius="full"
								>
									<WhatsAppIcon sx={{ color: "#25D366" }}/>
								</Button>
							</div>
						</CardFooter>

					</Card>

				</div>	
			</div>			
		</section>
		</>
	);
}
