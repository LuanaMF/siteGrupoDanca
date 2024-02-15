"use client"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { title, subtitle } from "@/components/primitives";
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Code, Divider, Image } from "@nextui-org/react";
import InfoIcon from '@mui/icons-material/Info';
import ApartmentIcon from '@mui/icons-material/Apartment';
import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import PlaceIcon from '@mui/icons-material/Place';
import PushPinIcon from '@mui/icons-material/PushPin';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import React from "react";

function cardSobreNos(){

   //Historia
   const historia = [
    'Fundada em OUT/2012 - Feira de Santana, BA',
    'Surgiu a partir de uma apresentação realizada no Colégio Padre Ovídio pelas alunas do 1º ano.',
    'A princípio, definiu-se como um grupo de dança o qual participava de eventos culturais da cidade',
    'Em 2018, estabeleceu-se como companhia e tem como foco a realização de eventos, espetáculos, oficinas e aulas regulares de dança.'
  ]
  return(
    <Card 
      id="card-sobreNos"
      className="
      levitating m-0 rounded-lg 
      border-8 border-pessego border-double
      shadow-lg shadow-marrom" >

        <CardBody id="grid-row-card" className="gap-3">

          <div className="grid gap-2">
              
            <Code className="center bg-laranjao w-full opacity-85">
              <WhatshotIcon sx={{ fontSize: '25px', color: '#601802', marginRight: '2px' }} />
                <h2 className="icon_label !text-xl !text-center">
                    Sobre nós
                </h2> 
              <WhatshotIcon sx={{ fontSize: '25px', color: '#601802', marginLeft: '2px' }} />
            </Code>

            <h2 className="icon_label center ml-2">
              <InfoIcon sx={{  fontSize: '25px' }}></InfoIcon>
              Aulas | Eventos | Espetáculos
            </h2>

            <h2 className="icon_label center">
              <ApartmentIcon sx={{  fontSize: '25px' }}></ApartmentIcon>
              Empresa de pequeno porte
            </h2>

            <h2 className="icon_label center ">
              <GroupsIcon sx={{ fontSize: '25px' }}></GroupsIcon>
              25 integrantes (elenco fixo)
            </h2>
          </div>
         
          <div className="grid gap-2">
            <Code className="center bg-laranjao w-full opacity-85">
              <WhatshotIcon sx={{ fontSize: '25px', color: '#601802', marginRight: '2px' }} />
                <h2 className="icon_label !text-xl text-center">
                  Direção
                </h2>
              <WhatshotIcon sx={{ fontSize: '25px', color: '#601802', marginLeft: '2px' }} />
            </Code>

            <div className="center">
              <Avatar radius="full" size="lg" src="/imgs/fotoPessoa.png" />
              <div className="flex flex-col items-start justify-center ">
                <h4 className="text-lg font-bold leading-none text-marrom ml-4">Juliana Mascarenhas</h4>
              </div>
            </div>

            <Divider></Divider>
            <h2 className="icon_label  ">
              <InfoIcon sx={{ fontSize: '25px', color: "#601802" }}></InfoIcon>
              Uma das fundadoras iniciais
            </h2>

            <h2 className="icon_label  ">
              <StarIcon sx={{ fontSize: '25px', color: "#601802" }}></StarIcon>
              Dançarina e coreógrafa
            </h2>

            <div>
              <h2 id="formacao" className="icon_label">
                <SchoolIcon sx={{ fontSize: '25px', color: "#601802" }}></SchoolIcon>
                  Licenciada e Bacharel em Dança 
                  -
                  <span className="text-marrom center font-bold items-center">
                  <PlaceIcon sx={{ fontSize: '20px', color: "#601802" }}></PlaceIcon>
                  UFBA
                  </span>
              </h2>
            </div>
          </div>

          <div id="div-historia" className="">
            <Code className="center bg-laranjao w-full opacity-85">
              <WhatshotIcon sx={{ fontSize: '25px', color: '#601802', marginRight: '2px' }} />
                <h2 className="icon_label !text-xl text-center">
                  Nossa História
                </h2>
              <WhatshotIcon sx={{ fontSize: '25px', color: '#601802', marginLeft: '2px' }} />
            </Code>

            {historia.map((valor, index)=> (
              <h2 key={index} className="text-md font-bold text-marrom mt-2  indent-3 ">
                <PushPinIcon sx={{ fontSize: '30px', color: "#601802", marginRight: '3px' }}></PushPinIcon>
                {valor}
              </h2>
            ))}
          </div>
          
        </CardBody>
      </Card>
  );
}

function Principal(){
  return(
    <div id="divPrincipal" className="grid grid-rows-3 grid-cols-3 -mt-4">

      <div className="w-full h-full flex justify-center row-span-2">
        <Image
       
          src='/imgs/img2.jpg'
          alt='InFlame - Anderson Moreira Fotografia'
          className="object-cover w-full h-full imagem"
          width={400}
          height={200}
          classNames={{'wrapper': ['mt-8', 'gradient-border'], img: ['m-0', 'border-pessego', 'border-8', 'rounded-none']}}
        />
      </div>

      <div id='div-title-cia' className="flex items-center justify-self-center row-start-1 laranjao">
        <h1 id="title-cia" className={`${title()} tracking-widest font-serif`}>A CIA</h1>
      </div>

     <div className="w-full h-full flex justify-center">
        <Image
        id="img-2"
          src='/imgs/img2.jpg'
          alt='InFlame - Anderson Moreira Fotografia'
          className="object-cover w-full h-full imagem"
          width={400}
          height={200}
          classNames={{'wrapper': ['mt-8', 'gradient-border'], img: ['m-0', 'border-pessego', 'border-8', 'rounded-none']}}
        />
     </div>

      <div className="w-full h-full mt-6 flex justify-center ">
        <Image
          src='/imgs/img1.jpg'
          alt='InFlame - Anderson Moreira Fotografia'
          className="object-cover w-full h-full imagem"
          width={350}
          height={200}
          classNames={{'wrapper': ['mt-8', 'gradient-border'], img: ['m-0', 'border-pessego', 'border-8', 'rounded-none']}}
        />
     </div>

      <div className="w-full h-full mt-6 flex justify-center ">
        <Image
          src='/imgs/grupo-danca2.jpg'
          alt='InFlame - Anderson Moreira Fotografia'
          className="object-cover w-full h-full imagem"
          width={350}
          height={200}
          classNames={{'wrapper': ['mt-8', 'gradient-border'], img: ['m-0', 'border-pessego', 'border-8', 'rounded-none']}}
        />
     </div>
     
    </div>
  );
}

export default function SobreNos() {
  const slider = React.useRef<any>(null);


  const sliderSettings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Breakpoint para dispositivos menores
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // Adicione mais breakpoints conforme necessário
    ],
  };

  return (
    <section key={1} id="section-sobreNos" className="bg-cover mix-blend-multiply h-screen w-screen overflow-hidden ">
      <div id="slider-sobreNos" className="center mt-12 p-4 " >
            <Button isIconOnly onClick={() => slider?.current?.slickPrev()} className="bg-laranjao z-[100]">
							<ArrowCircleLeftRoundedIcon sx={{color: "white"}}></ArrowCircleLeftRoundedIcon>
						</Button>

        <Slider ref={slider} {...sliderSettings} className="mt-2 grid w-full h-full">

          <div key={1}>
            <div id="slide-principal" className="" >
              {Principal()}
            </div>
          </div>
          
          <div id="slide-quemSomos" className="px-8 py-4" key={2}>
            <div className="" >
              {cardSobreNos()}  
            </div>
          </div>
           
        </Slider>

          <Button isIconOnly onClick={() => slider?.current?.slickNext()} className="bg-laranjao">
							<ArrowCircleRightRoundedIcon sx={{color: "white"}}></ArrowCircleRightRoundedIcon>
						</Button>
      </div>
    </section>
  );
}
