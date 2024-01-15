"use client"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { title, subtitle } from "@/components/primitives";
import { Card, CardFooter, CardHeader, Image } from "@nextui-org/react";

const slidesData = [
  {
    img: "/imgs/img1.jpg",
    title: "Quem Somos",
    content: "Atualmente a companhia é considerada uma empresa de pequeno porte, contendo 25 integrantes em seu elenco fixo, sendo dirigida pela dançarina e coreógrafa Juliana Mascarenhas, uma das fundadoras iniciais da Cia e licenciada e bacharel em Dança pela Universidade Federal da Bahia (UFBA). ",
  },
  {
    img: "/imgs/img2.jpg",
    title: "Nossa História",
    content: "A InFlame foi fundada em outubro de 2012 em Feira de Santana, Bahia, a partir de uma apresentação realizada no Colégio Padre Ovídio pelas alunas do 1º ano. A princípio, definiu-se como um grupo de dança o qual participava de eventos culturais da cidade. Em 2018, estabeleceu-se como companhia e tem como foco a realização de eventos, espetáculos, oficinas e aulas regulares de dança.",
  },
  {
    img: "/imgs/img1.jpg",
    title: "Nossa missão",
    content: "Promover entretenimento e conhecimento artístico para pessoas de diversas classes, a partir de espetáculos, aulas e eventos culturais. Dando oportunidade para que jovens e adultos tenham um contato maior com a dança, encontrando meios que, além de entreter e educar, seja uma oportunidade de trabalho e crescimento a partir da arte. ",
  },
  {
    img: "/imgs/img1.jpg",
    title: "Nossa Visão e Valores",
    content: "Ser, no segmento das artes, um referencial na atuação e função sociocultural. Diversidade, Ética, Transparência, Comprometimento, Responsabilidade, Cooperação, Respeito, Profissionalismo.",
  },
];

export default function SobreNos() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="section-sobreNos" className=" bg-[url('/imgs/img1.jpg')] bg-cover flex flex-col items-center justify-center h-screen overflow-hidden">

      <div className="justify-center w-[90%] mt-32 h-[80%]">

        <Slider {...sliderSettings} className="w-full h-full">

          {slidesData.map((slide, index) => ( 
            <>
              <h1 className={title()}>{slide.title}</h1>
              <Card>
            
              </Card>
              <p className="mt-32 text-white">{slide.content}</p>
            </>
          ))}

        </Slider>
      </div>

    </section>
  );
}
