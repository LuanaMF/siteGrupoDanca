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
import { Button } from "@nextui-org/button";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";


import { Logo } from "@/components/icons";

export const Navbar = () => {
	
	return (
		<NextUINavbar className="" maxWidth="xl" position="static" isBordered>
			
			<NavbarContent className="basis-1/5 sm:basis-full -ml-[87px]" justify="start">
				<div style={{ maxWidth: '100px', marginRight: '40px'}}>
						<NavbarBrand >
							<Logo />
						</NavbarBrand>
				</div>
				<ul className="hidden lg:flex gap-8" >
					{siteConfig.navItems.map((item) => (
						<NavbarItem  key={item.href}>
							<NextLink
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-marrom data-[active=true]:font-medium"
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
			<NavbarContent justify="end">
				<NavbarItem>
					<Button as={Link} className="bg-black text-marromVermelho font-bold shadow-md shadow-black tracking-wider uppercase" href="/pandora">
						Pandora
					</Button>
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
