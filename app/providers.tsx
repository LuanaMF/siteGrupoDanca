"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter, usePathname } from 'next/navigation'
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { Navbar } from "@/components/navbar";
import { useEffect, useState } from "react";


export interface ProvidersProps {
	children: React.ReactNode;
	themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  	const router = useRouter();
	

	return (
		<NextUIProvider navigate={router.push}>
			<NextThemesProvider {...themeProps}>
					<Navbar/>	
					{children}
			</NextThemesProvider>
		</NextUIProvider>
	);
}
