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
import { title } from "@/components/primitives";
import { LogoMarrom } from "@/components/icons";


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
		const data = dataNasc[membro.__EMPTY_4];
		idade = calcularIdade(data);
	}
	return (
		<b className="text-marromVermelho">
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
			className="bg-cover mix-blend-multiply flex flex-col items-center justify-center mt-4 h-screen w-screen overflow-hidden">
				<div className="grid grid-cols-2"  style={{ gridTemplateColumns: '1fr 2fr'}}>

					<div className='flex-col center -mt-4 vinho-marrom'>
						<LogoMarrom width={300} height={300}></LogoMarrom>
						<h1 className={title({size: 'sm'})}>Membros</h1>
					</div>
					
					<div className="p-4">
						<Slider {...sliderSettings} className=" mt-8 grid h-fit w-[90%]">

							<div key={1} id="grid" 	className="grid grid-cols-4 grid-rows-3 gap-4 px-4 py-4">
								
								{dançarinas.map((membro: any, index: any) =>  {
									
									return(
										<Card
										isFooterBlurred
										radius="lg"
										className=" shadow-marrom shadow-lg"
										classNames={{base: 'gradient-border'}}
									  >
										<Image
										  alt={membro.__EMPTY_3}
										  className="object-cover border-8 border-pessego border-double"
										  height={200}
										  src="/imgs/fotoPessoa.png"
										  width={200}
										/>
										<CardFooter className="bg-pessego justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
										  {identificacao(membro)}
										  
										</CardFooter>
									  </Card>
									)
									
								})}
								
							</div>

							<div id="grid" className="grid grid-cols-4 grid-rows-2 gap-4 px-4 py-4" key={2}>
								{teste.map((membro: any, index: any) =>  (
									<Card
									isFooterBlurred
									radius="lg"
									className=" shadow-marrom shadow-lg"
									classNames={{base: 'gradient-border'}}
								  >
									<Image
									  alt={membro.__EMPTY_3}
									  className="object-cover border-8 border-pessego border-double"
									  height={200}
									  src="/imgs/fotoPessoa.png"
									  width={200}
									/>
									<CardFooter className="bg-pessego justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
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
