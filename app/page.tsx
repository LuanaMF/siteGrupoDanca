"use client"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { title, subtitle } from "@/components/primitives";
import { Avatar, Card, CardBody, CardFooter, CardHeader, Code, Divider, Image } from "@nextui-org/react";
import InfoIcon from '@mui/icons-material/Info';
import ApartmentIcon from '@mui/icons-material/Apartment';
import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import PlaceIcon from '@mui/icons-material/Place';
import { LogoMarrom } from "@/components/icons";

function titleQuemSomos(){
  return(
    <div className="marrom">
      <h1 className={`${title()} tracking-wide font-serif row-span-1 justify-self-start sm:text-6xl md:text-5xl lg:text-8xl`}>Quem somos</h1>
    </div>    
  );
}

function cardSobreNos(){
  return(
    <Card 
    
      className="
      levitating m-0 rounded-lg 
      border-8 border-pessego border-double
      shadow-lg shadow-marrom" >
        
        <CardHeader className="center">

          <Code className="center bg-laranjao w-full opacity-85">
            <WhatshotIcon sx={{ fontSize: '25px', color: '#601802', marginRight: '2px' }} />
              <h2 className="icon_label !text-xl !text-center">
                  Sobre nós
              </h2> 
            <WhatshotIcon sx={{ fontSize: '25px', color: '#601802', marginLeft: '2px' }} />
          </Code>
          
        </CardHeader>
        <CardBody className=" grid grid-rows-3 grid-cols-1 gap-3 ">
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
        </CardBody>
      </Card>
  );
}

function cardDirecao(){
  return(
    <Card 
        className="
        levitating
        ml-0 rounded-lg 
        border-8 border-pessego border-double 
        shadow-lg shadow-marromVermelho">
        <CardHeader className="center">
          <Code className="center bg-laranjao w-full opacity-85">
            <WhatshotIcon sx={{ fontSize: '25px', color: '#601802', marginRight: '2px' }} />
              <h2 className="icon_label !text-xl text-center">
                Direção
              </h2>
            <WhatshotIcon sx={{ fontSize: '25px', color: '#601802', marginLeft: '2px' }} />
          </Code>
        </CardHeader>

        <CardBody className=" grid grid-rows-4 grid-cols-1 items-center ">

          <div className="center">
            <Avatar radius="full" size="md" src="/imgs/fotoPessoa.png" />
            <div className="flex flex-col items-start justify-center ">
              <h4 className="text-md font-bold leading-none text-marrom ml-2">Juliana Mascarenhas</h4>
            </div>
          </div>

          <h2 className="icon_label">
            <InfoIcon sx={{ fontSize: '25px', color: "#601802" }}></InfoIcon>
            Uma das fundadoras iniciais
          </h2>
          <h2 className="icon_label ">
            <StarIcon sx={{ fontSize: '25px', color: "#601802" }}></StarIcon>
            Dançarina e coreógrafa
          </h2>
          <div>
            <h2 className="icon_label">
              <SchoolIcon sx={{ fontSize: '25px', color: "#601802" }}></SchoolIcon>
                Licenciada e Bacharel em Dança 
                 -
                <span className="text-marrom center font-bold items-center -ml-1">
                <PlaceIcon sx={{ fontSize: '20px', color: "#601802" }}></PlaceIcon>
                UFBA
                </span>
            </h2>
            
          </div>
          
        </CardBody>
      </Card>
  );
}

function cardHistoria(){

  const historia = `A InFlame foi fundada em outubro de 2012 em Feira de Santana, Bahia, 
                    a partir de uma apresentação realizada no Colégio Padre Ovídio pelas alunas do 1º ano. 
                    A princípio, definiu-se como um grupo de dança o qual participava de eventos culturais da cidade.
                    Em 2018, estabeleceu-se como companhia e tem como foco a realização de eventos, espetáculos, 
                    oficinas e aulas regulares de dança.`
  return(
    <Card  className="
            levitating
            border-8 border-pessego border-double 
            shadow-lg shadow-marromVermelho"
    >
        <CardHeader className="center">
          <Code className="center bg-laranjao w-full opacity-85">
            <WhatshotIcon sx={{ fontSize: '25px', color: '#601802', marginRight: '2px' }} />
              <h2 className="icon_label !text-xl text-center">
                Nossa História
              </h2>
            <WhatshotIcon sx={{ fontSize: '25px', color: '#601802', marginLeft: '2px' }} />
          </Code>
        </CardHeader>

        <CardBody className="">
          <span className="text-balance text-marrom font-semibold ">
            {historia}
          </span>
        </CardBody>
    </Card>
  );
}

function quemSomos() {
  return (
    <div className="grid grid-cols-2 grid-rows-3 h-auto w-auto" style={{gridTemplateRows: '1fr 2fr 1fr'}}>

      <div className="col-span-2">
          <div className="h-full ">  
              {titleQuemSomos()}
          </div>
        
      </div>
      
      <div className="w-[80%] ">
        {cardSobreNos()}
      </div>

      <div className="w-[85%]">
        {cardDirecao()}
      </div>
      

      <div className=" w-[80%] col-span-2">
        {cardHistoria()}
      </div>

    </div>

  );
}

function Principal(){
  return(
    <div className="grid grid-rows-3 grid-cols-3">

      <div className="w-full h-full flex justify-center row-span-2">
        <Image
          src='/imgs/img2.jpg'
          alt='InFlame - Anderson Moreira Fotografia'
          className="object-cover w-full h-full"
          width={300}
          height={200}
          classNames={{'wrapper': ['mt-8', 'gradient-border'], img: ['m-0', 'border-pessego', 'border-8', 'rounded-none']}}
        />
     </div>

     <div className="flex items-center justify-self-center row-start-1  marrom">
        <h1 className={`${title()} tracking-widest font-serif row-span-1 sm:text-6xl md:text-5xl lg:text-9xl`}>A CIA</h1>
      </div>

     <div className="w-full h-full flex justify-center">
        <Image
          src='/imgs/img2.jpg'
          alt='InFlame - Anderson Moreira Fotografia'
          className="object-cover w-full h-full"
          width={300}
          height={200}
          classNames={{'wrapper': ['mt-8', 'gradient-border'], img: ['m-0', 'border-pessego', 'border-8', 'rounded-none']}}
        />
     </div>

      <div className="w-full h-full mt-6 flex justify-center ">
        <Image
          src='/imgs/img1.jpg'
          alt='InFlame - Anderson Moreira Fotografia'
          className="object-cover w-full h-full"
          width={350}
          height={200}
          classNames={{'wrapper': ['mt-8', 'gradient-border'], img: ['m-0', 'border-pessego', 'border-8', 'rounded-none']}}
        />
     </div>

      <div className="w-full h-full mt-6 flex justify-center ">
        <Image
          src='/imgs/grupo-danca2.jpg'
          alt='InFlame - Anderson Moreira Fotografia'
          className="object-cover w-full h-full"
          width={350}
          height={200}
          classNames={{'wrapper': ['mt-8', 'gradient-border'], img: ['m-0', 'border-pessego', 'border-8', 'rounded-none']}}
        />
     </div>
     
    </div>
  );
}

export default function SobreNos() {

  const sliderSettings = {
    dots: true,
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
    <section id="section-sobreNos" className="body-with-grain-texture bg-cover mix-blend-multiply flex flex-col items-center justify-center h-screen overflow-hidden">
      <div className="w-[95%] h-[90%]">
        <Slider {...sliderSettings} className="mt-8 grid w-full h-full">

          <div key={1}>
            <div id="grid" className="" >
              {Principal()}
            </div>
          </div>
          
          <div className="mx-4" key={2}>
            <div id="grid" className="" >
              {quemSomos()}
            </div>
          </div>
           
        </Slider>
      </div>
    </section>
  );
}
