import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";


import { Logo } from "@/components/icons";

export const Navbar = () => {
	
	return (
		<NextUINavbar className="" maxWidth="xl" position="static">
			<div style={{justifyContent: 'start', maxWidth: '100px'}}>
					<NavbarBrand >
						<Logo />
					</NavbarBrand>
			</div>
			<NavbarContent className="basis-1/5 sm:basis-full -ml-[87px]" justify="center">
				<ul className="hidden lg:flex gap-4 justify-start" >
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									linkStyles({ color: "warning" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium"
								)}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</ul>
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
