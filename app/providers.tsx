"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter, usePathname } from 'next/navigation'
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { Navbar } from "@/components/navbar";
import { useEffect, useState } from "react";
import { CSSTransition } from 'react-transition-group';


export interface ProvidersProps {
	children: React.ReactNode;
	themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  	const router = useRouter();
	const [page, setPage] = useState('');
	const pathname = usePathname();

	useEffect(() => {
		const handleRouteChange = () => {
			setPage(pathname);
		};
		handleRouteChange();
		
	}, [pathname]);

	return (
		<NextUIProvider navigate={router.push}>
			<NextThemesProvider {...themeProps}>
				<CSSTransition
					in={true} // Whether to apply the transition
					timeout={300} // Duration of the transition in milliseconds
					classNames={{
						enter: 'opacity: 0;',
						enterActive: 'opacity: 1; transition: opacity 300ms ease-in;',
						exit: 'opacity: 1;',
						exitActive: ' opacity: 0; transition: opacity 300ms ease-out;',
					}}
					unmountOnExit
				>
					<Navbar page={page}/>
				</CSSTransition>
				{children}
			</NextThemesProvider>
		</NextUIProvider>
	);
}
