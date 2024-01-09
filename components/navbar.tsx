"use client";
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import {Divider} from "@nextui-org/react";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import { Button } from "@nextui-org/button";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";
import styles from "@/styles/navbar.module.css";

import { Logo } from "@/components/icons";

interface NavbarProps {
	page: string;
}
  
export const Navbar: React.FC<NavbarProps> = ({ page }) => {
	
	return (
		
			<NextUINavbar 
				maxWidth="xl" isBordered>
				
				<NavbarContent className="basis-1/5 sm:basis-full " justify="start">
					<div style={{ maxWidth: '100px', marginRight: '40px'}}>
							<NavbarBrand >
								<Logo />
							</NavbarBrand>
					</div>
					<ul className="hidden lg:flex gap-8" >
						{siteConfig.navItems.map((item) => (
							<div key={item.href} className="flex h-5 items-center space-x-4 text-small">
								<NavbarItem  key={item.href} isActive={page == item.href? true : false}>
										<NextLink
											color="foreground"
											href={item.href}
										>
											{item.label}
										</NextLink>
									<Divider orientation="vertical" />
								</NavbarItem>
							</div>
							
						))}
					</ul>
				</NavbarContent>
				<NavbarContent justify="end">
					<NavbarItem className="mt-[10px]">
						{/* <Button isIconOnly as={Link} className="bg-black shadow-md shadow-black w-[50%]" size="lg" href="/pandora">
							<LogoCaixaPandora></LogoCaixaPandora>
						</Button> */}
					</NavbarItem>
				</NavbarContent>
				<NavbarMenu>	
					
					<div className="mx-4 mt-2 flex flex-col gap-2">
						{siteConfig.navMenuItems.map((item, index) => (
							<NavbarMenuItem key={`${item}-${index}`}>
								<Link
									color={
										index === 2
											? "primary"
											: index === siteConfig.navMenuItems.length - 1
											? "danger"
											: "foreground"
									}
									href="#"
									size="lg"
								>
									{item.label}
								</Link>
							</NavbarMenuItem>
						))}
					</div>
				</NavbarMenu>
			</NextUINavbar>
	);
};
