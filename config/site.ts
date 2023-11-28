export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "InFlame - Cia de dança",
	description: "Aulas | Eventos | Espetáculos",
	navItems: [
	{
		label: "Sobre Nós",
		href: "/",
	},
    {
      label: "Membros",
      href: "/membros",
    },
    {
      label: "Portfólio",
      href: "/portfolio",
    },
    {
      label: "Dance com a gente",
      href: "/dance",
    },
    {
      label: "Contato",
      href: "/contato",
    }
	],
	navMenuItems: [
		{
			label: "Sobre Nós",
			href: "/",
		},
		{
		  label: "Membros",
		  href: "/membros",
		},
		{
		  label: "Portfólio",
		  href: "/portfolio",
		},
		{
		  label: "Dance com a gente",
		  href: "/dance",
		},
		{
		  label: "Contato",
		  href: "/contato",
		}
	],
	links: {
		instagram: "https://www.instagram.com/cia.inflame/",
		whatsapp: "",
		facebook: "",
	},
};
