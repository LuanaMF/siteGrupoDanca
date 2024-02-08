import {
	Code,
	Card,
	CardBody,
	Image,
	CardFooter,
	CardHeader
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as xlsx from 'xlsx';


const calcularIdade = (dataNascimento: any) => {
    const hoje = new Date();
	const partes = dataNascimento.split('/');
	const dataReformatada = partes[2] + '-' + partes[1] + '-' + partes[0];

    const dataNasc = new Date(dataReformatada);
	
    let idade = hoje.getFullYear() - dataNasc.getFullYear();

    // Verificar se já fez aniversário este ano
    if (
      hoje.getMonth() < dataNasc.getMonth() ||
      (hoje.getMonth() === dataNasc.getMonth() &&
        hoje.getDate() < dataNasc.getDate())
    ) {
      idade--;
    }

    return idade;
};


function identificacao(membro: any){
	
	let nome = membro.__EMPTY_3;

	if (nome.length > 15) {
		// Dividir o nome em partes usando espaços em branco como delimitador
		const partesDoNome = nome.split(' ');
	
		// Manter o primeiro nome
		const primeiroNome = partesDoNome[0];
	
		// Manter a inicial do sobrenome (se existir)
		const sobrenome = partesDoNome.length > 1 ? partesDoNome[partesDoNome.length - 1][0] : '';
	
		// Criar o nome abreviado
		nome = `${primeiroNome} ${sobrenome ? sobrenome : ''}`;
  	}	
	const dataStr = membro.__EMPTY_4.toString();
	let idade = dataStr.includes('/') ? calcularIdade(dataStr) : '';
	
	if(idade == ''){
		const data = xlsx.SSF.parse_date_code(membro.__EMPTY_4);
		const dataFormatada = `${String(data.d).padStart(2, '0')}/${String(data.m).padStart(2, '0')}/${data.y}`;
		idade = calcularIdade(dataFormatada);
	}
	return (
		<b className="text-marromVermelho text-card">
		{nome +', ' + idade}
		</b> // Função de exemplo
	);
}



export default function Membros() {	

	const [membros, setMembros] : any = useState([]);
	const [dançarinas, setDançarinas] = useState([]);
	const [teste, setTeste] = useState([]);

	useEffect(() => {
		const handler = async () => {
		
			try {
				const response = await fetch('/api?query=membros');
			
				if (!response.ok) {
				  throw new Error('Erro na requisição');
				}
				else{
					const data = await response.json(); 
					
					setMembros(data.dados);
					
				}
				
			} catch (error) {
				console.error('Erro:', error);
			}
			
		};
		if(membros.length === 0){
			handler();
		}
		
	});

	useEffect(() => {
		const dançarina = membros.filter((membro: { __EMPTY_6: string; }) => membro.__EMPTY_6 == 'Dançarina' || membro.__EMPTY_6 == 'Dançarino' || membro.__EMPTY_6 == 'Direção');
		const faseDeTeste = membros.filter((membro: { __EMPTY_6: string; }) => membro.__EMPTY_6 == 'Fase de Teste');
		setDançarinas(dançarina)
		setTeste(faseDeTeste); 
	}, [membros])
	

	const sliderSettings = {
		dots: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		responsive: [
		  {
			breakpoint: 768, // Breakpoint para dispositivos menores
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
			},
		  },
		  // Adicione mais breakpoints conforme necessário
		],
	};
	
	return (
		<>
			<section id="section-membros" 
			className="bg-cover flex-col mix-blend-multiply w-screen ">

				<div id="div-membros">

					<div className="p-4 center">
						<Slider {...sliderSettings} className=" grid h-screen w-[90%]">

							<div key={1} id="grid-row" 	className="grid gap-4 px-4 py-4">
								<Code id="membros-desc" className="center bg-marrom text-pessego2 text-2xl">
									Dançarinos
								</Code>
								
								{dançarinas.map((membro: any, index: any) =>  {
									
									return(
										<Card
										key={index}
										isFooterBlurred
										radius="lg"
										className="shadow-marrom shadow-lg !min-w-500px"
										classNames={{base: 'gradient-border', body: 'center'}}
									  >
										<Image
										  alt={membro.__EMPTY_3}
										  className="object-cover border-8 border-pessego border-double"
										  src="/imgs/fotoPessoa.png"
										/>
										<CardFooter className="bg-pessego text-start before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 max-h-7 shadow-small ml-1 z-10">
										  {identificacao(membro)}
										  
										</CardFooter>
									  </Card>
									)
									
								})}
								
							</div>

							<div id="grid-row" className="grid gap-6 px-4 py-4" key={2}>
								<Code id="membros-desc" className="center bg-marrom text-pessego2 text-2xl">
									Fase de testes
								</Code>
								{teste.map((membro: any, index: any) =>  (
									<Card
									key={index}
									isFooterBlurred
									radius="lg"
									className=" shadow-marrom shadow-lg"
									classNames={{base: 'gradient-border', body: 'center'}}
								  >
									<Image
									  alt={membro.__EMPTY_3}
									  className="object-cover border-8 border-pessego border-double"
									  src="/imgs/fotoPessoa.png"
									/>
									<CardFooter className="bg-pessego justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] max-h-6 shadow-small ml-1 z-10">
									  {identificacao(membro)}
									  
									</CardFooter>
								  </Card>
								))}
							</div>
							
						</Slider>
					</div>
					
				</div>
				
			</section>
			
		</>
	);
}
