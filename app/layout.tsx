import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import clsx from "clsx";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/logos/LOGORESUMIDA.png",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};


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
						<Navbar />
						<main className="flex-grow bg-[url('/imgs/fundo-laranja-blur.png')] bg-cover">
							{children}
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
