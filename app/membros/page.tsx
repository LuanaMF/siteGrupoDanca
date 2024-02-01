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

const dataNasc: any = {
	36656: '05/10/2000',
	36898: '01/07/2001',
	37681: '03/01/2003',
	37347: '04/01/2002',
	38477: '05/05/2005',
	35250: '07/04/1996',
	35076: '01/12/1996',
	38536: '07/03/2005',
	35406: '12/07/1996',
	35189: '05/04/1996'
}


function identificacao(membro: any){
	// Seu código aqui
	const nome = membro.__EMPTY_3;
	const dataStr = membro.__EMPTY_4.toString();
	let idade = dataStr.includes('/') ? calcularIdade(dataStr) : '';
	
	if(idade == ''){
		const data = dataNasc[membro.__EMPTY_4];
		idade = calcularIdade(data);
	}
	return (
		<b className="text-white">
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
				const response = await fetch('/api');
			
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
		const dançarina = membros.filter((membro: { __EMPTY_6: string; }) => membro.__EMPTY_6 == 'Dançarina');
		const faseDeTeste = membros.filter((membro: { __EMPTY_6: string; }) => membro.__EMPTY_6 == 'Fase de Teste');
		setDançarinas(dançarina)
		setTeste(faseDeTeste); 
	}, [membros])
	

	const sliderSettings = {
		dots: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
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
			<section id="section-membros" className="flex flex-col items-center justify-center ">
				<div className="grid grid-cols-2">

					<div>
						<h1>Membros</h1>
					</div>
					
					<div>
						<Slider {...sliderSettings} className="mt-8 grid h-full w-[50%]">
 
							<div key={1}>
								
								{dançarinas.map((membro: any, index: any) =>  (
									<Card isHoverable isBlurred key={index} className="bg-cover bg-bottom min-w-[150px] shadow-lg shadow-marromVermelho">
										<CardHeader className="text-small justify-between">
											<Code className="flex justify-center w-[100%] bg-laranjao font-bold text-white">{membro.__EMPTY_6}</Code>
										</CardHeader>
										<CardBody className=" p-0">
											<Image 
											isZoomed
											width="100%"
											alt={membro[2]}
											className="w-full object-cover h-[140px]"
											src="/imgs/fotoPessoa.png"
											/>
										</CardBody>
										<CardFooter className="justify-between mr-[10px] bg-pessego">

											{identificacao(membro)}
											
										</CardFooter>	
									</Card>
								))}
								
							</div>

							<div className="" key={2}>
								{teste.map((membro: any, index: any) =>  (
									<Card isHoverable isBlurred key={index} className="bg-cover bg-bottom min-w-[150px] shadow-lg shadow-marromVermelho">
										<CardHeader className="text-small justify-between">
											<Code className="flex justify-center w-[100%] bg-laranjao font-bold text-white">{membro.__EMPTY_6}</Code>
										</CardHeader>
										<CardBody className=" p-0">
											<Image 
											isZoomed
											width="100%"
											alt={membro[2]}
											className="w-full object-cover h-[140px]"
											src="/imgs/fotoPessoa.png"
											/>
										</CardBody>
										<CardFooter className="justify-between mr-[10px] bg-pessego">

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
