"use client";

import { title } from "@/components/primitives";
import {Input, Card, CardBody, CardFooter, CardHeader, Divider, Textarea, Link, Button} from "@nextui-org/react";
import { LogoBlack } from "@/components/icons";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined';
import { useState } from "react";
import SendIcon from '@mui/icons-material/Send';

export default function Contatos() {

	const [email, setEmail] = useState({
		nome: '',
		telefone: '',
		mensagem: ''
	});

	return (
		<>
			<div id="r" className=" w-1/2 bg-cover relative text-center">
			   	{/* Título Sobreposto */}
				<div id="titulo" className="text-center">
					<h1 className={title()}>Contato</h1>
				</div>
				<ForwardToInboxOutlinedIcon className="mt-36" 
				sx={{ fontSize: 200, color: "white" }}></ForwardToInboxOutlinedIcon>
      		</div>

			{/* Div à Esquerda com Cor Pêssego */}
			<div id="corPessegp" className="rounded-md w-1/2 p-5 -mt-16">

				<Card className='card w-full h-full bg-' >

					<CardHeader className="justify-center min-h-40">
						<LogoBlack width={'50%'}></LogoBlack>
					</CardHeader>

					<Divider />

					<CardBody >

						<form className="grid w-full h-full space-y-4 justify-content-center">

							<Input
								id="teste"
								label="Nome"
								color="primary"
								variant="underlined"
								size="lg"
								classNames={{
									label: 'font-semibold group-data-[filled-within=true]:text-primary ',
									input: ['text-primary']
								}}
							/>

							<Input
								color="primary"
								label="Telefone"
								maxLength={14}
								variant="underlined"
								size="lg"
								classNames={{
									label: 'font-semibold group-data-[filled-within=true]:text-primary ',
									input: ['text-primary']
								}}
							/>

							<Textarea
								color="primary"
								label="Mensagem"
								variant="underlined"
								size="lg"
								classNames={{
									label: 'font-semibold group-data-[filled-within=true]:text-primary ',
									input: ['text-primary']
								}}
							/>
 
							<Button  className="justify-self-center text-white bg-vermelho tracking-widest" endContent={<SendIcon/>}>
								Enviar email
							</Button> 

						</form>
					</CardBody>
					<Divider />
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
						
		</>
	);
}
