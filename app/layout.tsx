
import "@/styles/globals.css";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import clsx from "clsx";
import SobreNos from "./page";
import Membros from "./membros/page";
import Atividades from "./atividades/page";
import Contato from "./contato/page";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {

	
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "light", forcedTheme: "light" }}>
					<div className="relative flex flex-col h-screen">
						
						<main className="flex-grow bg-[url('/imgs/fundo-vermelho-blur.png')] bg-cover">

							<SobreNos></SobreNos>
							<Membros></Membros>
							<Atividades></Atividades>
							<Contato></Contato>
							
							
							<footer className="w-full flex items-center justify-center py-3">
								{/* footer */}
							</footer>	
							
						</main>	
						
					</div>
				</Providers>
			</body>
		</html>
	);
}
