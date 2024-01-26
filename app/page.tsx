"use client"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { title, subtitle } from "@/components/primitives";
import { Avatar, Card, CardBody, CardFooter, CardHeader, Divider, Image } from "@nextui-org/react";
import InfoIcon from '@mui/icons-material/Info';
import ApartmentIcon from '@mui/icons-material/Apartment';
import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import WhatshotIcon from '@mui/icons-material/Whatshot';


function quemSomos(){
  return(
    <div className="mt-10 ml-8">
      <Card className="py-4 mix-blend-darken bg-pessego w-auto border-none w-[350px] h-[250px] shadow-lg shadow-marrom">
        <CardHeader className="center ">
            <h2 className="icon_label text-xl text-center" >
              <WhatshotIcon sx={{fontSize: '35px'}}/>
                Sobre nós
              <WhatshotIcon sx={{fontSize: '35px'}}/>
            </h2>
        </CardHeader>
        <CardBody className="items-center justify-center gap-4">
          <h2 className="icon_label -ml-5">
            <InfoIcon sx={{color: "#601802" }}></InfoIcon>
            Somos uma cia de dança
          </h2>
          <h2 className="icon_label">
            <ApartmentIcon sx={{color: "#601802" }}></ApartmentIcon>
            Empresa de pequeno porte
          </h2>
          <h2 className="icon_label">
            <GroupsIcon sx={{color: "#601802" }}></GroupsIcon>
              25 integrantes (elenco fixo)
          </h2>
          
        </CardBody>

      </Card>
      
      <Card className="py-4 mix-blend-darken ml-60 -mt-4 bg-pessego w-[400px] h-[350px] shadow-lg shadow-marromVermelho">
        <CardHeader className="center ">
            <h2 className="icon_label text-xl text-center" >
              <WhatshotIcon sx={{fontSize: '35px'}}/>
                Direção
              <WhatshotIcon sx={{fontSize: '35px'}}/>
            </h2>
        </CardHeader>

        <CardBody className="justify-center gap-3 -mt-8">

          <Divider/>
            <div className="center flex gap-3">
              <Avatar radius="full"  size="md" src="/imgs/fotoPessoa.png" />
              <div className="flex flex-col items-start justify-center">
                <h4 className="text-md font-bold leading-none text-marrom">Juliana Mascarenhas</h4>
              </div>
            </div>
          <Divider/>
          <h2 className="icon_label">
            <InfoIcon sx={{color: "#601802" }}></InfoIcon>
              Uma das fundadoras iniciais
          </h2>

          <h2 className="icon_label">
            <StarIcon sx={{color: "#601802" }}></StarIcon>
            Dançarina e coreógrafa
          </h2>

          <h2 className="icon_label">
            <SchoolIcon sx={{color: "#601802" }}></SchoolIcon>
              Licenciada e Bacharel em Dança pela Universidade Federal da Bahia (UFBA).
          </h2>
          
        </CardBody>

      </Card>
    </div>
  )
}

const slidesData = [
  {
    title: 'InFlame - Cia de dança',
    content: ''
  },
  {
    title: "Quem Somos",
    content: quemSomos()
  },
  {
    title: "Nossa História",
    content: "A InFlame foi fundada em outubro de 2012 em Feira de Santana, Bahia, a partir de uma apresentação realizada no Colégio Padre Ovídio pelas alunas do 1º ano. A princípio, definiu-se como um grupo de dança o qual participava de eventos culturais da cidade. Em 2018, estabeleceu-se como companhia e tem como foco a realização de eventos, espetáculos, oficinas e aulas regulares de dança.",
  },
  // {
  //   img: "/imgs/img1.jpg",
  //   title: "Nossa missão",
  //   content: "Promover entretenimento e conhecimento artístico para pessoas de diversas classes, a partir de espetáculos, aulas e eventos culturais. Dando oportunidade para que jovens e adultos tenham um contato maior com a dança, encontrando meios que, além de entreter e educar, seja uma oportunidade de trabalho e crescimento a partir da arte. ",
  // },
  // {
  //   img: "/imgs/img1.jpg",
  //   title: "Nossa Visão e Valores",
  //   content: "Ser, no segmento das artes, um referencial na atuação e função sociocultural. Diversidade, Ética, Transparência, Comprometimento, Responsabilidade, Cooperação, Respeito, Profissionalismo.",
  // },
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
    <section id="section-sobreNos" className=" body-with-grain-texture bg-cover mix-blend-multiply flex flex-col items-center justify-center h-screen overflow-hidden">

      <div className="justify-center w-[90%] h-[90%]">

        <Slider {...sliderSettings} className="grid w-full h-full border-none">

          {slidesData.map((slide, index) => ( 
            <div key={index} id="grid" className="grid-cols-2 gap-2">

              <div className="flex items-center laranjao">
                <h1 className={title()}>{slide.title}</h1>
              </div>

              {slide.content}
              
            </div>
          ))} 

        </Slider>
      </div>

    </section>
  );
}
