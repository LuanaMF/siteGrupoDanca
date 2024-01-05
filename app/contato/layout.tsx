export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex items-center justify-center">
			<div id="principal" className="flex justify-center w-full h-[600px] relative mt-[80px] px-60">
				{children}
			</div>
		</section>
	);
}
