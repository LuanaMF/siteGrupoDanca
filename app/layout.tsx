"use client"

import "@/styles/globals.css";
import "@/styles/responsividade.css";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import clsx from "clsx";
import SobreNos from "./page";
import Membros from "./membros/page";
import Atividades from "./atividades/page";
import Contato from "./contato/page";
import {motion} from "framer-motion";
import { useInView } from "react-intersection-observer";


const sectionVariants = {
	hidden: {
	  x: "-100%", // Posição inicial fora da tela à esquerda
	  opacity: 0,
	},
	visible: {
	  x: 0, // Posição final na tela
	  opacity: 1,
	  transition: {
		type: "keyframes",
		values: [0, 50, 100],
		duration: 1,
	  }
	},
  };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
	const [refSobreNos, inViewSobreNos] = useInView({
		triggerOnce: true,
		rootMargin: '-100px 0px',
	});
	const [refMembros, inViewMembros] = useInView({
		triggerOnce: true,
		rootMargin: '-100px 0px',
	});
	const [refAtividades, inViewAtividades] = useInView({
		triggerOnce: true,
		rootMargin: '-100px 0px',
	});
	const [refContato, inViewContato] = useInView({
		triggerOnce: true,
		rootMargin: '-100px 0px',
	});


  return (
    <html lang="en" suppressHydrationWarning className="overflow-y-hidden">
      <head />
      
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers
          themeProps={{ attribute: "class", defaultTheme: "light", forcedTheme: "light" }}
        >
          <div className="relative flex flex-col h-screen overflow-hidden">
            <motion.main 
            className="body-with-grain-texture 
            bg-cover mix-blend-multiply 
            flex-grow overflow-y-scroll 
            w-fit h-screen
            "
            >
           
              <motion.div
                className="motion-section"
                ref={refSobreNos}
                initial="hidden"
                animate={inViewSobreNos ? "visible" : "hidden"}
                variants={sectionVariants}
                transition={{ duration: 0.9 }}
              >
                <SobreNos />
              </motion.div>

              <motion.div
                className="center motion-section"
                ref={refMembros}
                initial="hidden"
                animate={inViewMembros ? "visible" : "hidden"}
                variants={sectionVariants}
                transition={{ duration: 0.9 }}
              >
                <Membros />
              </motion.div>
            
              <motion.div
                className="motion-section-atv"
                ref={refAtividades}
                initial="hidden"
                animate={inViewAtividades ? "visible" : "hidden"}
                variants={sectionVariants}
                transition={{ duration: 0.9 }}
              >
                <Atividades />
              </motion.div>
              
              {/* <motion.div
                ref={refContato}
                initial="hidden"
                animate={inViewContato ? "visible" : "hidden"}
                variants={sectionVariants}
                transition={{ duration: 0.9}}
              >
                <Contato></Contato>
              </motion.div>  */}
            
            </motion.main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
