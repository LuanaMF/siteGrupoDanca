import { tv } from "tailwind-variants";

export const title = tv({
	base: "font-extrabold tracking-tight inline tracking-wide text-shadow-sm cursor-none",
	variants: {
		color: {
			violet: "from-[#FF1CF7] to-[#b249f8]",
			yellow: "from-[#FF705B] to-[#FFB457]",
			blue: "from-[#5EA2EF] to-[#0072F5]",
			cyan: "from-[#00b7fa] to-[#01cfea]",
			green: "from-[#6FEE8D] to-[#17c964]",
			pink: "text-[#C413A1]",
			laranjao: 'text-[#FE800A]'
		},
		size: {
			sm: "text-3xl lg:text-4xl",
			md: "text-[2.3rem] lg:text-5xl leading-9",
			lg: "text-4xl lg:text-6xl",
			grande: "text-8xl"
		},
		fullWidth: {
			true: "w-full block",
		},
	},
	defaultVariants: {
		size: "grande"
	},
	compoundVariants: [
		{
		  color: [
			"violet",
			"yellow",
			"blue",
			"cyan",
			"green",
			"pink",
		  ],
		  class: ''
		},
	],
});

export const subtitle = tv({
	base: "w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-full",
	variants: {
		fullWidth: {
			true: "!w-full",
		},
	},
  defaultVariants:{
    fullWidth: true
  }
});
