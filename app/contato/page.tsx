import { title } from "@/components/primitives";
import {Input} from "@nextui-org/react";


export default function Contatos() {
	return (
		<>
			
			{/* Div à Esquerda com Cor Pêssego */}
			<div id="corPessegp" className=" w-1/2 bg-marromVermelho p-8">
      				{/* Conteúdo da Div co	m Cor Pêssego */}
    		</div>	

    		{/* Div à Direita com Imagem de Fundo */}
   			<div id="r" className="bg-[url('/imgs/div.jpg')] w-1/2 bg-cover relative text-center">
			   	{/* Título Sobreposto */}
				<div id="titulo" className="text-center">
					<h1 className={title()}>Contato</h1>
				</div>
      		</div>
						
		</>
	);
}
// }
// <Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
// 		<TwitterIcon className="text-default-500" />
// </Link>
// <Link isExternal href={siteConfig.links.discord} aria-label="Discord">
// 		<DiscordIcon className="text-default-500" />
// </Link>
// <Link isExternal href={siteConfig.links.github} aria-label="Github">
// 		<GithubIcon className="text-default-500" />
// </Link>