"use client";

import { title } from "@/components/primitives";
import {Input, Card, CardBody, CardFooter, CardHeader, Divider, Textarea, Link} from "@nextui-org/react";
import { SiteConfig, siteConfig } from "@/config/site";
import { Logo } from "@/components/icons";

import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined';
import { useState } from "react";

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
			<div id="corPessegp" className="rounded-md w-1/2 p-5">

				<Card className='card w-full h-full bg-' >

					<CardHeader className="justify-center min-h-40">
						<Logo width={'50%'}></Logo>
					</CardHeader>

					<Divider />

					<CardBody >

						<form>

							<Input
								color="warning"
								label="Nome"
							/>

							<Input
								color="warning"
								label="Telefone"
								maxLength={14}
							/>

							<Textarea
								color="warning"
								label="Mensagem"
							/>

						</form>
					</CardBody>

					<CardFooter >
					
						<div style={{justifyContent: 'center'}}>
							<Link isExternal  aria-label="Twitter">
							</Link>
							<Link isExternal  aria-label="Discord">
							</Link>
							<Link isExternal  aria-label="Github">
							</Link>
						</div>

					</CardFooter>

				</Card>

    		</div>	
						
		</>
	);
}
